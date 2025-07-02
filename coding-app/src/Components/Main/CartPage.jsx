import React from 'react';
import { useLocation } from 'react-router-dom';
import CourseNavbar from './CourseNavbar';

const CartPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-100">
      <CourseNavbar cartCount={cartItems.length} />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-3 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between">
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">₹{item.price}</p>
                  </div>
                  <span className="text-green-600 font-semibold">Enrolled</span>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded shadow h-fit">
              <h3 className="text-lg font-bold mb-2">Summary</h3>
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (18%): ₹{tax.toFixed(2)}</p>
              <hr className="my-2" />
              <p className="font-bold">Total: ₹{total.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
