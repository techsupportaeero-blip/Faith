import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Cpu, Sparkles, HandHeart, Quote, BookOpen, Users, Award, Building2, Play } from 'lucide-react';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src="/images/hero-students.jpg" alt="Students" className="w-full h-full object-cover kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
        </div>

        {/* Decorative ornaments */}
        <div className="absolute right-10 top-24 hidden lg:block">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="w-72 h-72 rounded-full border border-gold/30" />
        </div>
        <div className="absolute right-24 top-40 hidden lg:block">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="w-48 h-48 rounded-full border border-gold/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="ornament text-gold mb-6">
            Section-8 CSR Foundation · Est. 2015
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="font-serif text-cream text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-tight max-w-4xl font-medium"
          >
            Empowering minds. <br />
            <span className="italic text-gold-light">Building</span> futures.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed"
          >
            FAITH is a Corporate Social Responsibility foundation advancing innovation,
            technology and higher education for underserved communities across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/donate" className="group inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold-light px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-gold/30 transition-all">
              Donate & Change Lives
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 border border-cream/30 text-cream hover:bg-cream/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition">
              <Play className="w-4 h-4 fill-current" />
              Our Programs
            </Link>
          </motion.div>

          {/* Trust ribbon */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-20 pt-8 border-t border-cream/10 max-w-3xl grid grid-cols-3 gap-6">
            {[
              { n: '150+', l: 'Communities Served' },
              { n: '80G / 12A', l: 'Tax Certified' },
              { n: '42', l: 'Corporate Partners' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl md:text-4xl text-gold-light">{s.n}</p>
                <p className="text-cream/60 text-xs uppercase tracking-widest mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-xs tracking-widest uppercase flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>Scroll</motion.div>
          <span className="w-px h-8 bg-cream/30" />
        </div>
      </section>

      {/* Mission stripe */}
      <section className="bg-cream-warm border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-10 overflow-hidden">
          <div className="flex marquee-track gap-16 whitespace-nowrap font-serif text-2xl md:text-3xl text-navy/70 italic">
            {[...Array(2)].flatMap((_, k) => [
              <span key={`e-${k}`} className="flex items-center gap-16">
                <span>Education is the most powerful weapon.</span>
                <Sparkles className="w-5 h-5 text-gold" />
                <span>Innovation for every child.</span>
                <Sparkles className="w-5 h-5 text-gold" />
                <span>Technology as a tool for equity.</span>
                <Sparkles className="w-5 h-5 text-gold" />
                <span>Higher education for all.</span>
                <Sparkles className="w-5 h-5 text-gold" />
              </span>,
            ])}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src="/images/mentorship.jpg" alt="Mentorship" className="rounded-3xl w-full h-[520px] object-cover" />
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-navy text-cream rounded-2xl p-6 shadow-2xl max-w-[240px]">
                <p className="font-serif text-4xl text-gold"><Counter to={9} />+</p>
                <p className="text-sm text-cream/80 mt-1">Years of unwavering commitment to inclusive education.</p>
              </div>
              <div className="absolute -top-6 -left-4 md:-left-8 bg-cream border border-navy/10 rounded-2xl p-5 shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-navy font-semibold text-sm">CSR Verified</p>
                  <p className="text-navy/60 text-xs">Ministry of Corporate Affairs</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="ornament mb-4">Who We Are</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight tracking-tight">
              A foundation built on <em className="text-gold-dark">trust</em>, powered by <em className="text-gold-dark">purpose</em>.
            </h2>
            <p className="mt-6 text-navy/70 text-lg leading-relaxed">
              Since 2015, FAITH has partnered with visionary corporates, educators and
              community leaders to design programs that break the cycle of inequity.
              We channel CSR investments into measurable outcomes — from primary literacy
              to advanced technology skilling and higher-education scholarships.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: BookOpen, t: 'Rooted in Research', d: 'Every program is designed with academic precision' },
                { icon: Users, t: 'Community First', d: 'We build with, not for, the people we serve.' },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 p-4 rounded-2xl bg-cream-warm/60 border border-navy/5">
                  <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold text-navy">{t}</p>
                    <p className="text-navy/60 text-sm">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C8A24A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal>
              <p className="ornament mb-4">Our Programs</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-2xl">Four pillars.<br /><span className="italic text-gold-light">One thousand</span> ripples.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-cream/70 max-w-md">
                Every pillar is designed to work in concert — education for the child,
                skills for the youth, opportunity for the family.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BookOpen, t: 'Foundational Learning', d: 'Literacy, numeracy and joyful classrooms for K-8 students in underserved schools.', img: '/images/school-children.jpg' },
              { icon: Cpu, t: 'Digital & Tech Skilling', d: 'Coding, AI literacy and design thinking for high-schoolers and college aspirants.', img: '/images/tech-education.jpg' },
              { icon: GraduationCap, t: 'Higher Education Access', d: 'Scholarships, mentorship and admissions support for first-generation graduates.', img: '/images/higher-education.jpg' },
              { icon: HandHeart, t: 'Women & Livelihoods', d: 'Financial literacy, vocational training and micro-enterprise incubation.', img: '/images/women-empowerment.jpg' },
            ].map(({ icon: Icon, t, d, img }, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="lift group relative rounded-2xl overflow-hidden bg-navy-deep border border-cream/10 h-full">
                  <div className="h-56 overflow-hidden">
                    <img src={img} alt={t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent h-56" />
                  </div>
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-full bg-gold text-navy flex items-center justify-center mb-4 -mt-14 relative shadow-lg"><Icon className="w-5 h-5" /></div>
                    <h3 className="font-serif text-2xl mb-2">{t}</h3>
                    <p className="text-cream/70 text-sm leading-relaxed">{d}</p>
                    <Link to="/programs" className="mt-5 inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="ornament mb-4">Impact by Numbers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Every rupee. Every hour. <em className="text-gold-dark">Accounted for.</em></h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: 42000, s: '+', l: 'Students Impacted' },
              { n: 187, s: '', l: 'Partner Schools' },
              { n: 2400, s: '+', l: 'Scholarships Awarded' },
              { n: 96, s: '%', l: 'CSR Fund Utilization' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-navy/10 lift text-center relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold/10" />
                  <p className="font-serif text-5xl md:text-6xl font-semibold text-navy">
                    <Counter to={s.n} suffix={s.s} />
                  </p>
                  <p className="mt-2 text-navy/60 text-sm uppercase tracking-widest">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative py-24 md:py-32 bg-navy-deep text-cream overflow-hidden">
        <img src="/images/library.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-14 h-14 text-gold mx-auto mb-8" />
          <Reveal>
            <p className="font-serif text-2xl md:text-4xl italic leading-snug">
              “FAITH gave my daughter a scholarship, a laptop and a mentor.
              Today she is the first engineer in our family. Their work does not
              stop at charity — they build futures.”
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy font-serif text-xl font-bold">RS</div>
            <p className="mt-3 font-semibold">Rekha Suresh</p>
            <p className="text-cream/60 text-sm">Parent · Coimbatore</p>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-10">
            <p className="ornament mb-4">Trusted By</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">Some of India's <em className="text-gold-dark">most conscious</em> corporates</h2>
          </Reveal>
          <div className="relative overflow-hidden">
            <div className="flex marquee-track gap-16 whitespace-nowrap">
              {[...Array(2)].flatMap((_, k) => (
                ['Tata Consultancy', 'Infosys Foundation', 'Wipro Cares', 'Reliance', 'HDFC Ergo', 'Bosch India', 'HCL Foundation', 'Mahindra Rise', 'Zoho Schools', 'ITC Sunehra Kal'].map((name) => (
                  <div key={`${k}-${name}`} className="flex items-center gap-3 text-navy/50 font-serif text-2xl">
                    <Building2 className="w-6 h-6" />
                    <span>{name}</span>
                  </div>
                ))
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/partners" className="inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              Become a partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-navy via-navy-soft to-navy p-10 md:p-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-sky/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <p className="ornament mb-4">Take Action</p>
                <h2 className="font-serif text-cream text-4xl md:text-5xl leading-tight">
                  Your contribution funds a<br /> child's <span className="shine-text">tomorrow</span>.
                </h2>
                <p className="mt-5 text-cream/70 max-w-lg">
                  ₹1,500 sponsors a semester of coding classes. ₹25,000 grants a
                  scholarship. ₹1,00,000 builds a smart classroom.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                <Link to="/donate" className="bg-gold text-navy px-8 py-4 rounded-full font-semibold text-center hover:bg-gold-light transition shadow-2xl">Donate Now</Link>
                <Link to="/get-involved" className="border border-cream/30 text-cream px-8 py-4 rounded-full font-semibold text-center hover:bg-cream/10 transition">Volunteer With Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
