# App Icons

Place these PNG files here for PWA and App Store use:

| File | Size | Use |
|---|---|---|
| `icon-192.png` | 192×192 | Android PWA / Safari |
| `icon-512.png` | 512×512 | Splash screen |
| `icon-1024.png` | 1024×1024 | App Store (iOS) |

## Design guidelines
- Use a solid background color (e.g. `#5B8EF8` blue or `#FFFDF9` cream)
- Centre the anatomy "A" / body icon on the canvas
- For the 1024×1024 App Store icon: **no rounded corners, no transparency** — Apple applies the mask automatically
- Export at 72 dpi, RGB colour, PNG-24

## Quick generation
Open macOS Preview or Sketch, draw a 1024×1024 canvas, export, then use `sips` to resize:

```bash
sips -z 512 512 icon-1024.png --out icon-512.png
sips -z 192 192 icon-1024.png --out icon-192.png
```
