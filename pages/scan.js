import { useEffect, useState } from 'react'
import { initFirebase } from '../firebase/firebaseClient'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { fetchFromOrgAPI } from '../lib/fetchFromOrgAPI'

initFirebase()

// Hardcoded org info for demo (in real app, fetch from Firestore)
const userOrgMap = {
  // Firebase anonymous UID -> organization
  'uid-abc123': 'orgA',
  'uid-def456': 'orgB',
}

export default function ScanPage() {
  const [number, setNumber] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const run = async () => {
      const auth = getAuth()

      try {
        // Sign in anonymously
        const result = await signInAnonymously(auth)

        // Get user
        const user = result.user
        const uid = user.uid

        console.log('Signed in as:', uid)

        // Get org from hardcoded map (simulate database)
        const org = userOrgMap[uid] || 'orgA' // fallback for unknown users

        // Fetch number from org-based API
        const num = await fetchFromOrgAPI(org)
        setNumber(num)
      } catch (err) {
        console.error('Error:', err)
        setError('Something went wrong.')
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>🎲 Your Random Number</h1>
      <h2 style={{ fontSize: '3rem' }}>{number}</h2>
    </div>
  )
}
