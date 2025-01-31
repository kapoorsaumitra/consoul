import React, { useState, useEffect } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        website: '',
        designation: '',
        phone: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const checkboxItems = [
        { id: 'segmentation', label: 'Customer segmentation' },
        { id: 'roi', label: 'Return on Investment' },
        { id: 'analysis', label: 'Data analysis' },
        { id: 'martech', label: 'MarTech stack' },
        { id: 'other', label: 'Other?' }
    ];

    useEffect(() => {
        // Check if all required fields are filled
        const isValid = Object.values(formData).every(value => value.trim() !== '');
        setIsFormValid(isValid);
    }, [formData]);

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="grid grid-cols-2 w-full shadow-xl border rounded-xl">
            <div className="bg-[#6438C3] p-12 rounded-l-xl text-white">
                <div className="grid gap-6">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold leading-tight">
                            Need help with your customer <br />life-cycle management?
                        </h1>
                        <p className="text-xl opacity-90">
                            Drop in your details and our Strategy expert <br />will call you.
                        </p>
                    </div>
                    
                    <div className="mt-28">
                        <div className="grid grid-cols-2 gap-6 items-center">
                            <div className="w-64 h-w-64 rounded-lg overflow-hidden">
                                <img 
                                    src="/logos/founder.svg" 
                                    alt="Founder" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">Meet the founder</h2>
                                    <p className="text-lg opacity-90 leading-relaxed font-semibold">
                                        Hi, I am Vani, and I am so glad to see you here. I am personally involved in all projects and would love to connect with you.
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-2xl">Vani Garg</h3>
                                    <p className="text-lg opacity-90 font-semibold">Founder & CEO</p>
                                    <p className="text-lg">
                                        Connect with Vani on <span className="underline cursor-pointer">LinkedIn</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-12 rounded-r-xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm mb-1">Full name*</label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-[#DAC8FF] rounded-md"
                                required
                                
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email*</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-[#DAC8FF] rounded-md"
                                required
                                
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Company website*</label>
                            <input 
                                type="url" 
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-[#DAC8FF] rounded-md"
                                required
                                
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Designation*</label>
                            <input 
                                type="text" 
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-[#DAC8FF] rounded-md"
                                required
                                
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Phone number*</label>
                            <div className="flex gap-2">
                                <select className="w-24 p-2 border rounded-md">
                                    <option value="+91">🇮🇳 +91</option>
                                </select>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="flex-1 p-2 border border-[#DAC8FF] rounded-md"
                                    required
                                    
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-3">What do you need help with?</label>
                        <div className="grid grid-cols-2 gap-4">
                            {checkboxItems.map((item) => (
                                <label key={item.id} className="flex items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-[#6438C3] border-[#DAC8FF] rounded-md"    
                                    />
                                    <span className="text-sm">{item.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={!isFormValid}
                        className={`px-8 py-2 rounded-md transition-colors ${
                            isFormValid 
                            ? 'bg-[#6438C3] text-white hover:bg-opacity-90 cursor-pointer' 
                            : 'bg-[#DAC8FF] text-white cursor-not-allowed'
                        }`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};