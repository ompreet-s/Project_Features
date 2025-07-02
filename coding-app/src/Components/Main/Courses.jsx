import React, { useState } from 'react';
import CourseNavbar from './CourseNavbar';
import CourseCard from './CourseCard';
import Sidebar from './Sidebar';
import { coursesData } from './data';
import { useNavigate } from 'react-router-dom';

const Course = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({ field: [], price: [], duration: [] });
  const navigate = useNavigate();

  const handleEnroll = (course) => {
    if (!cartItems.find((item) => item.id === course.id)) {
      setCartItems([...cartItems, course]);
    }
  };

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const applyFilters = (course) => {
    const { field, price, duration } = filters;

    const fieldMatch = field.length === 0 || field.includes(course.field);
    const priceMatch = price.length === 0 || price.some((range) => {
      const [min, max] = range.split('-').map(Number);
      return course.price >= min && course.price <= max;
    });
    const durationMatch = duration.length === 0 || duration.some((d) => {
      const [min, max] = d.includes('+') ? [21, Infinity] : d.split('-').map(Number);
      return course.duration >= min && course.duration <= max;
    });

    return fieldMatch && priceMatch && durationMatch;
  };

  const filteredCourses = coursesData.filter(applyFilters);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <CourseNavbar
        cartCount={cartItems.length}
        toggleSidebar={() => setShowSidebar(!showSidebar)}
        onCartClick={() => navigate("/cart", { state: { cartItems } })}
      />

      <div className="flex">
        {showSidebar && (
          <Sidebar filters={filters} toggleFilter={toggleFilter} />
        )}
        <div className="grid grid-cols-3 gap-20 p-6 m-auto ">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
