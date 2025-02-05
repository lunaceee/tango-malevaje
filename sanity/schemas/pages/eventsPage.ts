import { defineType, defineField } from "sanity";

export const eventsPageType = defineType({
    name: "eventsPage",
    type: "document",
    title: "Events Page",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: 'events',
            type: 'array',
            title: 'Past events',
            of: [{ type: 'image' }],
        }),
    ],
});