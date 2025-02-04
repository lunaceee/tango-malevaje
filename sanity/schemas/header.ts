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
            options: { hotspot: true },
        }),
        defineField({
            name: 'navigation',
            type: 'reference',
            title: 'Navigation',
            to: [{ type: navigationType.name }],
        }),
    ],
});