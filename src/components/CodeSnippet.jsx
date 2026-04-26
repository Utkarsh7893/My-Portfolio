import { useEffect, useState } from "react";
import { codeSnippets } from "../data/portfolioData";

export default function CodeSnippet() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const placed = codeSnippets.map((code, i) => ({
      code,
      id: i,
      top: 10 + Math.random() * 70,
      left: i % 2 === 0 ? 2 + Math.random() * 12 : 82 + Math.random() * 12,
      rotation: (Math.random() - 0.5) * 8,
      delay: i * 0.6,
      opacity: 0.06 + Math.random() * 0.06,
    }));
    setSnippets(placed);
  }, []);

  return (
    <div className="code-snippets-container" aria-hidden="true">
      {snippets.map((s) => (
        <pre
          key={s.id}
          className="floating-code"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            transform: `rotate(${s.rotation}deg)`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
          }}
        >
          <code>{s.code}</code>
        </pre>
      ))}
    </div>
  );
}
