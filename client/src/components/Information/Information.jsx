import React, { useEffect, useRef, useState } from 'react';

const Information = () => {
  const [isVisible, setIsVisible] = useState(false);
  const infoRef = useRef(null);

  useEffect(() => {
    const element = infoRef.current;
    const onScroll = () => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div ref={infoRef} className={`info-container max-w-4xl mx-auto py-16 px-4 md:w-1/2 transition duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10 delay-200'}`}>
        <h1 className="text-4xl font-bold mb-8 text-center">Psychologists At Your Fingertips.</h1>
        <p className="text-lg mb-4">Are you ready to take charge of your mental health but don’t know where to start looking? Have you been on endless searches for the perfect psychologist, only to be told that there is a 6-month waiting list? At Psych Book, we believe in accessibility as much as the quality of therapy so we’ve done the hard work for you and collected Australian psychologists into our very own directory.</p>
        <p className="text-lg mb-4">Whether you’re struggling with anxiety, depression, relationship issues, or more, we’ve got the psychologist for you. Answer our specially formulated questions and we’ll curate a list of psychologists near you with all their details, including their waitlist times.</p>
        <p className="text-lg mb-8">No more calling up individual psychologists and wasting your time. It’s that easy. Click ‘Get Matched’ now and unlock your potential with Psych Book.</p>

        <div className="flex justify-center">
        <a href="/get-matched">
        <button className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold rounded-full py-4 px-8 mx-2 transform hover:scale-110">
            Get Matched
        </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
