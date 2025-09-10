# Deployment Guide for Zen Smile Dental Clinic Website

This guide provides instructions for deploying the Zen Smile Dental Clinic website to various hosting platforms.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Build the Application

Before deploying, you need to build the application:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## Deployment Options

### Option 1: Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Login to Netlify: `netlify login`
4. Deploy the site: `netlify deploy --prod`
5. When prompted, specify `dist` as the publish directory

Alternatively, you can connect your GitHub repository to Netlify for continuous deployment.

### Option 2: Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm install -g vercel`
3. Login to Vercel: `vercel login`
4. Deploy the site: `vercel --prod`

### Option 3: GitHub Pages

1. Create a GitHub repository for your project
2. Install gh-pages: `npm install -D gh-pages`
3. Add these scripts to your package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy the site: `npm run deploy`

### Option 4: Traditional Web Hosting

1. Build the application: `npm run build`
2. Upload the contents of the `dist` directory to your web hosting server using FTP or the hosting provider's file manager

## Environment Variables

The application uses the following environment variables that you may need to configure on your hosting platform:

- `VITE_APP_TITLE`: The title of the application
- `VITE_APP_DESCRIPTION`: A brief description of the application
- `VITE_APP_BASE_URL`: The base URL for the application (default: './')

## Troubleshooting

### Routing Issues

If you encounter routing issues (404 errors when refreshing pages), ensure that your hosting provider is configured to redirect all requests to index.html. For Netlify, this is handled by the `_redirects` file already included in the project.

### Image Loading Issues

If images fail to load, check that the paths in your code match the actual file paths in the deployed application. The application uses relative paths with the base URL configured in vite.config.js.

## Support

For additional support, please contact the development team.