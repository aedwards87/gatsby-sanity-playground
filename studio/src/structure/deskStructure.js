import S from '@sanity/desk-tool/structure-builder'
import { BiMessageError, BiImages, BiImage } from 'react-icons/bi'
import IframePreview from '../previews/IframePreview'
import siteSettings from './siteSettings'

// Web preview configuration
const remoteURL = 'https://sanity-gatsby-blog-web-n1ac82mr.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      siteSettings,
      S.divider(),
      S.listItem()
        .title('About us')
        .icon(BiMessageError)
        .child(
          S.editor()
            .id('about')
            .title('About us')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Locations')
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
      S.listItem()
        .title('Staff')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Staff')),
      S.listItem()
        .title('Image gallery')
        .icon(BiImages)
        .child(
          S.list()
            .title('Image gallery')
            .items([
              S.listItem()
                .title('All images')
                .schemaType('imageGallery')
                .child(S.documentTypeList('imageGallery').title('All images')),
              S.divider(),
              S.listItem()
                .title('Images by location')
                .icon(BiImage)
                .child(
                  S.documentTypeList('location')
                    .title('Images by location')
                    .child(id => {
                      return (
                        S.documentList()
                          .title('Images')
                          .schemaType('imageGallery')
                        // Use a GROQ filter to get documents.
                        // This filter checks for sampleProjects that has the
                        // categoryId in its array of references
                          .filter('_type == "imageGallery" && $id == location._ref')
                          .params({ id })
                      )
                    })
                )
              // S.listItem()
              //   .title('Staff by location')
              //   .child(
              //     S.documentTypeList('location')
              //       .title('test')
              //       .child(id => {
              //         console.log({ id })
              //         return (
              //           S.documentList()
              //             .title('Person')
              //             .schemaType('person')
              //           // Use a GROQ filter to get documents.
              //           // This filter checks for sampleProjects that has the
              //           // categoryId in its array of references
              //             .filter('_type == "location" && $id == person._ref')
              //             .params({ id })
              //         )
              //       })
              //   )
            ])
        ),

      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'siteDetails',
            'about',
            'location',
            'person',
            'frontPage',
            'companyDetails',
            'brand',
            'socialMedia',
            'feedback',
            'policiesAndProcedures',
            'imageGallery'
          ].includes(
            listItem.getId()
          )
      ),
      S.listItem()
        .title('Feedback')
        .schemaType('feedback')
        .child(S.documentTypeList('feedback').title('What parents say about us')),
      S.listItem()
        .title('Policies & procedures')
        .schemaType('policiesAndProcedures')
        .child(S.documentTypeList('policiesAndProcedures').title('Policies & procedures'))
    ])
