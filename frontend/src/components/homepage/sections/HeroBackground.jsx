import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const HeroBackground = ({ continerRef }) => {

    const [particles, setparticles] = useState(null)

    useEffect(() => {
        if (continerRef.current) {
            const arr = [...Array(20)].map(() => ({
                initialX: Math.random() * continerRef.current.clientWidth,
                initialY: Math.random() * continerRef.current.clientHeight,
                scale: Math.random() * 0.5 + 0.5,
                animateX: [
                    Math.random() * continerRef.current.clientWidth,
                    Math.random() * continerRef.current.clientWidth,
                    Math.random() * continerRef.current.clientWidth,
                ],
                animateY: [
                    Math.random() * continerRef.current.clientHeight,
                    Math.random() * continerRef.current.clientHeight,
                    Math.random() * continerRef.current.clientHeight,
                ],
                size: Math.random() * 20 + 5,
            }))
            setparticles(arr)
        }
    }, []);
    return (
        <>
            {particles && <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-50 to-white -z-10">
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