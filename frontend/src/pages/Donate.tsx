import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award, ArrowRight, CreditCard, Building2, Landmark, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const presets = [1500, 5000, 10000, 25000, 50000, 100000];
const causes = [
  { id: 'general', label: 'Where Most Needed', d: 'Let FAITH allocate to the highest-impact program this quarter.' },
  { id: 'schools', label: 'A Classroom', d: 'Fund learning kits, a teacher and a semester of joyful learning.' },
  { id: 'tech', label: 'A Coder', d: 'Sponsor a student’s year of coding, hardware and mentorship.' },
  { id: 'scholar', label: 'A Scholar', d: 'Grant a one-year merit scholarship for a first-gen college student.' },
];

export default function Donate() {
  const [amount, setAmount] = useState(5000);
  const [custom, setCustom] = useState('');
  const [cause, setCause] = useState('general');
  const [freq, setFreq] = useState<'onetime' | 'monthly'>('onetime');

  const final = custom ? parseInt(custom) || 0 : amount;

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Turn intention into impact."
        subtitle="Every rupee is audited, receipted (80G tax deduction) and reported. Choose a cause, amount and frequency — we handle the rest."
        image="/images/school-children.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Left: donation form */}
          <Reveal>
            <div className="bg-white rounded-3xl border border-navy/10 shadow-xl p-8 md:p-10">
              {/* Frequency */}
              <div>
                <p className="text-xs uppercase tracking-widest text-navy/60 mb-3">Frequency</p>
                <div className="inline-flex bg-cream-warm rounded-full p-1">
                  {(['onetime', 'monthly'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFreq(f)}
                      className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${freq === f ? 'bg-navy text-cream shadow' : 'text-navy/60 hover:text-navy'}`}
                    >
                      {f === 'onetime' ? 'One-time' : 'Monthly'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cause */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-navy/60 mb-3">I care most about</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {causes.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCause(c.id)}
                      className={`text-left p-4 rounded-2xl border transition ${cause === c.id ? 'border-gold bg-gold/5 ring-2 ring-gold/30' : 'border-navy/10 hover:border-navy/30'}`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-lg text-navy">{c.label}</p>
                        {cause === c.id && <CheckCircle2 className="w-5 h-5 text-gold" />}
                      </div>
                      <p className="text-navy/60 text-sm mt-1">{c.d}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-navy/60 mb-3">Choose an amount</p>
                <div className="grid grid-cols-3 gap-3">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => { setAmount(p); setCustom(''); }}
                      className={`py-4 rounded-2xl font-serif text-xl transition ${amount === p && !custom ? 'bg-navy text-cream' : 'bg-cream-warm text-navy hover:bg-navy/10'}`}
                    >
                      ₹{p.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="text-xs uppercase tracking-widest text-navy/60">Or enter custom amount</label>
                  <div className="mt-2 flex items-center bg-cream-warm rounded-2xl px-5 py-1 border border-navy/10 focus-within:border-gold">
                    <span className="font-serif text-2xl text-navy mr-2">₹</span>
                    <input
                      type="number"
                      min={100}
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="Enter amount"
                      className="flex-1 bg-transparent outline-none py-4 font-serif text-xl text-navy placeholder:text-navy/30"
                    />
                  </div>
                </div>
              </div>

              {/* Impact */}
              <motion.div
                key={final}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-5 rounded-2xl bg-navy text-cream flex items-start gap-4"
              >
                <Heart className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Your ₹{final.toLocaleString()} {freq === 'monthly' && 'per month'} could:</p>
                  <p className="text-cream/80 text-sm mt-1">
                    {final < 2000 && 'Provide learning kits for 3 primary students.'}
                    {final >= 2000 && final < 10000 && 'Sponsor a semester of coding classes for one student.'}
                    {final >= 10000 && final < 30000 && 'Fund a merit scholarship application cycle.'}
                    {final >= 30000 && final < 80000 && 'Grant a full year of higher-education scholarship.'}
                    {final >= 80000 && 'Help set up a smart classroom for 40 students.'}
                  </p>
                </div>
              </motion.div>

              {/* Payment methods */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-navy/60 mb-3">Payment</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: CreditCard, l: 'Card / UPI' },
                    { icon: Landmark, l: 'Net Banking' },
                    { icon: Building2, l: 'Corporate' },
                  ].map(({ icon: Icon, l }) => (
                    <div key={l} className="flex items-center justify-center gap-2 border border-navy/10 rounded-2xl py-3 text-navy/70 hover:border-navy transition">
                      <Icon className="w-4 h-4" /><span className="text-sm font-medium">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => alert(`Thank you! Redirecting to secure payment for ₹${final.toLocaleString()} — ${freq}.`)}
                className="mt-8 w-full bg-gold text-navy hover:bg-gold-light transition font-semibold rounded-full py-4 text-lg flex items-center justify-center gap-2 shadow-xl"
              >
                Donate ₹{final.toLocaleString()} securely <ArrowRight className="w-5 h-5" />
              </button>
              <p className="mt-4 text-center text-xs text-navy/50 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" /> SSL encrypted · Razorpay secured · 80G receipt within 24h
              </p>
            </div>
          </Reveal>

          {/* Right: trust & benefits */}
          <Reveal delay={0.15}>
            <div className="sticky top-28 space-y-4">
              <div className="bg-navy text-cream rounded-3xl p-8">
                <Award className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-serif text-2xl leading-tight">Where does your money go?</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    { p: '82¢', l: 'Direct program delivery' },
                    { p: '12¢', l: 'Monitoring, audits, reporting' },
                    { p: '6¢', l: 'Fundraising & operations' },
                  ].map((row) => (
                    <li key={row.l} className="flex items-center justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/80">{row.l}</span>
                      <span className="font-serif text-xl text-gold">{row.p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-cream/60 text-xs">Based on FY24 audited financials. Full report available on request.</p>
              </div>
              <div className="bg-cream-warm rounded-3xl p-8 border border-navy/10">
                <h4 className="font-serif text-xl text-navy">Prefer bank transfer?</h4>
                <p className="text-navy/70 text-sm mt-1">You can also donate via NEFT/RTGS.</p>
                <div className="mt-4 text-sm text-navy/80 space-y-1">
                  <p><strong>A/C Name:</strong> FAITH Foundation</p>
                  <p><strong>A/C No:</strong> *************</p>
                  <p><strong>IFSC:</strong> *************</p>
                  <p><strong>PAN:</strong> *************</p>
                </div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1">
                  Need help? Contact us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-warm/50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-10">
            <p className="ornament mb-4">FAQ</p>
            <h2 className="font-serif text-4xl text-navy">Answers before you ask.</h2>
          </Reveal>
          <div className="space-y-3">
            {[
              { q: 'Is my donation tax-deductible?', a: 'Yes. All donations to FAITH Foundation qualify for 80G tax deduction. Your receipt is emailed within 24 hours.' },
              { q: 'Can my company make a CSR contribution here?', a: 'Absolutely. We are CSR-1 registered and can generate CSR-compliant invoices, MOUs and quarterly reports.' },
              { q: 'Can I donate anonymously?', a: 'Yes — tick the anonymous box at checkout. You still receive an 80G receipt.' },
              { q: 'How do I know my money is used well?', a: 'Every donor receives a quarterly impact report. Our financials are third-party audited annually and openly published.' },
            ].map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group bg-white rounded-2xl border border-navy/10 p-6 open:shadow-md">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-serif text-lg text-navy">{f.q}</span>
                    <span className="w-8 h-8 rounded-full bg-cream-warm text-navy flex items-center justify-center group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-4 text-navy/70">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
