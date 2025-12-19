import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/snabbtech_logo.png"; // 👈 import logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo (IMAGE ONLY) */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SnabbTech Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/industry">Industry</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/partnership">Partnership</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/health">SnabbHealth</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-4 gap-4 font-medium">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/industry" onClick={() => setOpen(false)}>Industry</NavLink>
            <NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink to="/partnership" onClick={() => setOpen(false)}>Partnership</NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/health" onClick={() => setOpen(false)}>SnabbHealth</NavLink>

            <button className="bg-green-600 text-white py-2 rounded">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="hover:text-green-600 transition"
    >
      {children}
    </Link>
  );
}
