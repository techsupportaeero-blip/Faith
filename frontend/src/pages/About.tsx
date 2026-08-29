import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Compass, Award, ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const timeline = [
  { y: '2015', t: 'The Beginning', d: 'FAITH is founded in Bengaluru as a Section-8 CSR company by a collective of educators, engineers and CSR leaders.' },
  { y: '2017', t: 'First 25 Schools', d: 'Foundational Learning program is launched across 25 rural government schools in Karnataka and Tamil Nadu.' },
  { y: '2019', t: 'Digital Skilling Wave', d: 'Corporate partners help us launch coding & AI labs, reaching 5,000+ high-school students.' },
  { y: '2021', t: 'The Scholarship Bridge', d: 'We launch the FAITH Merit Scholarship — the first cohort of 200 first-generation college students.' },
  { y: '2023', t: 'Women & Livelihoods', d: 'A new pillar for financial literacy, vocational skilling and micro-enterprise support for women.' },
  { y: 'Today', t: '42,000+ Learners', d: 'Present across 12 states with 42 corporate partners and 187 partner institutions.' },
];

const team = [
  { n: 'Dr. Anjali Menon', r: 'Founder & Chairperson', bio: 'Former Dean, IIT Madras. 25 years in education policy.' },
  { n: 'Kabir Rao', r: 'CEO', bio: 'Ex-McKinsey. Led CSR strategy for Fortune 100 clients.' },
  { n: 'Priya Balakrishnan', r: 'Head of Programs', bio: 'Educator, TFI alumna. Designs measurable interventions.' },
  { n: 'Vikram Iyer', r: 'Head of Partnerships', bio: 'Two decades of corporate philanthropy leadership.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A quiet revolution in Indian education."
        subtitle="We believe that potential is universal but opportunity is not. FAITH exists to bridge that gap — methodically, transparently, at scale."
        image="/images/team.jpg"
      />

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: 'Our Mission', d: 'To advance innovation, technology and higher education for every learner underserved by the current system — with measurable, dignified, and lasting impact.' },
            { icon: Eye, t: 'Our Vision', d: 'An India where geography, gender and income never dictate the ceiling of a child’s ambition.' },
            { icon: Compass, t: 'Our Values', d: 'Radical transparency. Community-first design. Evidence over ego. Long-term partnership over short-term optics.' },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="relative rounded-3xl bg-gradient-to-br from-cream-warm to-cream border border-navy/10 p-8 h-full lift">
                <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center mb-5"><Icon className="w-6 h-6" /></div>
                <h3 className="font-serif text-3xl text-navy mb-3">{t}</h3>
                <p className="text-navy/70 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="ornament mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Born from a<br /><em className="text-gold-light">simple question:</em></h2>
            <p className="mt-6 font-serif italic text-2xl text-gold-light">“What if the next great engineer of India is a girl in a village school with no laptop?”</p>
            <p className="mt-6 text-cream/75 leading-relaxed">
              That question, asked in a 2014 boardroom by our founder Dr. Anjali Menon, became
              a decade-long commitment. FAITH began as a modest scholarship fund and has grown
              into a multi-pillar CSR platform trusted by India’s largest corporates to design,
              deliver and audit programs that actually work.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: '9+', l: 'Years' },
                { n: '12', l: 'States' },
                { n: '42', l: 'Partners' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-3xl text-gold-light">{s.n}</p>
                  <p className="text-cream/60 text-xs uppercase tracking-widest">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <img src="/images/mentorship.jpg" alt="" className="rounded-3xl w-full h-[520px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-cream text-navy rounded-2xl p-6 shadow-2xl max-w-xs">
                <Award className="w-8 h-8 text-gold mb-3" />
                <p className="font-serif text-lg leading-snug">Rated ‘A+’ by GiveIndia for governance & impact reporting.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="ornament mb-4">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">Nine years, one <em className="text-gold-dark">north star</em>.</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent" />
          {timeline.map((step, i) => (
            <motion.div
              key={step.y}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}
            >
              <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:[direction:ltr]'}`}>
                <p className="font-serif text-5xl text-gold">{step.y}</p>
                <h3 className="font-serif text-2xl text-navy mt-1">{step.t}</h3>
                <p className="text-navy/60 mt-2 max-w-md md:inline-block">{step.d}</p>
              </div>
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-cream" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-warm/60 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="ornament mb-4">The People</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Led by <em className="text-gold-dark">practitioners</em>, not just planners.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden border border-navy/10 lift">
                  <div className="h-48 bg-gradient-to-br from-navy via-navy-soft to-navy relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#C8A24A 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <span className="relative font-serif text-6xl text-gold-light">{t.n.split(' ').map((s) => s[0]).slice(0,2).join('')}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy">{t.n}</h3>
                    <p className="text-gold-dark text-sm font-medium mt-1">{t.r}</p>
                    <p className="text-navy/60 text-sm mt-3">{t.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-navy text-cream p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="ornament mb-3">Together</p>
            <h3 className="font-serif text-3xl md:text-4xl">Curious to see our programs in action?</h3>
          </div>
          <div className="flex gap-3">
            <Link to="/programs" className="bg-gold text-navy px-7 py-3 rounded-full font-semibold hover:bg-gold-light transition inline-flex items-center gap-2">Our Programs <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/impact" className="border border-cream/30 px-7 py-3 rounded-full font-semibold hover:bg-cream/10 transition inline-flex items-center gap-2"><Sparkles className="w-4 h-4" /> Impact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
