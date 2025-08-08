import MainLayout from "@/layouts/MainLayout";
import TableCompare from "@/components/common/TableCompare";

const PrixIndex = () => {
  const rows = [
    { label: "Petit (≤3cm)", a: "60€", b: "120€" },
    { label: "Moyen (≤8cm)", a: "100€", b: "220€" },
    { label: "Grand (≤15cm)", a: "180€", b: "380€" },
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
    <MainLayout title="Prix du détatouage" description="Tableau des coûts et fourchettes de prix – placeholders.">
      <h1>Prix du détatouage</h1>
      <p className="text-muted-foreground mt-2">Les prix varient selon la zone, la taille et la technique. Tableau indicatif (placeholder).</p>
      <div className="mt-6">
        <TableCompare rows={rows} />
      </div>
      <p className="text-xs text-muted-foreground mt-3">Notes & disclaimers : valeurs indicatives, à confirmer en consultation.</p>
      <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
    </MainLayout>
  );
};

export default PrixIndex;
