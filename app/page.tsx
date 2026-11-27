import { portfolio, films, packages as pkg, testimonials } from "@/lib/weddings";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MasonryGallery } from "@/components/masonry-gallery";
import { FilmReel } from "@/components/film-reel";
import { PackageCompare } from "@/components/package-compare";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { RevealText } from "@/components/reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/hero/2400/2400"
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <RevealText
            text="Lumière"
            className="text-6xl md:text-9xl font-display font-bold text-white tracking-tight mb-4"
          />
          <RevealText
            text="A luxury wedding photography & film studio"
            className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8"
            delay={0.2}
          />
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Book Your Day
          </a>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealText
              text="Our Story"
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe every love story deserves to be told in its own way.
              With over seven years of experience, we've captured countless
              moments of joy, love, and celebration.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach is simple: be present, capture the authentic moments,
              and create something truly timeless.
            </p>
            <a
              href="/about"
              className="text-gold font-medium hover:text-gold/80 transition-colors"
            >
              Learn more about us →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/seed/story1/600/800"
              alt="Wedding couple"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="https://picsum.photos/seed/story2/600/800"
              alt="Wedding details"
              className="rounded-lg object-cover w-full h-full mt-8"
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealText
              text="Our Portfolio"
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of our favorite moments captured across the globe.
            </p>
          </div>
          <MasonryGallery images={portfolio.map((p) => p.image)} />
        </div>
      </section>

      {/* Films */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealText
              text="Cinematic Films"
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Short films that capture the essence of love and celebration.
            </p>
          </div>
          <FilmReel films={films} />
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealText
              text="Packages"
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your special day.
            </p>
          </div>
          <PackageCompare packages={pkg} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealText
              text="Kind Words"
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our couples have to say about their experience.
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 bg-gold text-white text-center">
        <div className="max-w-3xl mx-auto">
          <RevealText
            text="Ready to create something beautiful?"
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          />
          <RevealText
            text="Let's discuss your special day"
            className="text-xl text-white/90 font-light mb-8"
            delay={0.2}
          />
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-gold rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
