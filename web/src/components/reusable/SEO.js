import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
// import { imageUrlFor } from '../lib/image-url';
// import { buildImageObj } from '../lib/helpers';

const SEO_QUERY = graphql`
  query SEO_QUERY {
    site: sanityCompanyDetails(_id: { eq: "companyDetails" }) {
      title
      # description
    }
  }
`;

function SEO({ children, lang = 'en', description, title /* , image */ }) {
  const { site } = useStaticQuery(SEO_QUERY);

  const metaDescription = description || (site && site.description) || '';
  const siteTitle = (site && site.title) || '';
  // const metaImage =
  //   image && image.asset
  //     ? imageUrlFor(buildImageObj(image)).width(1200).url()
  //     : '';

  return (
    <Helmet titleTemplate={title ? `%s | ${siteTitle}` : siteTitle}>
      <html lang={lang} />
      <title>{title || siteTitle}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      {/* {location && <meta property="og:url" content={location.href} />} */}
      {/* <meta property="og:image" content={image || '/logo.svg'} /> */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={siteTitle} key="ogsitename" />
      <meta property="og:description" content={metaDescription} key="ogdesc" />
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // image: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
