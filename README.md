# NVTEVISUALS

Personal portfolio for Nathan Mescher, a creative freelancer specializing in photography, videography, and design. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/6bb50999-ce50-4b6f-939c-0cd8f1f76feb/deploy-status)](https://app.netlify.com/sites/happy-morse-c15030/deploys)

## Tech Stack
- NextJS
- react-images
- Netlify
- Netlify CMS - Used for content and media asset management
- Cloudinary - Used for media asset management
- Zapier
- Mailgun

## First Time Setup

* Clone the repository and navigate to the root directory
* Run `npm install`
* Update `.env-sample` filename to `.env` and update the contents to include `CLOUDINARY_API_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
* To start a local instance, run the `npm run dev` script


## Available Functionality

- https://www.nvtevisuals.com/admin - allows an added user access to Netlify CMS dashboard to manage posts via NetlifyCMS and media assets via Cloudinary.

## Available Scripts

* `next` - Starts a local instance of the development server by calling the local instance of next in the node modules.
* `dev` - Starts a local instance of the development server. Copies the create-react-app command.
* `build` - Emits .html files for statically optimized pages.
* `export` - Builds a HTML version of the app. At export time, it runs getInitialProps of all pages.
* `deploy` - Runs both build and export. This script is utilized by Netlify to trigger a build after a successful push to master. 
* `start` - Starts the app on a port.
* `lint` - Utilizes eslint and the airbnb rules to check for errors in code styled.
