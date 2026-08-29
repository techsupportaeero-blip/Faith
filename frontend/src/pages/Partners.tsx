import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, FileText, BarChart3, HeartHandshake, Award, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const partners = [
  'Tata Consultancy', 'Infosys Foundation', 'Wipro Cares', 'Reliance', 'HDFC Ergo',
  'Bosch India', 'HCL Foundation', 'Mahindra Rise', 'Zoho Schools', 'ITC Sunehra Kal',
  'Larsen & Toubro', 'Godrej Good', 'Axis Bank Foundation', 'Airtel Trust',
  'Cognizant Outreach', 'Dell Giving',
];

const tiers = [
  { name: 'Ally', amount: '₹5 L / year', color: 'from-cream-warm to-cream', text: 'text-navy', accent: 'border-navy/10', perks: ['1 program pillar co-branded', 'Quarterly impact report', 'Employee volunteering day'] },
  { name: 'Advocate', amount: '₹25 L / year', color: 'from-navy-soft to-navy', text: 'text-cream', accent: 'border-gold/40', perks: ['2 co-branded programs', 'Named smart classroom', 'Monthly dashboards + audits', 'Employee engagement calendar'], featured: true },
  { name: 'Architect', amount: '₹1 Cr+ / year', color: 'from-navy-deep to-navy', text: 'text-cream', accent: 'border-gold', perks: ['State-level flagship', 'Named FAITH chair', 'Board advisory seat', 'Custom impact studies'] },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Partners"
        title="Where CSR spend becomes CSR impact."
        subtitle="We partner with corporates to design, deliver and audit programs that meet Schedule VII of the Companies Act — with the reporting rigour your board expects."
        image="/images/partnership.jpg"
      />

      {/* Why partner */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal>
            <img src="/images/partnership.jpg" alt="Partnership" className="rounded-3xl w-full h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="ornament mb-4">Why FAITH</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">A CSR partner your <em className="text-gold-dark">CFO and CHRO</em> will both love.</h2>
            <p className="mt-5 text-navy/70 text-lg">
              We do the hard work — program design, on-ground delivery, third-party audits and
              board-ready reporting. You get measurable impact aligned with your CSR mandate
              and employee engagement goals.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, t: 'Schedule VII compliant' },
                { icon: BarChart3, t: 'Quarterly impact dashboards' },
                { icon: Award, t: '80G / 12A / CSR-1 certified' },
                { icon: HeartHandshake, t: 'Employee volunteering built-in' },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 bg-cream-warm/70 rounded-2xl p-4 border border-navy/5">
                  <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center shrink-0"><Icon className="w-4 h-4" /></div>
                  <span className="font-medium text-navy">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-cream-warm/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="ornament mb-4">Partnership Tiers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Three ways to <em className="text-gold-dark">walk with us</em>.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div className={`relative rounded-3xl bg-gradient-to-br ${tier.color} ${tier.text} p-8 border ${tier.accent} h-full lift`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold flex items-center gap-1"><Sparkles className="w-3 h-3" /> Most Chosen</div>
                  )}
                  <p className="text-xs uppercase tracking-widest opacity-60">Tier</p>
                  <h3 className="font-serif text-4xl mt-1">{tier.name}</h3>
                  <p className="mt-2 text-2xl font-serif italic opacity-90">{tier.amount}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-8 inline-flex items-center gap-2 font-semibold border-b-2 pb-1 hover:gap-3 transition-all ${tier.featured ? 'border-gold text-gold-light' : 'border-current'}`}>
                    Start conversation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="ornament mb-4">In Good Company</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">Corporates who chose <em className="text-gold-dark">measurable</em> impact.</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i * 0.03}>
              <div className="aspect-video rounded-2xl border border-navy/10 bg-white flex items-center justify-center gap-3 text-navy/70 hover:border-gold hover:text-navy hover:shadow-md transition-all">
                <Building2 className="w-5 h-5" />
                <span className="font-serif text-lg">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case study */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src="/images/tech-education.jpg" alt="Case study" className="rounded-3xl w-full h-[420px] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="ornament mb-4">Case Study</p>
            <h2 className="font-serif text-4xl leading-tight">How a Fortune 100 tech firm reached <em className="text-gold-light">12,000 students</em> in 18 months.</h2>
            <p className="mt-5 text-cream/75 leading-relaxed">
              With a ₹3.5 Cr CSR investment, FAITH set up 32 smart labs across Tier-2 cities,
              trained 96 government-school teachers and enrolled 12,400 students in an
              AI-literacy curriculum. Employee volunteering hours: 4,200.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[{ n: '32', l: 'Smart Labs' }, { n: '12,400', l: 'Learners' }, { n: '4,200', l: 'Volunteer Hrs' }].map((s) => (
                <div key={s.l} className="border-l-2 border-gold pl-3">
                  <p className="font-serif text-2xl text-gold-light">{s.n}</p>
                  <p className="text-cream/60 text-xs uppercase tracking-widest">{s.l}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition">Request the full report <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
