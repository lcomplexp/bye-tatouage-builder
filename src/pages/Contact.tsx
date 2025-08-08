import MainLayout from "@/layouts/MainLayout";
import ReadNext from "@/components/common/ReadNext";
import { SITE } from "@/lib/siteConfig";

const Contact = () => (
  <MainLayout title="Contact" description="Informations de contact.">
    <h1>Contact</h1>
    <p className="text-muted-foreground">Pour toute question : <a className="underline" href="mailto:contact@bye-tatouage.com">contact@bye-tatouage.com</a></p>
    <ReadNext />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Contact",
      description: "Informations de contact.",
      url: `${SITE.baseUrl}/contact`
    })}</script>
  </MainLayout>
);

export default Contact;
