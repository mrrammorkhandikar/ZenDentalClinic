# Vercel Deployment Guide for Zen Smile Dental Clinic

This guide provides step-by-step instructions for deploying the Zen Smile Dental Clinic website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com/) account
- Git installed on your local machine
- Node.js (v16 or higher) and npm (v7 or higher)

## Deployment Steps

### Option 1: Deploy from Git Repository

1. **Push your code to a Git repository**
   - Create a repository on GitHub, GitLab, or Bitbucket
   - Push your code to the repository

2. **Import your project to Vercel**
   - Log in to your Vercel account
   - Click "Add New" → "Project"
   - Select the repository containing your project
   - Vercel will automatically detect that it's a Vite project

3. **Configure project settings**
   - **Framework Preset**: Select "Vite"
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `dist` (should be auto-detected)
   - **Install Command**: `npm install` (should be auto-detected)

4. **Environment Variables**
   - Add any environment variables from your `.env.production` file

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy the project**
   - Navigate to your project directory
   - Run the deploy command:
   ```bash
   vercel
   ```
   - Follow the prompts to configure your project

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Project Configuration

This project has been configured for optimal deployment on Vercel with the following files:

### vercel.json

The `vercel.json` file in the root directory contains configuration specific to Vercel:

```json
{
  "version": 2,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "github": {
    "silent": true
  }
}
```

This configuration ensures:
- Proper routing for a single-page application
- Correct build command and output directory
- Framework detection

### BrowserRouter Configuration

The application uses `BrowserRouter` from React Router, which works well with Vercel's routing configuration.

## Post-Deployment

After deployment, Vercel will provide you with a URL where your site is accessible. You can:

1. **Set up a custom domain**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain and follow the instructions

2. **Configure additional settings**
   - Enable automatic HTTPS
   - Set up preview deployments for pull requests
   - Configure serverless functions if needed

## Troubleshooting

### 404 Errors on Page Refresh

If you encounter 404 errors when refreshing pages, check that:
- The `vercel.json` file is correctly configured with the routes
- You're using `BrowserRouter` instead of `HashRouter`

### Build Failures

If your build fails on Vercel:
1. Check the build logs for specific errors
2. Ensure all dependencies are correctly listed in `package.json`
3. Verify that your build command works locally

## Continuous Deployment

Vercel automatically sets up continuous deployment when you connect a Git repository. Every push to your main branch will trigger a new deployment.

To configure branch deployments:
1. Go to your project settings in Vercel
2. Navigate to "Git"
3. Configure which branches should trigger deployments

## Support

For additional support with Vercel deployment, refer to the [Vercel documentation](https://vercel.com/docs) or contact the development team.