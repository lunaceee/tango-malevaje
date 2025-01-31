import { defineField, defineType } from 'sanity';
import { eventType } from '../event';
import { navigationType } from '../navigation';

export const homePageType = defineType({
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        defineField({
            name: 'navigation',
            type: 'reference',
            title: 'Navigation',
            to: [{ type: navigationType.name }],
        }),
        // Section 1: Highlight Event Section
        defineField({
            name: 'highlightEvent',
            type: 'reference',
            title: 'Highlight Event Section',
            to: [{ type: eventType.name }],
        }),
        // Section 2: Cards Section
        defineField({
            name: 'cardsSection',
            type: 'object',
            title: 'Cards Section',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Section Title',
                    description: 'Title for the cards section, e.g., "Explore More".',
                },
                {
                    name: 'cards',
                    type: 'array',
                    title: 'Cards',
                    of: [
                        {
                            type: 'object',
                            title: 'Card',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'string',
                                    title: 'Card Title',
                                    validation: (Rule) => Rule.required().error('Card title is required.'),
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    title: 'Card Description',
                                },
                                {
                                    name: 'image',
                                    type: 'image',
                                    title: 'Card Image',
                                },
                                {
                                    name: 'link',
                                    type: 'reference',
                                    to: [{ type: 'venuePage' }, { type: 'galleryPage' }], // Link to either Venue or Gallery pages
                                    title: 'Link',
                                    description: 'Link to the related page.',
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});
