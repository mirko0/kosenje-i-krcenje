import React, { useState, useRef, useEffect, useCallback } from 'react';

const ComparisonSlider = ({ before, after, title }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const handleMouseMove = (e) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    const handleStart = () => setIsDragging(true);
    const handleEnd = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleEnd);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <div className="flex flex-col items-center group w-full">
            {title && (
                <h3 className="text-xl font-bold mb-4 text-center text-dark hidden md:block group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
            )}
            <div
                ref={containerRef}
                className="relative w-full aspect-[4/3] max-w-2xl overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none border-4 border-white/50 touch-none"
                onMouseDown={handleStart}
                onTouchStart={handleStart}
            >
                {/* After Image (Background) */}
                <img
                    src={after}
                    alt="Posle"
                    draggable="false"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />

                {/* Before Image (Clipped Overlay) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img
                        src={before}
                        alt="Pre"
                        draggable="false"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-widest">
                        Pre
                    </span>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <span className="bg-primary/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-widest shadow-lg">
                        Posle
                    </span>
                </div>

                {/* Divider Line */}
                <div
                    className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary overflow-hidden transition-transform duration-200 group-active:scale-110">
                        <div className="flex gap-1">
                            <div className="w-1 h-5 bg-primary/30 rounded-full"></div>
                            <div className="w-1 h-7 bg-primary rounded-full"></div>
                            <div className="w-1 h-5 bg-primary/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Title - Visible only on small screens */}
            {title && (
                <h3 className="text-lg font-bold mt-4 text-center text-dark md:hidden">
                    {title}
                </h3>
            )}
        </div>
    );
};

export default ComparisonSlider;
