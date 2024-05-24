import { useEffect, useState } from "react";

export const useScroll = (Threshold=10)=>{
    const [scrolled, setScrolled]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>Threshold){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, [Threshold]);
    return scrolled;
}