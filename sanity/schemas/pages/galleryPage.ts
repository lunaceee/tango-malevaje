import { defineField, defineType } from 'sanity';

export const galleryPageType = defineType({
    name: 'galleryPage',
    type: 'document',
    title: 'Gallery Page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                maxLength: 96,
                source: 'title',
                slugify: (input) => input.toLowerCase(),
            },
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'pictures',
            type: 'array',
            title: 'Pictures',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
        }),
    ],
});