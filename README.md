#iBlogs

This is a Blogs website developed using Next.js for the front-end and Sanity for the backend. It provides a platform for users to read and publish blog posts on various topics.

## Features

- User authentication: Users can create accounts, log in, and manage their profiles.
- Blog post management: Users can create, edit, and delete their blog posts.
- Search functionality: Users can search for specific blog posts based on keywords.
- Responsive design: The website is optimized for various screen sizes and devices.
- SEO-friendly: The website implements best practices for search engine optimization.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **Sanity**: A headless CMS (Content Management System) that provides a structured backend for managing content.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and customizable UI components.
- **Axios**: A promise-based HTTP client for making API requests to the backend.
- **Next Outh**: *Next Outh Web Tokens are used for user authentication and authorization.


## Getting Started

To get started with the Blogs website, follow these steps:

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager
- Sanity account and project setup
- Tailwind Css

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/EnchantedGedial/Sanity-Blogs
   ```

2. Navigate to the project directory:

   ```shell
   cd blogs-website
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Set up environment variables:

   - Create a `.env.local` file in the project root directory.
   - Add the following environment variables and replace the values with your own:

     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
     SANITY_DATASET=your-sanity-dataset
     SANITY_TOKEN=your-sanity-token
     ```

5. Run the development server:

   ```shell
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the website.

## Configuration

To customize the website's appearance and behavior, you can modify the following files:

- `sanity.json`: Configure the Sanity backend settings.
- `next.config.js`: Adjust Next.js configuration options.
- `tailwind.config.js`: Customize the Tailwind CSS configuration.
- `styles/globals.css`: Override or add global CSS styles.

## Deployment

To deploy the Blogs website to a production environment, you can use platforms like Vercel, Netlify, or Heroku. Refer to their documentation for specific deployment instructions.

## Contributing

Contributions to the Blogs website are welcome! If you encounter any issues or have suggestions for improvements, please submit an issue or pull request to the repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

The Blogs website is built upon the knowledge and resources provided by the Next.js and Sanity communities. Special thanks to all the developers who contribute to these projects.

## Contact

For any inquiries or feedback, please contact the project maintainer:

Name : Jayant 
Email:jay.codmik.18@gmail.com

Feel free to reach out with any questions or concerns!
