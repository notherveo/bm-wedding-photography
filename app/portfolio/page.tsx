import { portfolio } from "@/lib/weddings";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Lightbox } from "@/components/lightbox";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite moments captured across the globe.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Lightbox images={portfolio.map((p) => p.image)} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
