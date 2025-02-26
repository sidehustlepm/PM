import React from "react";

const blogs = [
  { id: 1, title: "Introduction to Product Management", date: "2023-10-01" },
  { id: 2, title: "How to Build a Roadmap", date: "2023-10-05" },
];

function Blogs() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-600">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;