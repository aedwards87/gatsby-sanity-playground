// NOTE: Uncomment the commented code to view the data/props
// import React from 'react'
// const preview = (props) => <pre>{JSON.stringify(props, null, 2)}</pre> /* 2 is the indent */

export default {
  name: 'mainImage',
  type: 'object',
  title: 'Main image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.error('An image wthout an image isn\'t an image at all').required()
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.error('You have to fill out the alternative text.').required()
    }
  ],
  preview: {
    // component: preview,
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
