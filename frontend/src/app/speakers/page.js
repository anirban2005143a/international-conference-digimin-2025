import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SpeakersPage from '@/components/speakers/Speakers'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <SpeakersPage />
            <Footer />
        </>
    )
}

export default page