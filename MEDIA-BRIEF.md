# Media Brief — Garcia Home Buyers landing

This is the full spec for what photos and video the landing page needs, where each asset slots into the code, and how each should be shot. Testimonials are intentionally skipped — those will be pulled from Google Reviews.

Hand this doc to a photographer/videographer, or use it as a shot list if you're capturing media yourself.

---

## TL;DR — priorities

If you can only get some of this, get it in this order. Every item above the line moves conversion.

1. **8–12 "recently purchased" home photos** (exterior shots of real homes you bought, with a small SOLD overlay we add in post).
2. ~~**Founder portrait of Jose Garcia** — one clean headshot, ideally a second with a seller or a home in the background.~~ ✅ Done — wired into the new `Founder` section (`public/media/team/jose-portrait.webp`).
3. **45–60 second founder intro video** — Jose on camera, plain-English "here's how we work."
4. ~~**Hero "establishing" photo** — a warm, human exterior shot (Jose in front of a home, or a seller handing over keys).~~ ✅ Done — handshake photo (`public/media/hero-handshake.jpg`) wired into the Hero right column with OfferCard overlaying.
5. **Short process video clip (15–30 sec)** — handshake, signing, keys on a counter — used as a muted background loop in the final CTA.
6. **Trust badge assets** — Google logo, BBB logo, actual review screenshots. Logos must be used per each brand's usage guidelines.

Everything else (per-situation imagery, map graphic, etc.) is nice-to-have.

---

## Slot-by-slot media plan

Each slot calls out the component file, a rough line reference, what goes there, and the spec.

### Slot A — Hero right column ✅ Done

- **File:** `app/components/Hero.tsx`
- **Status:** Live — handshake photo (`public/media/hero-handshake.jpg`, 1264 × 848) sits as the right-column hero image, with the OfferCard floating over the bottom-right corner. Two caption tags overlay the photo: "Real seller · Southeast US" and "Cash close · As-is."
- **Repositioned mid-build:** original brief asked for a pristine home exterior; final direction is a "moment of relief" handshake between a buyer and a seller outside a modest singlewide. This converts harder for distressed-seller traffic.
- **What stayed:** OfferCard floats over the bottom-right of the photo on desktop, stacks below on mobile.

### Slot B — Trust bar logos (low effort, medium impact)

- **File:** `app/components/Marquee.tsx`
- **Where in file:** each badge's SVG icon block (`case 'star'`, `case 'shield'`, etc.)
- **Current:** abstract SVG icons.
- **Upgrade:** swap the `star` and `shield` icons for the real **Google G** and **BBB** logos (per each brand's usage guidelines — do NOT freestyle them).
- **Asset:**
  - `google-g.svg` — Google's official 4-color G, ≤ 32 × 32 display
  - `bbb-accredited.svg` — BBB Accredited Business badge (A+ rating variant)
- **File paths:** `public/media/logos/google-g.svg`, `public/media/logos/bbb.svg`
- **Licensing note:** both brands require linking to the actual review profile / BBB profile. Save the profile URLs when you grab the logos.

### Slot C — "Homes we've bought" gallery (HIGH priority, NEW section)

This is the biggest visual upgrade and the single best way to prove legitimacy without testimonials.

- **Proposed placement:** between `Solution` and `Situations` (new section in `app/page.tsx`, after line 21).
- **Section idea:** a marquee-style strip or 4-column grid titled "Recently purchased by Garcia."
- **Asset:** **8–12 real-home exterior shots.**
- **Spec per photo:**
  - 1200 × 900 (4:3), < 250 KB each
  - Format: WebP or JPG
  - Shot composition: front elevation, straight-on, no people, no cars in driveway, no visible address numbers if you want to avoid doxxing
  - Include a light mix — ranch, split-level, mobile/manufactured, damaged, fixed-up. That variety reinforces "any condition."
  - Post-production: small SOLD corner stamp (we can add in code) + city/state caption we overlay in code
- **Metadata to collect per photo** (we'll render as caption):
  - City, state (e.g. "Marietta, GA")
  - Purchase year (e.g. "Bought 2024")
  - One-word situation (e.g. "Inherited", "Vacant", "Pre-foreclosure", "As-is")
- **File path:** `public/media/homes/01.jpg` … `public/media/homes/12.jpg`
- **Alt text pattern:** "[City, State] — home purchased by Garcia Home Buyers"

### Slot D — Founder / team (HIGH priority, NEW section)

Adds face-to-name trust. Currently the site has zero human faces.

- **Proposed placement:** ✅ Live — new `Founder` section between `Proof` and `Guarantee` in `app/page.tsx`.
- ~~**Asset A — Portrait:**~~ ✅ **Delivered** — `public/media/team/jose-portrait.webp` (800 × 592 landscape, Jose in a mobile-home showroom). Wired into `app/components/Founder.tsx` via `next/image`. Layout was adapted from the originally-spec'd portrait orientation to fit this landscape shot.
- **Asset B — Team shot (optional):**
  - 1200 × 800 landscape, Jose + any team members on a porch or at a home
  - Used smaller, as a secondary proof image
- **Asset C — Optional founder video:**
  - 45–60 seconds, 1080p, mp4 (H.264, AAC)
  - Script (keep casual, first person):
    1. _"Hey, I'm Jose. My team and I have bought over 1,200 homes across the Southeast."_
    2. _"If you're stuck with a house you can't keep — inherited, damaged, behind on payments — we'll send you a fair cash offer in 24 hours."_
    3. _"No repairs, no showings, no commissions. You pick the closing date. If our number doesn't work for you, walk away, no pressure."_
    4. _"Fill out the form or give me a call at (404) 555-0123."_
  - Shot outside the home or in a warm office, natural light. Lav mic. Captions required (we'll render burned-in + SRT).
- **File paths:**
  - `public/media/team/jose-portrait.jpg`
  - `public/media/team/team.jpg`
  - `public/media/team/founder-intro.mp4`
  - `public/media/team/founder-intro.vtt` (captions)

### Slot E — Situations cards (nice-to-have)

- **File:** `app/components/Situations.tsx`
- **Where:** inside each card (~line 235 area, inside the `<motion.div key={s.title}>`)
- **Current:** SVG icons only.
- **Upgrade (skip if short on time):** swap each icon for a small photo that evokes the situation. These are the hardest shots to get — skip unless you have stock / archive.
  - Inherited → empty living room with draped furniture
  - Foreclosure → mailbox with overdue notice (re-staged)
  - Divorce → duplicate sets of keys on a table
  - Relocation → moving boxes stacked by a door
  - Vacant → "for sale by owner" sign on an overgrown lawn
  - Damaged → water-stained ceiling or burned wall corner
  - Problem tenants → trashed interior
  - Tired landlord → stack of rent ledger paperwork
- **Spec:** 800 × 800 square, < 150 KB each, desaturated look so all 8 read as a set.
- **File path:** `public/media/situations/inherited.jpg` etc.

### Slot F — Proof stats strip (low priority)

- **File:** `app/components/Proof.tsx`
- **Current:** animated number count-ups.
- **Upgrade (optional):** a thin strip of "before/after" pairs above the stats. Needs 3–4 **matched** pairs of the same home (purchase day vs. after we rehabbed). Only worth doing if you have these in archives already.
- **Spec:** 800 × 600 each, paired by filename (e.g. `03-before.jpg` + `03-after.jpg`).

### Slot G — Testimonials section (HANDLED — Google Reviews)

- **File:** `app/components/Proof.tsx` lines 14–39.
- **Current:** 3 placeholder testimonial cards with fake names.
- **Action:** **replace with Google Reviews embed** or a server-side pull of the 3–5 most recent Google reviews for the business profile.
  - Need: Google Place ID for Garcia Home Buyers, plus a Places API key (or an embed widget — EmbedSocial, Trustindex, Elfsight all work).
  - Display: keep the existing card layout, pipe `{quote, name, city, date, rating}` from the Google source.
  - Must show star rating, reviewer name (first name + last initial is typical), and a "View on Google" link per Google's policy.
- **No photo needed here** — Google supplies reviewer avatars.

### Slot H — Final CTA background (nice-to-have)

- **File:** `app/components/FinalCta.tsx`
- **Where:** behind the aurora blobs (~line 15 area).
- **Current:** pure gradient + blobs.
- **Upgrade:** a **silent, looping 10–15 second video** of subtle motion — keys landing on a counter, a door unlocking, a handshake — at very low opacity (~15%) and `mix-blend-mode: screen`. Should not pull focus from the CTA.
- **Spec:** 1920 × 1080, mp4 (H.264), < 2 MB, 10–15 sec loop, **no audio**, no faces centered.
- **File path:** `public/media/final-cta-loop.mp4`

---

## Full shot list (what to hand a photographer)

**Photo day (half-day shoot):**

1. Jose portrait — headshot, 2 outfits, indoor & outdoor
2. Jose + team — 1 group shot outside a home
3. Jose on-site — walking up to a home, pointing at a roof, talking to a seller (staged)
4. 8–12 home exteriors — drive-by permission only; no addresses visible
5. (Stretch) 3 situation photos from the Slot E list above

**Video day (2–3 hours):**

1. 45–60 sec founder intro (teleprompter or beat-by-beat script above)
2. 15-sec B-roll clip for the final CTA — keys, handshake, pen-on-paper

**Assets to collect separately (no shoot needed):**

1. Google G logo + BBB A+ badge (from brand kits)
2. Google Place ID + API setup for review embeds
3. Actual company phone number (currently placeholder `(404) 555-0123` in `Header.tsx`, `Hero.tsx`, `FinalCta.tsx`, `Footer.tsx`)

---

## File tree it should all land in

```
public/media/
  hero-home.jpg
  final-cta-loop.mp4
  logos/
    google-g.svg
    bbb.svg
  homes/
    01.jpg … 12.jpg
  team/
    jose-portrait.jpg
    team.jpg
    founder-intro.mp4
    founder-intro.vtt
  situations/
    inherited.jpg
    foreclosure.jpg
    divorce.jpg
    relocation.jpg
    vacant.jpg
    damaged.jpg
    tenants.jpg
    landlord.jpg
```

Once the media is in that folder, the corresponding components can be wired up in a follow-up commit — each slot above names the exact file to edit.
