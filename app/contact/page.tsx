import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Heavy & Kind",
  description: "Get in touch with Heavy & Kind. We answer within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-stone-900">
            A coach who picks up the phone.
          </h1>
          <p className="mt-5 text-lg text-stone-700">
            Tell us what you train, what you want to train for, and where
            you&apos;re stuck. We&apos;ll come back with a real plan.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <Mail className="w-5 h-5 text-amber-700" />
              <p className="mt-3 text-sm text-stone-500">Email</p>
              <a
                href="mailto:hello@heavyandkind.example"
                className="mt-1 block font-medium text-stone-900 hover:text-amber-700"
              >
                hello@heavyandkind.example
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <Phone className="w-5 h-5 text-amber-700" />
              <p className="mt-3 text-sm text-stone-500">Phone</p>
              <p className="mt-1 font-medium text-stone-900">
                Booked through email first.
              </p>
              <p className="mt-2 text-sm text-stone-700">
                We schedule a 20 minute call so we&apos;re both prepared.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <Clock className="w-5 h-5 text-amber-700" />
              <p className="mt-3 text-sm text-stone-500">Reply time</p>
              <p className="mt-1 font-medium text-stone-900">
                Within 24 hours, every weekday.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
