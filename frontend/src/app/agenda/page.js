import AgendaPage from '@/components/agenda/Agenda'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <AgendaPage />
            <Footer />
        </>
    )
}

export default page