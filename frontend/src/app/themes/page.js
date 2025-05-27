import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import ThemesPage from '@/components/themepage/ThemePage'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <ThemesPage />
            <Footer />
        </>
    )
}

export default page