export default {
  name: 'brand',
  type: 'document',
  title: 'Brand',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      description: 'Ideally this should be an SVG, if not possible, please use a PNG',
      type: 'mainImage',
      validation: Rule => Rule.required().error('A company needs a logo')
    },
    {
      type: 'color',
      name: 'primaryColorOne',
      title: 'First primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'secondaryColorTwo',
      title: 'Second primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'thirdColorOne',
      title: 'Third primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'fourthColorTwo',
      title: 'Fourth primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'fifthColorOne',
      title: 'Fifth primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'sixthColorTwo',
      title: 'Sixth primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    }
  ]
}
