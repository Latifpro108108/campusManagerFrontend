import { useEffect, useState } from 'react'
import api from '../Utils/api'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const [userData, setUserData] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/users/profile')
        setUserData(response.data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }
    fetchProfile()
  }, [])

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        </div>

        {/* Profile Information */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Username</label>
              <p className="text-lg font-medium text-gray-900">{userData.username}</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <p className="text-lg text-gray-900">{userData.email}</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Role</label>
              <p className="text-lg text-gray-900 capitalize">{userData.role}</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Member Since</label>
              <p className="text-lg text-gray-900">
                {new Date(userData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Registered Events Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Registered Events
            </h2>
            
            {userData.registeredEvents.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Event Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userData.registeredEvents.map((event) => (
                      <tr key={event._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {event.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                          {event.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  You haven't registered for any events yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile