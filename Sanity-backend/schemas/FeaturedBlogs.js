

export default {
    name: 'FeaturedBlogs',
    type: 'document',
      title: 'FeaturedBlogs',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'metadisc',
        type: 'string',
        title: 'MeatDisc'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, 
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
     
      
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },
      {
        title: 'Blog Image',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      }
    ]
  }
