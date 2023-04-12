import React from "react";
import Layout from "../components/Layout";
import Desktop from "../components/Desktop";
// import useMetadata from "../queries/metadata.graphql";

const Index = () => {
  return (
    <>
      <Layout>
        <Desktop />
        {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer /> */}
      </Layout>
    </>
  )
}

// export const Head = () => {
//   const { title, siteUrl, keywords, description } = useMetadata();

//   return (
//     <>
//       <meta charSet="utf-8" />
//       <title>{title}</title>
//       <link rel="canonical" href={siteUrl} />
//       {/* @TODO favicon */}
//       {/* <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
//       <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
//       <link rel="shortcut icon" type="image/png" href={favicon} /> */}
//       <meta name="keywords" content={keywords} />
//       <meta name="description" content={description} />
//     </>
//   );
// }

export default Index;