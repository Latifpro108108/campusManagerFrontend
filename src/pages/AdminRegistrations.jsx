import { useState, useEffect } from 'react';
import api from '../Utils/api';

function AdminRegistrations() {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('all');
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError('');
            
            console.log('Fetching registrations and events...');
            const [registrationsRes, eventsRes] = await Promise.all([
                api.get('/events/admin/registrations'),
                api.get('/events')
            ]);

            console.log('Registrations data:', registrationsRes.data);
            console.log('Events data:', eventsRes.data);

            setRegistrations(registrationsRes.data);
            setEvents(eventsRes.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.response?.data?.message || 'Error fetching registrations');
            setLoading(false);
        }
    };

    const filteredRegistrations = selectedEvent === 'all'
        ? registrations
        : registrations.filter(reg => reg.eventId?._id === selectedEvent);

    if (loading) return (
        <div className="flex justify-center items-center p-8">
            <div className="text-xl text-gray-600">Loading...</div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center p-8">
            <div className="text-xl text-red-600">{error}</div>
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Event Registrations
                </h1>
                
                {/* Event Filter */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filter by Event
                    </label>
                    <select
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                        <option value="all">All Events</option>
                        {events.map(event => (
                            <option key={event._id} value={event._id}>
                                {event.name} - {new Date(event.date).toLocaleDateString()}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Registrations Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg shadow">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Event
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Registrant
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Registration Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Requirements
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredRegistrations.map((registration) => (
                                <tr key={registration._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {registration.eventId?.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {registration.eventId?.date && new Date(registration.eventId.date).toLocaleDateString()} at {registration.eventId?.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{registration.name}</div>
                                        <div className="text-sm text-gray-500">{registration.userId?.username}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{registration.email}</div>
                                        <div className="text-sm text-gray-500">{registration.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(registration.registrationDate).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {registration.requirements || 'None'}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredRegistrations.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No registrations found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminRegistrations;