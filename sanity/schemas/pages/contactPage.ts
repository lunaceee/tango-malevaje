import { defineType, defineField } from 'sanity';


export const contactPageType = defineType({
    name: 'contactPage',
    type: 'document',
    title: 'Contact Page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'email',
            type: 'email',
            title: 'Email',
        }),
        defineField({
            name: 'message',
            type: 'text',
            title: 'Message',
        }),
    ],
});