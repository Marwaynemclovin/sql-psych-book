import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');

const GetMatched = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addictionSelected, setAddictionSelected] = useState(false);
  const [adhdSelected, setAdhdSelected] = useState(false);
  const [anxietySelected, setAnxietySelected] = useState(false);
  const [cbtSelected, setCbtSelected] = useState(false);
  const [depressionSelected, setDepressionSelected] = useState(false);
  const [griefSelected, setGriefSelected] = useState(false);
  const [ndisSelected, setNdisSelected] = useState(false);
  const [onlineSelected, setOnlineSelected] = useState(false);
  const [noPreferenceSelected, setNoPreferenceSelected] = useState(false);
  const [maleSelected, setMaleSelected] = useState(false);
  const [femaleSelected, setFemaleSelected] = useState(false);
  const [ageOver30Selected, setAgeOver30Selected] = useState(false);
  const [ageUnder30Selected, setAgeUnder30Selected] = useState(false);
  const [ageOver50Selected, setAgeOver50Selected] = useState(false);
  const [humorousSelected, setHumorousSelected] = useState(false);
  const [existentialSelected, setExistentialSelected] = useState(false);
  const [coachSelected, setCoachSelected] = useState(false);
  const [lgbtqiaSelected, setLgbtqiaSelected] = useState(false);
  const [visitedYesPsychBefore, setVisitedYesPsychBefore] = useState(false);
  const [visitedNoPsychBefore, setVisitedNoPsychBefore] = useState(false);
  const [diagnosedYesSelected, setDiagnosedYesSelected] = useState(false);
  const [diagnosedNoSelected, setDiagnosedNoSelected] = useState(false);
  const [diagnosedPreferNotSelected, setDiagnosedPreferNotSelected] = useState(false);
  const [mentalHealthPlanYesSelected, setMentalHealthPlanYesSelected] = useState(false);
  const [mentalHealthPlanNoSelected, setMentalHealthPlanNoSelected] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [genderVariantSelected, setGenderVariantSelected] = useState(false);
  const [nonBinarySelected, setNonBinarySelected] = useState(false);
  const [transFemaleSelected, setTransFemaleSelected] = useState(false);
  const [transMaleSelected, setTransMaleSelected] = useState(false);
  const [preferNotToSaySelected, setPreferNotToSaySelected] = useState(false);
  const [otherSelected, setOtherSelected] = useState(false);
  const [monAmSelected, setMonAmSelected] = useState(false);
  const [monPmSelected, setMonPmSelected] = useState(false);
  const [tueAmSelected, setTueAmSelected] = useState(false);
  const [tuePmSelected, setTuePmSelected] = useState(false);
  const [wedAmSelected, setWedAmSelected] = useState(false);
  const [wedPmSelected, setWedPmSelected] = useState(false);
  const [thuAMSelected, setThuAMSelected] = useState(false);
  const [thuPMSelected, setThuPMSelected] = useState(false);
  const [friAMSelected, setFriAMSelected] = useState(false);
  const [friPMSelected, setFriPMSelected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/)) {
      setEmailError(true);
      return;
    }
    if (!phone.match(/^(\+61|0)[2-478](?!1234567890)[0-9]{8}$/)) {
      setPhoneError(true);
      return;
    }
    console.log('Form submitted:', { firstName, lastName, email, phone });
    setEmailError(false);
    setPhoneError(false);
    setStep(step + 1);
  };
  


  return (
    <div className="w-screen h-screen text-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center transition-all duration-1000 ease-in-out">      <div>
        <div className="text-center">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {step === 1 && 'Find The Right Psych For You'}
            {step === 2 && 'What is your first name and last name? *'}
            {step === 3 && 'Nice to meet you. How can we get in touch? *'}
            {step === 4 && "I'd like some help with..."}
            {step === 5 && "Do you have any preferences for your Psychologist?"}
            {step === 6 && "What type of Psych would you like?"}
            {step === 7 && "Have you seen a Psych before"}
            {step === 8 && "Have you ever been diagnosed with a mental llness?"}
            {step === 9 && "Do you have a Mental Health Care Plan"}
            {step === 10 && "What is your Date of Birth? *"}
            {step === 11 && "How do you identify?"}
            {step === 12 && "Preferred Days?"}
            {step === 13 && "We appreciate your courage in opening up."}
          </h1>
          {step === 1 && (
            <>
            <p className="text-2xl mb-8 w-3/4 mx-auto">
                Questions to cater the best Psych for you.
            </p>
            <p className="text-2xl mb-8 w-3/4 mx-auto">
                Only Takes 3 Minutes
            </p>
            <p className="text-2xl mb-8 w-3/4 mx-auto">
                Questions with a * must be answered.
            </p>
            <p className="text-2xl mb-8 w-3/4 mx-auto">
                For urgent help: Call 000 or Lifeline on 13 11 14
            </p>


              <div className="flex justify-center">
                <button
                  className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                  style={{ maxWidth: '150px' }}
                  onClick={() => setStep(step + 1)}
                >
                  Get Started.
                </button>
              </div>
            </>
          )}
        {step === 2 && (
        <form onSubmit={() => setStep(step + 1)} className="text-center">
            <div className="mb-4">
            <label htmlFor="firstName" className="block text-white text-lg font-bold mb-2">
                First Name:
            </label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-white rounded-full px-4 py-2 text-black text-center"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="lastName" className="block text-white text-lg font-bold mb-2">
                Last Name:
            </label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-white text-black rounded-full px-4 py-2 text-center"
            />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                    style={{ maxWidth: '150px' }}
                    onClick={() => setStep(step - 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                    style={{ maxWidth: '150px' }}
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </form>
        )}
        {step === 3 && (
        <form onSubmit={() => setStep(step + 1)}>
            <label htmlFor="email" className="text-white">Email:</label>
            <div className="relative">
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black rounded-full px-4 py-2 w-3/4 md:w-full mb-4"
            />
            {email.length > 0 && !email.includes('@') && (
                <span className="absolute right-0 top-0 mt-2 mr-2 text-red-600 font-medium text-sm">
                Invalid email format
                </span>
            )}
            </div>
            <label htmlFor="phone" className="text-white block mt-4">Phone Number (Australian format):</label>
            <div className="relative">
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{4} [0-9]{3} [0-9]{3}"
                placeholder="XXXX XXX XXX"
                required
                className="bg-white text-black rounded-full px-4 py-2 w-3/4 md:w-full mb-4"
                />
            {phone.length > 0 && !phone.match(/^\d{4} \d{3} \d{3}$/) && (
                <span className="absolute right-0 top-0 mt-2 mr-2 text-red-600 font-medium text-sm">
                Invalid phone format
                </span>
            )}
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                    style={{ maxWidth: '150px' }}
                    onClick={() => setStep(step - 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                    style={{ maxWidth: '150px' }}
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </form>
        )}
        {step === 4 && (
            <>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '1rem' }}>
                <button
                className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${addictionSelected ? 'scale-125' : ''}`}
                onClick={() => setAddictionSelected(!addictionSelected)}
                >
                Addiction
                </button>

                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${adhdSelected ? 'scale-125' : ''}`}
                        onClick={() => setAdhdSelected(!adhdSelected)}
                    >
                        ADHD
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${anxietySelected ? 'scale-125' : ''}`}
                        onClick={() => setAnxietySelected(!anxietySelected)}
                    >
                        Anxiety
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${cbtSelected ? 'scale-125' : ''}`}
                        onClick={() => setCbtSelected(!cbtSelected)}
                    >
                        CBT
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${depressionSelected ? 'scale-125' : ''}`}
                        onClick={() => setDepressionSelected(!depressionSelected)}
                    >
                        Depression
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${griefSelected ? 'scale-125' : ''}`}
                        onClick={() => setGriefSelected(!griefSelected)}
                    >
                        Grief
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${ndisSelected ? 'scale-125' : ''}`}
                        onClick={() => setNdisSelected(!ndisSelected)}
                    >
                        NDIS
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${onlineSelected ? 'scale-125' : ''}`}
                        onClick={() => setOnlineSelected(!onlineSelected)}
                    >
                        Online Therapy
                    </button>
                </div>
                    <div className="flex justify-center pt-3">
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            onClick={() => setStep(step - 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            type="submit"
                            onClick={() => setStep(step + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </>
                )}
                {step === 5 && (
                <>
                <p className="text-2xl mb-8">
                Choose as many as you like
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '1rem' }}>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${noPreferenceSelected ? 'scale-125' : ''}`}
                        onClick={() => setNoPreferenceSelected(!noPreferenceSelected)}
                    >
                        No preference
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${maleSelected ? 'scale-125' : ''}`}
                        onClick={() => setMaleSelected(!maleSelected)}
                    >
                        Male
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${femaleSelected ? 'scale-125' : ''}`}
                        onClick={() => setFemaleSelected(!femaleSelected)}
                    >
                        Female
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${ageOver30Selected ? 'scale-125' : ''}`}
                        onClick={() => setAgeOver30Selected(!ageOver30Selected)}
                    >
                        Age over 30
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${ageUnder30Selected ? 'scale-125' : ''}`}
                        onClick={() => setAgeUnder30Selected(!ageUnder30Selected)}
                    >
                        Age under 30
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${ageOver50Selected ? 'scale-125' : ''}`}
                        onClick={() => setAgeOver50Selected(!ageOver50Selected)}
                    >
                        Age over 50
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${lgbtqiaSelected ? 'scale-125' : ''}`}
                        onClick={() => setLgbtqiaSelected(!lgbtqiaSelected)}
                    >
                        LGBTQIA+ Psychologist
                    </button>
                </div>
                <div className="flex justify-center pt-3">
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                onClick={() => setStep(step - 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                type="submit"
                                onClick={() => setStep(step + 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </>
                )}
                {step === 6 && (
                    <>
                        <p className="text-2xl mb-8">
                            Choose as many as you like
                        </p>
                        <div className="flex flex-col md:flex-row md:flex-wrap justify-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '1rem' }}>
                            <button
                                className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${coachSelected ? 'scale-125' : ''}`}
                                onClick={() => setCoachSelected(!coachSelected)}
                            >
                                Like a coach
                            </button>
                            <button
                                className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${humorousSelected ? 'scale-125' : ''}`}
                                onClick={() => setHumorousSelected(!humorousSelected)}
                            >
                                Humorous
                            </button>
                            <button
                                className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${existentialSelected ? 'scale-125' : ''}`}
                                onClick={() => setExistentialSelected(!existentialSelected)}
                            >
                                Existential
                            </button>
                            <button
                                className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${lgbtqiaSelected ? 'scale-125' : ''}`}
                                onClick={() => setLgbtqiaSelected(!lgbtqiaSelected)}
                            >
                                LGBTQIA+ Psychologist
                            </button>
                        </div>
                        <div className="flex justify-center pt-3">
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                onClick={() => setStep(step - 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                type="submit"
                                onClick={() => setStep(step + 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </>
                )}

                {step === 7 && (
                        <>
                    <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg ${visitedYesPsychBefore ? 'scale-125' : ''}`}
                        onClick={() => {
                        setVisitedYesPsychBefore(true);
                        setVisitedNoPsychBefore(false);
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg ${visitedNoPsychBefore ? 'scale-125' : ''}`}
                        onClick={() => {
                        setVisitedNoPsychBefore(true);
                        setVisitedYesPsychBefore(false);
                        }}
                    >
                        No
                    </button>
                    </div>

                    <div className="flex justify-center">
                        <button
                        className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                        style={{ maxWidth: '150px' }}
                        onClick={() => setStep(step - 1)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        </button>
                        <button
                        className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                        style={{ maxWidth: '150px' }}
                        type="submit"
                        onClick={() => setStep(step + 1)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </button>
                    </div>
                    </div>

                </>
                )}
                {step === 8 && (
                <>
                    <div className={`${step === 8 ? 'block' : 'hidden'}`}>
                    <div className="flex justify-center items-center mb-6">
                        <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 transform hover:scale-110 shadow-lg ${diagnosedYesSelected ? 'scale-125' : ''}`}
                        onClick={() => {
                            setDiagnosedYesSelected(true);
                            setDiagnosedNoSelected(false);
                            setDiagnosedPreferNotSelected(false);
                        }}
                        >
                        Yes
                        </button>
                        <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 transform hover:scale-110 shadow-lg ${diagnosedNoSelected ? 'scale-125' : ''}`}
                        onClick={() => {
                            setDiagnosedYesSelected(false);
                            setDiagnosedNoSelected(true);
                            setDiagnosedPreferNotSelected(false);
                        }}
                        >
                        No
                        </button>
                        <button
                        className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 transform hover:scale-110 shadow-lg ${diagnosedPreferNotSelected ? 'scale-125' : ''}`}
                        onClick={() => {
                            setDiagnosedYesSelected(false);
                            setDiagnosedNoSelected(false);
                            setDiagnosedPreferNotSelected(true);
                        }}
                        >
                        Prefer not to say
                        </button>
                    </div>
                    {diagnosedYesSelected && (
                        <div className="flex flex-col mb-6">
                        <label htmlFor="diagnosedIllness" className="text-lg font-bold mb-2">Please specify:</label>
                        <input type="text" id="diagnosedIllness" className="py-2 px-3 border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-black" />
                        </div>
                    )}
                    <div className="flex justify-center pt-3">
                        <button
                        className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                        style={{ maxWidth: '150px' }}
                        onClick={() => setStep(step - 1)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        </button>
                        <button
                        className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                        style={{ maxWidth: '150px' }}
                        onClick={() => setStep(step + 1)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </button>
                    </div>
                    </div>
                    </>
                        )}
                        {step === 9 && (
                        <>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex justify-center items-center mb-6">
                                <button
                                    className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 transform hover:scale-110 shadow-lg ${mentalHealthPlanYesSelected ? 'scale-125' : ''}`}
                                    onClick={() => {
                                    setMentalHealthPlanYesSelected(true);
                                    setMentalHealthPlanNoSelected(false);
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 transform hover:scale-110 shadow-lg ${mentalHealthPlanNoSelected ? 'scale-125' : ''}`}
                                    onClick={() => {
                                    setMentalHealthPlanYesSelected(false);
                                    setMentalHealthPlanNoSelected(true);
                                    }}
                                >
                                    No
                                </button>
                                </div>
                                <div className="flex justify-center">
                                <button
                                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                    style={{ maxWidth: '150px' }}
                                    onClick={() => setStep(step - 1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                    style={{ maxWidth: '150px' }}
                                    onClick={() => setStep(step + 1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </>
                            )}
                        {step === 10 && (
                        <>
                            <div className="flex flex-col items-center">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd MMMM yyyy"
                                placeholderText="Select a date"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                maxDate={new Date()}
                                className="text-black p-4 rounded-lg shadow-lg text-center"
                            />
                            {!startDate && (
                                <p className="text-red-500 mt-2">Please select a date.</p>
                            )}
                            </div>
                            <div className="flex justify-center pt-5">
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                onClick={() => setStep(step - 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                                style={{ maxWidth: '150px' }}
                                onClick={() => {
                                if (startDate) {
                                    setStep(step + 1);
                                }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            </div>
                        </>
                        )}
                    {step === 11 && (
                    <>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '1rem' }}>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${maleSelected ? 'scale-125' : ''}`}
                            onClick={() => setMaleSelected(!maleSelected)}
                        >
                            Male
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${femaleSelected ? 'scale-125' : ''}`}
                            onClick={() => setFemaleSelected(!femaleSelected)}
                        >
                            Female
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${nonBinarySelected ? 'scale-125' : ''}`}
                            onClick={() => setNonBinarySelected(!nonBinarySelected)}
                        >
                            Non-Binary
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${transMaleSelected ? 'scale-125' : ''}`}
                            onClick={() => setTransMaleSelected(!transMaleSelected)}
                        >
                            Transgender Male
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${transFemaleSelected ? 'scale-125' : ''}`}
                            onClick={() => setTransFemaleSelected(!transFemaleSelected)}
                        >
                            Transgender Female
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${genderVariantSelected ? 'scale-125' : ''}`}
                            onClick={() => setGenderVariantSelected(!genderVariantSelected)}
                        >
                            Gender Variant / Non-Conforming
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${preferNotToSaySelected ? 'scale-125' : ''}`}
                            onClick={() => setPreferNotToSaySelected(!preferNotToSaySelected)}
                        >
                            Prefer not to Say
                        </button>
                        <button
                            className={`bg-white text-gray-800 font-bold rounded-full py-2 px-4 mb-4 transform hover:scale-110 shadow-lg ${otherSelected ? 'scale-125' : ''}`}
                            onClick={() => setOtherSelected(!otherSelected)}
                        >
                            Other
                        </button>
                    </div>

                        <div className="flex justify-center pt-3">
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            onClick={() => setStep(step - 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            onClick={() => setStep(step + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        </div>
                    </>
                    )}
                    {step === 12 && (
                    <>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col mr-8">
                            <p className="text-lg mb-2">Monday</p>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={monAmSelected}
                                        onChange={() => setMonAmSelected(!monAmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">AM</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={monPmSelected}
                                        onChange={() => setMonPmSelected(!monPmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">PM</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col mr-8">
                            <p className="text-lg mb-2">Tuesday</p>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={tueAmSelected}
                                        onChange={() => setTueAmSelected(!tueAmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">AM</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={tuePmSelected}
                                        onChange={() => setTuePmSelected(!tuePmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">PM</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col mr-8">
                            <p className="text-lg mb-2">Wednesday</p>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={wedAmSelected}
                                        onChange={() => setWedAmSelected(!wedAmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">AM</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-gray-600"
                                        checked={wedPmSelected}
                                        onChange={() => setWedPmSelected(!wedPmSelected)}
                                    />
                                    <span className="ml-2 text-white font-medium">PM</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col mr-8">    
                        <p className="text-lg mb-2">Thursday</p>
                    <div className="flex items-center" style={{paddingBottom: '8px'}}>
                        <label className="inline-flex items-center" style={{color: '#fff'}}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={thuAMSelected}
                            onChange={() => setThuAMSelected(!thuAMSelected)}
                        />
                        <span className="ml-2 font-medium">AM</span>
                        </label>
                        <label className="inline-flex items-center ml-6" style={{color: '#fff'}}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={thuPMSelected}
                            onChange={() => setThuPMSelected(!thuPMSelected)}
                        />
                        <span className="ml-2 font-medium">PM</span>
                        </label>
                    </div>
                    </div>
                    <div>
                    <p className="text-lg mb-2">Friday</p>
                    <div className="flex items-center" style={{paddingBottom: '8px'}}>
                        <label className="inline-flex items-center" style={{color: '#fff'}}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={friAMSelected}
                            onChange={() => setFriAMSelected(!friAMSelected)}
                        />
                        <span className="ml-2 font-medium">AM</span>
                        </label>
                        <label className="inline-flex items-center ml-6" style={{color: '#fff'}}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600"
                            checked={friPMSelected}
                            onChange={() => setFriPMSelected(!friPMSelected)}
                        />
                        <span className="ml-2 font-medium">PM</span>
                        </label>
                    </div>
                    </div>

                </div>
                
                    <div className="flex justify-center pt-3">
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            onClick={() => setStep(step - 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                            style={{ maxWidth: '150px' }}
                            onClick={() => setStep(step + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        </div>
                    </>
                    )}
                    {step === 13 && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center">
                        <p className="w-1/2 text-center text-lg mb-8">
                            Your confidential answers have been forwarded to a Psych Book Match Maker. They will be in touch with you very shortly via email or phone, with a recommendation for a therapist that best suits your needs.
                        </p>
                        </div>
                        <button
                        className="bg-white text-gray-800 font-bold rounded-full py-2 px-4 mx-2 mb-4 transform hover:scale-110 shadow-lg"
                        onClick={() => window.location.href='/'}
                        >
                        Back to Home
                        </button>
                    </div>
                    )}

                </div>
            </div>
        </div>
  );
};
export default GetMatched;