export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => {
        return Rule.required().min(5)
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'coverImage',
      title: 'CoverImage',
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              title: 'Position',
              name: 'position',
              type: 'string',
              options: {
                list: [
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
                  {title: 'Left', value: 'left'},
                ],
                layout: 'radio',
              },
            },
            {
              type: 'text',
              name: 'alt',
              title: 'Description',
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          type: 'code',
          options: {
            withFilename: true,
          },
        },
      ],
    },
    {
      name: 'date',
      title: 'date',
      type: 'datetime',
      validation: (Rule) => {
        return Rule.required()
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => {
        return Rule.required()
      },
    },
    // something like id
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => {
        return Rule.required()
      },
    },
  ],
}
