import React, { useEffect, useState } from 'react';
import CourseNavbar from './CourseNavbar';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaFilter, FaShoppingCart } from 'react-icons/fa';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setPaid(true);
    setShowSuccess(true);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="min-h-screen bg-gray-100 relative pb-16">
      <CourseNavbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 && !paid ? (
          <p>No items in cart.</p>
        ) : (
          <div className="grid grid-cols-4 gap-6 max-sm:grid-cols-1 max-lg:grid-cols-1">
            <div className="col-span-3 gap-4">
              {cartItems.map((item, index) => {
                const gst = item.price * 0.18;
                const total = item.price + gst;

                return (
                  <div key={item.id} className="bg-white p-4 rounded shadow mb-10">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{index + 1}. {item.title}</h3>
                        <p className="text-sm text-gray-600">Course Price: ₹{item.price}</p>
                        <p className="text-sm text-gray-600">GST (18%): ₹{gst.toFixed(2)}</p>
                        <p className="text-green-600 font-semibold">Total: ₹{total.toFixed(2)}</p>
                      </div>

                      {paid ? (
                        <span className="text-green-600 font-bold">✅ Paid</span>
                      ) : (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:underline text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-4 rounded shadow h-fit">
              <h3 className="text-lg font-bold mb-2">Summary</h3>
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (18%): ₹{tax.toFixed(2)}</p>
              <hr className="my-2" />
              <p className="font-bold text-lg">Total: ₹{total.toFixed(2)}</p>

              {!paid && (
                <button
                  onClick={handleCheckout}
                  className="mt-4 bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80 text-center relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-green-700 mb-3">✅ Payment Successful!</h3>
            <p className="text-sm text-gray-700">Thank you for enrolling. Happy learning! 🎓</p>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-[#2d3150]  border-t shadow-md p-2 flex justify-around items-center max-sm:flex z-50 sm:hidden">
        <button
          className="flex flex-col items-center text-sm text-white "
          onClick={() => navigate("/courses")}
        >
          <FaHome className="text-lg" />
          Home
        </button>
        <button
          className="relative flex flex-col items-center text-sm text-white "
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart className="text-lg" />
          Cart
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>
        <button
          className="flex flex-col items-center text-sm text-white "
          onClick={() => alert("No filter on cart page")}
        >
          <FaFilter className="text-lg" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default CartPage;
