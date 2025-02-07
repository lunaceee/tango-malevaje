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
            name: 'images',
            type: 'array',
            title: 'Pictures',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true }, // Allows cropping and focus selection
                    fields: [
                        defineField({
                            name: 'altText',
                            type: 'string',
                            title: 'Alternative Text',
                            description: 'Describe the image for accessibility and SEO.',
                        }),
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
});