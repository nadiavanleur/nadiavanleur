import React from "react";
import Layout from "../components/Layout";
import useMetadata from "../queries/metadata.graphql";

const Index = () => {
  return (
    <Layout>
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer /> */}
    </Layout>
  )
}

export const Head = () => {
  const { title, siteUrl, keywords, description } = useMetadata();

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" type="image/png" sizes="16x16" href="https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg" />
      <link rel="shortcut icon" type="image/png" href="https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </>
  );
}

export default Index;