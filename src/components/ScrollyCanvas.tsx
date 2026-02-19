"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValue } from "framer-motion";

const FRAME_COUNT = 75;

// Pattern-based path generator to handle varying delays in filenames
const getFramePath = (index: number) => {
    const padded = index.toString().padStart(2, "0");
    // Frames 1, 4, 7, ... have 0.066s delay, others have 0.067s based on folder scan
    const delay = (index % 3 === 1) ? "0.066s" : "0.067s";
    return `/sequence/frame_${padded}_delay-${delay}.png`;
};

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Track scroll specifically for our 500vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0-1) to frame indices (0-74)
    // We use a small buffer at the end to ensure the last frame sits well.
    const frameIndex = useTransform(scrollYProgress, [0, 0.9], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.warn(`Failed to load frame ${i}: ${img.src}`);
                loadedCount++;
                if (loadedCount === FRAME_COUNT) setIsLoaded(true);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        // Clamp index to avoid out of bounds
        const safeIndex = Math.max(0, Math.min(Math.floor(index), FRAME_COUNT - 1));
        const img = images[safeIndex];

        if (ctx && canvas && img && img.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(frameIndex.get());
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Run immediately to set dimensions

    useEffect(() => {
        // Render periodically until loaded to catch the first frame completion
        const initialRender = setInterval(() => {
            if (images[0]?.complete) {
                renderFrame(0);
                if (images.length === FRAME_COUNT) clearInterval(initialRender);
            }
        }, 100);

        const unsubscribe = frameIndex.onChange((v) => {
            renderFrame(v);
        });

        return () => {
            clearInterval(initialRender);
            unsubscribe();
        };
    }, [images, isLoaded]);

    return (
        <div ref={containerRef} className="absolute inset-0 h-[500vh] w-full pointer-events-none">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full pointer-events-auto"
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                            <p className="text-sm tracking-widest text-white/40 uppercase font-bold">Initializing Engine</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
