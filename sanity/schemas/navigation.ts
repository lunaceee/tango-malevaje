import { defineType, defineField } from 'sanity';
import { navigationItemType } from './navigationItem';

export const navigationType = defineType({
    name: 'navigation',
    type: 'document',
    title: 'Navigation',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Navigation Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'items',
            type: 'array',
            title: 'Navigation Items',
            of: [{ type: navigationItemType.name }], // Using `navigationItemType`
        }),
    ],
});