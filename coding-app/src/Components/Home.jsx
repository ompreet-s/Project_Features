import React, { useState } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import UsersSection from "./UsersSection";
import Testimonials from "./Testimonials";
import Collaborate from "./Collaborate";
import Feedback from "./Feedback";
import StudentLoginModal from './StudentLogin';
import Recruiter from './Recruiter';
import Product from './Product';
import Team from './Team';
import Features from './Features';

const Home = () => {
  const [showStudentModal, setShowStudentModal] = useState(false);

  return (
    <div>
      <Navbar onStudentLoginClick={() => setShowStudentModal(true)} />

      <Hero onStudentClick={() => setShowStudentModal(true)} />

      <UsersSection />

      <div id="recruiter">
        <Recruiter />
      </div>

      <div id="product">
        <Product />
      </div>

      <div id="feature">
        <Features />
      </div>

      <Testimonials />

      <div id="collaborate">
        <Collaborate />
      </div>

      <Feedback />

      <div id="team">
        <Team />
      </div>

      {showStudentModal && (
        <StudentLoginModal onClose={() => setShowStudentModal(false)} />
      )}
    </div>
  );
};

export default Home;
