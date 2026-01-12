'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function EnquiryForm() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: ''
    })
    const [programs, setPrograms] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const fetchPrograms = async () => {
        try {
            const response = await fetch('https://kalinga.dupebox.com/api/courses/')
            const data = await response.json()
            // Extract results if paginated, else use data directly
            const results = data.results || data
            setPrograms(results.map(c => ({ value: c.id.toString(), label: c.name })))
        } catch (err) {
            console.error("Failed to fetch programs", err)
        }
    }

    React.useEffect(() => {
        fetchPrograms()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/cif-forms/', formData)
            // Redirect to thank you page with form type
            router.push('/thank-you?form=enquiry')
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="CIF / Enquiry Form"
            description="Tell us about your interests and we'll get back to you with more details about our programs."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                    <InputField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                    />
                    <InputField
                        label="Program of Interest"
                        name="program"
                        type="select"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        options={programs}
                    />
                </FormGrid>

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </GlobalArrowButton>
                </div>

                {status.message && (
                    <p className={`text-center mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </FormWrapper>
    )
}
