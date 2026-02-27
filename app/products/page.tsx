import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-background">
        <div className="px-6 pt-28 pb-20 md:px-12 md:pt-32 md:pb-24 lg:px-20 lg:pt-36 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Product portfolio
              </p>
              <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Composite insulators.
                <br />
                Hybrid technology.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Taban Niroo designs and manufactures medium and high-voltage composite insulators,
                hybrid insulators, bushings, and accessories for transmission and distribution
                networks. All products are tested at accredited laboratories according to IEC
                standards.
              </p>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-2xl bg-secondary md:h-[380px]">
              <Image
                src="/images/product-forest.png"
                alt="Composite and hybrid insulators in service"
                fill
                className="object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="px-6 pb-24 md:px-12 md:pb-28 lg:px-20 lg:pb-32">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-border/80 bg-background/60 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                MV/HV composite insulators
              </p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Long rod &amp; post
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Long rod insulators for distribution and transmission networks, designed and tested
                according to IEC 61109 and related standards. Post insulators, line post and station
                post variants, support secure operation under mechanical and electrical loading.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/60 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Hybrid insulators
              </p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Silicone–ceramic
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hybrid pin-type and post insulators combine porcelain cores with silicone housings.
                The design offers mechanical strength with improved pollution performance and
                creepage distance, particularly for substations and heavily contaminated
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/60 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Bushings &amp; accessories
              </p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Bushings &amp; line components
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Polymer bushings, station post hybrid bushings, outdoor terminations, composite cut
                out fuses, surge arresters, creepage extenders, covers, and bird control solutions
                support the reliability of high-voltage assets in service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="px-6 pb-24 md:px-12 md:pb-28 lg:px-20 lg:pb-32">
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Standards
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                IEC-tested product families.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Composite insulators are type-tested and routine-tested in accredited laboratories
                according to IEC standards including IEC 61109, IEC 62217, IEC 61466, IEC 60120, and
                IEC 60471. Performance in pollution, mechanical strength, and electrical withstand
                is verified for each family.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Line &amp; station
                </p>
                <p className="mt-2">
                  Long rod insulators · Distribution and transmission network insulators ·
                  Interphase spacers · Composite post and line post insulators · Station post
                  insulators.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Hybrid &amp; bushings
                </p>
                <p className="mt-2">
                  Hybrid pin-type insulators · Hybrid post insulators · Polymer bushings · Station
                  post hybrid bushings.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Accessories
                </p>
                <p className="mt-2">
                  Cable accessories and terminations · Composite cut out fuses · Composite surge
                  arresters · Creepage extenders and covers · Bird control solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

