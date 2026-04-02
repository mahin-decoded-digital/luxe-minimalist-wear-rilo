import React, { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook, ArrowRight, Check, Loader2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const newsletterStatus = useUIStore((s) => s.newsletterStatus);
  const newsletterError = useUIStore((s) => s.newsletterError);
  const subscribeNewsletter = useUIStore((s) => s.subscribeNewsletter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    await subscribeNewsletter(email);
    if (useUIStore.getState().newsletterStatus === 'success') {
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Newsletter Section */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-xl font-serif tracking-widest uppercase">
            Join the Atelier
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Subscribe to receive early access to new collections, exclusive events, and editorial content.
          </p>
          <form onSubmit={handleSubmit} className="relative mt-8 max-w-md">
            <div className="flex items-center border-b border-zinc-700 py-2 focus-within:border-zinc-300 transition-colors">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={newsletterStatus === 'submitting' || newsletterStatus === 'success'}
                className="bg-transparent border-none px-0 text-zinc-50 placeholder:text-zinc-600 focus-visible:ring-0 rounded-none h-auto shadow-none"
                required
              />
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                disabled={newsletterStatus === 'submitting' || newsletterStatus === 'success' || !email}
                className="hover:bg-transparent hover:text-zinc-300 text-zinc-50 px-2"
              >
                {newsletterStatus === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : newsletterStatus === 'success' ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </Button>
            </div>
            {newsletterError && (
              <p className="text-red-400 text-xs mt-3 tracking-wide">
                {newsletterError}
              </p>
            )}
            {newsletterStatus === 'success' && (
              <p className="text-zinc-300 text-xs mt-3 tracking-wide animate-in fade-in duration-500">
                Welcome to the Decoded Studio. You are now subscribed.
              </p>
            )}
          </form>
        </div>

        {/* Navigation Links Section */}
        <div className="md:col-span-2 md:col-start-8">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Explore
          </h4>
          <ul className="space-y-4 text-sm tracking-wide text-zinc-300">
            <li>
              <a href="#the-edit" className="hover:text-white transition-colors">
                The Edit
              </a>
            </li>
            <li>
              <a href="#legacy" className="hover:text-white transition-colors">
                Legacy
              </a>
            </li>
            <li>
              <a href="#atelier" className="hover:text-white transition-colors">
                Atelier
              </a>
            </li>
          </ul>
        </div>

        {/* Client Care Section */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Client Care
          </h4>
          <ul className="space-y-4 text-sm tracking-wide text-zinc-300">
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-white transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-white transition-colors">
                Returns
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Decoded Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a 
            href="#" 
            className="text-zinc-500 hover:text-zinc-300 transition-colors" 
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="#" 
            className="text-zinc-500 hover:text-zinc-300 transition-colors" 
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href="#" 
            className="text-zinc-500 hover:text-zinc-300 transition-colors" 
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}