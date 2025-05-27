import AboutPage from '@/components/aboutpage/AboutPage'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <AboutPage />
            <Footer />
        </>
    )
}

export default page