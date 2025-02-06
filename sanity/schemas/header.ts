import { defineType, defineField } from 'sanity';
import { navigationType } from './navigation';

export const headerType = defineType({
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
            title: 'Logo',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'altText',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Describe the image for accessibility and SEO.',
                })
            ]
        }),
        defineField({
            name: 'navigation',
            type: 'reference',
            title: 'Navigation',
            to: [{ type: navigationType.name }],
        }),
    ],
});