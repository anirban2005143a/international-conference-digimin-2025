import Footer from '@/components/footer/Footer'
import ImportantDates from '@/components/importantDates/ImportantDates'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <ImportantDates />
            <Footer />
        </>
    )
}

export default page