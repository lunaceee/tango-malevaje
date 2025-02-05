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
            type: "string",
            title: "Description"
        }),
        defineField({
            name: "editor",
            type: "blockContent",
            title: "Rich Text",
        }),
        defineField({
            name: "slug",
            type: 'slug',
            title: "Slug",
            options: {
                maxLength: 96,
                source: 'title',
                slugify: (input) => input.toLowerCase(),
            },
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{
                type: 'image',
                options: { hotspot: true }, // Allows cropping and focus selection
                fields: [
                    defineField({
                        name: 'altText',
                        type: 'string',
                        title: 'Alternative text',
                        description: 'Describe the image for accessibility and SEO.',
                    })
                ]
            }],
            title: 'Image Gallery',
        }),
    ],
});