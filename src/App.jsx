   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Header from './components/Header';
   import Home from './pages/Home';
   import Login from './pages/Login';
   import Register from './pages/Register';
   import Events from './pages/Events';
   import AdminEvents from './pages/AdminEvents';
   import AdminRegistrations from './pages/AdminRegistrations';
   import Profile from './pages/Profile';
   import CalendarView from './pages/CalendarView';
   import EventDetails from './pages/EventDetails'; 
   import { useAuth } from './context/AuthContext';
   import ProtectedRoute from './components/ProtectedRoute';
   import AdminRoute from './components/AdminRoute';

   function App() {
     const { loading } = useAuth();

     if (loading) {
       return <div>Loading...</div>;
     }

     return (
       <Router>
         <div className="min-h-screen bg-gray-50">
           <Header />
           <main className="container mx-auto px-4 py-8">
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/events" element={<Events />} />
               <Route path="/calendar" element={<CalendarView />} />
               <Route path="/event-details" element={<EventDetails />} /> {/* Add this route */}
               <Route
                 path="/admin/events"
                 element={
                   <AdminRoute>
                     <AdminEvents />
                   </AdminRoute>
                 }
               />
               <Route
                 path="/admin/registrations"
                 element={
                   <AdminRoute>
                     <AdminRegistrations />
                   </AdminRoute>
                 }
               />
               <Route
                 path="/profile"
                 element={
                   <ProtectedRoute>
                     <Profile />
                   </ProtectedRoute>
                 }
               />
             </Routes>
           </main>
         </div>
       </Router>
     );
   }

   export default App;