'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ClientOnly from '../components/ClientOnly';

// License types for dropdown
const licenseTypes = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "Oracle Database",
  "SAP Enterprise",
  "Autodesk AutoCAD",
  "VMware vSphere",
  "Salesforce CRM",
  "Other"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">            {/* Contact Info */}
            <ClientOnly>
              <motion.div 
                className="bg-primary text-white p-8 lg:p-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8 text-white/90">
                  Ready to unlock the value of your unused software licenses? Fill out the form and one of our license specialists will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-white/90">123 Tech Park Avenue, Suite 500<br />San Francisco, CA 94105</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-white/90">info@softsell.com<br />+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <p className="text-white/90">Monday - Friday: 9am - 5pm PST<br />Weekend: Closed</p>
                  </div>
                </div>
              </motion.div>
            </ClientOnly>            {/* Contact Form */}
            <ClientOnly>
              <motion.div 
                className="p-8 lg:p-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                {isSubmitted ? (
                <ClientOnly>
                  <motion.div 
                    className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Your message has been received. One of our license specialists will contact you within 24 hours.
                    </p>
                  </motion.div>
                </ClientOnly>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-primary focus:border-primary dark:bg-gray-700`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-primary focus:border-primary dark:bg-gray-700`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-primary focus:border-primary dark:bg-gray-700`}
                      placeholder="Your Company Inc."
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:ring-primary focus:border-primary dark:bg-gray-700`}
                    >
                      <option value="">Select License Type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700"
                      placeholder="Tell us about your license needs..."
                    ></textarea>
                  </div>
                    <ClientOnly>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </ClientOnly>                </form>
              )}
            </motion.div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  );
}
