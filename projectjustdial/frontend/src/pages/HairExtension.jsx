import React from "react";

const hairExtensionsData = [
  {
    id: 1,
    name: "Silky Straight",
    img: "https://images.unsplash.com/photo-1614288908785-1a1f92d92c1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Curly Glam",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Wavy Elegance",
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Volume Magic",
    img: "https://images.unsplash.com/photo-1622018308120-6e2f985b0913?auto=format&fit=crop&w=400&q=80",
  },
];

function HairExtensionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-10">
      <h1 className="text-center text-4xl font-bold text-purple-600 mb-8">
        Hair Extensions Gallery
      </h1>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {hairExtensionsData.map((item) => (
          <div
            key={item.id}
            className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-purple-600 bg-opacity-70 text-white text-center py-1 font-semibold text-sm">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HairExtensionsPage;
