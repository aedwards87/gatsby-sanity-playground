import { GrSecure as icon } from 'react-icons/gr'

export default {
  name: 'policiesAndProcedures',
  type: 'document',
  title: 'Policies & procedures',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ]
}
