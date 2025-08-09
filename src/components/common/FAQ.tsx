import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface QA { q: string; a: string }

const FAQ = ({ items }: { items: QA[] }) => {
  if (!items?.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
  return (
    <section className="mt-10">
      <h2>FAQ</h2>
      <Accordion type="single" collapsible className="mt-4">
        {items.map((it, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left"><strong>{it.q}</strong></AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </section>
  );
};

export default FAQ;
