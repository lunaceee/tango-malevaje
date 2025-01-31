import { defineType, defineField } from "sanity";
import { eventType } from "../event";

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
            type: 'reference',
            to: [{ type: eventType.name }],
            title: 'Events',
        }),
    ],
});