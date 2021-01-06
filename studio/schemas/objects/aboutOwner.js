export default {
  name: 'aboutOwner',
  type: 'object',
  title: 'About the owner',
  fields: [
    {
      name: 'owner',
      title: `Owner`,
      type: 'reference',
      to: [{ type: 'person' }],
      options: {
        filter: 'role == $role',
        filterParams: { role: 'Owner' }
      }
    },
    {
      name: 'ownerDescription',
      type: 'bioPortableText',
      title: 'Description'
    }
  ]
}
