import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface ToCProps {
  rootSelector?: string; // sélecteur du conteneur où chercher les H2/H3
}

const ToC = ({ rootSelector = "main" }: ToCProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const root = document.querySelector(rootSelector) || document;
    const nodes = root.querySelectorAll<HTMLHeadingElement>("h2, h3");
    const list: Heading[] = Array.from(nodes).map((el) => {
      if (!el.id) el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "section";
      return { id: el.id, text: el.textContent || "Section", level: el.tagName === "H2" ? 2 : 3 };
    });
    setHeadings(list);
  }, [rootSelector]);

  if (!headings.length) return null;

  return (
    <aside className="rounded-lg bg-muted p-4 shadow-soft">
      <h3 className="text-sm font-semibold text-primary mb-2">Sommaire</h3>
      <ul className="space-y-1 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
            <a href={`#${h.id}`} className="hover:underline">{h.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ToC;
