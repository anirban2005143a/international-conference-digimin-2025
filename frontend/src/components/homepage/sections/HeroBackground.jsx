import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const HeroBackground = () => {

    const [particles, setparticles] = useState(null)

    useEffect(() => {
        const arr = [...Array(20)].map(() => ({
            initialX: Math.random() * window.innerWidth,
            initialY: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            animateX: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
            ],
            animateY: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
            ],
            size: Math.random() * 20 + 5,
        }))
        setparticles(arr)
    }, []);
    return (
        <>
            {particles && <div className="absolute inset-0 overflow-hidden">
                <div className="particles-container">
                    {particles.map((p, index) => (
                        <motion.div
                            key={index}
                            className="absolute rounded-full bg-blue-400 opacity-20"
                            initial={{ x: p.initialX, y: p.initialY, scale: p.scale }}
                            animate={{ x: p.animateX, y: p.animateY }}
                            transition={{ duration: 20 + Math.random() * 30, repeat: Infinity, ease: "linear" }}
                            style={{ width: `${p.size}px`, height: `${p.size}px` }}
                        />
                    ))}
                </div>
            </div>}
        </>
    )
}

export default HeroBackground