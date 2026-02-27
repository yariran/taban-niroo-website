import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-background">
        <div className="px-6 pt-28 pb-20 md:px-12 md:pt-32 md:pb-24 lg:px-20 lg:pt-36 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Connect with
                <br />
                Taban Niroo.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                For project enquiries, technical discussions, and partnership opportunities, please
                share your details and our team will respond through the appropriate channel.
              </p>

              <form className="mt-10 space-y-6 max-w-xl">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="name">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="company">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="Organization name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your project, application, or enquiry."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="rounded-full px-6">
                  Send message
                </Button>
              </form>
            </div>

            <div className="space-y-10 rounded-2xl border border-border/80 bg-background/70 p-6 backdrop-blur md:p-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Headquarters
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Taban Niroo Building
                  <br />
                  Shiraz Special Economic Zone, Iran
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tel: +98 713 717 5115-7
                  <br />
                  Fax: +98 21 2629 3990
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Tehran office
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Office 9, No. 64, Saeedi Ave,
                  <br />
                  Africa St, Tehran, Iran
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tel: +98 21 8821 6952
                  <br />
                  Fax: +98 21 2629 3990
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  info@taban-niroo.com
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

