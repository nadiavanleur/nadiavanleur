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
    author: `Nadia van Leur <nadiavanleur@gmail.com>`,
    siteUrl: `https://nadiavanleur.nl`,
    keywords: `kerk-avezaath, frontend, development, breda, nederland, netherlands`
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    }
  ]
};
