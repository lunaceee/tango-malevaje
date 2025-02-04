import { defineField, defineType } from 'sanity';
import { eventType } from '../event';
import { galleryPageType } from './galleryPage';
import { venuePageType } from './venuePage';

export const homePageType = defineType({
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        // Section 1: Highlight Event Section
        defineField({
            name: 'highlightEvent',
            type: 'reference',
            title: 'Highlight Event Section',
            to: [{ type: eventType.name }],
        }),
        // Section 2: Plan for your visit section
        defineField({
            name: 'planForVisit',
            type: 'reference',
            title: 'Plan for your visit',
            to: [{ type: venuePageType.name }],
        }),
        // Section 3: Gallery Section
        defineField({
            name: 'linkToGallery',
            type: 'reference',
            title: 'Link to Gallery',
            to: [{ type: galleryPageType.name }],
        }),
    ],
});
