export default {
  name: 'toppings',
  title: 'Toppings',
  type: 'document',
  fields: [
    {
      name: 'toppingName',
      title: 'Topping Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'toppingName',
        maxLength: 100,
      },
    },
  ],
};
