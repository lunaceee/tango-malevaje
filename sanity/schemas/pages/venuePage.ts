import { defineType, defineField } from "sanity";

export const venuePageType = defineType({
    name: "venuePage",
    type: "document",
    title: "Venue Page",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            name: "editor",
            type: "blockContent",
            title: "Rich Text",
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
            title: 'Image Gallery',
        }),
    ],
});