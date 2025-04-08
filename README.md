# Firebase Auth Demo - Next.js

This is a simple Next.js application demonstrating Firebase authentication (anonymous sign-in) and fetching data from different APIs based on user organizations. This project is built to showcase how you can authenticate users using Firebase and dynamically fetch data based on their organization.

## Features

- Firebase Authentication using anonymous sign-in
- Organization-based data fetching from mock APIs
- Simulate multiple organizations (`orgA`, `orgB`) for testing
- Uses Firebase to initialize the app and fetch data for authenticated users

## Technologies Used

- **Next.js** - React framework for building the application
- **Firebase** - Authentication and backend services
- **Vercel** - Deployment platform (for production)
- **Mock APIs** - Simulate different organization-based data fetching

## Setup and Installation

To set up this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/BenDev254/Firebase-Auth-Demo.git
   cd Firebase-Auth-Demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file at the root of the project with your Firebase configuration. Replace the placeholders with your Firebase project's credentials.

   ```ini
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Project Structure

```
/pages
  /api              # Mock API endpoints
  /scan.js          # Main page for random number fetch based on user organization

/firebase
  firebaseClient.js # Firebase initialization and authentication logic

/lib
  fetchFromOrgAPI.js # Function to fetch data from organization-based APIs

/public
  /favicon.ico      # Default favicon for the app

/styles
  global.css        # Global styles for the application
```

## How It Works

1. The `ScanPage` component is responsible for signing in users anonymously via Firebase.
2. Once the user is signed in, the app uses their UID to determine their organization (for demo purposes, this is hardcoded).
3. Based on the user's organization, it fetches a random number from a mock API (`/api/mockA` or `/api/mockB`).
4. The fetched number is displayed on the page.
5. You can toggle between organizations (`orgA` or `orgB`) using the button on the page for testing.

## Testing Multiple Organizations

- By default, the app checks the user's UID to determine which organization to fetch data for.
- For testing purposes, you can toggle between `orgA` and `orgB` using a button on the page.

## Firebase Authentication

Firebase Authentication is used to sign users in anonymously. You can extend this for more authentication providers like Google or email/password in the future.

## Deploying to Vercel

This project is ready to be deployed on Vercel for production. Simply follow these steps:

1. Push your changes to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Create a new project and link it to your GitHub repository.
4. Vercel will automatically deploy the application.

For more information on deploying Next.js apps on Vercel, visit the [Vercel documentation](https://vercel.com/docs).

## Environment Variables

This project requires the following Firebase environment variables to work correctly:

```ini
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

Make sure to replace these placeholders with your actual Firebase credentials.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
