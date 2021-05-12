export default {
  name: 'drinks',
  title: 'Bubble Tea',
  type: 'document',
  fields: [
    {
      name: 'teaName',
      title: 'Tea Name',
      type: 'string',
      description: 'Name of the Tea',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'teaName',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'toppings' }] }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the tea in cents',
      validation: (Rule) => Rule.min(700).max(2000),
    },
  ],
};
