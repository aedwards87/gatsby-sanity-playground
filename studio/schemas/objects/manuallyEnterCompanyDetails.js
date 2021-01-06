export default {
  name: 'manuallyEnterCompanyDetails',
  type: 'object',
  title: 'Manually enter details',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'landlineNumber',
      type: 'number',
      title: 'Landline number'
    },
    {
      name: 'mobileNumber',
      type: 'number',
      title: 'Mobile number'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule =>
        Rule.custom(email => {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const result = re.test(String(email).toLowerCase())
          if (email === undefined || result) {
            return true
          } else {
            return 'Invalid email, please ensure you include an "@ and an "."'
          }
        })
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    }
  ]
}
