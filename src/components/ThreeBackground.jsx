import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(sizes, 1)
    );

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#00d4ff") },
        uColor2: { value: new THREE.Color("#00ff88") },
        uOpacity: { value: 0.6 },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.5 + position.x * 0.1) * 1.5;
          pos.x += cos(uTime * 0.3 + position.y * 0.1) * 1.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (50.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = 0.3 + 0.7 * sin(uTime + position.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, d) * vAlpha * uOpacity;
          vec3 color = mix(uColor1, uColor2, vAlpha);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const maxLines = 300;
    const linePositions = new Float32Array(maxLines * 6);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      particleMaterial.uniforms.uTime.value = elapsed;

      // Update theme colors
      if (themeRef.current === "dark") {
        particleMaterial.uniforms.uColor1.value.set("#00d4ff");
        particleMaterial.uniforms.uColor2.value.set("#00ff88");
        particleMaterial.uniforms.uOpacity.value = 0.6;
        lineMaterial.color.set(0x00d4ff);
        lineMaterial.opacity = 0.08;
      } else {
        particleMaterial.uniforms.uColor1.value.set("#0891b2");
        particleMaterial.uniforms.uColor2.value.set("#059669");
        particleMaterial.uniforms.uOpacity.value = 0.35;
        lineMaterial.color.set(0x0891b2);
        lineMaterial.opacity = 0.05;
      }

      // Gentle camera movement following mouse
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Move particles
      const posArr = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i * 3];
        posArr[i * 3 + 1] += velocities[i * 3 + 1];
        posArr[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around
        if (Math.abs(posArr[i * 3]) > 60) velocities[i * 3] *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 60) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 40) velocities[i * 3 + 2] *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update connection lines
      let lineIdx = 0;
      const linePos = lineGeometry.attributes.position.array;
      for (let i = 0; i < particleCount && lineIdx < maxLines; i++) {
        for (let j = i + 1; j < particleCount && lineIdx < maxLines; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = dx * dx + dy * dy + dz * dz;
          if (dist < 150) {
            linePos[lineIdx * 6] = posArr[i * 3];
            linePos[lineIdx * 6 + 1] = posArr[i * 3 + 1];
            linePos[lineIdx * 6 + 2] = posArr[i * 3 + 2];
            linePos[lineIdx * 6 + 3] = posArr[j * 3];
            linePos[lineIdx * 6 + 4] = posArr[j * 3 + 1];
            linePos[lineIdx * 6 + 5] = posArr[j * 3 + 2];
            lineIdx++;
          }
        }
      }
      for (let i = lineIdx * 6; i < maxLines * 6; i++) linePos[i] = 0;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIdx * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
}
