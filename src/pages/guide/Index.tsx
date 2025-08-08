import MainLayout from "@/layouts/MainLayout";
import ToC from "@/components/common/ToC";
import FAQ from "@/components/common/FAQ";

const GuideIndex = () => {
  return (
    <MainLayout title="Guides & FAQ" description="Hub Guides & FAQ – placeholders.">
      <h1>Guides & FAQ</h1>
      <div className="grid md:grid-cols-[1fr_280px] gap-8 mt-6">
        <article className="prose prose-slate max-w-none">
          <h2>Comprendre le rythme des séances</h2>
          <p>Placeholder…</p>
          <h2>Gestion de la douleur</h2>
          <p>Placeholder…</p>
        </article>
        <ToC />
      </div>
      <FAQ items={[{ q: "Combien de temps entre les séances ?", a: "Placeholder." }]} />
    </MainLayout>
  );
};

export default GuideIndex;
