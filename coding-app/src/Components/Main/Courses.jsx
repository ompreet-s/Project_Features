import React, { useState, useEffect } from 'react';
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

  
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);


  const addToCart = (course) => {
    let alreadyAdded = false;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === course.id) {
        alreadyAdded = true;
        break;
      }
    }

    if (!alreadyAdded) {
      const newCart = cartItems.concat(course);
      setCartItems(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };

 
  const handleFilter = (category, value) => {
    let updated = [];

    for (let i = 0; i < filters[category].length; i++) {
      if (filters[category][i] !== value) {
        updated.push(filters[category][i]);
      }
    }

    if (updated.length === filters[category].length) {
      updated.push(value);
    }

    const newFilters = {
      field: filters.field,
      price: filters.price,
      duration: filters.duration
    };

    newFilters[category] = updated;
    setFilters(newFilters);
  };


  const isCourseVisible = (course) => {
    const fieldMatch = filters.field.length === 0 || filters.field.includes(course.field);

    let priceMatch = false;
    if (filters.price.length === 0) priceMatch = true;
    for (let i = 0; i < filters.price.length; i++) {
      const range = filters.price[i].split("-");
      const min = parseInt(range[0]);
      const max = parseInt(range[1]);
      if (course.price >= min && course.price <= max) {
        priceMatch = true;
        break;
      }
    }

    let durationMatch = false;
    if (filters.duration.length === 0) durationMatch = true;
    for (let i = 0; i < filters.duration.length; i++) {
      let min, max;
      if (filters.duration[i].includes("+")) {
        min = 21;
        max = 1000;
      } else {
        const range = filters.duration[i].split("-");
        min = parseInt(range[0]);
        max = parseInt(range[1]);
      }
      if (course.duration >= min && course.duration <= max) {
        durationMatch = true;
        break;
      }
    }

    return fieldMatch && priceMatch && durationMatch;
  };

  const visibleCourses = coursesData.filter(isCourseVisible);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <CourseNavbar
        cartCount={cartItems.length}
        toggleSidebar={() => setShowSidebar(!showSidebar)}
        onCartClick={() => navigate("/cart")}
      />

      <div className="flex">
        {showSidebar && (
          <Sidebar filters={filters} toggleFilter={handleFilter} />
        )}

        <div className="grid grid-cols-3 gap-10 p-6 m-auto">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} onEnroll={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
