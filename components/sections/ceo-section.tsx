"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CEOSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "80px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ceo"
      className="bg-background transition-all duration-700 ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
    >
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Leadership
        </p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          A Message from the CEO
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-5 lg:gap-20 lg:items-start">
          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Since our inception, our products have been engineered to excel — sometimes beyond world standards. This has been achieved through research, perseverance, and an unwavering desire for perfection. Innovation and creative solutions have allowed us to meet the diverse challenges of our clients.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Over the last quarter of a century, Taban Niroo has undergone significant advances. We have doubled our workforce, fostered a culture of diversity, and established ourselves as a prominent manufacturer in the power and electricity sector, rivalling multinational companies. Today, we proudly serve major clients across Africa, South America, and the Middle East.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-sm bg-secondary">
              <Image
                src="/images/ceo-portrait.JPG"
                alt="Asadollah Zamani, CEO, Taban Niroo"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 280px, 320px"
              />
            </div>
            <p className="mt-8 font-serif text-xl italic tracking-tight text-foreground">
              Asadollah Zamani
            </p>
            <p className="mt-1 text-sm text-muted-foreground" dir="rtl">
              اسدالله زمانی
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              October 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
