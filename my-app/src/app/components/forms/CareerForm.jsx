'use client'

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { useRouter } from 'next/navigation'
import GlobalArrowButton from "../general/global-arrow_button"
import { submitForm } from '../../config/api'

export default function CareerForm() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("personal")
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile_number: '',
        alternate_phone: '',
        date_of_birth: '',
        gender: '',
        nationality: '',
        current_city: '',
        state: '',
        country: '',
        position_applied_for: '',
        department: '',
        employment_type: '',
        preferred_campus: '',
        expected_salary: '',
        notice_period: '',
    })
    const [departments, setDepartments] = useState([])
    const [resume, setResume] = useState(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const tabRefs = useRef({})
    const tabsContainerRef = useRef(null)
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, x: 0 })

    const tabs = [
        { id: "personal", label: "Personal Information" },
        { id: "position", label: "Position Details" },
    ]

    const fetchDepartments = async () => {
        try {
            const response = await fetch('https://kalinga.dupebox.com/api/departments/')
            const data = await response.json()
            const results = data.results || data
            setDepartments(results.map(d => ({ value: d.id.toString(), label: d.name })))
        } catch (err) {
            console.error("Failed to fetch departments", err)
        }
    }

    useEffect(() => {
        fetchDepartments()
    }, [])

    const updateUnderline = () => {
        const container = tabsContainerRef.current
        const currentEl = tabRefs.current[activeTab]

        if (!container || !currentEl) return

        const containerRect = container.getBoundingClientRect()
        const elRect = currentEl.getBoundingClientRect()

        setUnderlineStyle({
            width: Math.round(elRect.width),
            x: Math.round(elRect.left - containerRect.left + container.scrollLeft)
        })
    }

    useLayoutEffect(() => {
        updateUnderline()
    }, [activeTab])

    useEffect(() => {
        const ro = new ResizeObserver(updateUnderline)
        const c = tabsContainerRef.current
        if (c) ro.observe(c)
        return () => ro.disconnect()
    }, [])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'resume') {
            setResume(files[0])
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        const data = new FormData()
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key])
        })
        if (resume) {
            data.append('resume', resume)
        } else {
            setStatus({ type: 'error', message: 'Resume is required' })
            setLoading(false)
            return
        }

        try {
            await submitForm('/career-forms/', data, true)
            // Redirect to thank you page
            router.push('/thank-you?form=career')
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting application.' })
            setLoading(false)
        }
    }

    return (
        <section id="careerform" className="w-[calc(100%-1rem)] bg-[var(--dark-blue)] py-16 rounded-xl mx-2">
            <div className="container mx-auto">
                <h2 className="text-[var(--background)] text-center text-3xl sm:text-[40px] font-light">
                    Career Application Form
                </h2>

                <p className="text-center text-[var(--background)]/70 max-w-6xl mx-auto mt-4 text-sm sm:text-base">
                    Join a dynamic community of educators, researchers, and professionals shaping the future of learning at Kalinga University. Please fill in your details below to apply for a suitable position. Our HR team will review your application and contact you if your profile matches our current openings.
                </p>

                {/* TABS */}
                <div className="relative mt-10 pb-2 border-b border-[var(--background)]/30">
                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                    <div
                        ref={tabsContainerRef}
                        className="flex gap-4 sm:gap-6 md:gap-10 justify-start sm:justify-center overflow-x-auto scrollbar-hide px-2 sm:px-0"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                ref={(el) => (tabRefs.current[tab.id] = el)}
                                onClick={() => setActiveTab(tab.id)}
                                type="button"
                                className={`flex-shrink-0 pb-3 text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-0 ${activeTab === tab.id ? "text-[var(--dark-orange-red-light)] font-medium" : "text-[var(--background)]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <span
                        className="absolute bottom-0 h-[3px] bg-[var(--dark-orange-red-light)] transition-all duration-300"
                        style={{
                            width: underlineStyle.width,
                            transform: `translateX(${underlineStyle.x}px)`
                        }}
                    />
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="mt-10 rounded-xl">
                    {/* Personal Information Tab */}
                    {activeTab === "personal" && (
                        <div className="grid sm:grid-cols-2 gap-10">
                            <div>
                                <label className="text-[var(--background)] text-lg">Full Name</label>
                                <input
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Mobile Number</label>
                                <input
                                    name="mobile_number"
                                    value={formData.mobile_number}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Alternate Phone</label>
                                <input
                                    name="alternate_phone"
                                    value={formData.alternate_phone}
                                    onChange={handleChange}
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Date of Birth</label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                >
                                    <option className="text-[var(--foreground)]" value="">Select</option>
                                    <option className="text-[var(--foreground)]" value="male">Male</option>
                                    <option className="text-[var(--foreground)]" value="female">Female</option>
                                    <option className="text-[var(--foreground)]" value="other">Other</option>
                                    <option className="text-[var(--foreground)]" value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Nationality</label>
                                <input
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Current City</label>
                                <input
                                    name="current_city"
                                    value={formData.current_city}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">State</label>
                                <input
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Country</label>
                                <input
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>
                        </div>
                    )}

                    {/* Position Details Tab */}
                    {activeTab === "position" && (
                        <div className="grid sm:grid-cols-2 gap-10">
                            <div>
                                <label className="text-[var(--background)] text-lg">Position Applied For</label>
                                <input
                                    name="position_applied_for"
                                    value={formData.position_applied_for}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Department</label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                >
                                    <option className="text-[var(--foreground)]" value="">Select Department</option>
                                    {departments.map(dept => (
                                        <option key={dept.value} className="text-[var(--foreground)]" value={dept.value}>
                                            {dept.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Employment Type</label>
                                <select
                                    name="employment_type"
                                    value={formData.employment_type}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                >
                                    <option className="text-[var(--foreground)]" value="">Select Type</option>
                                    <option className="text-[var(--foreground)]" value="teaching">Teaching</option>
                                    <option className="text-[var(--foreground)]" value="non_teaching">Non-Teaching</option>
                                    <option className="text-[var(--foreground)]" value="administrative">Administrative</option>
                                    <option className="text-[var(--foreground)]" value="contract_visiting">Contract/Visiting</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Preferred Campus</label>
                                <input
                                    name="preferred_campus"
                                    value={formData.preferred_campus}
                                    onChange={handleChange}
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Expected Salary</label>
                                <input
                                    name="expected_salary"
                                    value={formData.expected_salary}
                                    onChange={handleChange}
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-[var(--background)] text-lg">Notice Period</label>
                                <input
                                    name="notice_period"
                                    value={formData.notice_period}
                                    onChange={handleChange}
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="text-[var(--background)] text-lg">Resume (PDF/DOC)</label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleChange}
                                    required
                                    accept=".pdf,.doc,.docx"
                                    className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)] outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[var(--background)] file:text-[var(--dark-blue)] hover:file:bg-[var(--background)]/90"
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-12">
                        {activeTab === "position" && (
                            <GlobalArrowButton
                                type="button"
                                variant="white"
                                onClick={() => setActiveTab("personal")}
                            >
                                Previous
                            </GlobalArrowButton>
                        )}

                        <div className={activeTab === "personal" ? "ml-auto" : ""}>
                            {activeTab === "personal" ? (
                                <GlobalArrowButton
                                    type="button"
                                    variant="white"
                                    onClick={() => setActiveTab("position")}
                                >
                                    Next
                                </GlobalArrowButton>
                            ) : (
                                <GlobalArrowButton type="submit" variant="white" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit'}
                                </GlobalArrowButton>
                            )}
                        </div>
                    </div>

                    {status.message && (
                        <p className={`text-center mt-6 py-3 px-6 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                            {status.message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
