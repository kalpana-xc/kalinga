'use client'

import React, { useState } from 'react'
import { submitForm } from '../../config/api'

export default function CTCDApplicationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organisation: '',
        area_of_interest: '',
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/ctcd-applications/', formData)
            setStatus({ type: 'success', message: 'Application submitted successfully!' })
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                organisation: '',
                area_of_interest: '',
            })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md shadow-xl">
            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* Organisation */}
                <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                        Organisation
                    </label>
                    <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                        placeholder="Enter your organisation"
                        required
                    />
                </div>

                {/* Area of Interest */}
                <div>
                    <label htmlFor="area_of_interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest
                    </label>
                    <textarea
                        id="area_of_interest"
                        name="area_of_interest"
                        value={formData.area_of_interest}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent resize-none"
                        placeholder="Describe your area of interest"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--button-red)] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                {/* Status Message */}
                {status.message && (
                    <p className={`text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </form>
    )
}

