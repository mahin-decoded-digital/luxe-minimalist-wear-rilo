import { create } from 'zustand';

export type NewsletterStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UIStore {
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
  
  newsletterStatus: NewsletterStatus;
  newsletterError: string;
  subscribeNewsletter: (email: string) => Promise<void>;
  resetNewsletter: () => void;
}

export const useUIStore = create<UIStore>()((set) => ({
  // Scroll State
  isScrolled: false,
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),

  // Newsletter State
  newsletterStatus: 'idle',
  newsletterError: '',
  subscribeNewsletter: async (email: string) => {
    set({ newsletterStatus: 'submitting', newsletterError: '' });
    
    try {
      // Basic client-side validation
      if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Mock network request delay for realistic UX
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      set({ newsletterStatus: 'success', newsletterError: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred. Please try again.';
      set({ newsletterStatus: 'error', newsletterError: message });
    }
  },
  resetNewsletter: () => set({ newsletterStatus: 'idle', newsletterError: '' }),
}));