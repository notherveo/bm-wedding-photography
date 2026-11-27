import { films } from "@/lib/weddings";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Cinematic Films
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Short films that capture the essence of love and celebration.
          </p>
        </div>
      </section>

      {/* Films */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {films.map((film) => (
              <div
                key={film.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{film.title}</h3>
                    <p className="text-sm text-gray-300">
                      {film.director} • {film.duration}
                    </p>
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
