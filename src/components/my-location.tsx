import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import icon from '../assets/working.png'


export const MyLocation = () => {
    const mapRef = useRef(null);

    async function init() {
        if (mapRef.current) {
            const loader = new Loader({
                apiKey: `${import.meta.env.VITE_GOOGLE_API_KEY}`, // Replace with your actual API key
                version: "beta", // Required for AdvancedMarkerElement
                libraries: ["marker"], // Load the marker librarym
            });
            const res = await loader.importLibrary("core");
            if (res) {
                const map = new google.maps.Map(mapRef.current, {
                    center: { lat: 11.0168, lng: 76.9558 }, // San Francisco coordinates
                    zoom: 9,
                    mapId: 'one',
                    disableDefaultUI:true,
                });
                const markerElement = document.createElement("div");
                markerElement.style.display = "flex";
                markerElement.style.flexDirection = "column";
                markerElement.style.alignItems = "center";
                markerElement.style.background = "rgba(0, 0, 0, 0.5)";
                markerElement.style.border = "3px solid #fff";
                markerElement.style.borderRadius = "50%";

                const img = document.createElement("img");
                img.src = icon; // Replace with your image URL
                img.alt = "Custom Marker";
                img.style.width = "100px"; // Adjust width
                img.style.height = "100px"; // Adjust height

                const text = document.createElement("div");
                text.style.marginTop = "5px";
                text.style.color = "#333";
                text.style.fontSize = "14px";

                markerElement.appendChild(img);
                markerElement.appendChild(text);

                new google.maps.marker.AdvancedMarkerElement({
                    position: { lat: 11.0168, lng: 76.9558 },
                    map: map,
                    content: markerElement,
                });
            }
        }
    }

    useEffect(() => {
        init();
    }, []);
    console.log(import.meta.env.GOOGLE_API_KEY)
    return (
        <div ref={mapRef} style={{ width: "100%", height: "480px", borderRadius:'10px' }} />
    );
};