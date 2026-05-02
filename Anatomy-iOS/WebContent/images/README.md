# Images folder

## ── TOPOGRAPHY VIEWER (save these FIRST) ──────────────────────────────
These are the main anatomical images shown in the interactive body viewer.
Save them with the **exact filenames below** in this `images/` folder:

| File | What it shows |
|---|---|
| `body-overview.png` | Full-body anatomical figure (whole-body shot showing organs) |
| `region-head.png` | Head/face frontal view — brain visible through top of skull |
| `region-neck.png` | Anterior neck — thyroid, trachea, carotid vessels |
| `region-chest.png` | Thorax — ribcage with heart cross-section and both lungs |
| `region-abdomen.png` | Opened abdomen — liver, stomach, intestines, spleen |
| `region-pelvis.png` | Pelvis *(add when available)* |
| `region-upper-limb.png` | Arm/forearm *(add when available)* |
| `region-lower-limb.png` | Leg/thigh *(add when available)* |
| `region-back.png` | Posterior spine/back *(add when available)* |

**How to add:** drag the image into this folder (or use Finder → Copy) then rename it to match the filename above exactly. PNG, JPG, or WEBP all work — if you use JPG just rename the extension in the table above inside `index.html` (search for `images/region-`).

---

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

### Neck (N-01 → N-23)
- `cervical-fascia.jpg` — Cervical fascia layers cross-section (investing / pretracheal / prevertebral / carotid sheath)
- `punctum-nervosum.jpg` — Erb's point: 4 cutaneous cervical plexus branches at posterior SCM border
- `neck-skin-innervation.jpg` — Cutaneous sensory map of neck skin (C2–C4 dermatomes)
- `neck-triangles.jpg` — Anterior + posterior triangles with subdivisions (carotid, submandibular, submental, suboccipital)
- `cervical-plexus.jpg` — Cervical plexus roots, branches and distribution diagram
- `ansa-cervicalis.jpg` — Ansa cervicalis (deep cervical ansa) loop + superficial cervical ansa
- `brachial-plexus.jpg` — Brachial plexus RTDCB with key nerves and territories
- `carotid-sheath.jpg` — Carotid sheath cross-section (VAN contents, SCM anterior, prevertebral posterior)
- `phrenic-nerve.jpg` — Phrenic nerve course: cervical origin on anterior scalene → thoracic path
- `hyoid-muscles.jpg` — Suprahyoid (4) + infrahyoid strap muscles (4) with innervation
- `styloid-septum.jpg` — Styloid muscles (XII / VII / IX) + styloid septum / ligaments
- `crico-tracheostomy.jpg` — Cricothyroid membrane + tracheostomy site landmarks and layers
- `thyroid-gland.jpg` — Thyroid gland anatomy + pyramidal lobe + at-risk structures
- `brachiocephalic.jpg` — Brachiocephalic trunk + veins → SVC formation
- `jugular-system.jpg` — Anterior, external, and internal jugular vein anatomy
- `lymphatic-drainage-neck.jpg` — Head/neck lymph node levels I–V + venous angle terminations
- `omohyoid.jpg` — Omohyoid two bellies + intermediate tendon + ansa cervicalis innervation
- `rule-of-4.jpg` — C4 (carotid bifurcation) / T4 (carina/sternal angle) / L4 (aortic bifurcation)
- `subclavian-artery.jpg` — Subclavian artery 3 parts + all branches (VIT / costocervical / dorsal scapular)
- `thyroid-blood-supply.jpg` — Thyroid vasculature: 3 arteries + 3 veins + at-risk RLN and external SLN
- `larynx-muscles.jpg` — Laryngeal cartilages + intrinsic muscles (external SLN = cricothyroid; RLN = rest)
- `cervical-sympathetic.jpg` — Cervical sympathetic chain: SCG, middle, stellate ganglia + Horner's pathway
- `eca-branches.jpg` — External carotid artery 8 branches (SALFOPMS mnemonic)

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
