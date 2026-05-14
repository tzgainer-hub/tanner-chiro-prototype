# Tanner Chiropractic — Audit of the Upwork Redesign

## Why We Stopped It and Started Over

**Prepared by Tom Zgainer · Point Zero AI · May 14, 2026**
**Site audited:** tanner.viewyourprojecthere.com (the Upwork developer's in-progress rebuild)

---

## Why This Audit Exists

Tom asked for a brutally honest, plain-English review of the Upwork developer's in-progress redesign of Tanner Chiropractic — the same kind of audit a senior consultant would write if you were paying $5,000 for an outside opinion. The goal was to decide whether to keep iterating with that developer, push for changes, or take the project over entirely.

This document captures the findings. They're the reason we recommended a full rebuild instead of more revisions.

---

## Executive Summary

**Overall grade: C-**

A competent-looking but strategically broken chiropractic site that hid Dr. Tanner's best assets — thirty years of experience and a deep portfolio of five-star Google reviews — under a pile of stock-feeling photos and eight competing buttons. The Upwork developer wasn't lazy. They were doing exactly what most template-driven WordPress builds produce. The problem is what most template-driven WordPress builds produce isn't good enough for a thirty-year specialist whose patients include world champion athletes.

The strategic problems were significant enough that fixing them inside the existing build would have been more work than starting clean — and would have left the underlying WordPress platform lock-in, page bloat, and slow load times in place.

---

## The 10-Point Audit

### 1. First Impression (5-Second Test) — 6/10

The visitor could tell within five seconds that this was a chiropractic practice in North Scottsdale. That's the baseline win. But the headline — *"Don't Let Pain Stop You From Feeling Your Best"* — could be on any chiropractor's website in America, and the thirty-year credibility line (the strongest signal Dr. Tanner has) was buried in the subhead.

**The emotion the page produced was mild confusion, not confidence.** The image overload made it feel like a brochure, not the office of a confident expert.

### 2. Offer Clarity — 7/10

Service and location were clear. Target customer (active adults 50+) was inferrable from the copy. **But there was no price, no new-patient offer, no low-friction entry point** — patients who aren't ready to book a full appointment had nowhere to land. That kills conversion.

### 3. Design & Visual Quality — 5/10

This is where Tom's instinct was exactly right: **way too many images.** The page carried roughly 20–25 photos. Most were stock-feeling lifestyle shots that conveyed nothing specific about the practice. The result felt like a portfolio site for a photographer, not a confident expert's office.

A site that should have signaled "$20,000 to build" instead looked like it cost $3,500. The fix was always going to be subtraction, not addition.

### 4. Copywriting — 6/10

The "Why Standard Treatment Falls Short" section was the strongest part of the page — specific, clinical, and confident. But it was surrounded by phrases that read like wellness-brochure boilerplate from 2015. The thirty-years line and the TPI certifications were mentioned three different ways across the page — which reads as insecurity, not credibility.

Most damaging: **a busy 55-year-old golfer with lower back pain would bail before scrolling halfway down.** The page was simply too long, with too much body copy, for the audience it was supposed to convert.

### 5. Conversion & Calls-to-Action — 5/10

This was the biggest mechanical problem on the site. The page had **eight different calls-to-action**:

- Schedule Your Consultation
- Call Now
- Book Appointment
- Schedule Your Initial Assessment
- Learn About Our Approach
- Discover Our Integrated Approach
- View All Services
- Read More

A confused visitor doesn't decide — they leave. There were four different ways to say "book" and three different ways to say "learn." The site was generating choice paralysis instead of conversion.

### 6. Trust & Social Proof — 3/10 (the worst section)

**This was the worst part of the site, and it's the easiest to fix.** The page had a "Patient Reviews" section that proudly said *"Patient Results Speak for Themselves"* — and then **showed zero actual reviews.** It linked to a Google Maps page where visitors could read them, but didn't display any.

Dr. Tanner has a deep portfolio of five-star Google reviews. He has served as physician for world champion boxers and world-class and professional golfers. He developed the Golfer's Edge performance program at Desert Mountain. None of that was visible on the page.

You can't tell visitors "trust us" and then refuse to show them why.

### 7. Mobile Experience — 6/10 (estimated)

A modern WordPress theme is responsive, but 20+ images at 1024px+ resolution make a phone load painfully slow over LTE. The fifteen-section page would be an endless scroll on a phone. Most visitors arriving from a Google search land on mobile — that's a real conversion problem.

### 8. Speed & Tech — 4/10

WordPress build (visible from `wp-content/uploads` URL patterns). On a staging domain (`viewyourprojecthere.com`) that should have been blocked from Google indexing but wasn't. Multiple navigation links pointed at `#` placeholders that didn't go anywhere — that's developer laziness that should never ship.

Page weight was approximately 4–6 MB. Modern best practice is under 1.5 MB. The site was carrying three to four times more weight than it should have.

### 9. SEO & Discoverability — 4/10

Major gaps:

- **No Schema.org structured markup.** For a local medical practice in a competitive market, this is essentially malpractice. It's how Google understands that a website represents a Chiropractor with five-star reviews and shows the stars in search results.
- **No `LocalBusiness` schema, no `Physician` schema, no `AggregateRating` schema.**
- **The staging URL wasn't blocked from Google indexing,** meaning Google could have started indexing the development domain — creating duplicate-content problems when the live domain migrated.
- **Title tag and meta description were template defaults.** Not optimized for the keywords that drive North Scottsdale chiropractic search traffic.

### 10. The Single Biggest Opportunity

**Cut the homepage in half and put real Google reviews above the fold.**

Three changes would have moved the needle more than anything else on the list:

1. A single hero with one CTA and one fineprint offer
2. A row of three real Google reviews directly below the hero
3. A clear $49 new patient exam offer to remove the price-friction barrier

Those three changes alone would have outperformed the existing fifteen-section page.

---

## Top 5 Fixes (Prioritized)

| # | Fix | Impact |
|---|---|---|
| 1 | Cut images from 20+ down to 6–8. Single biggest visual + speed win. | **HIGH** |
| 2 | Add real Google reviews (3–5) above the fold with star rating. | **HIGH** |
| 3 | Consolidate 8 CTAs into ONE primary CTA. Kill the rest. | **HIGH** |
| 4 | Add a $49 new-patient offer to remove price friction. | **MEDIUM** |
| 5 | Add LocalBusiness + Review schema markup. Fix broken `#` links. Block staging from Google. | **MEDIUM** |

---

## Why We Took It Over

After this audit, the decision was straightforward:

- The strategic problems weren't surface-level — they were baked into the structure. The page architecture, the WordPress platform, and the design philosophy all needed to change.
- Fixing them inside the existing build would have meant arguing with the Upwork developer over every section while still being stuck on a slow WordPress theme afterward.
- Starting clean — with a static, fast, premium-feeling site that put Dr. Tanner's real credentials front and center — was less work and would produce a dramatically better result.

The new build is now live at **tanner-chiro-prototype-production.up.railway.app**. Every one of the issues catalogued above has been addressed in the rebuild. The companion document, *Your New Website — A Synopsis*, walks through exactly how.

---

## Bottom Line for Dr. Tanner

The Upwork developer wasn't sabotaging the project. They were producing a generic WordPress chiropractic site — competent, defensible, and exactly wrong for a thirty-year specialist who has treated PGA pros and world champion athletes. You don't need a generic chiropractic site. You need a site that closes patients on your expertise. That's what we built.

— Tom Zgainer
&nbsp;&nbsp;&nbsp;Point Zero AI
