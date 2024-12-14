import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-gray-900">
              Events
            </Link>
            <Link to="/calendar" className="text-gray-700 hover:text-gray-900">
              Calendar
            </Link>
          </div>

          <div className="flex space-x-4">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <div className="flex space-x-4">
                    <Link
                      to="/admin/events"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Manage Events
                    </Link>
                    <Link
                      to="/admin/registrations"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      View Registrations
                    </Link>
                  </div>
                )}
                <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header