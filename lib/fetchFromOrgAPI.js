export async function fetchFromOrgAPI(org) {
    const apiMap = {
      orgA: '/api/mockA',
      orgB: '/api/mockB',
    }
  
    const api = apiMap[org] || '/api/mockA'
  
    const res = await fetch(api)
    const data = await res.json()
    return data.number
  }
  