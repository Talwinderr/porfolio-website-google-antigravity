import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { MobileDropdown } from './MobileDropdown';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceType: string;
  problemDescription: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  companyName: '',
  serviceType: 'AI Chat Agent',
  problemDescription: '',
  additionalInfo: '',
};

const serviceOptions = [
  { value: 'AI Chat Agent', label: 'AI Chat & Voice Agents' },
  { value: 'Lead Generation', label: 'Lead Generation & Qualification' },
  { value: 'CRM Integration', label: 'CRM Integration & Automation' },
  { value: 'Content Automation', label: 'Content Creation' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.companyName || !formData.serviceType) {
      setErrorMessage('Please fill in all required fields');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            company_name: formData.companyName,
            service_type: formData.serviceType,
            problem_description: formData.problemDescription,
            additional_info: formData.additionalInfo || null,
          },
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        setErrorMessage(`Error submitting form: ${error.message}`);
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 pt-24">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I've received your information and I'm already working on a tailored solution for your business.
            I'll reach out within 24 hours to schedule a call and discuss my proposed approach.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="w-full px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Let's Transform Your Business
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tell me about your business and the challenges you're facing. I'll analyze your needs
            and design a custom AI solution. I'll reach out within 24 hours to schedule a call and present
            my tailored approach.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          {/* Company and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
                placeholder="Company Inc."
                required
              />
            </div>
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                Area of Interest *
              </label>
              <MobileDropdown
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleServiceTypeChange}
                options={serviceOptions}
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-300 mb-2">
              Tell us about your business challenges *
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 min-h-[120px] resize-none"
              placeholder="Describe your current business processes and what you'd like to improve or automate..."
              required
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
              Additional Context (optional)
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200 min-h-[120px] resize-none"
              placeholder="Share any other details that might help us understand your needs better..."
            />
          </div>

          {errorMessage && (
            <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-sm text-gray-400 text-center leading-relaxed">
            By submitting this form, you agree to my privacy policy. I'll only use your information
            to process your request and won't share it with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}