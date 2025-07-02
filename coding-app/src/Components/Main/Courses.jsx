import React, { useState } from 'react';
import CourseNavbar from './CourseNavbar';
import CourseCard from './CourseCard';
import Cart from './Cart';

const sampleCourses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "A basic course to start with React.js",
    image: "https://source.unsplash.com/400x250/?code,react",
    price: 799,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master the quirks and power of JS.",
    image: "https://source.unsplash.com/400x250/?javascript",
    price: 999,
  },
  {
    id: 3,
    title: "Data Structures in Python",
    description: "Crack interviews with DS knowledge.",
    image: "https://source.unsplash.com/400x250/?python,code",
    price: 899,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master the quirks and power of JS.",
    image: "https://source.unsplash.com/400x250/?javascript",
    price: 999,
  },
  {
    id: 3,
    title: "Data Structures in Python",
    description: "Crack interviews with DS knowledge.",
    image: "https://source.unsplash.com/400x250/?python,code",
    price: 899,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master the quirks and power of JS.",
    image: "https://source.unsplash.com/400x250/?javascript",
    price: 999,
  },
  {
    id: 3,
    title: "Data Structures in Python",
    description: "Crack interviews with DS knowledge.",
    image: "https://source.unsplash.com/400x250/?python,code",
    price: 899,
  }
];

const Course = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");

  const handleEnroll = (course) => {
    const exists = cartItems.find(item => item.id === course.id);
    if (!exists) {
      setCartItems([...cartItems, { ...course, qty: 1 }]);
      setMessage("✔️ Added to cart");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="relative min-h-screen pb-60 bg-[#f4f6fb]"> {/* padding bottom for cart */}
      <CourseNavbar cartCount={cartItems.length} toggleCart={toggleCart} />

      {message && (
        <div className="text-green-700 text-center mt-4 font-semibold">{message}</div>
      )}

      <div className="p-6 flex flex-wrap justify-center gap-6">
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>

     
      {showCart && (
        <div className=" w-full ">
          <Cart cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Course;
