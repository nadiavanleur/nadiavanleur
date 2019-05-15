let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful");
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId:
    process.env.CONTENTFUL_SPACE_ID ||
    contentfulConfig.spaceId ||
    "ddc4b7sh07v4",
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN ||
    contentfulConfig.accessToken ||
    "dnijn6FqNPX-umcGqjKvnIOKu6izjr6VgrqN45YVEw0"
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `Nadia van Leur`,
    description: `Hoi! Mijn naam is Nadia, frontend developer. Ik kom uit Kerk-Avezaath, maar sinds een tijdje woon ik in Breda, erg leuke stad.

    In mijn vrije tijd doe ik onder andere aan drummen, gitaar spelen, mixtapes maken, tuinieren en ook ijshockey vind ik gaaf. Ik verzamel analoge camera’s, die met rolletjes, en neem ze soms mee op pad om foto’s te maken. 
    
    Binnen mijn opleiding heb ik me gespecialiseerd in frontend development en web design. Verder ben ik gemotiveerd, creatief en houd ik wel van een uitdaging.`,
    author: `Nadia van Leur`,
    siteUrl: `https://nadiavanleur.nl`,
    keywords: `kerk-avezaath, frontend, development, breda, nederland, netherlands`
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    }
  ]
};
