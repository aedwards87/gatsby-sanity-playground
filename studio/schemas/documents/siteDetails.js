const verifyInput = (props) => {
  const { toggleAddress, contactDetails } = props
  const { manuallyEnterCompanyDetails } = props.contactDetails

  if (!toggleAddress) {
    if (!manuallyEnterCompanyDetails.email && !manuallyEnterCompanyDetails.landlineNumber && !manuallyEnterCompanyDetails.mobileNumber && !manuallyEnterCompanyDetails.address) {
      return 'No contact details were entered'
    }
    if (!manuallyEnterCompanyDetails.email) {
      return 'Email address is missing'
    }
  }
  if (toggleAddress && !contactDetails.location) {
    return 'Please select the location that is the main point of call for contact details'
  }
  return true
}

export default {
  name: 'siteDetails',
  type: 'document',
  title: 'Site details',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  validation: Rule => Rule.custom(verifyInput),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The name of your company',
      validation: Rule => Rule.max(100).required().error('A name is vital for any company')
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your website/company for search engines',
      validation: Rule => Rule.max(160).required().error('A brief decription or summary of your website/company can have significant mipact on your SEO')
    },
    {
      name: 'toggleAddress',
      title: 'Enter contact details manually, or pull in from a location',
      type: 'boolean'
    },
    {
      name: 'contactDetails',
      title: 'Contact details',
      type: 'contactDetails'
    }
  ],
  initialValue: () => ({
    toggleAddress: false
  })
}
