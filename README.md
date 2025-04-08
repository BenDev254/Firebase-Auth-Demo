
# Firebase Authentication Demo with Next.js

This is a demo app built with **Next.js** and **Firebase Authentication** to simulate user login and fetch random numbers from different APIs based on the user's organization.

The app distinguishes users based on Firebase Authentication, fetches their organization info, and then calls one of two mock APIs to get a random number.

## Features

- **Firebase Authentication**: Users are authenticated anonymously using Firebase.
- **QR Code Simulation**: The app simulates scanning a QR code (redirecting to `/scan`).
- **User Organization Logic**: Based on the authenticated user’s unique ID, the app determines which organization the user belongs to and fetches a random number from the corresponding API.
- **Mock APIs**: Two mock APIs return a random number (simulated for this demo).

## Prerequisites

- Node.js (>= 14.x)
- Firebase account
- A Firebase project set up for authentication (we're using anonymous sign-in)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Firebase-Auth-Demo.git
cd Firebase-Auth-Demo
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up Firebase

#### Create Firebase Project
- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new Firebase project.
- Enable **Firebase Authentication** for your project and enable **Anonymous Authentication**.
  
#### Add Firebase configuration to `.env.local`
Create a `.env.local` file in the root of your project and add the following Firebase environment variables:

```ini
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDOqbegBbLOFXqzC63sWzWgqvjwguwR-1k
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=code-engine-demo.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=code-engine-demo
NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdefgh12345678
```

You can find these credentials in your Firebase console under **Project settings** > **General** > **Your apps** > **Firebase SDK snippet** (for web).

### 4. Run the app locally

Start the development server:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`. Open this URL in your browser to interact with the app.

## How It Works

1. **QR Code Simulation**:
   - When users visit `http://localhost:3000/scan`, they are redirected after scanning the QR code (for testing, just open the URL directly in a browser).
  
2. **Firebase Authentication**:
   - The app authenticates the user anonymously using Firebase Authentication.
   - After authentication, the app checks the user's unique ID (UID) and assigns the user to a particular organization using a hardcoded map.

3. **Fetching Random Numbers**:
   - Based on the user’s organization (stored in the `userOrgMap`), the app fetches a random number from one of the two mock APIs.
   - The number is displayed to the user.

### Mock Organization Mapping

In the app, users are assigned to organizations based on their Firebase UID. For example:

```js
const userOrgMap = {
  'uid-abc123': 'orgA',
  'uid-def456': 'orgB',
}
```

When a user is authenticated, the app looks up their organization and fetches a random number from either **API A** or **API B**.

## Folder Structure

```
/pages
  /scan.js          - Page where users are authenticated and assigned to an organization.
/firebase
  /firebaseClient.js - Firebase initialization code for authentication.
/lib
  /fetchFromOrgAPI.js - Logic for fetching a random number from the mock APIs.
.env.local          - Environment variables for Firebase configuration.
.gitignore          - Ignore node_modules and environment files.
package.json        - Project dependencies and scripts.
README.md           - Project documentation.
```

## Testing the App

1. Visit `http://localhost:3000/scan`.
2. The app will sign the user in anonymously using Firebase.
3. Once authenticated, the app will look up the user’s organization and display a random number based on that organization.

## Deployment

### Deploy to Vercel

You can deploy this app to [Vercel](https://vercel.com) for free.

#### Steps to deploy:

1. Go to [Vercel](https://vercel.com).
2. Sign in with your GitHub account.
3. Click "Add New Project" and select your repository from GitHub.
4. Configure environment variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
5. Vercel will automatically deploy the app and provide you with a live link.

## Troubleshooting

- **Authentication Issues**: If you're having issues with Firebase Authentication, make sure you have enabled **Anonymous Authentication** in your Firebase console under **Authentication** > **Sign-in method**.
  
- **Missing Firebase credentials**: If you haven't set up your Firebase credentials in `.env.local` correctly, you'll get errors related to missing or invalid Firebase configuration.

- **CORS issues with mock APIs**: If you're using your own mock APIs locally, make sure CORS headers are properly configured.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Firebase](https://firebase.google.com/) for the Authentication service.
- [Next.js](https://nextjs.org/) for the React framework.
- [Vercel](https://vercel.com/) for easy deployment.
