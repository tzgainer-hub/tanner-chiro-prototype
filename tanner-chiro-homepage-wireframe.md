# Tanner Chiropractic — Homepage Wireframe Spec
**For:** Developer handoff
**Goal:** Cut current 15-section, 20+ image homepage down to 7 focused sections, ~7 images, one primary CTA.
**Tone:** Premium medical / confident specialist — not brochure.

---

## Global Rules

- **Image budget for entire homepage: 7 images max.** No exceptions.
- **One primary CTA, repeated verbatim everywhere:** `Book Your Consultation`
- **Phone number visible in header at all times:** `(480) 595-6101`
- **Color palette:** Sage / sand / ivory (keep current direction — this is working).
- **Typography:** Serif headline (e.g., Cormorant Garamond, Fraunces, or Lora) + clean sans body (Inter or Söhne). No display fonts.
- **Spacing:** Generous. 120px vertical padding between sections on desktop, 64px on mobile.
- **No images of generic stock people.** Real Dr. Tanner, real office, real patients (with permission), real equipment only.
- **All "Book Your Consultation" buttons link to the same booking flow / calendar.**
- **Kill every `#` placeholder link before staging review.**

---

## SECTION 1 — Sticky Header

**Height:** 72px desktop, 60px mobile
**Background:** Ivory with subtle bottom border on scroll
**Contents (left to right):**
- Tanner Chiropractic logo (left)
- Nav: `About` · `Services` · `Conditions` · `New Patients` · `Contact` (center) — flat menu, NO dropdowns
- Phone number `(480) 595-6101` (right, clickable on mobile)
- Primary button: **`Book Your Consultation`** (right, sage background, ivory text)

**Mobile:** Hamburger replaces nav. Phone + Book button stay visible.

**Delete from current site:** All dropdown sub-menus. Move services/conditions to a single flat page each.

---

## SECTION 2 — Hero

**Layout:** 60/40 split desktop (copy left, image right). Stacked on mobile.
**Height:** 90vh desktop, auto mobile
**Background:** Ivory

**Image (1 of 7):**
- Single photograph of Dr. Tanner with a patient OR Dr. Tanner alone in clinical setting.
- Warm lighting, natural, NOT a stock smile-at-camera.
- 1200px × 1400px portrait orientation.

**Copy — exactly as written:**

> **Headline (H1, ~64px desktop):**
> 30 Years Fixing North Scottsdale Backs, Knees, and Golf Swings.
>
> **Subhead (~20px, max 2 lines):**
> Dr. Glen Tanner — TPI-certified, integrated chiropractic care for active adults 50+. Treating the cause, not the symptoms, since 1995.
>
> **Primary CTA button:**
> Book Your Consultation
>
> **Secondary line beneath button:**
> New patient exam $49 · Or call (480) 595-6101

---

## SECTION 3 — Social Proof Bar (THE MOST IMPORTANT ADD)

**Position:** Immediately below hero. This is the first thing they see after the headline.
**Background:** Sand (subtle contrast from ivory hero)
**Height:** ~280px desktop, auto mobile

**Layout:** 3 columns desktop, stacked mobile

**Left third — Rating block:**
> ⭐⭐⭐⭐⭐ **4.9**
> 147 Five-Star Google Reviews
> `[Read all reviews →]` (links to Google)

**Center + Right two-thirds — 3 review cards in a row:**

Each card contains:
- 4.9★ star row
- Real quote (40–60 words max)
- Patient first name + last initial + age + activity
- Small circular avatar (real photo with patient permission, or a sage-tinted initial circle if no photo)

**Example structure (pull 3 best real reviews from Google):**

> ★★★★★
> "I'd been to four chiropractors for my golf-related back pain. Dr. Tanner was the first to actually look at my swing. Six weeks later I'm back on the course pain-free."
> — **Mike R., 62, golfer**

**Note to developer:** Pull the actual top 3 Google reviews and have client approve the quotes. Don't write fake testimonials.

---

## SECTION 4 — Why Tanner Is Different

**Background:** Ivory
**Layout:** Centered text block, max-width 800px

**No image in this section.**

**Copy:**

> **Section heading (H2, ~44px):**
> Most chiropractic care fixes the restriction. We fix what caused it.
>
> **Body (3 short paragraphs):**
> Adjustments relieve the immediate pain — but they don't correct the muscle imbalances, movement patterns, or weakness that caused the problem in the first place. That's why most patients come back six months later with the same issue.
>
> Our integrated approach combines chiropractic adjustments with corrective exercise, clinical Pilates, soft-tissue work, and advanced modalities like spinal decompression and cold laser. Each tool addresses a specific layer of the problem.
>
> The result: faster recovery, longer-lasting relief, and patients who don't need to keep coming back.
>
> **CTA button (centered below body):**
> Book Your Consultation

---

## SECTION 5 — What We Treat

**Background:** Sand
**Layout:** 2-column desktop (Services left, Conditions right). Stacked mobile.

**No photos. Use simple line icons OR no icons at all — just type.**

**Image budget used here: 0 of 7.**

**Left column — Services (8 items, simple list):**

> **What We Do**
> - Chiropractic Care
> - Sports Injury Treatment
> - Corrective Exercise & Training
> - Clinical Pilates
> - Therapeutic Massage
> - Stretch Therapy
> - Spinal Decompression
> - Cold Laser Therapy
>
> `[See how each service fits in →]` (links to /services)

**Right column — Conditions (5 items, simple list):**

> **What We Treat**
> - Lower Back Pain
> - Golf Injury & Swing Correction
> - Neck Pain
> - Sciatica
> - Shoulder Pain
>
> `[See our approach by condition →]` (links to /conditions)

**Delete from current site:** The 6 service cards with photos, the duplicated "Our Services" comprehensive listing, the "Conditions We Treat" card row. All consolidated into this one cleaner section.

---

## SECTION 6 — Meet Dr. Tanner

**Layout:** 50/50 split desktop (image left, copy right). Stacked mobile.
**Background:** Ivory

**Image (2 of 7):**
- Professional portrait of Dr. Tanner. Neutral background, warm but clinical, looking at camera.
- 800px × 1000px portrait.

**Copy:**

> **Section heading:**
> Meet Dr. Glen Tanner
>
> **Body:**
> Dr. Tanner has spent 30+ years helping North Scottsdale's active adults move better, recover faster, and stay out of pain. His patients include touring golf professionals, masters-level athletes, and weekend warriors who refuse to slow down.
>
> He's TPI-certified (Titleist Performance Institute), trained in advanced sports medicine, and one of the few chiropractors in the Valley running a fully integrated practice — adjustments, movement, soft tissue, and modalities under one roof.
>
> **Credibility row (small icons or text-only):**
> TPI Certified · Sports Medicine Specialist · 30+ Years in Practice · Treating Active Adults 50+
>
> **CTA button:**
> Book Your Consultation

---

## SECTION 7 — New Patients (Reduce Friction)

**Background:** Sand
**Layout:** Centered, max-width 900px
**Image budget used: 0 of 7.**

**Copy:**

> **Section heading:**
> New Here? Start with a $49 Exam.
>
> **Body:**
> Your first visit includes a full evaluation, movement screen, and a clear conversation about whether we're the right fit. No pressure. No surprise charges. If we're not the right answer for what's going on, we'll tell you.
>
> **Three-step strip (text only, no icons needed):**
> 1. **Book** — Call or schedule online
> 2. **Evaluate** — 45-minute assessment with Dr. Tanner
> 3. **Plan** — A clear, written treatment path
>
> **Primary CTA:**
> Book Your $49 New Patient Exam
>
> **Secondary text:**
> Or call (480) 595-6101 — we answer Mon–Fri.

---

## SECTION 8 — Office / Location

**Layout:** 50/50 split. Map left, info right. Stacked mobile.
**Background:** Ivory

**Image (3 of 7):** Google Map embed (interactive, not a screenshot).
**Image (4 of 7, optional):** ONE exterior shot of the building OR interior of the practice. If you can't get a beautiful real photo, skip it.

**Copy (right side):**

> **Section heading:**
> Visit Tanner Chiropractic
>
> **Address:**
> 33755 N. Scottsdale Rd., Suite 101A
> Scottsdale, AZ
>
> **Phone:** (480) 595-6101
>
> **Hours:**
> Mon–Thu: 7am–12pm, 2pm–6pm
> Fri: 7am–12pm
> Sat–Sun: Closed
>
> **CTA button:**
> Get Directions

---

## SECTION 9 — Final CTA Band

**Background:** Sage (the only deep-color section on the page)
**Height:** ~400px
**Layout:** Centered text
**No image.**

**Copy:**

> **Headline (H2 in ivory, ~52px):**
> Ready to stop managing pain and start fixing it?
>
> **Subhead:**
> Book your consultation with Dr. Tanner today. New patient exam $49.
>
> **Primary button (ivory background, sage text):**
> Book Your Consultation
>
> **Secondary line:**
> Or call (480) 595-6101

---

## SECTION 10 — Footer

**Background:** Deep sage or charcoal
**Height:** Auto

**4 columns desktop, stacked mobile:**

1. **Brand**
   - Tanner Chiropractic logo
   - One-line tagline
   - Address, phone

2. **Services** (8 links to /services anchors)

3. **Conditions** (5 links to /conditions anchors)

4. **Quick Links**
   - About Dr. Tanner
   - New Patient Info
   - Contact
   - Reviews
   - Blog (only if blog exists)

**Bottom bar:**
- © 2026 Tanner Chiropractic. All rights reserved.
- Privacy Policy · Terms · Accessibility
- Use PHP `date('Y')` so the year auto-updates.

---

## Image Inventory (Final Count: 4 actual photos + 1 map + portrait reuse)

| # | Section | Image |
|---|---------|-------|
| 1 | Hero | Dr. Tanner with patient (or Dr. Tanner clinical) |
| 2 | Meet Dr. Tanner | Dr. Tanner professional portrait |
| 3 | Office / Location | Google Map embed |
| 4 | Office / Location | ONE exterior or interior shot (optional) |

**Everything else: type, color, and space.**

**Delete from current site:**
- All 6 service-card photos
- All 5 condition-card photos
- Hero secondary lifestyle images
- "Integrated approach" visual carousel
- Duplicate Dr. Tanner photos
- Equipment/facility photo wall

---

## SEO / Technical Requirements Before Launch

1. **Block staging from Google.** Add `<meta name="robots" content="noindex,nofollow">` to every staging page OR robots.txt-disallow the entire staging subdomain.
2. **Title tag:** `Tanner Chiropractic | North Scottsdale Chiropractor | Dr. Glen Tanner` (under 60 chars)
3. **Meta description:** `30 years treating North Scottsdale's active adults. Integrated chiropractic, sports medicine, and corrective exercise. New patient exam $49.` (under 155 chars)
4. **Add schema markup:**
   - `LocalBusiness` / `Chiropractor` schema (NAP + hours + geo)
   - `Physician` schema for Dr. Tanner
   - `AggregateRating` schema pulling from Google reviews
   - `FAQPage` schema on each condition page
5. **Image optimization:** All images served as WebP, max 1400px wide, lazy-loaded below the fold.
6. **Page weight target:** Under 1.2 MB total.
7. **Fix every `#` placeholder link** — currently several in nav and CTAs.
8. **Add Google Business Profile review widget** in Social Proof Bar (live, not static).

---

## What This Removes From The Current Site

- 15 sections → **9 sections** (header, hero, social proof, why different, what we treat, meet Dr. Tanner, new patients, office, final CTA, footer)
- 20–25 images → **4 photos + 1 map**
- 8 different CTAs → **1 primary CTA** (`Book Your Consultation`) repeated identically
- Choice paralysis → clear path: hero → proof → why → book

---

## Estimated Build Effort

If the current WordPress theme is salvageable: **20–30 hours** of dev work to restructure.
If a full rebuild is warranted: **40–60 hours**.
Copy + strategy already complete in this spec — no additional copywriting needed beyond pulling the 3 real Google reviews.

---

*Spec authored 2026-05-14 for Tom Zgainer.*
