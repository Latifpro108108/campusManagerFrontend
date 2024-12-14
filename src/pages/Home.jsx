import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to Campus Events
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and participate in exciting campus activities, workshops, seminars, 
            and club events. Join our vibrant community today!
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/events" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              View Events
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Workshops</h2>
                <p className="text-gray-600">
                  Hands-on learning experiences led by industry experts
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Seminars</h2>
                <p className="text-gray-600">
                  Engaging discussions on cutting-edge topics
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Club Activities</h2>
                <p className="text-gray-600">
                  Connect with peers who share your interests
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                Why Join Campus Events?
              </h2>
              <ul className="text-left text-blue-800 space-y-2 max-w-xl mx-auto">
                <li>✓ Network with fellow students and professionals</li>
                <li>✓ Gain practical knowledge and skills</li>
                <li>✓ Earn certificates for workshop participation</li>
                <li>✓ Stay updated with latest industry trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home