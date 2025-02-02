import { defineType, defineField } from 'sanity';
import type { SanityDocument, SlugSourceFn } from 'sanity';

export const eventType = defineType({
    name: 'event',
    type: 'object',
    title: 'Event',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Event Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            type: 'datetime',
            title: 'Event Date & Time',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug (URL)',
            options: {
                source: ((doc: SanityDocument) => {
                    // Ensure we are referencing the correct event title, not a parent page title
                    if (!('title' in doc)) {
                        console.warn('Slug generation error: Title field missing in event document.');
                        return null;
                    }

                    const eventTitle = doc.title as string; // Explicitly getting event title
                    const eventDate = 'eventDate' in doc ? doc.eventDate as string : null;

                    if (!eventTitle) return null; // Ensure title exists

                    const titleSlug = eventTitle.toLowerCase().replace(/\s+/g, '-'); // Convert title to slug format

                    if (!eventDate) {
                        return titleSlug; // Use title only if no date is provided
                    }

                    const date = new Date(eventDate);
                    if (isNaN(date.getTime())) {
                        return titleSlug; // Fallback to title if date is invalid
                    }

                    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD format
                    return `${titleSlug}-${formattedDate}`;
                }) as SlugSourceFn,
                maxLength: 96,
                slugify: (input) => input.toLowerCase().replace(/[^\w-]+/g, '-'), // Ensures safe URL format
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Event Description',
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location',
            initialValue: 'Verdi Club, 2424 Mariposa St, San Francisco, CA 94110'
        }),
        defineField({
            name: 'ticketUrl',
            type: 'url',
            title: 'Ticket Purchase URL',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Event Image',
            options: { hotspot: true },
        }),
    ],
});
