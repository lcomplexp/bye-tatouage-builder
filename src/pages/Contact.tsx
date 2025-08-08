import MainLayout from "@/layouts/MainLayout";

const Contact = () => (
  <MainLayout title="Contact" description="Informations de contact.">
    <h1>Contact</h1>
    <p className="text-muted-foreground">Pour toute question : <a className="underline" href="mailto:contact@bye-tatouage.com">contact@bye-tatouage.com</a></p>
  </MainLayout>
);

export default Contact;
