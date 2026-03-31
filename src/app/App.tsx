import { motion } from 'motion/react';
import { Dumbbell, Menu, X, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from './components/figma/gymhero.png';
import heroimagetwo from './components/figma/gymheroone.png';
import weight from './components/figma/weight.png';
import olympic from './components/figma/olympic.png';
import strength from './components/figma/strength.png';
import cable from './components/figma/cable.png';
import battlerope from './components/figma/battlerope.png';
import bodybuilding from './components/figma/bodybuilding.png';
import gymboost from './components/figma/gymboost.png';
import gymboosttwo from './components/figma/gymboosttwo.png';
import testimony from './components/figma/testimony.png';
import testimonytwo from './components/figma/testimonytwo.png';
import testimonythree from './components/figma/testimonythree.png';
import testimonyfour from './components/figma/testimonyfour.png';
import addidas from './components/figma/addidas.png';
import fila from './components/figma/fila.png';
import nike from './components/figma/nike.png';
import newbalance from './components/figma/newbalance.png';
import umbro from './components/figma/umbro.png';
import timberland from './components/figma/timberland.png';
import lululemon from './components/figma/lululemon.png';
import puma from './components/figma/puma.png';
import { AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "I love the variety of workouts on FitPulse. Whether it's HIIT, Yoga, or Strength Training, there's always something new to try. The progress tracking tools keep me motivated!",
    name: 'James T.', location: 'LA, USA', rating: 4,
    image: testimony,
  },
  {
    text: "FitPulse transformed my life! I've lost 40 pounds and gained incredible strength. The trainers are phenomenal and truly care about your success.",
    name: 'Jessica M.', location: 'NY, USA', rating: 5,
   image: testimonytwo,
    },
  {
    text: "Best gym experience ever! The community is supportive, the equipment is top-notch, and the results speak for themselves. Highly recommend!",
    name: 'Michael B.', location: 'Chicago, USA', rating: 5,
    image: testimonythree,
  },
  {
    text: "The personalized training program and nutrition guidance made all the difference. I never thought I could achieve this level of fitness.",
    name: 'Amanda F.', location: 'Miami, USA', rating: 5,
    image:testimonyfour,
   },
]

const features = [
  {
    title: 'Cardio Training',
    description: 'Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.',
    icon: <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>,
  },
  {
    title: 'Strength Build',
    description: 'Develop power and resilience through expert-guided strength training tailored to all fitness levels.',
    icon: <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>,
  },
  {
    title: 'Fat Loss',
    description: 'Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.',
    icon: <path d="M13.5 .67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/>,
  },
  {
    title: 'HIIT Workouts',
    description: 'Maximize calorie burn and improve fitness with short, intense high-intensity interval training sessions.',
    icon: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>,
  },
  {
    title: 'Nutrition Guidance',
    description: 'Fuel your body right with personalized nutrition plans crafted to complement your training goals.',
    icon: <path d="M17 8C8 10 5.9 16.17 3.82 19.82A1 1 0 0 0 5 21c6-2 9-6 9-12zM9.27 15.73A3.49 3.49 0 0 0 7 15a3.5 3.5 0 0 0 3.5 3.5c.13 0 .25-.01.37-.02C10.62 17.62 10.1 16.6 9.27 15.73z"/>,
  },
  {
    title: 'Community Support',
    description: 'Train alongside a motivated community that pushes you to show up, stay consistent, and grow.',
    icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>,
  },
]

const trainers = [
  {
    image: 'https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHByb2ZpbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ3MTQ5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Blake Hunter', specialty: 'Strength & Conditioning', experience: '10+ Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1771553468563-d4ee43401821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwZml0bmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDcxNDk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Liam Crossfit', specialty: 'HIIT & Cardio', experience: '8+ Years',
  },
  {
    image: 'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGNsaWVudHxlbnwxfHx8fDE3NzQ3MTM2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Logan Torque', specialty: 'Yoga & Flexibility', experience: '12+ Years',
  },
]

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 400 : -400, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -400 : 400, opacity: 0 }),
}

export default function App() {

  // ── Testimonials slider ──
  const [testimonialCurrent, setTestimonialCurrent] = useState(0)
  const [testimonialDirection, setTestimonialDirection] = useState(1)

  const goNext = () => {
    setTestimonialDirection(1)
    setTestimonialCurrent(prev => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setTestimonialDirection(-1)
    setTestimonialCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialDirection(1)
      setTestimonialCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // ── Features slider ──
  const [featureCurrent, setFeatureCurrent] = useState(0)
  const [featureVisible, setFeatureVisible] = useState(4)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setFeatureVisible(1)
      else if (window.innerWidth < 1024) setFeatureVisible(2)
      else setFeatureVisible(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const featureTotalSlides = Math.ceil(features.length / featureVisible)

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureCurrent(prev => (prev + 1) % featureTotalSlides)
    }, 3500)
    return () => clearInterval(timer)
  }, [featureTotalSlides])

  const visibleCards = features.slice(featureCurrent * featureVisible, featureCurrent * featureVisible + featureVisible)
  const padded = [...visibleCards, ...Array(Math.max(0, featureVisible - visibleCards.length)).fill(null)]

  // ── Trainers slider ──
  const [trainerCurrent, setTrainerCurrent] = useState(0)
  const [trainerVisible, setTrainerVisible] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setTrainerVisible(1)
      else if (window.innerWidth < 1024) setTrainerVisible(2)
      else setTrainerVisible(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const trainerTotalSlides = Math.ceil(trainers.length / trainerVisible)

  useEffect(() => {
    const timer = setInterval(() => {
      setTrainerCurrent(prev => (prev + 1) % trainerTotalSlides)
    }, 4000)
    return () => clearInterval(timer)
  }, [trainerTotalSlides])

  const visibleTrainers = trainers.slice(trainerCurrent * trainerVisible, trainerCurrent * trainerVisible + trainerVisible)

  // ── Other state ──
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

    {/* Navigation */}
<motion.nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}
  initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Dumbbell className="w-8 h-8 text-[#BFFF0B]" />
      <span className="text-xl font-bold">PrimeFit</span>
    </div>
    <div className="hidden md:flex items-center gap-8">
      {['Home','Programs','Trainers','Testimonials'].map(item => (
        <button
          key={item}
          onClick={() => {
            document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="hover:text-[#BFFF0B] transition-colors"
        >
          {item}
        </button>
      ))}
    </div>
    <button className="bg-[#BFFF0B] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#a8e600] transition-colors hidden md:block">
      Join Now
    </button>
    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
  {isMenuOpen && (
    <motion.div
      className="md:hidden bg-black border-t border-gray-800 mt-4"
      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
    >
      <div className="flex flex-col gap-4 p-6">
        {['Home','Programs','Trainers','Testimonials'].map(item => (
          <button
            key={item}
            onClick={() => {
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              setIsMenuOpen(false)
            }}
            className="hover:text-[#BFFF0B] transition-colors text-left"
          >
            {item}
          </button>
        ))}
        <button className="bg-[#BFFF0B] text-black px-6 py-2 rounded-full font-semibold">Join Now</button>
      </div>
    </motion.div>
  )}
</motion.nav>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img src={heroImage} alt="Fitness hero" className="absolute inset-0 w-full h-full object-cover opacity-70" style={{ width: '100%', height: '90%', marginTop: '83px' }} />
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Transform </span><span className="text-[#BFFF0B]">Your</span><span className="text-white"> Body,</span>
              <br />
              <span className="text-white">Boost </span><span className="text-[#BFFF0B]">Your</span><span className="text-white"> Spirit</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Transform your life with personalized training programs designed to push your limits and unlock your true potential.
            </p>
            <motion.button className="bg-[#BFFF0B] text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-[#a8e600] transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

     {/* Brand Marquee */}
<section className="py-7 bg-black overflow-hidden border-y border-white/5">
  <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
  <div
    className="flex w-max items-center"
    style={{ animation: "marquee 28s linear infinite" }}
    onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
    onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
  >
    {[...Array(2)].map((_, dupe) => (
      <div key={dupe} className="flex items-center">
        {[addidas, fila, nike, newbalance, umbro, timberland, lululemon, puma].map((logo, i) => (
          <div key={i} className="px-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            <img src={logo} alt="brand" className="h-7 w-auto object-contain filter" />
          </div>
        ))}
      </div>
    ))}
  </div>
</section>

      {/* Inspired / Features Banner */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Inspired to <span className="text-[#BFFF0B]">Inspire</span> Your Best Self
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We believe in empowering individuals to reach their full potential through dedication, science-backed training, and unwavering support.
            </p>
          </motion.div>
          <div className="relative rounded-3xl overflow-hidden min-h-[320px]">
            <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url('${heroimagetwo}')`, backgroundPosition: window.innerWidth < 768 ? 'center center' : 'left center' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #1a1e14 0%, rgba(26,30,20,0.92) 35%, rgba(26,30,20,0.5) 60%, rgba(26,30,20,0.0) 100%)' }} />
            <div className="absolute inset-0 bg-[#0f120c]/60 md:hidden" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-7 px-8 md:px-14 py-12 max-w-[680px]">
              {[
                { label: 'Nutrition Guidance', icon: <path d="M17 8C8 10 5.9 16.17 3.82 19.82A1 1 0 0 0 5 21c6-2 9-6 9-12zM9.27 15.73A3.49 3.49 0 0 0 7 15a3.5 3.5 0 0 0 3.5 3.5c.13 0 .25-.01.37-.02C10.62 17.62 10.1 16.6 9.27 15.73z" /> },
                { label: 'Expert Trainers', icon: <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" /> },
                { label: 'Progress Tracking', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /> },
                { label: 'Premium Membership', icon: <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7 2a.3.3 0 0 0-.3.3v.4c0 .17.13.3.3.3h8.6c.17 0 .3-.13.3-.3v-.4a.3.3 0 0 0-.3-.3H7.7z" /> },
                { label: 'Community Support', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /> },
                { label: 'Next-Level Fitness Spaces', icon: <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" /> },
              ].map(({ label, icon }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#8ab800] bg-[#b8e000]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-[#b8e000]" viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <span className="text-[16px] font-bold text-gray-100 tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Discover</span><br />
              <span className="text-[#BFFF0B]">What Sets Us Apart</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base max-w-2xl mx-auto">
              We deliver a fitness experience that's truly one-of-a-kind. Explore how we help you achieve your goals faster and smarter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[280px]">
            <AnimatePresence mode="wait">
              {padded.map((card, i) =>
                card ? (
                  <motion.div
                    key={`${featureCurrent}-${i}`}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-[#111a0e] border border-white/5 rounded-2xl p-6 flex flex-col gap-5 hover:border-[#BFFF0B]/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1e2a14] border border-[#BFFF0B]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 fill-[#BFFF0B]" viewBox="0 0 24 24">{card.icon}</svg>
                    </div>
                    <h3 className="text-white font-black text-xl leading-tight">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{card.description}</p>
                    <button className="w-fit mt-auto px-6 py-2.5 bg-[#BFFF0B] text-black text-sm font-bold rounded-full hover:bg-[#d4ff3d] transition-colors duration-200">See Plan</button>
                  </motion.div>
                ) : (
                  <div key={`pad-${i}`} className="hidden lg:block" />
                )
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: featureTotalSlides }).map((_, i) => (
              <button key={i} onClick={() => setFeatureCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === featureCurrent ? 'w-7 bg-[#BFFF0B]' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Train Smarter */}
      {/* <section id="programs" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Train <span className="text-[#BFFF0B]">Smarter</span><br />Unleash Your Potential
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">Explore our diverse training programs designed to challenge and transform you.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            {[
              { image: strength, title: 'Strength Training', category: 'Power Building' },
              { image: weight, title: 'Weight Lifting', category: 'Muscle Building' },
              { image: olympic, title: 'Olympic Lifts', category: 'Advanced Training' },
              { image: cable, title: 'Cable Training', category: 'Functional Fitness' },
              { image: battlerope, title: 'Battle Ropes', category: 'Cardio HIIT' },
              { image: bodybuilding, title: 'Bodybuilding', category: 'Physique Development' },
            ].map((program, index) => (
              <motion.div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#BFFF0B] text-sm font-semibold mb-2">{program.category}</div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Experience Fitness */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Experience</span><br />
              <span className="text-[#BFFF0B]">Fitness Like Never Before</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base max-w-2xl mx-auto">Transform the way you train with innovative workouts, expert guidance, and state-of-the-art facilities.</p>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
            <motion.div className="relative w-full lg:w-[520px] bg-[#111a0e] rounded-3xl overflow-hidden min-h-[480px] flex-shrink-0" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={gymboost} alt="Endurance athlete" className="absolute inset-0 w-full h-full object-cover object-top z-0" />
              <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(10,18,6,0.15) 0%, rgba(10,18,6,0.7) 45%, rgba(10,18,6,0.95) 100%)' }} />
              <div className="relative z-[2] flex flex-col items-end text-right p-8 h-full min-h-[480px]">
                <h3 className="text-[#BFFF0B] text-2xl font-black mb-4 mt-4">Endurance Evolution</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">Boost your stamina and resilience with tailored cardio and endurance workouts designed to keep you moving stronger for longer.</p>
                <button className="mt-6 px-6 py-2.5 bg-[#BFFF0B] text-black text-sm font-black rounded-full hover:bg-[#d4ff3d] transition-colors">Read More</button>
                <div className="mt-auto bg-[#1e2a14]/90 backdrop-blur-sm rounded-2xl p-4 w-36 text-left rotate-[-6deg] self-end mr-4 mb-2 border border-[#BFFF0B]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 fill-[#BFFF0B]" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
                  </div>
                  <svg className="w-full h-8 mb-1" viewBox="0 0 100 30" fill="none">
                    <polyline points="0,15 15,15 20,5 25,25 30,15 40,15 45,2 50,28 55,15 70,15 75,8 80,22 85,15 100,15" stroke="#BFFF0B" strokeWidth="2" fill="none"/>
                  </svg>
                  <div className="text-white text-2xl font-black">95</div>
                  <div className="text-gray-400 text-xs tracking-widest">BPM</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative w-full lg:w-[520px] bg-[#111a0e] rounded-3xl overflow-hidden min-h-[480px] flex-shrink-0 lg:mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <img src={gymboosttwo} alt="Speed athlete" className="absolute inset-0 w-full h-full object-cover object-top z-0" />
              <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to left, rgba(10,18,6,0.15) 0%, rgba(10,18,6,0.7) 45%, rgba(10,18,6,0.95) 100%)' }} />
              <div className="relative z-[2] flex flex-col items-start text-left p-8 h-full min-h-[480px]">
                <h3 className="text-[#BFFF0B] text-2xl font-black mb-4 mt-4">Speed Surge</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">Boost your agility and explosiveness with high-intensity sprint and movement drills. Speed Surge is designed to take your performance to the next level!</p>
                <button className="mt-6 px-6 py-2.5 bg-[#BFFF0B] text-black text-sm font-black rounded-full hover:bg-[#d4ff3d] transition-colors">Read More</button>
                <div className="mt-auto bg-[#1e2a14]/90 backdrop-blur-sm rounded-2xl p-4 w-36 rotate-[6deg] self-start ml-4 mb-2 border border-[#BFFF0B]/10">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 fill-[#BFFF0B]" viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>
                  </div>
                  <div className="relative w-16 h-16 mx-auto mb-1">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#2a3a1a" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#BFFF0B" strokeWidth="3" strokeDasharray="75 25" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xs font-black">1024</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs tracking-widest text-center">STEPS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Your Fitness</span><br />
              <span className="text-[#BFFF0B]">Goals, Their Expertise</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base max-w-2xl mx-auto">Our team of certified trainers brings unparalleled expertise to help you achieve your fitness goals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
            <AnimatePresence mode="wait">
              {visibleTrainers.map((trainer, i) => (
                <motion.div
                  key={`${trainerCurrent}-${i}`}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative overflow-hidden w-full" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 5%, 100% 100%, 0% 100%, 0% 5%)', aspectRatio: '3/4' }}>
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }} />
                  </div>
                  <div className="pt-5 px-1">
                    <h3 className="text-[#BFFF0B] text-xl font-black">{trainer.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{trainer.specialty} · {trainer.experience}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-1.5 mt-12">
            {Array.from({ length: trainerTotalSlides }).map((_, i) => (
              <button key={i} onClick={() => setTrainerCurrent(i)}
                className={`transition-all duration-300 ${i === trainerCurrent ? 'w-6 h-1.5 bg-[#BFFF0B] rounded-sm rotate-[-20deg]' : 'w-4 h-1.5 bg-white/25 rounded-sm rotate-[-20deg] hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Your Success</span><br />
              <span className="text-white">Stories, </span>
              <span className="text-[#BFFF0B]">Our Inspiration</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base max-w-2xl mx-auto">
              See how our customers have achieved their goals and let their journeys inspire yours!
            </p>
          </motion.div>

          <div className="relative flex items-center gap-0">

            {/* Left — large athlete image, slides with content */}
            <div className="hidden lg:block flex-shrink-0 relative overflow-hidden" style={{ width: '340px', marginLeft: '-60px' }}>
              <AnimatePresence mode="wait" custom={testimonialDirection}>
                <motion.div
                  key={`img-${testimonialCurrent}`}
                  custom={testimonialDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="relative overflow-hidden" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 6%, 100% 100%, 0% 100%, 0% 6%)', height: '520px' }}>
                    <img
                      src={testimonials[testimonialCurrent].image}
                      alt="Testimonial athlete"
                      className="w-full h-full object-cover object-top grayscale"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #000 100%)' }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center — quote card */}
            <div className="flex-1 flex flex-col justify-center px-4 lg:px-10 z-10">
              <div className="flex gap-3 mb-8">
                <button
                  onClick={goPrev}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#BFFF0B] hover:text-[#BFFF0B] transition-colors text-xl"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#BFFF0B] hover:text-[#BFFF0B] transition-colors text-xl"
                >
                  ›
                </button>
              </div>

              <AnimatePresence mode="wait" custom={testimonialDirection}>
                <motion.div
                  key={`quote-${testimonialCurrent}`}
                  custom={testimonialDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="bg-[#111a0e]/90 rounded-2xl p-8 max-w-lg border border-white/5"
                >
                  <p className="text-white text-base leading-relaxed mb-8">
                    "{testimonials[testimonialCurrent].text}"
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[#BFFF0B] font-black text-lg">— {testimonials[testimonialCurrent].name}</div>
                      <div className="text-gray-400 text-sm mt-1">{testimonials[testimonialCurrent].location}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[testimonialCurrent].rating)].map((_, i) => (
                        <span key={i} className="text-[#BFFF0B] text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — stacked smaller cards (static) */}
            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0" style={{ marginRight: '-30px' }}>
              {[
                { image: 'https://images.unsplash.com/photo-1771553468563-d4ee43401821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwZml0bmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDcxNDk1MXww&ixlib=rb-4.1.0&q=80&w=1080', name: 'Ryan Blaze' },
                { image: 'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGNsaWVudHxlbnwxfHx8fDE3NzQ3MTM2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Ethan Maxx' },
              ].map((person, i) => (
                <div key={i} className="relative overflow-hidden flex-shrink-0" style={{ width: '130px', height: '220px', borderRadius: '16px' }}>
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top grayscale" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-4 right-3 text-[#BFFF0B] font-black text-xs tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {person.name}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

   {/* CTA Section */}
<section className="py-24 px-6">
  <motion.div
    className="max-w-5xl mx-auto bg-[#BFFF0B] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
  >
    {/* Subtle dot grid pattern in background hee*/}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />

    {/* Content */}
    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-black text-black mb-4 leading-tight">
        Connect Engage Transform
      </h2>
      <p className="text-black/70 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Join a vibrant community for fuel motivation, engagement drives progress, and transformation
      </p>

      {/* Email input + button */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full sm:flex-1 px-6 py-4 rounded-xl text-black bg-white text-base outline-none placeholder-gray-400 border-none"
        />
        <button className="w-full sm:w-auto px-8 py-4 bg-black text-white text-base font-bold rounded-xl hover:bg-gray-900 transition-colors whitespace-nowrap">
          Join Now
        </button>
      </div>
    </div>
  </motion.div>
</section>
  {/* Footer*/}
<footer className="bg-black border-t border-gray-800 py-12 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Dumbbell className="w-8 h-8 text-[#BFFF0B]" />
          <span className="text-xl font-bold">PrimeFit</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">Your journey to a healthier, stronger you starts here. Transform your body and mind with us.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          {['About Us','Programs','Trainers','Pricing'].map(item => (
            <li key={item}><a href="#" className="hover:text-[#BFFF0B] transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Support</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          {['FAQs','Contact Us','Privacy Policy','Terms of Service'].map(item => (
            <li key={item}><a href="#" className="hover:text-[#BFFF0B] transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex flex-wrap gap-3">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#BFFF0B] hover:text-black transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <p>© 2026 PrimeFit. All rights reserved. Built with passion for fitness.</p>
    </div>
  </div>
</footer>

    </div>
  )
}