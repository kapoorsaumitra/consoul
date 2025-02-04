"use client"
import { FormEvent, useEffect, useState } from "react";

export const Form = () => {
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

    const handleInputChange = (e : FormEvent) => {
        const { name , value } : any  = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div>
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
    )
}