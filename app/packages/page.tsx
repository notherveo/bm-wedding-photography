import { packages as pkg } from "@/lib/weddings";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PackageCompare } from "@/components/package-compare";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your special day.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <PackageCompare packages={pkg} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
