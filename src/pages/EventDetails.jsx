   // src/pages/EventDetails.jsx
   import React from 'react';
   import { useLocation, Link } from 'react-router-dom';

   function EventDetails() {
     const location = useLocation();
     const { events } = location.state || { events: [] };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Events on Selected Date</h1>
         {events.length > 0 ? (
           <ul className="space-y-4">
             {events.map(event => (
               <li key={event.id} className="bg-white p-4 rounded-lg shadow">
                 <h2 className="text-xl font-bold">{event.title}</h2>
                 <p>Type: {event.type}</p>
                 <p>Date: {new Date(event.start).toLocaleDateString()}</p>
                 <p>Time: {new Date(event.start).toLocaleTimeString()}</p>
                 <p>Location: {event.location}</p>
                 <p>Description: {event.description}</p>
               </li>
             ))}
           </ul>
         ) : (
           <p>No events scheduled for this date.</p>
         )}
         <Link to="/calendar" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
           Back to Calendar
         </Link>
       </div>
     );
   }

   export default EventDetails;