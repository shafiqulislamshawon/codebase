import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import EventList from "./components/EventList";
import CreateEvents from "./components/CreateEvents";
import UpdateEvents from "./components/UpdateEvents";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <Router>
       <Routes>
         <Route exact path="/" element={<EventList />} />
           <Route path="/event/create" element={<CreateEvents />} />
        <Route path="/event/update/:pk" element={<UpdateEvents />} />
        <Route element={<ErrorPage/>} />
       </Routes>
    </Router>
  );
}
export default App;