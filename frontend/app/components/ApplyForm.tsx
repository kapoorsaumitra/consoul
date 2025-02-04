"use client"

import type React from "react"
import { useState } from "react"
import { z } from "zod"

const countries = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  // Add more countries as needed
]

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  cv: z.any().optional(),
  countryCode: z.string(),
})

type FormData = z.infer<typeof formSchema>

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    cv: undefined,
    countryCode: "IN"
  })
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  const handleCountrySelect = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }))
    setIsCountryDropdownOpen(false)
  }

  const selectedCountry = countries.find(country => country.code === formData.countryCode)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Cannot find a role that fits you?</h1>
        <p className="text-gray-600 text-base">
          Send us your application, and we&apos;ll reach out if there&apos;s a role that&apos;s the right fit for you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Full name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone number *
          </label>
          <div className="flex gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="h-full px-3 py-2.5 border border-gray-200 rounded-md bg-white flex items-center gap-2 min-w-[120px]"
              >
                <span className="text-xl">{selectedCountry?.flag}</span>
                <span className="text-sm text-gray-600">{selectedCountry?.dialCode}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCountryDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {countries.map(country => (
                    <button
                      key={country.code}
                      type="button"
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => handleCountrySelect(country.code)}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm text-gray-600">{country.name}</span>
                      <span className="text-sm text-gray-400">{country.dialCode}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300"
              placeholder="Enter your phone number"
            />

            <label
              htmlFor="cv"
              className="inline-flex items-center px-4 py-2 bg-[#EBE2FF] text-[#4F4F4F] rounded-lg  cursor-pointer gap-2"
            >
              <svg className="w-5 h-5 text-[#6438C3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              Attach CV / Portfolio
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-32 px-4 py-2.5 font-bold bg-gray-200 text-gray-600 rounded-md hover:bg-[#6438C3] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}