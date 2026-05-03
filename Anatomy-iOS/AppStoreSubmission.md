# App Store Submission — Anatomy Atlas

All copy for App Store Connect. Paste each section directly into the matching field.

---

## Core Metadata

| Field | Value |
|---|---|
| **App Name** | Anatomy Atlas |
| **Subtitle** | Offline Dissection Reference |
| **Bundle ID** | com.anatomyatlas.AnatomyAtlas |
| **Primary Category** | Medical |
| **Secondary Category** | Education |
| **Age Rating** | 4+ |
| **Price** | Free (or your choice) |
| **Primary Language** | English (U.S.) |

---

## Keywords
*(100 characters max — paste exactly as-is)*

```
anatomy,dissection,medical,topography,cranial nerves,CNS,atlas,study,reference,exam
```

---

## Promotional Text
*(170 characters max — shown above the description, can be updated without a new build)*

```
Your complete offline anatomy reference. Explore topographies, cranial nerves, and the full nervous system — no internet required.
```

---

## Description
*(Paste into the "Description" field — 4000 character limit)*

```
Anatomy Atlas is a comprehensive offline anatomy study reference built for medical students, anatomy learners, and healthcare professionals.

All content is bundled inside the app — no internet connection required, ever.

────────────────────────
TERM LIBRARY
────────────────────────
Search and browse hundreds of anatomical terms with precise borders, definitions, and clinical context — sourced directly from dissection booklets and regional anatomy guides.

Covers:
• Topographies: scalp, temporal fossa, infratemporal fossa, pterygopalatine fossa, neck triangles, axilla, mediastinum, and more
• Surface projection points: McBurney's point, Lanz point, Murphy's point, Desjardin's point, Labbé's triangle
• Pouches: pouch of Douglas, vesicouterine pouch, rectovesical pouch
• Inguinal landmarks: Hesselbach's triangle, inguinal canal walls and contents
• Pelvis and perineum landmarks

────────────────────────
CNS / PNS EXPLORER
────────────────────────
An interactive map of the entire nervous system. Tap any structure for a focused detail view:

• Brain and spinal cord
• All 12 cranial nerves with origins, course, and function
• Peripheral plexuses: brachial, lumbar, sacral, coccygeal
• Autonomic divisions: sympathetic and parasympathetic

────────────────────────
TOPOGRAPHY
────────────────────────
An interactive body silhouette with region markers. Tap any region to drill through subregions into detailed anatomical information. The abdomen follows the standard 4-quadrant division (RUQ, LUQ, RLQ, LLQ).

────────────────────────
DESIGNED FOR STUDYING
────────────────────────
• Fully offline — all content is inside the app, nothing loaded from the internet
• Fast, responsive layout on iPhone and iPad
• Dark mode follows your system preference automatically
• Supports landscape and portrait on all devices
• No account, no login, no ads, no data collection

────────────────────────
PRIVACY
────────────────────────
Anatomy Atlas collects zero data. No analytics, no advertising SDKs, no server connections of any kind. Any session state is stored only on your device and never transmitted.

An ideal companion for regional anatomy courses, dissection labs, and exam preparation.
```

---

## App Review Notes
*(Paste into the "Notes for App Review" field when submitting)*

```
Anatomy Atlas is an offline anatomy study reference built as a local WKWebView app.

All content (HTML, CSS, JavaScript, images) is bundled inside the app binary — no internet connection is used at runtime. The app loads index.html from the app bundle and renders it in a full-screen WKWebView.

No user data is collected or transmitted. No login is required. No external APIs are called.

The app supports iPhone and iPad in all orientations and has been tested on iOS 16 and later.
```

---

## Support & Privacy URLs

| Field | Value |
|---|---|
| **Support URL** | Your GitHub Pages URL or personal website |
| **Privacy Policy URL** | URL where you host `PrivacyPolicy.md` (see below) |
| **Marketing URL** | Optional — your GitHub Pages URL |

---

## Screenshots Required

Apple requires screenshots for at least these two device sizes:

### iPhone 6.7" — 1290 × 2796 px (iPhone 15 Pro Max / 16 Pro Max)
Take in simulator: **iPhone 16 Pro Max**

Suggested 5 screenshots (in order):
1. Home screen / welcome view
2. Term Library — search bar visible, a term card expanded
3. CNS / PNS map — nervous system diagram visible
4. Topography — body silhouette with a region highlighted
5. Region detail view (try dark mode for visual variety)

### iPad Pro 13" — 2064 × 2752 px (iPad Pro M4)
Take in simulator: **iPad Pro 13-inch (M4)**

Same 5 shots, but in landscape or portrait — landscape shows the layout best.

**How to take simulator screenshots:**
1. Run the app in the chosen simulator
2. Press `Cmd + S` — saves PNG to your Desktop

---

## Checklist Before Submitting

### One-time setup (do once)
- [ ] Enroll in Apple Developer Program at developer.apple.com ($99/year)
- [ ] Register Bundle ID `com.anatomyatlas.AnatomyAtlas` in Certificates, Identifiers & Profiles
- [ ] Create a new App in App Store Connect → My Apps → (+)

### In Xcode
- [ ] Open `AnatomyAtlasAssistant.xcodeproj`
- [ ] Set your Team in Signing & Capabilities (select your account)
- [ ] Confirm Version is `1.0` and Build is `1` (or higher)
- [ ] Product → Archive
- [ ] In Organizer → Distribute App → App Store Connect → Upload

### In App Store Connect
- [ ] Fill in all metadata from this file
- [ ] Upload screenshots for iPhone 6.7" and iPad Pro 13"
- [ ] Add Privacy Policy URL (see `PrivacyPolicy.md` — host it on GitHub Pages)
- [ ] Set Age Rating to 4+
- [ ] Submit for Review

### Hosting the Privacy Policy (easiest option — GitHub Pages)
1. Push the repo to GitHub (public or private)
2. Settings → Pages → Deploy from branch `main` / root
3. Your privacy policy will be at: `https://YOUR-USERNAME.github.io/REPO-NAME/privacy-policy`
4. You can rename `PrivacyPolicy.md` to `privacy-policy.md` and GitHub Pages will serve it (or add a simple `privacy-policy.html`)
