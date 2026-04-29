import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaRedo } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        
        {/* Maskot Section */}
        <div className="relative mb-8 flex justify-center">
          {/* Bayangan di bawah maskot */}
          <div className="absolute bottom-0 w-32 h-4 bg-slate-200 rounded-[100%] blur-md animate-pulse"></div>
          
          {/* Maskot Sedap: "Si Mangkuk Bingung" */}
          <div className="relative animate-bounce duration-1000">
            <div className="text-8xl">🍜</div>
            {/* Mata yang berputar/bingung */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
              <span className="w-3 h-3 bg-slate-800 rounded-full animate-ping"></span>
              <span className="w-3 h-3 bg-slate-800 rounded-full animate-ping"></span>
            </div>
          </div>
          
          {/* Icon Melayang */}
          <div className="absolute top-0 right-1/4 animate-spin-slow">
            <FaUtensils className="text-emerald-500 opacity-20 w-12 h-12" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-9xl font-black text-emerald-600/10 absolute left-0 right-0 top-1/3 -z-10 select-none">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Waduh, Menunya Gak Ada!
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Sepertinya halaman yang kamu cari sudah "sold out" atau koki kami salah naruh piringnya. Yuk, balik ke dapur utama!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg active:scale-95"
          >
            <FaHome size={20} />
            Balik ke Dashboard
          </button>
          
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold py-3 px-6 rounded-xl transition-all active:scale-95"
          >
            <FaRedo size={20} />
            Coba Lagi
          </button>
        </div>

        {/* Footer Kecil */}
        <p className="mt-12 text-sm text-slate-400">
          Tim Sedap © 2026 • Keburu laper nungguin ini?
        </p>
      </div>
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 rotate-12 text-4xl">🍕</div>
        <div className="absolute bottom-20 right-20 -rotate-12 text-4xl">🍔</div>
        <div className="absolute top-1/3 right-10 rotate-45 text-4xl">🍦</div>
      </div>
    </div>
  );
}