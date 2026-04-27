export type Plan = {
  slug: string;
  name: string;
  weeks: string;
  tagline: string;
  sessionsPerWeek: string;
  sessionLength: string;
  focus: string[];
  sampleWeek: { day: string; focus: string }[];
  outcome: string;
};

export const plans: Plan[] = [
  {
    slug: "beginner-power",
    name: "Beginner Power",
    weeks: "Weeks 1 to 8",
    tagline: "Master fundamental patterns, build a base.",
    sessionsPerWeek: "3 sessions per week",
    sessionLength: "About 45 minutes",
    focus: [
      "Squat",
      "Hinge",
      "Push",
      "Pull",
      "Carry",
    ],
    sampleWeek: [
      { day: "Day 1", focus: "Squat focus + upper body push" },
      { day: "Day 2", focus: "Hinge focus + upper body pull" },
      { day: "Day 3", focus: "Full upper body + carries" },
    ],
    outcome:
      "Confident technique on the five fundamental lifts and a real loading base.",
  },
  {
    slug: "intermediate-strength",
    name: "Intermediate Strength",
    weeks: "Weeks 9 to 20",
    tagline: "Add load, refine technique, build confidence.",
    sessionsPerWeek: "4 sessions per week",
    sessionLength: "About 60 minutes",
    focus: [
      "Linear progression on big lifts",
      "Targeted accessory work",
      "Form refinement on video",
      "Planned deloads",
    ],
    sampleWeek: [
      { day: "Day 1", focus: "Squat heavy triples + accessories" },
      { day: "Day 2", focus: "Bench heavy + back volume" },
      { day: "Day 3", focus: "Deadlift heavy + posterior chain" },
      { day: "Day 4", focus: "Press + arms + conditioning" },
    ],
    outcome: "A meaningful 1RM increase on squat, deadlift, and press.",
  },
  {
    slug: "advanced-power",
    name: "Advanced Power",
    weeks: "Weeks 21 and beyond",
    tagline: "Periodized strength and power.",
    sessionsPerWeek: "4 to 5 sessions per week",
    sessionLength: "About 75 minutes",
    focus: [
      "Block periodization",
      "Peaking cycles",
      "Explosive and speed work",
      "Competition prep on request",
    ],
    sampleWeek: [
      { day: "Day 1", focus: "Speed squats + heavy singles" },
      { day: "Day 2", focus: "Bench peaking + accessory" },
      { day: "Day 3", focus: "Deadlift speed + pulling volume" },
      { day: "Day 4", focus: "Overhead press + upper back" },
      { day: "Day 5", focus: "Optional explosive work + GPP" },
    ],
    outcome:
      "A peaked, tested 1RM and the technical chops to keep progressing.",
  },
];
