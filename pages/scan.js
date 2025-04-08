import { useState, useEffect } from 'react'
import { initFirebase } from '../firebase/firebaseClient'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { fetchFromOrgAPI } from '../lib/fetchFromOrgAPI'

export default function ScanPage() {
  const [number, setNumber] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [org, setOrg] = useState('orgA') // Initially set to 'orgA'

  // Hardcoded org info for demo (in real app, fetch from Firestore or Auth)
  const userOrgMap = {
    'uid-abc123': 'orgA',
    'uid-def456': 'orgB',
  }

  useEffect(() => {
    // Initialize Firebase first (only on client-side)
    if (typeof window !== 'undefined') {
      initFirebase()
    }

    const run = async () => {
      try {
        const auth = getAuth()

        // Sign in anonymously
        const result = await signInAnonymously(auth)

        // Get user info
        const user = result.user
        const uid = user.uid
        console.log('Signed in as:', uid) // Log the UID to ensure correct identification

        // Get organization based on user UID (hardcoded for now)
        const fetchedOrg = userOrgMap[uid] || org // Fetch org from userOrgMap or use state
        console.log('Organization:', fetchedOrg) // Log the organization for debugging

        // Fetch random number from organization-based API
        const num = await fetchFromOrgAPI(fetchedOrg)
        setNumber(num)

      } catch (err) {
        console.error('Error:', err)
        setError('Something went wrong during authentication or API fetch.')
      } finally {
        setLoading(false)
      }
    }

    run()

  }, [org])  // Re-run when org state changes

  // Loading and error states
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>🎲 Your Random Number</h1>
      <h2 style={{ fontSize: '3rem' }}>{number}</h2>
      
      {/* Button to flip organizations */}
      <button onClick={() => setOrg(org === 'orgA' ? 'orgB' : 'orgA')}>
        Switch Organization
      </button>
    </div>
  )
}
