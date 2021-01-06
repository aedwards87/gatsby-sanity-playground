import { BiImages as icon } from 'react-icons/bi'

export default {
  name: 'imageGallery',
  type: 'document',
  title: 'Image Gallery',
  icon,
  fields: [
    {
      name: 'image',
      type: 'imageModal',
      title: 'Image'
    },
    {
      name: 'location',
      title: 'Location',
      description: 'Select the location the image is associated with',
      type: 'reference',
      to: [{ type: 'location' }],
      validation: Rule => Rule.required().error('Please enter the location the photo is associated with')
    }
  ],
  preview: {
    select: {
      media: 'image',
      imageUrl: 'asset.url',
      title: 'image.alt'
    }
  }
}
