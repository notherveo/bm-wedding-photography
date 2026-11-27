import { studio } from "@/lib/weddings";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About Lumière
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our story, our passion, our approach to capturing love.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in {studio.founded}, Lumière has been capturing the
                most beautiful moments of love and celebration. What started as
                a small photography studio has grown into a full-service wedding
                photography and film production company.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our team is made up of passionate photographers, videographers,
                and creative minds who share a common vision: to create
                timeless, authentic representations of love.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in {studio.location}, we've had the privilege of working
                with couples from all over the world, creating memories that
                will last a lifetime.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/seed/about1/600/800"
                alt="Studio workspace"
                className="rounded-lg object-cover w-full h-full"
              />
              <img
                src="https://picsum.photos/seed/about2/600/800"
                alt="Photography equipment"
                className="rounded-lg object-cover w-full h-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">
                7+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">
                500+
              </div>
              <div className="text-gray-600">Weddings Captured</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">
                50+
              </div>
              <div className="text-gray-600">Countries Visited</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">
                100%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
