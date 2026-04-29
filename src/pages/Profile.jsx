import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../api/config'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/profile`, {
          credentials: 'include',
          headers: {
            // If using cookies, we need credentials: 'include'
            // If using Bearer token, we need to store it somewhere. 
            // The backend implementation I wrote supports both, but prefers Bearer if present.
            // However, the README said store it securely, so I'll assume cookies for now.
          },
        })
        const data = await response.json()
        if (response.ok) {
          setUser(data.data.user)
        } else {
          navigate('/signin')
        }
      } catch (err) {
        setError('Failed to fetch profile')
        navigate('/signin')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [navigate])

  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      {user && (
        <div className="bg-white shadow rounded-lg p-6">
          <p className="mb-4"><strong>Name:</strong> {user.name}</p>
          <p className="mb-4"><strong>Email:</strong> {user.email}</p>
          <p className="mb-4"><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      )}
      <button 
        onClick={async () => {
          await fetch(`${API_URL}/auth/logout`, { credentials: 'include' })
          navigate('/signin')
        }}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}
