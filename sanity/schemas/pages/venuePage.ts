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
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: 'imageGallery',
            type: 'array',
            of: [{ type: 'image' }],
            title: 'Image Gallery',
        }),
    ],
});