import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import Doctors from '../components/Doctors';

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Specialties />
        <Doctors />
    </div>
  );
}

export default Home;
