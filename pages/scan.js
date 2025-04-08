import { useEffect, useState } from 'react'
import { initFirebase } from '../firebase/firebaseClient'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { fetchFromOrgAPI } from '../lib/fetchFromOrgAPI'

export default function ScanPage() {
  const [number, setNumber] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Hardcoded org info for demo (in real app I would fetch from Firestore)
  const userOrgMap = {
    'uid-abc123': 'orgA',
    'uid-def456': 'orgB',
  }

  useEffect(() => {
    const run = async () => {
      try {
        initFirebase()

        const auth = getAuth()


        const result = await signInAnonymously(auth)


        const user = result.user
        const uid = user.uid
        console.log('Signed in as:', uid)

        // Get organization from hardcoded map, I would change this is live deployment
        const org = userOrgMap[uid] || 'orgA' // fallback for unknown users

        const num = await fetchFromOrgAPI(org)

        setNumber(num)
      } catch (err) {
        console.error('Error:', err)
        setError('Something went wrong during authentication or API fetch.')
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
