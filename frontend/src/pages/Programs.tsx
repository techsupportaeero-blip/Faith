import { Link } from 'react-router-dom';
import { BookOpen, Cpu, GraduationCap, HandHeart, ArrowRight, CheckCircle2, Users, Target, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const programs = [
  {
    id: 'foundational',
    icon: BookOpen,
    title: 'Foundational Learning',
    tag: 'Ages 6–14',
    img: '/images/school-children.jpg',
    lead: 'Reading. Writing. Wonder.',
    d: 'A structured literacy & numeracy program deployed inside government schools — pairing joyful classrooms with teacher training, learning kits and family engagement.',
    outcomes: ['92% reading proficiency', '3× math improvement', '18,000+ learners this year'],
    features: ['Trained ‘Learning Champions’', 'Localised curriculum in 6 languages', 'Parent literacy circles', 'Termly independent assessments'],
  },
  {
    id: 'tech',
    icon: Cpu,
    title: 'Digital & Tech Skilling',
    tag: 'Ages 14–22',
    img: '/images/tech-education.jpg',
    lead: 'From consumers to creators.',
    d: 'A future-ready curriculum covering coding, AI literacy, cybersecurity basics and design thinking — delivered through smart labs, remote mentors and industry-led capstones.',
    outcomes: ['1,200 students placed', '78 innovation projects', '24 partner tech companies'],
    features: ['Python & web fundamentals', 'AI/ML introduction workshops', '1:1 industry mentorship', 'Real-world capstone projects'],
  },
  {
    id: 'higher-ed',
    icon: GraduationCap,
    title: 'Higher Education Access',
    tag: 'Ages 17–24',
    img: '/images/higher-education.jpg',
    lead: 'The scholarship + support model.',
    d: 'FAITH Merit Scholarships combine tuition support with mentorship, wellbeing and career readiness for first-generation college students.',
    outcomes: ['2,400 scholars', '96% graduation rate', '84% placed within 6 months'],
    features: ['Full/partial tuition grants', 'Assigned career mentor', 'Wellbeing & counselling support', 'Alumni network of 3,000+'],
  },
  {
    id: 'livelihoods',
    icon: HandHeart,
    title: 'Women & Livelihoods',
    tag: 'All ages',
    img: '/images/women-empowerment.jpg',
    lead: 'Dignity through skill and enterprise.',
    d: 'A wraparound program of financial literacy, vocational training and micro-enterprise incubation — helping women earn, save and lead.',
    outcomes: ['5,600 women trained', '1,100 micro-enterprises', '3.2× average income lift'],
    features: ['Vocational skilling tracks', 'Financial literacy & banking', 'Micro-loan facilitation', 'Peer support collectives'],
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Four pillars. Designed to compound."
        subtitle="Every FAITH program is designed for measurable outcomes, dignified delivery and long-term compounding — in the learner’s life and in their community."
        image="/images/higher-education.jpg"
      />

      {/* Pillar cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a href={`#${p.id}`} className="group block rounded-3xl bg-white border border-navy/10 p-8 lift h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center"><p.icon className="w-6 h-6" /></div>
                  <span className="text-xs uppercase tracking-widest text-navy/50 bg-cream-warm px-3 py-1 rounded-full">{p.tag}</span>
                </div>
                <h3 className="font-serif text-3xl text-navy leading-tight">{p.title}</h3>
                <p className="mt-2 text-gold-dark italic">{p.lead}</p>
                <p className="mt-4 text-navy/70">{p.d}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-navy font-semibold group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deep-dive sections */}
      {programs.map((p, idx) => (
        <section key={p.id} id={p.id} className={`py-20 ${idx % 2 === 0 ? 'bg-cream-warm/50' : 'bg-cream'}`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className={idx % 2 === 0 ? '' : 'lg:order-2'}>
              <div className="relative">
                <img src={p.img} alt={p.title} className="rounded-3xl w-full h-[480px] object-cover shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-navy text-cream rounded-2xl p-5 max-w-xs shadow-2xl">
                  <p.icon className="w-6 h-6 text-gold mb-2" />
                  <p className="font-serif text-lg">{p.lead}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className={idx % 2 === 0 ? '' : 'lg:order-1'}>
              <p className="ornament mb-4">Pillar 0{idx + 1}</p>
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">{p.title}</h2>
              <p className="mt-5 text-navy/70 leading-relaxed text-lg">{p.d}</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {p.outcomes.map((o) => (
                  <div key={o} className="bg-white border border-navy/10 rounded-2xl p-4 text-center">
                    <p className="font-serif text-xl text-gold-dark">{o.split(' ')[0]}</p>
                    <p className="text-navy/60 text-xs mt-1">{o.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-navy/80">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/donate" className="bg-navy text-cream px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition inline-flex items-center gap-2">Fund this pillar <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/partners" className="border border-navy/20 px-6 py-3 rounded-full font-semibold text-navy hover:bg-navy hover:text-cream transition">Partner on this</Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Approach */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="ornament mb-4">Our Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl">Designed. Delivered. <em className="text-gold-light">Audited.</em></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: 'Design', d: 'Every intervention is designed with community input, academic evidence and CSR-goal alignment.' },
              { icon: Users, t: 'Deliver', d: 'A boots-on-ground delivery team of 340+ trained educators, mentors and program managers.' },
              { icon: MapPin, t: 'Audit', d: 'Third-party audits, quarterly reports and open dashboards for every partner and program.' },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="bg-navy-deep border border-cream/10 rounded-3xl p-8 lift">
                  <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-serif text-2xl mb-2">{t}</h3>
                  <p className="text-cream/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
