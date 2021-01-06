import { RiStarSmileLine as icon } from 'react-icons/ri'

export default {
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  icon,
  __experimental_actions: [/* 'update', 'create', */ 'delete', 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'feedback',
      type: 'bioPortableText',
      title: 'Feedback'
    }
  ]
}
