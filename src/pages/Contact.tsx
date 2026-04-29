import React from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Bot } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function Contact() {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        <Navigation currentPage="contact" />
        <ContactForm />
      </div>
    </>
  );
}