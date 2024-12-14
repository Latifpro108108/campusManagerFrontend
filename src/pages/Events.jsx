import { useEffect, useState } from 'react'
import api from '../Utils/api'
import { useAuth } from '../context/AuthContext'

function Events() {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events')
        setEvents(response.data)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const handleRegistrationChange = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e, eventId) => {
    e.preventDefault()
    try {
      await api.post(`/events/${eventId}/rsvp`, registrationForm)
      setMessage('Registration successful!')
      setSelectedEvent(null)
      setRegistrationForm({
        name: '',
        email: '',
        phone: '',
        requirements: ''
      })
      const response = await api.get('/events')
      setEvents(response.data)
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error registering for event')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Upcoming Events
      </h1>
      
      {message && (
        <div className={`mb-6 p-4 rounded-lg text-center ${
          message.includes('Error') 
            ? 'bg-red-100 text-red-700'
            : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{event.name}</h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {event.type}
                </span>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </p>
                
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {event.location}
                </p>

                <div className="flex items-center space-x-4">
                  <p className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    {event.attendees?.length || 0}/{event.capacity}
                  </p>
                </div>

                <p className="text-gray-700 mt-4">{event.description}</p>
              </div>

              {user && !event.attendees?.includes(user._id) && (
                <div className="mt-6">
                  {selectedEvent === event._id ? (
                    <form onSubmit={(e) => handleRegister(e, event._id)} className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={registrationForm.name}
                            onChange={handleRegistrationChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={registrationForm.email}
                            onChange={handleRegistrationChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={registrationForm.phone}
                            onChange={handleRegistrationChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Special Requirements</label>
                          <textarea
                            name="requirements"
                            value={registrationForm.requirements}
                            onChange={handleRegistrationChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            rows="3"
                            placeholder="Any special requirements?"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          type="submit"
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                          Submit Registration
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(null)}
                          className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <button
                      onClick={() => setSelectedEvent(event._id)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Register for Event
                    </button>
                  )}
                </div>
              )}
              
              {user && event.attendees?.includes(user._id) && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-green-700 font-medium text-center">
                    You are registered for this event
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events