import React from 'react';
import { graphql } from 'gatsby';

// Imported Components
import Layout from '../components/Layout/Layout';
import SEO from '../components/reusable/SEO';
import GraphQLErrorList from '../components/reusable/GraphQLErrorList';

// (_id: { regex: "/(drafts.|)siteSettings/" })

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    site: sanityCompanyDetails {
      title
      # description
    }
  }
`;

const Index = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const { site } = data || {};

  return (
    <Layout>
      <SEO description={site.description} />
      His
    </Layout>
  );
};

export default Index;

// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from '../lib/helpers'

//   query IndexPageQuery {
//     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
//       title
//       description
//       keywords
//     }
//     posts: allSanityPost(
//       limit: 6
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

// const IndexPage = props => {
//   const { data, errors } = props

//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     )
//   }

//   const site = (data || {}).site
//   const postNodes = (data || {}).posts
//     ? mapEdgesToNodes(data.posts)
//       .filter(filterOutDocsWithoutSlugs)
//       .filter(filterOutDocsPublishedInTheFuture)
//     : []

//   return (
//     <Layout>
//       <SEO
//         title={site.title}
//         description={site.description}
//         keywords={site.keywords}
//       />
//       <div>
//         {/* div was container */}
//         <h1 hidden>Welcome to {site.title}</h1>
//         {/* {postNodes && (
//           <BlogPostPreviewList
//             title='Latest blog posts'
//             nodes={postNodes}
//             browseMoreHref='/archive/'
//           />
//         )} */}
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage
