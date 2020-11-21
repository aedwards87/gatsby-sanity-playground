import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import 'normalize.css';

// Imported Components
import { GlobalStyles, Typography } from '../../styles/index';
import S from './LayoutStyles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Query
const SITE_TITLE_QUERY = graphql`
  query SITE_TITLE_QUERY {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

// Housing Component
const Layout = ({ children }) => {
  const { site } = useStaticQuery(SITE_TITLE_QUERY);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and add some content in "Site settings"'
    );
  }

  return (
    <>
      <GlobalStyles />
      <Typography />
      <S.Layout>
        <Header siteTitle={site.title} />
        <main>{children}</main>
        <Footer />
      </S.Layout>
    </>
  );
};

// PropTypes
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
