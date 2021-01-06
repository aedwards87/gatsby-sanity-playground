export default {
  name: 'about',
  type: 'document',
  title: 'About us',
  fields: [
    {
      name: 'description',
      type: 'bioPortableText',
      title: 'Description',
      description: 'Who you are. What matters to you. What you do. How you do it.'
    },
    {
      name: 'aboutOwner',
      type: 'aboutOwner',
      title: 'About the owner'
    }
  ]
}
