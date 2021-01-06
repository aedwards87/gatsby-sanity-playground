// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
// import author from './documents/author'
// import category from './documents/category'
// import post from './documents/post'
import person from './documents/person'
import location from './documents/location'
import about from './documents/about'
import feedback from './documents/feedback'
import socialMedia from './documents/socialMedia'
import frontPage from './documents/frontPage'
import siteDetails from './documents/siteDetails'
import brand from './documents/brand'
import policiesAndProcedures from './documents/policiesAndProcedures'
import imageGallery from './documents/imageGallery'

// Object types
// import authorReference from './objects/authorReference'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import imageModal from './objects/imageModal'
import manuallyEnterCompanyDetails from './objects/manuallyEnterCompanyDetails'
import contactDetails from './objects/contactDetails'
import dailyRoutine from './objects/dailyRoutine'
import dayAndTime from './objects/dayAndTime'
import aboutOwner from './objects/aboutOwner'
import socialMediaHandle from './objects/socialMediaHandle'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // post,
    // category,
    // author,
    // authorReference,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    person,
    location,
    about,
    feedback,
    imageModal,
    socialMedia,
    frontPage,
    siteDetails,
    brand,
    manuallyEnterCompanyDetails,
    dailyRoutine,
    dayAndTime,
    policiesAndProcedures,
    imageGallery,
    aboutOwner,
    socialMediaHandle,
    contactDetails

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
