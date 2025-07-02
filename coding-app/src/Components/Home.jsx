import React, { useState } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import UsersSection from "./UsersSection";
import Testimonials from "./Testimonials";
import Collaborate from "./Collaborate";
import Feedback from "./Feedback";
import StudentLoginModal from './StudentLogin';

const Home = () => {
  const [showStudentModal, setShowStudentModal] = useState(false);

  return (
    <div>
      <Navbar onStudentLoginClick={() => setShowStudentModal(true)} />
      <Hero
        onStudentClick={() => setShowStudentModal(true)}
      />
      <UsersSection />
      <Testimonials />
      <Collaborate />
      <Feedback />

      {showStudentModal && (
        <StudentLoginModal onClose={() => setShowStudentModal(false)} />
      )}
    </div>
  );
};

export default Home;
