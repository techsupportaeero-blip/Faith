import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-serif text-9xl text-gold">404</p>
        <h1 className="font-serif text-3xl text-navy mt-4">Lost, but not forgotten.</h1>
        <p className="mt-3 text-navy/60">The page you’re looking for has moved or never existed. Let’s get you back home.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-navy text-cream px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
