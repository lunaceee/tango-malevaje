import { defineType, defineField } from 'sanity';

export const footerType = defineType({
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        // Social Media Links
        defineField({
            name: 'socialMedia',
            type: 'array',
            title: 'Social Media Links',
            description: 'Add links to social media profiles',
            of: [
                {
                    type: 'object',
                    title: 'Social Media Link',
                    fields: [
                        defineField({
                            name: 'platform',
                            type: 'string',
                            title: 'Platform Name',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'icon',
                            type: 'image',
                            title: 'Social Media Icon',
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'Profile URL',
                            validation: (Rule) => Rule.required().uri(),
                        }),
                    ],
                },
            ],
        }),

        // Copyright
        defineField({
            name: 'copyright',
            type: 'string',
            title: 'Copyright Information',
            initialValue: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
        }),

        // Partner Links
        defineField({
            name: 'partners',
            type: 'array',
            title: 'Partners',
            description: 'Links to partner websites',
            of: [
                {
                    type: 'object',
                    title: 'Partner',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Partner Name',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'Website URL',
                            validation: (Rule) => Rule.required().uri(),
                        }),
                    ],
                },
            ],
        }),

        // Contact Us Link
        defineField({
            name: 'contactUs',
            type: 'reference',
            title: 'Contact Us Page',
            description: 'Link to the contact page',
            to: [{ type: 'contactPage' }], // Ensure you have a `contactPage` schema
        }),
    ],
});
