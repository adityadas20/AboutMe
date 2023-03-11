import $ from "jquery";
import React, { useState, useEffect } from 'react';
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";


const Main = () => {

    const [scrollPosition, setScrollPosition] = useState(1);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    useEffect(() => {

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }
        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');



    return (
        <>
            <Intro scrollPosition={scrollPosition} />
            <About scrollPosition={scrollPosition} />
            <Projects />
            <Footer />
        </>
    );
}

export default Main;
