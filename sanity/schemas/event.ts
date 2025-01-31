import { defineType, defineField } from 'sanity';
import type { SanityDocument, SlugSourceFn } from 'sanity';

export const eventType = defineType({
    name: 'event',
    type: 'document',
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
                    // First, cast `doc` to unknown, then assert the required structure
                    const typedDoc = doc as unknown as { title: string; eventDate?: string };

                    if (!typedDoc.title) return ''; // Ensure title exists
                    if (!typedDoc.eventDate) {
                        return typedDoc.title.toLowerCase().replace(/\s+/g, '-'); // Fallback if no date
                    }

                    const date = new Date(typedDoc.eventDate).toISOString().split('T')[0]; // YYYY-MM-DD
                    return `${typedDoc.title.toLowerCase().replace(/\s+/g, '-')}-${date}`;
                }) as SlugSourceFn,
                maxLength: 96,
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
