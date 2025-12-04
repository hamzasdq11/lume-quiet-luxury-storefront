import { Users, Target, Lightbulb, Layers, Star, Award, Sparkles, Rocket, TrendingUp, Globe, Gift, Building2 } from "lucide-react";

const PitchDeckSlides = () => {
  return (
    <div className="w-full">
      {/* SLIDE 1 — Product Concept Development */}
      <section className="min-h-screen bg-background py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 01</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Product Concept Development
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              Understanding Our Audience, Problem, and Insight
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Target Persona</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Urban Trendsetters seeking quiet luxury desk essentials that reflect sophistication and intentionality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Need Gap</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      No Indian brand offers premium minimal stationery with personalisation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Insight</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Users want objects that reflect their identity; personalisation equals emotional value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Product Idea</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      A luxury personalised notebook and desk collection designed for clarity, minimalism, and modern workspaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2 — Three Levels of Product Analysis */}
      <section className="min-h-screen bg-cream-dark py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 02</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Three Levels of Product Analysis
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              Core, Actual, and Augmented Product Structure
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Core Product */}
            <div className="relative">
              <div className="bg-background border border-gold/20 p-8 lg:p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-sans">Level 1</span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">Core Product</h3>
                <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mb-4">The Benefit</p>
                <ul className="space-y-3 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Mental clarity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Identity expression
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Premium writing experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Actual Product */}
            <div className="relative">
              <div className="bg-background border border-gold/40 p-8 lg:p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Layers className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-sans">Level 2</span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">Actual Product</h3>
                <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mb-4">The Features</p>
                <ul className="space-y-3 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    120-150 GSM premium paper
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Gold foil monograms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Stitched binding & matte cover
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Premium packaging
                  </li>
                </ul>
              </div>
            </div>

            {/* Augmented Product */}
            <div className="relative">
              <div className="bg-background border border-gold/20 p-8 lg:p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-sans">Level 3</span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">Augmented Product</h3>
                <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider mb-4">The Experience</p>
                <ul className="space-y-3 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Personalisation services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Gifting options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Premium delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Customer support & warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — Value Proposition & Positioning */}
      <section className="min-h-screen bg-background py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 03</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Value Proposition & Positioning
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              Why LUME Exists and Who We Serve
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="space-y-16">
            {/* Value Proposition */}
            <div className="border-l-2 border-gold pl-8 md:pl-12">
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-4">Value Proposition</p>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic">
                "Quiet-luxury stationery that blends premium design with personalised identity."
              </blockquote>
            </div>

            {/* Differentiation */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Aesthetic", value: "High-end minimal design" },
                { label: "Identity", value: "Monogram-first approach" },
                { label: "Materials", value: "Premium quality" },
                { label: "Pricing", value: "Accessible luxury" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 border border-gold/20">
                  <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-2">{item.label}</p>
                  <p className="font-serif text-lg text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Positioning Statement */}
            <div className="bg-cream-dark p-10 md:p-16">
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-6">Positioning Statement</p>
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                For urban creators seeking refined tools, <span className="text-gold">LUME</span> delivers premium personalised 
                stationery that elevates everyday work into a crafted experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4 — What Makes LUME Truly Distinct */}
      <section className="min-h-screen bg-cream-dark py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 06</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              What Makes LUME Truly Distinct
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              How We Differ From The Industry
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Column Headers */}
            <div className="bg-background border border-gold/30 p-6 md:p-8 text-center">
              <h3 className="font-serif text-xl md:text-2xl text-muted-foreground">Industry Norms</h3>
            </div>
            <div className="bg-background border border-gold/30 p-6 md:p-8 text-center">
              <h3 className="font-serif text-xl md:text-2xl text-gold">LUME Experience</h3>
            </div>

            {/* Row 1 */}
            <div className="bg-background/50 p-6 md:p-8 border-l-2 border-muted-foreground/20">
              <p className="text-muted-foreground font-sans leading-relaxed">
                Others sell year-round stock.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-2 border-gold">
              <p className="text-foreground font-sans leading-relaxed">
                We launch <span className="text-gold font-medium">limited seasonal & event-driven drops</span> that create urgency, collectibility, and excitement.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-cream-dark/50 p-6 md:p-8 border-l-2 border-muted-foreground/20">
              <p className="text-muted-foreground font-sans leading-relaxed">
                Most brands customise only one product.
              </p>
            </div>
            <div className="bg-background/80 p-6 md:p-8 border-l-2 border-gold">
              <p className="text-foreground font-sans leading-relaxed">
                We <span className="text-gold font-medium">personalise across categories</span> — bookmarks, pens, paperweights, gifting sets, packaging.
              </p>
            </div>

            {/* Row 3 */}
            <div className="bg-background/50 p-6 md:p-8 border-l-2 border-muted-foreground/20">
              <p className="text-muted-foreground font-sans leading-relaxed">
                Typical stationery feels mundane.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-2 border-gold">
              <p className="text-foreground font-sans leading-relaxed">
                <span className="text-gold font-medium">Signature unboxing</span> with magnetic boxes, wax seals, ribbons, and a branded scent that elevates every item.
              </p>
            </div>

            {/* Row 4 */}
            <div className="bg-cream-dark/50 p-6 md:p-8 border-l-2 border-muted-foreground/20">
              <p className="text-muted-foreground font-sans leading-relaxed">
                Standard gift-wrapping.
              </p>
            </div>
            <div className="bg-background/80 p-6 md:p-8 border-l-2 border-gold">
              <p className="text-foreground font-sans leading-relaxed">
                <span className="text-gold font-medium">End-to-end luxury gifting:</span> curated bundles, cards, ribbons, seasonal recommendations.
              </p>
            </div>

            {/* Row 5 */}
            <div className="bg-background/50 p-6 md:p-8 border-l-2 border-muted-foreground/20">
              <p className="text-muted-foreground font-sans leading-relaxed">
                Basic designs.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-2 border-gold">
              <p className="text-foreground font-sans leading-relaxed">
                <span className="text-gold font-medium">Minimalist, premium, city-inspired styling</span> for fashion followers and gadget-lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — Branding & Marketing Execution */}
      <section className="min-h-screen bg-cream-dark py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 04</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Branding & Marketing Execution
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              Name, Logo, Tagline, and Campaign Creatives
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-10">
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-3">Brand Name</p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">LUME</h3>
                <p className="text-muted-foreground font-sans">Inspired by illumination and clarity</p>
              </div>

              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-3">Logo Concept</p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Monogram-in-oval luxury emblem paired with an elegant serif wordmark. Gold foil application for premium presence.
                </p>
              </div>

              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-3">Tagline</p>
                <p className="font-serif text-xl md:text-2xl text-foreground italic">
                  "Designed for Clarity. Crafted for the Urban Mind."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans">Campaign Materials</p>
              
              <div className="space-y-6">
                <div className="bg-background border border-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-sans text-sm">01</span>
                    </div>
                    <p className="font-sans text-foreground">Hero Banner Campaign</p>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm">
                    Full-width lifestyle imagery featuring notebooks in elegant workspace settings
                  </p>
                </div>

                <div className="bg-background border border-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-sans text-sm">02</span>
                    </div>
                    <p className="font-sans text-foreground">Social Reel Storyboard</p>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm">
                    15-second reveal sequence showcasing personalisation process and final product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — Go-to-Market Strategy */}
      <section className="min-h-screen bg-background py-24 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">Slide 05</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Go-To-Market Strategy
            </h2>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl">
              Launch, Awareness, Conversion, and Growth Engine
            </p>
            <div className="w-24 h-px bg-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-cream-dark p-8">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Launch Channels</h3>
              <ul className="space-y-2 text-muted-foreground font-sans text-sm">
                <li>Instagram</li>
                <li>TikTok</li>
                <li>LinkedIn</li>
                <li>Website SEO</li>
              </ul>
            </div>

            <div className="bg-cream-dark p-8">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                <Gift className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Influencer Seeding</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Personalised gift kits for micro-creators and lifestyle influencers
              </p>
            </div>

            <div className="bg-cream-dark p-8">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Digital Funnel</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Hero → Product Pages → Checkout → Upsell flow
              </p>
            </div>

            <div className="bg-cream-dark p-8">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                <Building2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Corporate Gifting</h3>
              <p className="text-muted-foreground font-sans text-sm">
                LinkedIn outreach + B2B catalogue program
              </p>
            </div>
          </div>

          {/* 90-Day Roadmap */}
          <div className="border border-gold/20 p-8 md:p-12">
            <p className="text-gold uppercase tracking-[0.2em] text-xs font-sans mb-8">90-Day Launch Roadmap</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-gold">01</span>
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">Days 1-30</h4>
                <p className="text-muted-foreground font-sans text-sm">Teasers & Pre-launch</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-gold">02</span>
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">Days 31-60</h4>
                <p className="text-muted-foreground font-sans text-sm">Official Launch</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-gold">03</span>
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">Days 61-90</h4>
                <p className="text-muted-foreground font-sans text-sm">Growth Sprints</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PitchDeckSlides;
