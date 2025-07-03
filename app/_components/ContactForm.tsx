import React, { useState, useEffect } from 'react';

interface ContactFormProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name: string;
  phone: string;
  email: string;
  agreeToContact: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose,
  title = "Message Sent!",
  message = "Thank you for reaching out. Dr. Serena Blake will be in touch with you soon, usually within one business day."
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 font-suranna">{title}</h3>
          <p className="text-gray-600 font-raleway">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false, isOpen = true, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    phone: '',
    email: '',
    agreeToContact: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!isModal || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModal, isOpen, onClose]);

  const validateForm = (): FormErrors => {
    return {
      name: formData.name.trim() ? '' : 'Name is required',
      phone: formData.phone.trim() ? '' : 'Phone number is required',
      email: formData.email.trim() ? '' : 'Email is required',
      agreeToContact: formData.agreeToContact ? '' : 'You must agree to be contacted to proceed'
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: fieldValue }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    console.log('Form submitted:', formData);
    
    // Reset form and show success
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredTime: '',
      agreeToContact: false
    });
    setErrors({ name: '', phone: '', email: '', agreeToContact: '' });
    setShowSuccessModal(true);

    // Don't close the modal immediately - let success modal handle it
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    // Close the contact form modal after success modal closes
    if (isModal && onClose) onClose();
  };

  const renderFormFields = () => (
    <>
      <div>
        <label htmlFor="name" className="block text-gray-800 font-bold mb-2 font-suranna">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-2 rounded-lg bg-white focus:outline-none transition-colors duration-200 ${
            errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-teal-600'
          }`}
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-800 font-bold mb-2 font-suranna">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-2 rounded-lg bg-white focus:outline-none transition-colors duration-200 ${
            errors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-teal-600'
          }`}
          placeholder="(555) 234-5678"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-800 font-bold mb-2 font-suranna">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-2 rounded-lg bg-white focus:outline-none transition-colors duration-200 ${
            errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-teal-600'
          }`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 font-raleway">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-800 font-bold mb-2 font-suranna">
          What brings you here?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-teal-600 transition-colors duration-200"
          placeholder="How can I help you?"
        />
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-gray-800 font-bold mb-2 font-suranna">
          Preferred time to reach you
        </label>
        <input
          type="text"
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-teal-600 transition-colors duration-200"
          placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
        />
        <p className="text-sm text-gray-600 mt-1 font-raleway">
          Let us know when you&apos;re typically available for a call or consultation
        </p>
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToContact"
          name="agreeToContact"
          checked={formData.agreeToContact}
          onChange={handleChange}
          className={`mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 rounded ${
            errors.agreeToContact ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="flex-1">
          <label htmlFor="agreeToContact" className="text-sm text-gray-700 leading-relaxed font-raleway">
            I agree to be contacted via phone, email, or text message regarding my inquiry. 
            I understand this form is secure and my information will be kept confidential.
          </label>
          {errors.agreeToContact && (
            <p className="text-red-500 text-sm mt-1 font-raleway">{errors.agreeToContact}</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition-colors duration-200 text-lg"
        >
          Submit
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600 flex items-center justify-center">
          <span className="w-4 h-4 border border-gray-400 rounded-full mr-2 flex items-center justify-center">
            <span className="text-gray-400 text-xs">i</span>
          </span>
          By clicking submit you consent to receive texts and emails from Dr. Serena Blake
        </p>
      </div>
    </>
  );

  if (isModal && !isOpen) return null;

  const containerClass = isModal 
    ? "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    : "max-w-4xl mx-auto px-4 py-16 bg-honeydew";

  const formClass = isModal
    ? "bg-gray-50 rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-gray-800 relative"
    : "bg-stone-100 rounded-2xl shadow-lg max-w-2xl mx-auto";

  return (
    <>
      <div 
        className={containerClass}
        onClick={isModal ? (e) => e.target === e.currentTarget && onClose && onClose() : undefined}
      >
        <div className={formClass}>
          <div className="flex justify-between items-center p-8 pb-4">
            <div className="text-center flex-1">
              <h2 className="text-3xl font-bold text-slate-600 mb-4 font-suranna">Get In Touch</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-raleway font-semibold">
                Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon, 
                usually within one business day. This form is safe, private, and completely free.
              </p>
            </div>
            {isModal && (
              <button
                onClick={onClose}
                className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-3xl font-light leading-none transition-colors duration-200"
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>

          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderFormFields()}
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
      />
    </>
  );
};

export default ContactForm;