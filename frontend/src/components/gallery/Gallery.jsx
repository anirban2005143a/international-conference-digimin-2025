"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const GalleryPage = () => {
    const [activeImage, setActiveImage] = useState(null);

    // Image data separated by columns
    const columnImages = [
        // Column 1 images
        [
            {
                id: 1,
                src: '/gallery/img1.webp',
                alt: 'gallery image',
                aspect: 'aspect-video'
            },
            {
                id: 2,
                src: '/gallery/img2.webp',
                alt: 'gallery image',
                aspect: 'aspect-[3/4]'
            },
            {
                id: 3,
                src: '/gallery/img3.webp',
                alt: 'gallery image',
                aspect: 'aspect-video'
            },
            {
                id: 10,
                src: '/gallery/img10.webp',
                alt: 'gallery image',
                aspect: 'aspect-[5/8]'
            }
        ],
        // Column 2 images
        [
            {
                id: 4,
                src: '/gallery/img4.webp',
                alt: 'gallery image',
                aspect: 'aspect-square'
            },
            {
                id: 5,
                src: '/gallery/img5.webp',
                alt: 'gallery image',
                aspect: 'aspect-video'
            },
            {
                id: 6,
                src: '/gallery/img6.webp',
                alt: 'gallery image',
                aspect: 'aspect-[5/8]'
            },
            {
                id: 11,
                src: '/gallery/img11.webp',
                alt: 'gallery image',
                aspect: 'aspect-video'
            },
            {
                id: 13,
                src: '/gallery/img13.webp',
                alt: 'gallery image',
                aspect: 'aspect-square'
            }
        ],
        // Column 3 images
        [
            {
                id: 7,
                src: '/gallery/img7.webp',
                alt: 'gallery image',
                aspect: 'aspect-video'
            },
            {
                id: 8,
                src: '/gallery/img8.webp',
                alt: 'gallery image',
                aspect: 'aspect-[2/3]'
            },
            {
                id: 9,
                src: '/gallery/img9.webp',
                alt: 'gallery image',
                aspect: 'aspect-square'
            },
            {
                id: 12,
                src: '/gallery/img12.webp',
                alt: 'gallery image',
                aspect: 'aspect-square'
            }
        ]
    ];

    const openModal = (item) => {
        setActiveImage(item);
    };

    const closeModal = () => {
        setActiveImage(null);
    };

    return (
        <div className="min-h-screen bg-blue-50 pt-[100px]  px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl font-bold text-blue-700 mb-3"
                    >
                        Our Gallery
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto h-1 bg-blue-700 mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className=" text-lg"
                    >
                        Beautiful moments captured
                    </motion.p>
                </motion.div>

                {/* Gallery Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    {columnImages.map((column, colIndex) => (
                        <div key={`col-${colIndex}`} className="flex flex-col gap-8">
                            {column.map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative  overflow-hidden transition-shadow duration-300 pb-3  border-b-2 border-black ${item.aspect}`}
                                    onClick={() => openModal(item)}
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        loading='lazy'
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full rounded-lg object-cover cursor-pointer "
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Image Modal */}
                {activeImage && (
                    <div className="fixed inset-0 h-[100dvh] bg-black/80 backdrop-blur-sm z-50  p-4" onClick={closeModal}>
                        <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>

                            <button
                                className="absolute top-0 right-0 p-2 bg-gray-400/20 rounded-full text-white hover:text-blue-300 transition-colors"
                                onClick={closeModal}
                            >
                                <X />
                            </button>
                            <div className='h-[90%]'>
                                <img
                                    src={activeImage.src}
                                    alt={activeImage.alt}
                                    className="  h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default GalleryPage;