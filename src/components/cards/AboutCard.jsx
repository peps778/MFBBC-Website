// components/AboutCard.jsx
import React from 'react';

export default function AboutCard({ title, text }) {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md max-w-md">
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-sm leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}
