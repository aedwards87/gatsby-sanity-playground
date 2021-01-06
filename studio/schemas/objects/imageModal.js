export default {
  name: 'imageModal',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  validation: Rule => Rule.error('An image wthout an image isn\'t an image at all').required(),
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.required().error('You have to fill out the alternative text')
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
