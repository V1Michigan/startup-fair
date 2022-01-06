import Head from "next/head";
import PropTypes from "prop-types";

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title ? title : "V1 Startup Fair | University of Michigan"}</title>
      <meta
        name="og:title"
        content={title ? title : "V1 Startup Fair | University of Michigan"}
      />

      <link rel="icon" href="/favicon.ico?v=1" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta
        name="description"
        content={
          description
            ? description
            : "V1 Startup Fair connects top students with fast-growing startups."
        }
      />
      <meta
        name="og:description"
        content={
          description
            ? description
            : "V1 Startup Fair connects top students with fast-growing startups."
        }
      />

      <meta property="og:image" content={image ? image : "/share.png?refresh=true"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@v1michigan" />
      <meta name="twitter:title" content={title ? title : "V1 Startup Fair | University of Michigan"} />
      <meta name="twitter:description" content={
          description
            ? description
            : "V1 Startup Fair connects top students with fast-growing startups."
        } />
      <meta name="twitter:image" content={image ? image : "/share.png?refresh=true"} />
  
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
