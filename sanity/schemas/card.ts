import { defineField, defineType } from "sanity";

export const cardType = defineType({
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    defineField(
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      }),
    defineField(
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enable hotspot for better cropping
      },
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'URL for the card action',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      description: 'Text for the link or button',
    }),
  ],
});
