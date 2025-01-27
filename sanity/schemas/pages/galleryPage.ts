import { defineField, defineType } from 'sanity';

export const galleryPageType = {
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
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'cards',
            type: 'array',
            title: 'Cards',
            of: [{ type: 'card' }],
        }),
    ],
};
