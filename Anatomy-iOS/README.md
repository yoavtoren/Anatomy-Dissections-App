# Anatomy Atlas — iOS / macOS (Mac Catalyst) App

## What this folder contains

| File | Purpose |
|---|---|
| `Sources/AppDelegate.swift` | Scene-based app entry point |
| `Sources/SceneDelegate.swift` | Window creation |
| `Sources/ViewController.swift` | WKWebView that loads the local web app |
| `Resources/Info.plist` | Bundle metadata, orientations, privacy keys |
| `Resources/Assets.xcassets/` | App icon slot (add `icon-1024.png`) |

---

## Step-by-step Xcode setup

### 1 — Create a new Xcode project
1. Open Xcode → **File › New › Project**
2. Choose **iOS › App**
3. Fill in:
   - Product Name: `AnatomyAtlas`
   - Team: your Apple Developer team
   - Bundle Identifier: `com.YOURTEAM.AnatomyAtlas`  *(also update Info.plist)*
   - Interface: **Storyboard**
   - Language: **Swift**
4. Uncheck *Include Tests* (optional)
5. Save next to (or inside) this repo

### 2 — Replace generated files
Delete the auto-generated files and drag in the ones from this folder:
- Delete `AppDelegate.swift`, `SceneDelegate.swift`, `ViewController.swift`
- Add `Sources/*.swift` — **make sure "Copy items if needed" is checked**
- Replace `Info.plist` content with `Resources/Info.plist`
- Replace `Assets.xcassets` with `Resources/Assets.xcassets`

### 3 — Add the web content to the bundle
1. In the repo root, the web app lives in `index.html` + `images/`
2. In Xcode, right-click the project navigator → **Add Files to "AnatomyAtlas"**
3. Select **both** `index.html` and the `images/` folder
4. Choose **Create folder references** (blue folder icon, not yellow group)
5. Rename the group to `WebContent` in the navigator (right-click → Rename)
6. In *Build Phases › Copy Bundle Resources*, confirm both appear under `WebContent`

`ViewController.swift` loads them with:
```swift
Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "WebContent")
```

### 4 — Add the app icon
- Open `icons/README.md` in the repo root for sizing instructions
- Drop `icon-1024.png` (1024×1024, no transparency, no rounded corners) into
  `Assets.xcassets/AppIcon.appiconset/`

### 5 — Enable Mac Catalyst (optional but recommended)
1. Select the project target → **General**
2. Under **Deployment Info**, tick **Mac Catalyst**
3. Select *Scale to Match iPad* at first; switch to *Optimize for Mac* later

### 6 — Configure signing
- **Signing & Capabilities** → select your Team, let Xcode manage signing

### 7 — Build and run
- Choose **iPad Pro (12.9-inch)** simulator — the app should fill the full screen
- Test portrait and landscape

---

## App Store submission checklist

### Required before first TestFlight build
- [ ] Bundle ID registered at [developer.apple.com](https://developer.apple.com)
- [ ] App icon (1024×1024 PNG, no alpha, no rounded corners)
- [ ] `ITSAppUsesNonExemptEncryption` = `NO` in Info.plist *(already set)*
- [ ] Privacy policy URL (host a simple page — see `PrivacyPolicy.md`)

### App Store Connect metadata
| Field | Suggested value |
|---|---|
| Name | Anatomy Atlas |
| Subtitle | Interactive dissection reference |
| Category | **Medical** (primary) / Education (secondary) |
| Age Rating | **4+** (educational medical content, no graphic images) |
| Keywords | anatomy, medical, dissection, topography, CNS, study |
| Support URL | your website or GitHub Pages URL |
| Privacy Policy URL | where you host `PrivacyPolicy.md` |

### App Review notes (paste into Review Notes field)
> "Anatomy Atlas is an offline anatomy study reference bundled as a local WKWebView app.  
> All content is bundled in the app — no internet connection is required.  
> No user data is collected or transmitted."

### Common rejection reasons to avoid
| Issue | Already fixed? |
|---|---|
| App only loads a remote URL (thin wrapper) | ✅ Content is bundled locally |
| iPad layout uses scaled iPhone UI | ✅ Fully responsive layout |
| Missing iPad orientation support | ✅ All 4 orientations declared |
| Missing privacy policy | ⬜ You must host one |
| App crashes on launch | Build & test before submitting |
| No 1024×1024 icon | ⬜ Add your icon |

---

## Privacy policy template

See `PrivacyPolicy.md` in this folder. Host it on GitHub Pages or any static site.
