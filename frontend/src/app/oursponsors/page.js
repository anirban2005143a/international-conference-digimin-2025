import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SponsorsPage from '@/components/oursponsors/OurSponsors'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <SponsorsPage />
            <Footer />
        </>
    )
}

export default page