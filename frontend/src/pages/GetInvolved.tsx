import { Link } from 'react-router-dom';
import { Users, Briefcase, School2, Handshake, ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const ways = [
  { icon: Users, title: 'Volunteer', d: 'Give an hour, a weekend or a sabbatical — across teaching, mentoring, tech and translation.', cta: 'Become a volunteer' },
  { icon: Briefcase, title: 'Corporate CSR', d: 'Deploy your CSR budget into audit-ready programs with quarterly board reporting.', cta: 'Explore partnership', link: '/partners' },
  { icon: School2, title: 'Join as a School', d: 'Government schools can apply to host FAITH programs on campus, at zero cost.', cta: 'Apply as a school' },
  { icon: Handshake, title: 'Fundraise for FAITH', d: 'Run a marathon, host a birthday drive, or set up a workplace giving campaign.', cta: 'Start fundraising' },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There are many ways to show up."
        subtitle="You don’t need to be a philanthropist to change a life. An hour, a skill, a signature, a rupee — they all compound at FAITH."
        image="/images/mentorship.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="bg-white rounded-3xl border border-navy/10 p-8 h-full lift">
                <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center mb-5"><w.icon className="w-6 h-6" /></div>
                <h3 className="font-serif text-3xl text-navy">{w.title}</h3>
                <p className="mt-3 text-navy/70">{w.d}</p>
                <Link to={w.link || '/contact'} className="mt-6 inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all">
                  {w.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Volunteer form teaser */}
      <section className="bg-cream-warm/60 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-10">
            <p className="ornament mb-4">Volunteer Signup</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Tell us how you'd like to <em className="text-gold-dark">show up</em>.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our team will reach out within 48 hours.'); }} className="bg-white rounded-3xl border border-navy/10 p-8 md:p-10 shadow-xl grid gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-navy/60">Full name</label>
                  <input required className="mt-2 w-full bg-cream-warm rounded-2xl px-5 py-3.5 border border-navy/10 focus:border-gold outline-none" placeholder="e.g., Rohan Verma" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-navy/60">Email</label>
                  <input required type="email" className="mt-2 w-full bg-cream-warm rounded-2xl px-5 py-3.5 border border-navy/10 focus:border-gold outline-none" placeholder="you@work.com" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-navy/60">I can help with</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Teaching', 'Mentoring', 'Coding', 'Content', 'Design', 'Translation', 'Fundraising'].map((tag) => (
                    <label key={tag} className="cursor-pointer bg-cream-warm hover:bg-navy/10 border border-navy/10 rounded-full px-4 py-2 text-sm text-navy flex items-center gap-2">
                      <input type="checkbox" className="accent-gold" /> {tag}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-navy/60">Anything else</label>
                <textarea rows={4} className="mt-2 w-full bg-cream-warm rounded-2xl px-5 py-4 border border-navy/10 focus:border-gold outline-none resize-none" placeholder="City, availability, superpowers..." />
              </div>
              <button className="bg-navy text-cream hover:bg-gold hover:text-navy transition font-semibold rounded-full py-4 inline-flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Count me in
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
