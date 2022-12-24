import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import First from './pages/first/first'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/'  element={<First />} />
    <Route path='home' element={<Home/>}/>
		<Route path='/contact' element={<Contact/>} />
	
	</Routes>
	</Router>
);
}

export default App;
