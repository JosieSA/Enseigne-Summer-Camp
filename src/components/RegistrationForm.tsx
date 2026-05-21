import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ClipboardCheck, Sparkles, AlertCircle, Phone, Mail, User, Calendar, Send, Compass, HelpCircle } from "lucide-react";
import { interestOptions } from "../data";
import { RegistrationFormData } from "../types";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    parentName: "",
    studentName: "",
    studentAge: "",
    phoneNumber: "",
    email: "",
    preferredFormat: "Virtual",
    interests: []
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData | "general", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [registeredList, setRegisteredList] = useState<RegistrationFormData[]>([]);

  // Load previous registered student from localStorage on mount (optional reference)
  useEffect(() => {
    const saved = localStorage.getItem("enseigne_bootcamp_registrations");
    if (saved) {
      try {
        setRegisteredList(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse previous registrations");
      }
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name as keyof RegistrationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleInterestCheckbox = (interest: string) => {
    setFormData((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  // Safe and friendly Ghanaian phone input format validator
  const validatePhone = (num: string) => {
    const clean = num.replace(/\D/g, "");
    if (clean.length < 9 || clean.length > 15) {
      return false;
    }
    return true;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's full name is required for registration.";
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student's full name is necessary to issue attendance records.";
    }
    
    const ageNum = parseInt(formData.studentAge, 10);
    if (!formData.studentAge) {
      newErrors.studentAge = "Student age is required.";
    } else if (isNaN(ageNum) || ageNum < 7 || ageNum > 17) {
      newErrors.studentAge = "Recommended age is between 7 and 17 years (for kids & teenagers).";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "A working WhatsApp / mobile number is required.";
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please supply a valid telephone number (e.g., 05XX XXX XXX or +233 XXX XXX).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please supply an email for session invite details.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database post and offline retention delay
    setTimeout(() => {
      const updatedList = [...registeredList, formData];
      setRegisteredList(updatedList);
      localStorage.setItem("enseigne_bootcamp_registrations", JSON.stringify(updatedList));
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleRegisterAnother = () => {
    setFormData({
      parentName: formData.parentName, // Retain parent name as convenience
      studentName: "",
      studentAge: "",
      phoneNumber: formData.phoneNumber, // Retain contact
      email: formData.email, // Retain email
      preferredFormat: "Virtual",
      interests: []
    });
    setSubmitSuccess(false);
  };

  // WhatsApp share generator
  const getWhatsAppMessageUrl = () => {
    const baseText = `Hello Enseigne! I have completed the online registration form on the summer bootcamp page.

Here is my detail:
👨‍👦 Registrant/Parent: ${formData.parentName}
🎓 Student: ${formData.studentName} (${formData.studentAge} yrs)
📞 Phone: ${formData.phoneNumber}
💻 Format: ${formData.preferredFormat}
🌟 Shared Interests: ${formData.interests.length > 0 ? formData.interests.join(", ") : "Digital literacy, discipline"}

Please confirm availability for our selected slot!`;
    return `https://wa.me/233531366589?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-white relative scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-50 px-3.5 py-1.5 rounded-full inline-block">
            Secure a Seat
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-950">
            Submit Your Registration
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            Please fill out the form below. Once submitted, our admissions desk 
            will reach out to finalize billing details, timing arrays, and answer questions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50/60 border border-gray-100/90 rounded-[32px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Quick Info Sidebar / Trust Reinforcement (Left Column) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple to-purple-800 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative">
              <div className="space-y-3">
                <span className="text-[10px] text-purple-200 uppercase tracking-widest font-mono font-bold">
                  Admission Note
                </span>
                <h3 className="text-2xl font-display font-black">
                  Next Step Timeline
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Submit Application</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Complete your secure student info in less than 2 minutes using this form.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Admissions Verification</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Our team calls you within 24 hours to match the best cohort speed and discuss final fee structures.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Discipline Hub Pack</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Parents receive interactive routine sheets, pre-set laptop specs, and access tokens for students.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-purple-400/20 relative space-y-4 font-sans text-xs">
              <div className="flex items-center space-x-2 text-purple-100">
                <Check className="h-4 w-4 text-emerald-300" />
                <span>Zero obligation inquiry</span>
              </div>
              <p className="text-purple-200 leading-relaxed font-sans">
                💡 <strong>Ghanaian networks context:</strong> We support payments through Mobile Money (MTN MoMo, Telecel Cash, AT Money) and Bank deposit.
              </p>
            </div>
          </div>

          {/* Form / Interactive Columns (Right Column) */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 bg-white relative">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                // REGISTRATION FORM
                <motion.form
                  key="form-fields"
                  id="enrollment-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-gray-500" />
                        <span>Parent or Guardian Name *</span>
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ama Boateng"
                        className={`w-full text-sm px-4 py-3 rounded-xl border font-sans outline-none focus:ring-2 transition-all ${
                          errors.parentName
                            ? "border-red-500 bg-red-50/10 focus:ring-red-200"
                            : "border-gray-200 focus:border-brand-purple focus:ring-purple-100"
                        }`}
                      />
                      {errors.parentName && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.parentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-gray-500" />
                        <span>Student's Full Name *</span>
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Joel Boateng"
                        className={`w-full text-sm px-4 py-3 rounded-xl border font-sans outline-none focus:ring-2 transition-all ${
                          errors.studentName
                            ? "border-red-500 bg-red-50/10 focus:ring-red-200"
                            : "border-gray-200 focus:border-brand-purple focus:ring-purple-100"
                        }`}
                      />
                      {errors.studentName && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Age Group */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-gray-500" />
                        <span>Student Age (7–17 years) *</span>
                      </label>
                      <input
                        id="studentAge"
                        type="number"
                        name="studentAge"
                        value={formData.studentAge}
                        onChange={handleInputChange}
                        placeholder="e.g. 15"
                        min="7"
                        max="17"
                        className={`w-full text-sm px-4 py-3 rounded-xl border font-sans outline-none focus:ring-2 transition-all ${
                          errors.studentAge
                            ? "border-red-500 bg-red-50/10 focus:ring-red-200"
                            : "border-gray-200 focus:border-brand-purple focus:ring-purple-100"
                        }`}
                      />
                      {errors.studentAge && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.studentAge}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Format */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <Compass className="h-3.5 w-3.5 text-gray-500" />
                        <span>Preferred Learning Format *</span>
                      </label>
                      <select
                        id="preferredFormat"
                        name="preferredFormat"
                        value={formData.preferredFormat}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-3 bg-white rounded-xl border border-gray-200 font-sans outline-none focus:border-brand-purple focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                      >
                        <option value="Virtual">Virtual Online Cohort</option>
                        <option value="In-Person">In-Person Labs (Accra)</option>
                        <option value="Either">Either / Flexible Blended</option>
                      </select>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5 text-gray-500" />
                        <span>WhatsApp / Phone Number *</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. 0541234567"
                        className={`w-full text-sm px-4 py-3 rounded-xl border font-sans outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? "border-red-500 bg-red-50/10 focus:ring-red-200"
                            : "border-gray-200 focus:border-brand-purple focus:ring-purple-100"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 font-display flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-gray-500" />
                        <span>Parent's Email Address *</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. parent@email.com"
                        className={`w-full text-sm px-4 py-3 rounded-xl border font-sans outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 bg-red-50/10 focus:ring-red-200"
                            : "border-gray-200 focus:border-brand-purple focus:ring-purple-100"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Interests Checklist */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-gray-800 font-display block">
                      Target Learning Expectations & Interests (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="interests-checkbox-container">
                      {interestOptions.map((option) => {
                        const isChecked = formData.interests.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleInterestCheckbox(option)}
                            className={`flex items-start text-left gap-3 p-3 rounded-xl border font-sans text-xs transition-all ${
                              isChecked
                                ? "bg-purple-50/60 border-brand-purple text-brand-purple"
                                : "bg-white border-gray-100 text-gray-600 hover:border-purple-200"
                            }`}
                          >
                            <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isChecked ? "bg-brand-purple border-brand-purple text-white" : "border-gray-300 bg-white"
                            }`}>
                              {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                            </div>
                            <span className="font-semibold">{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 bg-brand-purple hover:bg-brand-purple-light disabled:bg-purple-400 text-white font-semibold text-sm sm:text-base py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Validating Student Credentials...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Secure My Slot (June 2026 Intake)</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-3 font-mono">
                      🔒 Secure enrollment. We respects your information and never share data.
                    </p>
                  </div>
                </motion.form>
              ) : (
                // SUCCESS STATE
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center space-y-6 py-4"
                  id="form-success-outcome"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-gray-900">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto font-sans">
                      Thank you, <strong className="text-brand-purple">{formData.parentName}</strong>. {formData.studentName}'s cohort reservation spot for the Enseigne Bootcamp has been created locally.
                    </p>
                  </div>

                  {/* Registered Summary Details */}
                  <div className="max-w-md mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-3 font-sans text-xs">
                    <h4 className="font-display font-extrabold text-[#800080] uppercase tracking-wider">Registered Record:</h4>
                    <div className="grid grid-cols-2 gap-y-2 border-t border-gray-100 pt-3">
                      <span className="text-gray-500">Student Name:</span>
                      <strong className="text-gray-800 text-right">{formData.studentName}</strong>
                      
                      <span className="text-gray-500">Student Age:</span>
                      <strong className="text-gray-800 text-right">{formData.studentAge} Years</strong>

                      <span className="text-gray-500">Format Option:</span>
                      <strong className="text-gray-800 text-right">{formData.preferredFormat}</strong>

                      <span className="text-gray-500">Parent Phone:</span>
                      <strong className="text-gray-800 text-right">{formData.phoneNumber}</strong>
                    </div>

                    {formData.interests.length > 0 && (
                      <div className="pt-2">
                        <span className="text-gray-500 block">Focus Subjects:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.interests.map((int) => (
                            <span key={int} className="bg-purple-100 text-brand-purple px-2 py-0.5 rounded text-[10px] font-semibold">
                              {int}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Form Action Blocks */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                    <a
                      id="success-whatsapp-btn"
                      href={getWhatsAppMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-300"
                    >
                      <Phone className="h-4 w-4 fill-white text-emerald-600" />
                      <span>Speed Up & WhatsApp Confirm</span>
                    </a>
                    
                    <button
                      id="register-another-student-btn"
                      onClick={handleRegisterAnother}
                      className="flex items-center justify-center space-x-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
                    >
                      <span>Register Another Student</span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2">
                    📋 Our desk will call you or drop an electronic message on <strong className="text-gray-600">{formData.phoneNumber}</strong> shorty to outline payment systems.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
