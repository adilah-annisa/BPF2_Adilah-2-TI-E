import React from "react";

export default function VisitorLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 [scroll-behavior:smooth]">
      {children}
    </div>
  );
}

