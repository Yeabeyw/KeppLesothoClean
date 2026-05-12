import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-maseru.jpg";
import cleanupImg from "@/assets/cleanup.jpg";
import plantingImg from "@/assets/planting.jpg";
import { Leaf, Recycle, Trees, Users, Sparkles, HeartPulse, GraduationCap, Megaphone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const goals = [
  { icon: Recycle, title: "Reduce Pollution", text: "Cut plastic waste and promote responsible disposal across communities." },
  { icon: GraduationCap, title: "Educate & Empower", text: "Workshops and school programs that build lifelong environmental habits." },
  { icon: Users, title: "Engage Youth", text: "Mobilize students and young leaders to drive lasting environmental change." },
  { icon: Trees, title: "Restore Nature", text: "Plant trees, clean parks, and protect rivers for future generations." },
];

const benefits = [
  { icon: Sparkles, title: "Cleaner Streets", text: "Community clean-ups make Maseru more attractive and welcoming." },
  { icon: HeartPulse, title: "Better Public Health", text: "Proper waste disposal reduces disease and prevents flooding." },
  { icon: Leaf, title: "Greener Spaces", text: "Tree planting improves air quality and beautifies the city." },
  { icon: Megaphone, title: "Stronger Community", text: "Working together builds unity, responsibility, and pride." },
];

const activities = [
  { day: "Day 1", title: "Launch & Awareness", text: "Campaign kickoff with talks from environmental experts and youth leaders." },
  { day: "Day 2", title: "Community Clean-Up", text: "Volunteers clear streets, parks, and public spaces across Maseru." },
  { day: "Day 3", title: "Recycling Workshop", text: "Hands-on training on separating plastic, paper, and glass waste." },
  { day: "Day 4", title: "Tree Planting Drive", text: "Schools and community members plant trees in selected neighborhoods." },
  { day: "Day 5", title: "Closing & Celebration", text: "Reflection, awards, and commitments for a sustainable future." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold tracking-tight">Green Maseru</span>
          </div>
          <div className="hidden gap-6 text-sm text-primary-foreground/90 md:flex">
            <a href="#about" className="hover:text-primary-foreground">About</a>
            <a href="#goals" className="hover:text-primary-foreground">Goals</a>
            <a href="#schedule" className="hover:text-primary-foreground">Schedule</a>
            <a href="#join" className="hover:text-primary-foreground">Join</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of a green and clean Maseru"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.25 0.08 150 / 0.85), oklch(0.35 0.12 145 / 0.6))" }}
        />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-start justify-center px-6 py-32 text-primary-foreground">
          <span className="mb-4 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
            Campaign 2026
          </span>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Say No to Pollution.<br />
            <span className="text-accent">Say Yes to Green.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
            The Green Maseru Campaign is a community-led movement to clean our streets, plant trees, and build a healthier, greener Maseru for everyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
            >
              Join the Movement
            </a>
            <a
              href="#about"
              className="rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3 font-semibold backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About the campaign</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Creating a cleaner and greener Maseru</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Plastic waste, illegal dumping, and poor waste management threaten public health and the beauty of our city. The Green Maseru Campaign brings together students, businesses, and local communities to turn that around — through clean-ups, tree planting, education, and social media awareness.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We believe that real change begins in our own neighborhoods. Together, we can make Maseru a city we are proud to call home.
            </p>
          </div>
          <div className="relative">
            <img
              src={cleanupImg}
              alt="Volunteers cleaning a street in Maseru"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Our goals</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What we stand for</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goals.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits split */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <img
              src={plantingImg}
              alt="Students planting a tree together"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-soft)]"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Why it matters</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Benefits for everyone</h2>
            <div className="mt-8 space-y-6">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/30 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">5-day program</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What's happening</h2>
            <p className="mt-4 text-muted-foreground">
              Activities take place across schools, parks, streets, and community centers around Maseru.
            </p>
          </div>
          <ol className="mx-auto mt-14 max-w-3xl space-y-4">
            {activities.map(({ day, title, text }, i) => (
              <li
                key={day}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{day}</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Join CTA */}
      <section
        id="join"
        className="relative isolate overflow-hidden py-24 text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Be part of the change</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Whether you're a student, a business, or a neighbor — there's a place for you in the Green Maseru Campaign. Volunteer, sponsor, or spread the word.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["#GreenMaseru", "#KeepMaseruClean", "#ProtectOurEnvironment"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="mailto:hello@greenmaseru.org"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
          >
            Get Involved
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span>Green Maseru Campaign · 2026</span>
          </div>
          <p>Building a cleaner, greener future — together.</p>
        </div>
      </footer>
    </main>
  );
}