import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validate form on each change
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const messageValid = formData.message.length >= 8;
    const subjectValid = formData.subject.trim() !== '';
    
    setErrors({
      email: emailValid || !formData.email ? '' : 'Please enter a valid email',
      message: messageValid || !formData.message ? '' : 'Message must be at least 8 characters'
    });

    setIsFormValid(emailValid && messageValid && subjectValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] p-4 overflow-y-auto"
      style={{ isolation: 'isolate', backdropFilter: 'blur(2px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ y: -20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.98 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md relative z-[1001] mx-auto my-8"
        style={{
          display: isOpen ? 'block' : 'none',
          backdropFilter: 'blur(2px)',
          overflowY: 'auto' 
        }}

      >
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Contact Me</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              aria-label="Close contact form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 sm:mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 text-sm sm:text-base border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>}
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (min. 8 characters) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-3 py-2 text-sm sm:text-base border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.message}</p>}
              <p className="mt-1 text-xs text-gray-500">
                Characters: {formData.message.length}/8
              </p>
              <p className="mt-1 text-xs text-gray-500">
                If you have any issues, feel free to send an email to <a href="mailto:john.karippery@yahoo.com" className="text-blue-500 underline">john.karippery@yahoo.com</a>.
              </p>
            </div>

            <div className="flex justify-end space-x-2 sm:space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-md transition-colors ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;