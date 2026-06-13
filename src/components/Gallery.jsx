import React from 'react'
import { ModernGallery } from './ui/modern-gallery';

const Gallery = ({ isFullPage = false }) => {
    return (
        <div id='galerija' className={`text-center ${!isFullPage ? 'about pt-24 pb-16' : ''}`}>
            {!isFullPage && (
                <div className="container mx-auto px-4 mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Transformacije</span>
                    <h1 style={{ color: "#2e3135" }} className={"mb-6 text-4xl md:text-5xl font-black"}>Galerija</h1>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
            )}

            <div className="w-full">
                <ModernGallery images={images} />
            </div>
        </div>
    )
}


const images = ["/beforeafter/11.jpg", "/beforeafter/12.jpg",
    "/beforeafter/21.jpg", "/beforeafter/22.jpg",
    "/beforeafter/31.jpg", "/beforeafter/32.jpg",
    "/beforeafter/41.jpg", "/beforeafter/42.jpg",
    "/beforeafter/51.jpg", "/beforeafter/52.jpg",
    "/beforeafter/61.jpg", "/beforeafter/62.jpg",
    "/beforeafter/71.jpg", "/beforeafter/72.jpg",
    "/beforeafter/81.jpg", "/beforeafter/82.jpg",
    "/beforeafter/91.jpg", "/beforeafter/92.jpg",
    "/beforeafter/101.jpg", "/beforeafter/102.jpg",
    "/beforeafter/111.jpg", "/beforeafter/112.jpg",
    "/beforeafter/121.jpg", "/beforeafter/122.jpg",
    "/beforeafter/131.jpg", "/beforeafter/132.jpg",
    "/beforeafter/141.jpg", "/beforeafter/142.jpg",
    "/beforeafter/151.jpg", "/beforeafter/152.jpg",
    "/beforeafter/161.jpg", "/beforeafter/162.jpg",
    "/beforeafter/171.jpg", "/beforeafter/172.jpg",
    "/beforeafter/181.jpg", "/beforeafter/182.jpg",
    "/beforeafter/191.jpg", "/beforeafter/192.jpg",
    "/beforeafter/201.jpg", "/beforeafter/202.jpg",
    "/beforeafter/211.jpg", "/beforeafter/212.jpg",
    "/beforeafter/221.jpg", "/beforeafter/222.jpg",
    "/beforeafter/231.jpg", "/beforeafter/232.jpg",
    "/beforeafter/241.jpg", "/beforeafter/242.jpg",
    "/beforeafter/271.jpg", "/beforeafter/272.jpg",
    "/beforeafter/281.jpg", "/beforeafter/282.jpg",
    "/beforeafter/291.jpg", "/beforeafter/292.jpg",
    "/beforeafter/301.jpg", "/beforeafter/302.jpg",
    "/beforeafter/311.jpg", "/beforeafter/312.jpg",
    "/beforeafter/321.jpg", "/beforeafter/322.jpg",
];

export default Gallery