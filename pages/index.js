import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to the Firebase Auth Demo</h1>
      <p>
        This project demonstrates how to use Firebase Authentication with anonymous login and 
        dynamically fetch data based on the user's organization from different APIs.
      </p>
      <Link href="/scan">
        <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Go to Scan Page
        </button>
      </Link>
    </div>
  )
}
