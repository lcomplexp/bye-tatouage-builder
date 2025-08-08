import MainLayout from "@/layouts/MainLayout";
import TableCompare from "@/components/common/TableCompare";
import ReadNext from "@/components/common/ReadNext";

const PrixIndex = () => {
  const rows = [
    { label: "XS (≤2cm)", a: "50€", b: "90€" },
    { label: "S (≤5cm)", a: "80€", b: "160€" },
    { label: "M (≤8cm)", a: "120€", b: "240€" },
    { label: "L (≤15cm)", a: "180€", b: "380€" },
  ];
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: rows.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.label,
      description: `Fourchette: ${r.a} – ${r.b}`,
    })),
  };
  return (
    <MainLayout title="Prix du détatouage" description="Tableau indicatif par tailles et variables d’influence (placeholders).">
      <h1>Prix du détatouage</h1>
      <p className="text-muted-foreground mt-2">Les prix varient selon la zone, la taille et la technique. Tableau indicatif (placeholder).</p>
      <div className="mt-6">
        <TableCompare rows={rows} />
      </div>
      <section className="mt-4">
        <h2>Ce qui fait varier le coût</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Taille, densité d’encre, couleurs</li>
          <li>Technique (picoseconde, Q-Switch)</li>
          <li>Localisation et ancienneté</li>
        </ul>
      </section>
      <p className="text-xs text-muted-foreground mt-3">Notes & disclaimers : valeurs indicatives, à confirmer en consultation.</p>
      <ReadNext />
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
    </MainLayout>
  );
};

export default PrixIndex;
