// // import{Rule} from "Sanity";

// export default {
//     name: 'category',
//     type: 'document',
//       title: 'Categories',
//     fields: [

//         {
//             title:'Title',
//             name:'title',
//             type:'string',
//             // Validation:(rule:Rule)=>rule.required
//         }
//     ],
//     preview :{
//         select:{title:'title',media:'image'}
//     }
//   }
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
