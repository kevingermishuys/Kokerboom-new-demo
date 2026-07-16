# CLAUDE.md — Website Design Standards (Kokerboom Studio)

I build websites for real small businesses. Every site must feel designed by a human for THIS client — never like an AI template. Follow these rules on every task.

## Ground everything in the client

- Before designing, state: who the client is, who their customers are, and the page's single job. If I haven't told you, ask.
- Pull the visual direction from the client's real world — their industry, materials, location, and vocabulary. A cargo inspection firm and a coffee shop must never look like siblings.
- Use real content. If copy is missing, write plausible copy in the client's voice — never "Lorem ipsum" and never generic startup phrases ("Empowering your journey", "Solutions that scale").

## Banned AI-design tells

Do NOT use these unless I explicitly ask:
- Cream background (#F4F1EA-ish) + high-contrast serif display + terracotta/clay accent
- Near-black background with one acid-green or vermilion accent
- Broadsheet look: hairline rules, zero border-radius, dense newspaper columns
- Hero = big number + small label + gradient accent
- Numbered section markers (01 / 02 / 03) unless the content is genuinely sequential
- Purple-to-blue gradients, glassmorphism cards, floating blob shapes
- Emoji as icons; generic "🚀 Fast, 🔒 Secure, ⚡ Reliable" feature grids
- Scattered scroll animations on every element

## Design rules

- The hero is a thesis: open with the most characteristic thing in this client's world (a headline, photo, or interactive moment) — not a template pattern.
- Typography carries personality: pick a deliberate display + body pairing specific to this brief. Never default to Inter/Poppins/Montserrat for everything. Set a real type scale.
- Palette: 4–6 named colors chosen for this client. Justify the choice in one sentence before coding.
- One signature element per site — the single thing the page is remembered by. Keep everything else quiet and disciplined. Cut decoration that serves nothing.
- Motion: one orchestrated moment beats ten scattered effects. Sometimes zero animation is correct.

## Copy rules

- Write from the customer's side of the screen: plain verbs, sentence case, specific over clever.
- Buttons say exactly what happens: "Request a quote", not "Get started".
- Errors and empty states give direction, never mood or apologies.

## Process

1. Brainstorm a short design plan first: palette (hex values), type pairing, layout concept, signature element.
2. Self-check: "Would I produce this same design for any other client with a similar prompt?" If yes, revise before writing code.
3. Build. Then critique your own output once and fix the weakest part.

## Quality floor (non-negotiable, don't announce it)

- Fully responsive down to 360px mobile
- Visible keyboard focus states
- `prefers-reduced-motion` respected
- Semantic HTML, real alt text, WCAG AA contrast
- Fast: optimized images, no unused libraries

## Workflow

- Ask before adding pages, sections, or dependencies I didn't request.
- When I correct you, update this file so the mistake doesn't repeat.
