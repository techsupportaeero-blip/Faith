import { Link } from 'react-router-dom';
import { Quote, ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

const stories = [
  { name: 'Meera, 19', place: 'Belagavi, Karnataka', img: '/images/higher-education.jpg', program: 'Higher Education Access', story: 'First engineer in her village. On a FAITH scholarship at NIT Warangal, mentoring five juniors back home.' },
  { name: 'Arjun, 17', place: 'Guwahati, Assam', img: '/images/tech-education.jpg', program: 'Digital & Tech Skilling', story: 'Built a Assamese-language crop-advisory chatbot in Grade 11. Now interning at a Bengaluru startup.' },
  { name: 'Lakshmi, 34', place: 'Madurai, Tamil Nadu', img: '/images/women-empowerment.jpg', program: 'Women & Livelihoods', story: 'Started a tailoring collective employing seven women. Household income lifted 3.4× in two years.' },
  { name: 'Class 5B, Ranchi', place: 'Jharkhand', img: '/images/school-children.jpg', program: 'Foundational Learning', story: 'The whole class moved from grade-level illiteracy to age-appropriate reading in a single academic year.' },
];

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Numbers, faces, and futures."
        subtitle="The best measure of a foundation isn’t the money it raises — it’s the lives it re-writes. Here’s what nine years of patient work looks like."
        image="/images/hero-students.jpg"
      />

      {/* Big stats */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: 42000, s: '+', l: 'Learners Impacted' },
            { n: 187, s: '', l: 'Partner Institutions' },
            { n: 12, s: '', l: 'States' },
            { n: 96, s: '%', l: 'Fund Utilization' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-navy text-cream rounded-3xl p-8 relative overflow-hidden lift">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gold/20 blur-2xl" />
                <TrendingUp className="w-6 h-6 text-gold mb-3" />
                <p className="font-serif text-5xl"><Counter to={s.n} suffix={s.s} /></p>
                <p className="mt-2 text-cream/70 text-sm uppercase tracking-widest">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal className="mb-12">
          <p className="ornament mb-4">Voices from the field</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Real stories, <em className="text-gold-dark">no filters</em>.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group bg-white rounded-3xl border border-navy/10 overflow-hidden lift h-full">
                <div className="relative h-72 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-cream flex items-center gap-2 text-sm bg-navy/60 backdrop-blur px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-gold" /> {s.place}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-widest text-gold-dark font-semibold">{s.program}</p>
                  <h3 className="font-serif text-2xl text-navy mt-2">{s.name}</h3>
                  <div className="flex gap-4 mt-3">
                    <Quote className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <p className="text-navy/75">{s.story}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal>
            <p className="ornament mb-4">Reporting</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">We measure. We publish. <em className="text-gold-light">We iterate.</em></h2>
            <p className="mt-5 text-cream/75 leading-relaxed">
              Every year, FAITH publishes an audited financial statement, a program
              impact assessment, and an independent third-party evaluation of every
              flagship pillar. Because trust is earned in the details.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition">Request annual report <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { y: '2023-24', t: 'Annual Impact Report' },
                { y: '2023-24', t: 'Audited Financials' },
                { y: '2023', t: 'Higher-Ed Evaluation' },
                { y: '2023', t: 'Digital Skilling Study' },
              ].map((r) => (
                <div key={r.t} className="bg-navy-deep border border-cream/10 rounded-2xl p-6 lift">
                  <p className="text-gold text-xs uppercase tracking-widest">{r.y}</p>
                  <p className="font-serif text-xl mt-2">{r.t}</p>
                  <p className="mt-4 text-cream/60 text-sm flex items-center gap-1">Download PDF <ArrowRight className="w-3 h-3" /></p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
