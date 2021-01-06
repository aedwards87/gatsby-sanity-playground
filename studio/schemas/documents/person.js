import { BiUser as icon } from 'react-icons/bi'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon,
  // validation: Rule => Rule.custom(person => console.log({ person })),
  fields: [
    {
      name: 'firstName',
      title: `First name`,
      type: 'string',
      description: 'What is the first name of the person',
      validation: Rule => Rule.required().max(25)
    },
    {
      name: 'lastName',
      title: `Last name`,
      type: 'string',
      description: 'What is the last name of the person',
      validation: Rule => Rule.required().max(25)
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: doc => `${doc.firstName}-${doc.lastName}`,
    //     maxLength: 100
    //   }
    // },
    {
      name: 'role',
      title: `Job role`,
      type: 'string',
      description: 'What is their job role',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'qualifications',
      title: `Qualifications`,
      type: 'string',
      description: 'Do they have any qualifications'
    },
    {
      name: 'dateStarted',
      type: 'date',
      title: 'Date started',
      description: 'When did this person start working here'
    },
    {
      name: 'description',
      title: `Description`,
      type: 'bioPortableText',
      description: 'Tell us a bit about the person',
      validation: Rule => Rule.required().warning('A brief description would be good for current and potential new parents to see')
    },
    {
      name: 'staffPhoto',
      title: 'Staff photo',
      type: 'mainImage',
      validation: Rule => Rule.required().error('Provide either an image of the person, or use a placeholder image')
    }
    // {
    //   name: 'location',
    //   type: 'reference',
    //   title: 'Location',
    //   to: [{ type: 'location' }],
    //   validation: Rule => Rule.required()
    // }
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'staffPhoto.image',
      role: 'role'
    },
    prepare: ({ firstName, lastName, media, role }) => {
      const fullname = `${firstName} ${lastName}`
      return {
        title: fullname,
        media,
        subtitle: role
      }
    }
  }
}
