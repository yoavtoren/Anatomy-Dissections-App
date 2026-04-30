# Images folder

This folder holds anatomical images shown across the site. The site references each
image by its **exact filename**. When you run the project in Claude Code, it will
prompt you to upload images one at a time, e.g.:

> *"Now upload an image of external carotid artery and save it as `images/external-carotid-artery.jpg`."*

If an image is missing, the page silently hides it and shows a small placeholder
note instead — the site keeps working.

## Filenames the site expects

Below is the canonical list of filenames currently referenced by the site. Add an
image to this folder using the exact name (any of `.jpg`, `.png`, or `.webp`
will work — change the extension on the filename if needed; matching is exact).

### Head & Face
- `scalp-layers.jpg` — Layers of the scalp (SCALP mnemonic)
- `temporal-fossa.jpg`
- `face-regions.jpg`
- `infratemporal-fossa.jpg`
- `pterygopalatine-fossa.jpg`
- `external-skull-base.jpg`
- `internal-skull-base.jpg`
- `cranial-nerves.jpg`

### Cranial nerves (one image per nerve)
- `cn-1-olfactory.jpg`
- `cn-2-optic.jpg`
- `cn-3-oculomotor.jpg`
- `cn-4-trochlear.jpg`
- `cn-5-trigeminal.jpg`
- `cn-6-abducens.jpg`
- `cn-7-facial.jpg`
- `cn-8-vestibulocochlear.jpg`
- `cn-9-glossopharyngeal.jpg`
- `cn-10-vagus.jpg`
- `cn-11-accessory.jpg`
- `cn-12-hypoglossal.jpg`
- `cranial-nerves-overview.jpg`

### Neck
- `anterior-triangle.jpg`
- `posterior-triangle.jpg`
- `scalene-fissure.jpg`

### Chest / Thorax
- `intercostal-space.jpg`
- `mediastinum.jpg`
- `axilla.jpg`

### Abdomen
- `abdomen-ruq.jpg`
- `abdomen-luq.jpg`
- `abdomen-rlq.jpg`
- `abdomen-llq.jpg`
- `abdominal-wall-layers.jpg`
- `inguinal-canal.jpg`
- `lesser-sac.jpg`
- `duodenum-pancreas.jpg`
- `retroperitoneum.jpg`
- `abdominal-projection-points.jpg`

### Pelvis
- `male-pelvis-sagittal.jpg`
- `female-pelvis-sagittal.jpg`
- `pelvic-floor-frontal.jpg`
- `perineum.jpg`

### Back / Spine
- `vertebral-canal.jpg`
- `lumbar-puncture.jpg`

### Limbs
- `gluteal.jpg`
- `femoral-triangle.jpg`

### Brain & Spinal cord
- `brain.jpg`
- `frontal-lobe.jpg`
- `parietal-lobe.jpg`
- `temporal-lobe.jpg`
- `occipital-lobe.jpg`
- `cerebellum.jpg`
- `brainstem.jpg`
- `spinal-cord.jpg`
- `cervical-cord.jpg`
- `thoracic-cord.jpg`
- `lumbar-enlargement.jpg`
- `conus-medullaris.jpg`

### Plexuses & ANS
- `peripheral-plexuses.jpg`
- `cervical-plexus.jpg`
- `brachial-plexus.jpg`
- `lumbar-plexus.jpg`
- `sacral-plexus.jpg`
- `coccygeal-plexus.jpg`
- `autonomic-ns.jpg`
- `sympathetic.jpg`
- `parasympathetic.jpg`
- `enteric.jpg`

## Tip — adding new images
If you want to add an image that the site doesn't currently reference, edit the
relevant block in `index.html` (search for `imgbox`) and add a new entry like:

```js
{img:"my-new-image.jpg", caption:"My new image caption"}
```

The site will pick it up automatically.
