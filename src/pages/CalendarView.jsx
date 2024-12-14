   // src/pages/CalendarView.jsx
   import React, { useState, useEffect } from 'react';
   import { Calendar, momentLocalizer } from 'react-big-calendar';
   import moment from 'moment';
   import 'react-big-calendar/lib/css/react-big-calendar.css';
   import api from '../Utils/api';
   import { useNavigate } from 'react-router-dom';

   const localizer = momentLocalizer(moment);

   function CalendarView() {
     const [events, setEvents] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
       const fetchEvents = async () => {
         try {
           const response = await api.get('/events');
           const formattedEvents = response.data.map(event => ({
             id: event._id,
             title: event.name,
             start: new Date(event.date),
             end: new Date(event.date),
             type: event.type,
             location: event.location,
             description: event.description
           }));
           setEvents(formattedEvents);
         } catch (error) {
           console.error('Error fetching events:', error);
         }
       };
       fetchEvents();
     }, []);

     const handleSelectSlot = ({ start }) => {
       const selectedDateEvents = events.filter(event =>
         moment(event.start).isSame(start, 'day')
       );
       navigate('/event-details', { state: { events: selectedDateEvents } });
     };

     const eventStyleGetter = (event) => {
       let backgroundColor = '#3174ad';
       switch (event.type) {
         case 'workshop':
           backgroundColor = '#4CAF50';
           break;
         case 'seminar':
           backgroundColor = '#2196F3';
           break;
         case 'club activity':
           backgroundColor = '#9C27B0';
           break;
         default:
           break;
       }

       return {
         style: {
           backgroundColor,
           borderRadius: '5px',
           opacity: 0.8,
           color: 'white',
           border: '0px',
           display: 'block'
         }
       };
     };

     return (
       <div className="bg-white rounded-lg shadow-lg p-6">
         <h1 className="text-3xl font-bold text-gray-900 mb-6">Event Calendar</h1>
         <Calendar
           localizer={localizer}
           events={events}
           startAccessor="start"
           endAccessor="end"
           style={{ height: 600 }}
           selectable
           onSelectSlot={handleSelectSlot}
           eventPropGetter={eventStyleGetter}
           views={['month']}
           defaultView="month"
           popup
         />
       </div>
     );
   }

   export default CalendarView;