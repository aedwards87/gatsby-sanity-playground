import { HiOutlineLocationMarker as icon } from 'react-icons/hi'
// import client from 'part:@sanity/base/client'

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  icon,
  initialValue: async () => ({
    // person: await client.fetch(`//groq
    //   *[_type == "person" && references(^._id)]{
    //     // "_type": "location",
    //     // "person": {
    //       "_ref": _id,
    //       "_type": "reference"
    //     // }
    //   }
    // `),
    geoLocation: await getPosition()
      .then(() => ({
        '_type': 'geopoint',
        'lat': '51.2154239',
        'lng': '0.09911389999999999'
      }))
      .catch(error => console.error(error))
  }),
  fields: [
    {
      name: 'name',
      title: `Name`,
      type: 'string',
      description: 'What is the name of the location',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A slug is the part of a URL which identifies a particular page on a website',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('A slug is required for this location to have it\'s own page')
    },
    {
      name: 'introduction',
      title: `Introduction`,
      type: 'bioPortableText',
      description: 'Tell us a bit about the location',
      validation: Rule => Rule.required()
    },
    {
      name: 'person',
      title: `Staff`,
      description: 'Who is allocated to this location',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'person' }]
        // options: {
        //   filter: ({ document }) => {
        //     let newId = document._id.replace('drafts.', '')
        //     return {
        //       filter: '_type == "person" && $newId == location._ref',
        //       params: { newId }
        //     }
        //   }
        // }
      }],
      validation: Rule => Rule.required().min(1).max(6).unique()
    },
    {
      name: 'dailyRoutine',
      title: `Daily routine`,
      description: 'What is the daily routine laid out for this location',
      type: 'array',
      of: [{ type: 'dailyRoutine' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'This should be the main image of the location building/exterior',
      type: 'mainImage',
      // options: {
      //   collapsible: true
      // },
      validation: Rule => Rule.required().error('The main image of the location grounds is required')
    },
    // {
    //   name: 'imageGallery',
    //   title: 'Image gallery',
    //   description: 'Select upto a maximum of 10 photos from the image gallery',
    //   type: 'array',
    //   of: [{
    //     type: 'reference',
    //     to: [{ type: 'imageGallery' }],
    //     options: {
    //       filter: ({ document }) => {
    //         let newId = document._id.replace('drafts.', '')
    //         return {
    //           filter: '_type == "imageGallery" && $newId == location._ref',
    //           params: { newId }
    //         }
    //       }
    //       // filterParams: { location: 'Welly boots' }
    //     }
    //   }],
    //   validation: Rule =>
    //     Rule.required()
    //       .min(2)
    //       .max(10)
    //       .unique()
    //       .error('Check quantities, there is a minimum of 2 and maximum of 10 required')
    // },
    {
      name: 'geoLocation',
      title: `Location`,
      type: 'geopoint',
      description: 'What is the location of this location',
      validation: Rule => Rule.required()
    },
    {
      name: 'dayAndTime',
      title: 'Open hours',
      type: 'array',
      of: [{ type: 'dayAndTime' }],
      validation: Rule => Rule
        .required()
        .custom(data => {
          if (data !== undefined) {
            const findDuplicate = data
              .map(input => input.day) // This creates an array
              .filter((day, index, array) => array.indexOf(day) !== index)

            let joinDays = findDuplicate.slice(0, findDuplicate.length - 1).join(', ')
            joinDays += ` and  ${findDuplicate[findDuplicate.length - 1]}`

            if (findDuplicate.length > 0) {
              return `There are duplicate days for ${
                findDuplicate.length === 1 ? findDuplicate : joinDays
              }`
            }

            if (data.length > 0) {
              return true
            }

            return 'It is important for parents to know the times the location starts and finishes'
          }
          return true
        })
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage.image'
    },
    prepare: ({ title, media }) => {
      return {
        title,
        media
      }
    }
  }
}
