import conditionalContactFields from '../../components/conditionalContactFields'

export default {
  name: 'contactDetails',
  title: 'Contact details',
  type: 'object',
  inputComponent: conditionalContactFields,
  fields: [
    {
      name: 'manuallyEnterCompanyDetails',
      title: 'Manually enter details',
      type: 'manuallyEnterCompanyDetails'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }]
    }
  ]
}
