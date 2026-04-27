"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-10 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-[var(--color-rust)] flex items-center justify-center">
          <Check className="w-6 h-6 text-[var(--color-bone)]" />
        </div>
        <p className="mt-6 font-display text-3xl text-[var(--color-ink)]">
          Tak — jeg vender tilbage.
        </p>
        <p className="mt-3 text-[var(--color-ink-soft)]">
          I mellemtiden, kig forbi{" "}
          <a href="/programmet" className="text-[var(--color-rust)] hover:underline">
            Stærk &amp; Struktureret
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--color-bone-deep)] bg-[var(--color-bone-soft)] p-8 md:p-10 space-y-6"
    >
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
          Navn
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full bg-transparent border-b border-[var(--color-ink)]/25 px-0 py-3 text-lg text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-rust)]"
          placeholder="Dit navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full bg-transparent border-b border-[var(--color-ink)]/25 px-0 py-3 text-lg text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-rust)]"
          placeholder="dig@example.dk"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--color-ink-mute)]">
          Besked
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full bg-transparent border-b border-[var(--color-ink)]/25 px-0 py-3 text-lg text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-rust)] resize-none"
          placeholder="Hvad træner du for? Hvor er du stuck?"
        />
      </div>

      <button type="submit" className="btn-primary mt-2">
        <Send className="w-4 h-4" />
        Send besked
      </button>
    </form>
  );
}
