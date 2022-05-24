import React, { useEffect, useState, useRef } from "react";
import '../css/goTopStyle.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const GoTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    

    return (
        <div className="top-to-btm">
            
            {showTopBtn && (
        <ArrowCircleUpIcon fontSize="large" className="icon-position icon-style"
        onClick={goToTop}/>
        )}
    </div>
    );
  };
  export default GoTop;