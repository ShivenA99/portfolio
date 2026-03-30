"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#064E3B",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#064E3B",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#34D399",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 33.4484, lng: -111.9431 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#10B981", "#34D399", "#6EE7B7"];
  const sampleArcs = [
    { order: 1, startLat: 33.4484, startLng: -111.9431, endLat: 28.6139, endLng: 77.209, arcAlt: 0.5, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 1, startLat: 33.4484, startLng: -111.9431, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 2, startLat: 33.4484, startLng: -111.9431, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.4, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 2, startLat: 28.6139, startLng: 77.209, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 3, startLat: 33.4484, startLng: -111.9431, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 3, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 4, startLat: 33.4484, startLng: -111.9431, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 4, startLat: 33.4484, startLng: -111.9431, endLat: 52.52, endLng: 13.405, arcAlt: 0.4, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 5, startLat: 28.6139, startLng: 77.209, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 5, startLat: 33.4484, startLng: -111.9431, endLat: 40.7128, endLng: -74.006, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 6, startLat: 37.7749, startLng: -122.4194, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 6, startLat: 33.4484, startLng: -111.9431, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.6, color: colors[Math.floor(Math.random() * colors.length)] },
  ];

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
