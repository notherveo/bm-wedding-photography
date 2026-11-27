import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold">
              Lumière
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              A luxury wedding photography & film studio. We capture love in its
              most beautiful moments.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-gold">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/films" className="text-gray-400 hover:text-gold">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-gold">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@lumiere.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 Lumière. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
