export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Bio portable text',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' }
        ]
      }
    }
  ]
}
