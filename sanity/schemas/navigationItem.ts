import { defineType, defineField } from 'sanity';

export const navigationItemType = defineType({
    name: 'navigationItem',
    type: 'object',
    title: 'Navigation Item',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'internalLink',
            type: 'reference',
            to: [{ type: 'homePage' }, { type: 'eventsPage' }, { type: 'venuePage' }, { type: 'galleryPage' }],
            title: 'Internal Page',
            hidden: ({ parent }) => parent?.linkType !== 'internal',
        }),
        defineField({
            name: 'linkType',
            type: 'string',
            title: 'Link Type',
            options: {
                list: [
                    { title: 'External Link', value: 'external' },
                    { title: 'Internal Page', value: 'internal' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'External URL',
            hidden: ({ parent }) => parent?.linkType !== 'external',
        }),
        defineField({
            name: 'subItems',
            type: 'array',
            title: 'Sub-Items (Dropdown)',
            of: [{ type: 'navigationItem' }], // Self-referencing for nested menus
        }),
    ],
});
