import React from 'react';

const Sidebar = ({ filters, toggleFilter }) => {
  const fields = ["Web Development", "Python", "AI/ML", "JavaScript"];
  const prices = ["0-500", "501-1000", "1001-2000"];
  const durations = ["0-10", "11-20", "21+"];

  const renderCheckboxes = (title, values, category) => (
    <div className="mb-4 ">
      <h4 className="font-semibold mb-2">{title}</h4>
      {values.map((val, idx) => (
        <div key={idx} >
          <input
            type="checkbox"
            id={`${category}-${val}`}
            checked={filters[category]?.includes(val) || false}
            onChange={() => toggleFilter(category, val)}
          />
          <label htmlFor={`${category}-${val}`} className="text-sm">{val}</label>
        </div>
      ))}
    </div>
  );

  return (
    <aside className="bg-white p-4 h-screen w-64 z-50">
      <h3 className="text-lg font-bold mb-4">Filter Courses</h3>
      {renderCheckboxes("Field", fields, "field")}
      {renderCheckboxes("Price", prices, "price")}
      {renderCheckboxes("Duration (hrs)", durations, "duration")}
    </aside>
  );
};

export default Sidebar;