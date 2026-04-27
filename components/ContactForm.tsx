"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <Check className="w-6 h-6 text-amber-700" />
        </div>
        <p className="mt-6 font-display text-2xl text-stone-900">
          Thanks &mdash; we&apos;ll be in touch within 24 hours.
        </p>
        <p className="mt-3 text-stone-700 text-sm">
          In the meantime, have a look at the{" "}
          <a href="/plans" className="text-amber-700 hover:underline">
            three plans
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-stone-900"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-900"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="goal"
          className="block text-sm font-medium text-stone-900"
        >
          Goal
        </label>
        <textarea
          id="goal"
          required
          rows={5}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
          placeholder="What are you training for?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-100 px-6 py-3 text-sm font-medium hover:bg-amber-700 transition-colors"
      >
        <Send className="w-4 h-4" />
        Send
      </button>
    </form>
  );
}
