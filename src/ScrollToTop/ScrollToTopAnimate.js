import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const ScrollToTopAnimate = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top"
            onClick={scrollToTop}
        >
            <BsFillArrowUpCircleFill size="35" color="#31190e" />
        </div>
    );
};

export default ScrollToTopAnimate;