import CallForPapers from '@/components/callForPaperPage/CallForPaperPage'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <CallForPapers />
            <Footer />
        </>
    )
}

export default page