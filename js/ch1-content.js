// Ch1 Content — Q1–Q17 (Skeletal System)
window.CH1_CONTENT = {};
function _ill1(n, desc){
  return `<div style="border:2px dashed rgba(82,196,144,.35);border-radius:12px;padding:1.1rem 1.4rem;text-align:center;margin:1rem 0 1.5rem;background:rgba(82,196,144,.06)"><span style="font-size:1.6rem">📷</span><p style="margin:.4rem 0 0;color:rgba(82,196,144,.75);font-size:.8rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase">[Illustration ${n} — ${desc}]</p></div>`;
}

// ── Q1 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[1] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Structure and Types of Bones</h2>
  <p class="q-subtitle">Innervation and blood supply of bone</p>
</div>

<span class="q-section-title">Introduction</span>
<div class="q-card">
  <p>Bone is a <strong>mineralized connective tissue</strong> made of cells and bone matrix. The first type formed developmentally is <strong>primary (woven) bone</strong>, later replaced by <strong>secondary (lamellar) bone</strong> — either <strong>trabecular (spongy)</strong> or <strong>compact</strong>. Blood cells form within the medullary cavity and between trabeculae of spongy bone.</p>
  <p>The <strong>periosteum</strong> covers all outer bone surfaces except articular surfaces. It has an outer fibrous layer and an inner cellular layer. <strong>Sharpey's fibers</strong> (bundles of collagen type I) connect the periosteum to the bone. The <strong>endosteum</strong> lines the inner surface of the medullary cavity of all long bones.</p>
</div>

<span class="q-section-title">Functions of Bone</span>
<div class="q-card">
  <ul>
    <li><strong>Support</strong> for the body</li>
    <li><strong>Motion</strong> (musculoskeletal)</li>
    <li><strong>Protection</strong> of organs</li>
    <li><strong>Storage</strong> of calcium, phosphate, and ions</li>
  </ul>
  <p>The skeleton divides into: <span class="cl-blue"><strong>Axial skeleton</strong></span> (forms the axis/center of the body) and <span class="cl-blue"><strong>Appendicular skeleton</strong></span> (limbs and pelvis).</p>
</div>

<span class="q-section-title">Bone Types by Density</span>
<div class="q-card">
  <p><strong>Compact (cortical) bone</strong> — dense; forms the surface of all bones. In long bones: diaphysis + metaphysis. In the skull: <em>internal and external laminae</em>.</p>
  <p><strong>Spongy / trabecular / cancellous bone</strong> — bone marrow between meshes. Found in short bones, flat bones, and epiphysis + metaphysis of long bones. In the skull: <em>diploë</em>.</p>
</div>

${_ill1(1, "Long-bone cross-section: epiphysis, metaphysis, diaphysis, medullary cavity, periosteum, endosteum, articular cartilage, Sharpey's fibers")}

<span class="q-section-title">Bone Types by Shape</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Shape</th><th>Description</th><th>Examples</th></tr></thead>
    <tbody>
      <tr><td><strong>Long (tubular)</strong></td><td>Spongy bone + medullary cavity with <strong>red bone marrow</strong> (hematopoietic, reticular CT with HSCs) and <strong>yellow bone marrow</strong> (adipose, non-hematopoietic; in medulla of long bones)</td><td>Humerus, femur</td></tr>
      <tr><td><strong>Flat</strong></td><td>2 layers of compact bone with spongy in between; grow in 2 directions</td><td>Scapula, pelvis, sternum, ribs, some skull bones</td></tr>
      <tr><td><strong>Short</strong></td><td>Spongy core surrounded by compact bone</td><td>Carpals, tarsals</td></tr>
      <tr><td><strong>Irregular</strong></td><td>Do not fit other groups</td><td>Vertebrae</td></tr>
      <tr><td><strong>Pneumatized</strong></td><td>Air-filled cavities lined by mucous membrane</td><td>Maxillary, ethmoid</td></tr>
      <tr><td><strong>Sesamoid</strong></td><td>Protect tendons from stress and wear</td><td>Patella, some bones of the palm and foot</td></tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Bone Types by Arrangement of Fibrils</span>
<div class="q-card">
  <p><strong>Woven (primary) bone</strong> — ossified connective tissue with irregular collagen organization. Occurs primarily during development. In adults found only in the <span class="hl-y">capsule of the inner ear</span> and some cranial bones.</p>
  <p><strong>Lamellar (cortical) bone</strong> — more common and important. Layers of parallel-running collagenous fibrils = <strong>lamellae</strong> arranged around a vascular canal = the <strong>Haversian canal</strong>, which together with osteocytes in their lacunae forms an <strong>osteon (Haversian system)</strong>. Collagen fibers are <span class="hl-y">2–3 µm thick</span>, arranged in alternating right and left spirals — increased stability.</p>
</div>

<span class="q-section-title">Types of Lamellae and Canals</span>
<div class="q-card">
  <p><strong>Lamellae:</strong></p>
  <ul>
    <li><strong>Circumferential lamellae</strong> — underline the periosteum and the endosteum</li>
    <li><strong>Interstitial lamellae</strong> — fill the space between osteons</li>
    <li><strong>Concentric lamellae</strong> — surround the Haversian canal</li>
  </ul>
  <p><strong>Canals:</strong></p>
  <ul>
    <li><strong>Haversian canal</strong> (parallel to the periosteum) — lined with endosteum; contains blood vessels, nerves, lymph vessels, and loose connective tissue</li>
    <li><strong>Volkmann's canal</strong> (perpendicular/oblique to the periosteum)</li>
    <li><strong>Canaliculi</strong> (processes of osteocytes) — interconnect osteocytes</li>
  </ul>
</div>

${_ill1(2, "Detailed osteon: Haversian canal, concentric lamellae, osteocytes in lacunae, canaliculi, Volkmann's canals, circumferential lamellae")}

<span class="q-section-title">Blood Supply</span>
<div class="q-card">
  <ol>
    <li><strong>Periosteal vessels</strong> — blood vessels in the outer layer send small capillaries to the inner, cell-rich layer</li>
    <li><strong>Nutrient artery</strong> — enters through the <strong>nutrient foramen</strong>; splits in the medullary cavity into longitudinal branches supplying all bone parts</li>
    <li><strong>Epiphyseal and metaphyseal vessels</strong> — arise from arteries that supply the joint; support the respective parts</li>
  </ol>
</div>

<span class="q-section-title">Innervation</span>
<div class="q-card">
  <ol>
    <li><strong>Periosteum</strong> — rich sensory innervation, carries <strong>pain fibers</strong> → accounts for intense pain in bone fractures</li>
    <li><strong>Vasomotor nerves</strong> — accompany blood vessels in the internal cavity; regulate blood flow</li>
  </ol>
</div>

<div class="q-clinical-box">
  <strong>Hilton's Law</strong><br>
  The nerve supplying a muscle will also supply the bone underlying it. If a group of muscles receives nerve supply from a specific nerve, the bone over which the muscles lie will also be innervated by the same nerve.
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Bone = mineralized CT (cells + matrix)</li>
    <li>Osteon = Haversian canal + concentric lamellae + osteocytes in lacunae</li>
    <li>Pain fibers in periosteum → fractures hurt intensely</li>
    <li>Hilton's Law: nerve to muscle → also nerve to underlying bone</li>
    <li>Blood supply: 3 sources — periosteal vessels, nutrient artery, epiphyseal/metaphyseal vessels</li>
  </ul>
</div>
`;

// ── Q2 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[2] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Osteogenesis, Ossification, Remodeling and Growth of Bone</h2>
  <p class="q-subtitle">How bones are born, mature, and never stop renewing</p>
</div>

<span class="q-section-title">Osteogenesis</span>
<div class="q-card">
  <p><strong>Osteogenesis</strong> is the formation of a bone. The main cells are <strong>osteoblasts</strong> — specialized mesenchymal cells that secrete <strong>osteoid</strong> (initially soft ground substance + collagen fibers). Bones first develop as <strong>woven (primary) bones</strong>, later replaced by <strong>lamellar bone</strong>. The process is regulated by hormones.</p>
</div>

${_ill1(1, "3 bone cells: Osteoblast (forming), Osteocyte (maintaining), Osteoclast (resorbing)")}

<span class="q-section-title">1) Desmogenic / Intramembranous Ossification</span>
<div class="q-card">
  <p class="cl-blue"><strong>Builds: all flat bones + clavicles</strong></p>
  <ol>
    <li>Mesenchymal stem cells aggregate → differentiate into <strong>osteoblasts</strong></li>
    <li>Osteoblasts form an <strong>ossification center</strong> (starting point); collagen fibers appear in the matrix around the bone</li>
    <li>Osteoblasts secrete <strong>osteoid</strong> especially into the ossification center. Responsible for properties and hardness — still <em>unmineralized</em>. Peripheral mesenchymal cells keep transforming into osteoblasts</li>
    <li>Osteoblasts in the ossification center become <strong>osteocytes</strong> — maintain the forming matrix</li>
    <li>Osteoid is <strong>calcified and hardened</strong> — forms bone within days</li>
    <li><strong>Woven bone</strong> forms from accumulated osteoid around blood vessels. Collagen fibers + mesenchymal cells form the <strong>periosteum</strong> (dense irregular CT; outer <strong>fibrous layer</strong> + inner <strong>cambium / osteogenic layer</strong>)</li>
    <li>Woven bone → <strong>lamellar bone</strong> → compact lamellae (outer trabecula = <strong>circumferential lamellae</strong>) + spongy bone (stays due to <strong>hematopoiesis</strong> in red bone marrow). Osteoblasts remain because bone is always remodeling</li>
  </ol>
</div>

${_ill1(2, "Intramembranous: mesenchyme → osteoblast cluster at ossification center → osteoid → woven bone with trapped osteocytes → periosteum forming outside")}

<span class="q-section-title">2) Chondrogenic / Endochondral Ossification</span>
<div class="q-card">
  <p class="cl-blue"><strong>Builds: all bones below the skull EXCEPT clavicles. Starts at the <span class="hl-y">8th embryonic week</span>.</strong></p>
  <p><strong>First Phase:</strong></p>
  <ol>
    <li>Mesenchyme → <strong>hyaline cartilage</strong></li>
    <li>Hyaline cartilage forms a bony shape</li>
    <li><strong>Perichondrium</strong> is vascularized → mesenchymal cells become osteoblasts</li>
    <li>Osteoblasts form a <strong>bone collar</strong> around the chondrocytes → <strong>primary ossification center</strong></li>
  </ol>
  <p><strong>Second Phase:</strong></p>
  <ol start="5">
    <li>Bone collar <strong>blocks nutrients</strong> → chondrocytes in the diaphysis center <strong>hypertrophy and die</strong></li>
    <li>A <strong>periosteal bud</strong> (blood-vessel canal) breaks through the bone collar (with osteoclast help) → supplies nutrients to the diaphysis</li>
    <li>Periosteal bud induces osteoblasts in the diaphysis → bone matrix forms from the primary ossification center</li>
    <li><strong>Elongation</strong>: osteoblasts build outer compact bone + inner spongy bone</li>
    <li><strong>Osteoclasts</strong> migrate via circulation → form <strong>medullary cavities</strong> → house the bone marrow</li>
  </ol>
</div>

<div class="q-info-box">
  During childhood, the <strong>primary and secondary ossification centers</strong> are separated by the <strong>epiphyseal disk</strong>, which helps bone elongation. In adulthood the disk disappears — bone growth stops.
  <br><br>
  <strong>Result:</strong> Diaphysis = woven bone · Metaphysis = cartilaginous growth plate (ossifies at adulthood) · Epiphysis = hyaline cartilage → secondary ossification after birth.
</div>

${_ill1(3, "6-stage endochondral: (1) cartilage model, (2) bone collar, (3) cartilage calcifies + chondrocytes die, (4) periosteal bud enters, (5) primary ossification center, (6) secondary centers + medullary cavity")}

<span class="q-section-title">Bone Remodeling</span>
<div class="q-card">
  <p>Bone remodeling is <strong>continuous throughout life</strong>. It comprises two opposing processes:</p>
  <ul>
    <li><strong>Bone resorption</strong> — by <strong>osteoclasts</strong> (break down bone)</li>
    <li><strong>Ossification</strong> — by <strong>osteoblasts</strong> (form bone tissue)</li>
  </ul>
  <p>Usually responds to the <span class="hl-y">functional demands of the mechanical load on the body</span>.</p>
</div>

<div class="q-clinical-box">
  Dysfunction of the remodeling process → bone metabolic diseases such as <strong>osteoporosis</strong> (weakness of bones).
</div>

<span class="q-section-title">Bone Growth — Epiphyseal Growth Plate (4 Regions)</span>
<div class="q-card">
  <p>After endochondral ossification, the epiphysis + metaphysis are still hyaline cartilage. During infancy, secondary ossification turns the epiphysis into bone. The metaphysis stays cartilaginous, driving <strong>bone elongation from infancy to ~20 years old</strong>.</p>
  <p>The <strong>epiphyseal growth plate</strong> — 4 regions (epiphyseal end → diaphyseal end):</p>
  <ol>
    <li><strong>Reserve zone</strong> — small chondrocytes + matrix. Does NOT participate in bone growth; secures the plate to the epiphysis</li>
    <li><strong>Proliferative zone</strong> — larger chondrocytes; <strong>mitotic division</strong> of chondrocytes occurs; replaces ossified chondrocytes</li>
    <li><strong>Zone of maturation</strong> — newly formed chondrocytes mature, increasing in size</li>
    <li><strong>Zone of calcified matrix</strong> — matrix calcifies; chondrocytes die. <strong>Osteoblasts and blood vessels from the diaphysis</strong> penetrate → form bone tissue. Connects the plate to the metaphysis</li>
  </ol>
</div>

${_ill1(4, "Growth plate: 4 zones stacked — reserve (top, small chondrocytes) → proliferative → maturation → calcified matrix (bottom, bone trabeculae)")}

<span class="q-section-title">Trauma to the Bone — Fracture Healing</span>
<div class="q-card">
  <ol>
    <li>Broken ends brought as close as possible to normal position</li>
    <li><strong>Fibroblasts in the periosteum</strong> proliferate → secrete collagen → form the <strong>collar of callus</strong></li>
    <li><strong>Bone remodeling</strong> occurs in the fracture area</li>
    <li>Callus <strong>calcifies, then reabsorbs</strong> → replaced by bone. After several months, little evidence of the fracture remains</li>
  </ol>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Osteoblast = build · Osteoclast = break · Osteocyte = maintain</li>
    <li>Intramembranous → flat bones + clavicles</li>
    <li>Endochondral → most other bones; starts week 8</li>
    <li>Growth plate: 4 zones; growth stops ~20 yrs</li>
    <li>Bad remodeling → osteoporosis</li>
  </ul>
</div>
`;

// ── Q3 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[3] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Connection of Bones — Structure and Types of Joints</h2>
  <p class="q-subtitle">Synarthrosis · Amphiarthrosis · Diarthrosis (synovial)</p>
</div>

<span class="q-section-title">Classification of Joints</span>
<div class="q-card">
  <p><strong>Joints</strong> are connections between the bones of the skeleton. Two main types:</p>
  <ul>
    <li><strong>Synarthrosis</strong> — bone surfaces connected by connective tissue (immovable)</li>
    <li><strong>Diarthroses (synovial joints)</strong> — articulating surfaces separated by a <strong>joint cavity</strong> (movable)</li>
  </ul>
  <p>By movability: <strong>Synarthrosis</strong> (immovable) · <strong>Amphiarthrosis</strong> (partially movable) · <strong>Diarthrosis</strong> (movable)</p>
</div>

${_ill1(1, "3 joint types side by side: synarthrosis (bones glued), amphiarthrosis (slight gap, fibrous cartilage), diarthrosis (real cavity with synovial fluid)")}

<span class="q-section-title">Synarthrosis (Immovable) — Classified by Connective Tissue</span>
<div class="q-card">
  <p><strong>Syndesmosis — fibrous CT</strong> (ligaments, tendons)</p>
  <ul>
    <li><strong>Gomphosis</strong> (dento-alveolar syndesmosis) — syndesmosis of teeth in the alveolar process of the jaw</li>
    <li><strong>Sutures</strong> — found in the cranium; 3 types: <em>Sutura plana</em> (planes), <em>Sutura squamosa</em> (overlapping), <em>Sutura serrata</em> (saw-like)</li>
  </ul>
  <p><strong>Synchondrosis — hyaline cartilage</strong></p>
  <ul>
    <li>Epiphysis–diaphysis junction in childhood (<strong>growth plate / epiphyseal plate</strong>)</li>
    <li>Sternum–ribs junction</li>
  </ul>
  <p><strong>Synostosis — bone matrix</strong></p>
  <ul>
    <li>Hardest, most immovable; a joint that ossified from another joint during growth</li>
    <li>Examples: epiphysis–diaphysis in adults; the <strong>sacrum</strong> in the vertebrae</li>
  </ul>
</div>

<span class="q-section-title">Amphiarthrosis (Partially Movable)</span>
<div class="q-card">
  <p><strong>Symphysis</strong> — joint made of <strong>fibrous cartilage</strong></p>
  <ul>
    <li><strong>Pubic symphysis</strong></li>
    <li>Joints between vertebrae</li>
    <li>Interosseous membranes of tibia–fibula and ulna–radius</li>
  </ul>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Exam High-Yield:</strong> Symphysis = fibrous cartilage (NOT hyaline — that's synchondrosis!)
  </div>
</div>

<span class="q-section-title">Diarthrosis (Movable) — Synovial Joints</span>
<div class="q-card">
  <p><strong>Structure of a Synovial Joint — The Articular Capsule (5 components):</strong></p>
  <ol>
    <li><strong>Articular cartilage</strong> — hyaline cartilage covering the articulations of the bones</li>
    <li><strong>Synovial fluid</strong> — supplies nutrients to the articular cartilage and lubricates the joint</li>
    <li><strong>Fibrous membrane / layer</strong> — dense CT, mechanical support; external layer of the joint capsule</li>
    <li><strong>Synovial membrane / layer</strong> — produces synovial fluid; inner side of the articular capsule; supplied by blood vessels</li>
    <li><strong>Articular / joint cavity</strong> — space between articulations, filled with synovial fluid</li>
  </ol>
</div>

${_ill1(2, "Cross-section of synovial joint: 2 bones, hyaline cartilage on ends, joint cavity with synovial fluid, fibrous membrane (outer), synovial membrane (inner), ligament outside")}

<span class="q-section-title">Additional Features of Synovial Joints</span>
<div class="q-card">
  <ol>
    <li><strong>Synovial folds</strong> — fold of the synovial membrane, enlarges surface area; contains <strong>synovial villi</strong></li>
    <li><strong>Discs and menisci</strong> (crescent-shaped) — fibrous cartilage; compensate for imperfect articular surfaces; <strong>disperse body weight and reduce friction during movement</strong></li>
    <li><strong>Labrum</strong> — elevated margin on articular surfaces; fibrous cartilage</li>
    <li><strong>Bursae</strong> — synovial fluid sacs, usually not connected to the joint cavity; cushion between bones and tendons/muscles; reduce friction, allow free movement</li>
    <li><strong>Fat pads</strong> — fill spaces in the joint cavity; contribute to "internal streamlining"</li>
    <li><strong>Recess</strong> — hollow spaces of articular cavities (e.g., ulna–carpal space)</li>
  </ol>
  <p><strong>Special structures:</strong></p>
  <ul>
    <li><strong>Ligaments</strong> — dense CT, outside or inside capsule; support and stabilize while limiting movement</li>
    <li><strong>Articular muscle</strong> — prevents the capsule from being caught between bones during movement; usually part of a larger muscle</li>
  </ul>
</div>

<span class="q-section-title">Classification of Diarthrosis</span>
<div class="q-card">
  <p><strong>1. By Articulation (number of elements):</strong></p>
  <ul>
    <li><strong>Simple</strong> — 2 bones</li>
    <li><strong>Compound</strong> — more than 2 bones</li>
    <li><strong>Complex</strong> — cavity divided in 2 by intra-articular disc/meniscus (e.g., <strong>knee joint</strong>)</li>
  </ul>
  <p><strong>2. By Number of Axes:</strong> Monoaxial · Biaxial · Triaxial</p>
  <p><strong>3. By Movement Extension:</strong> Different ranges of movement</p>
  <p><strong>4. By Shape of Connecting Surfaces:</strong></p>
  <table class="q-data-table">
    <thead><tr><th>Shape</th><th>Axes</th><th>Features</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><strong>Ball and socket / spheroidal</strong></td><td>Triaxial</td><td>Fossa &lt; head in size → large ROM; limited by muscles + ligaments</td><td>Shoulder</td></tr>
      <tr><td><strong>Plane</strong></td><td>Triaxial (limited)</td><td>Sliding movements; strong ligaments limit extent</td><td>—</td></tr>
      <tr><td><strong>Hinge (trochlear)</strong></td><td>Monoaxial</td><td>Perpendicular axis; cylinder-shaped</td><td>—</td></tr>
      <tr><td><strong>Pivot</strong></td><td>Monoaxial</td><td>Parallel axis</td><td>Radioulnar joint</td></tr>
      <tr><td><strong>Ellipsoid</strong></td><td>Biaxial</td><td>Flexion &amp; extension, adduction &amp; abduction</td><td>Wrist</td></tr>
      <tr><td><strong>Saddle</strong></td><td>Biaxial</td><td>—</td><td>Thumb</td></tr>
      <tr><td><strong>Amphiarthrosis</strong></td><td>—</td><td>Elastic movement for pressure</td><td>—</td></tr>
    </tbody>
  </table>
</div>

${_ill1(3, "7 joint shapes: ball-in-socket, sliding plates, hinge (door), pivot (cylinder in ring), ellipsoid, saddle, compressible disc — each labeled with range + example")}

<span class="q-section-title">Joint Positions and Limits of Movement</span>
<div class="q-card">
  <ul>
    <li><strong>Basic position</strong> — reflects the basic anatomical position</li>
    <li><strong>Natural position</strong> — most relaxed articular capsule (relief position)</li>
  </ul>
  <p>Movement of the joint is limited by: shape of fossa and head · ligaments · close bony projections · soft tissue size (muscles, fat)</p>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Synarthrosis = no cavity · Diarthrosis = synovial with cavity</li>
    <li>Synchondrosis = hyaline · Symphysis = fibrous cartilage</li>
    <li>Synovial fluid: feeds + lubricates</li>
    <li>Shoulder = ball-socket · Wrist = ellipsoid · Thumb = saddle · Radioulnar = pivot · Knee = complex</li>
  </ul>
</div>
`;

// ── Q4 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[4] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">The Osseous Nasal Cavity</h2>
  <p class="q-subtitle">Relations to neighboring structures</p>
</div>

<span class="q-section-title">What is the Nasal Cavity?</span>
<div class="q-card">
  <p>The <strong>nasal cavity</strong> is the space inside the nose. It lies <strong>above the bone that forms the roof of the mouth</strong> and curves down at the back to join the throat. It is separated into right and left cavities by the <strong>nasal septum</strong>. Each side has a <strong>lateral wall</strong> and a <strong>medial wall</strong>.</p>
</div>

${_ill1(1, "Sagittal section of the head showing the nasal cavity — roof, floor, conchae (superior, middle, inferior), the 3 meatuses, throat continuation at the back")}

<span class="q-section-title">Boundaries of the Nasal Cavity</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Wall</th><th>Bones / Structures</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Roof</strong></td>
        <td>
          <ul>
            <li><strong>Frontal &amp; nasal bones</strong> (anterior superior)</li>
            <li><strong>Cribriform plate of the ethmoid bone</strong> (middle superior)</li>
            <li><strong>Body of the sphenoid bone</strong> (posterior superior)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>Floor</strong></td>
        <td>
          <ul>
            <li>Palatine process of the <strong>maxilla</strong></li>
            <li>Horizontal plate of the <strong>palatine bone</strong></li>
            <li>Together = the <strong>hard palate</strong></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>Lateral Wall</strong></td>
        <td>
          <ul>
            <li><strong>Superior, middle, and inferior nasal conchae</strong><br>(superior &amp; middle = ethmoid bone; inferior = its own bone, attached to maxilla)</li>
            <li>Nasal surface of the <strong>maxilla</strong></li>
            <li>Labyrinth of the <strong>ethmoid bone</strong></li>
            <li><strong>Lacrimal bone</strong></li>
            <li><strong>Medial pterygoid plate</strong> (sphenoid bone)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>Medial Wall (Septum)</strong></td>
        <td>
          <ul>
            <li><strong>Perpendicular plate of the ethmoid</strong></li>
            <li><strong>Vomer</strong></li>
            <li><strong>Septal cartilages</strong></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

${_ill1(2, "Coronal cross-section of the nasal cavity — roof (cribriform), floor (hard palate), lateral wall with conchae, medial wall (septum)")}

<span class="q-section-title">Three Regions Within Each Cavity</span>
<div class="q-card">
  <ul>
    <li><strong>Nasal vestibule</strong> — internal to the nostrils; lined by <strong>skin</strong></li>
    <li><strong>Respiratory region</strong> — rich with neurovascular supply; lined by <strong>respiratory epithelium</strong> (ciliated and mucous cells)</li>
    <li><strong>Olfactory region</strong> — apex of each cavity; lined by <strong>olfactory epithelium</strong>; contains <strong>olfaction receptors and Bowman's glands</strong></li>
  </ul>
</div>

<span class="q-section-title">Paranasal Sinuses</span>
<div class="q-card">
  <p>Air-containing, mucosa-lined sinuses surrounding the nasal cavities:</p>
  <ul>
    <li><strong>Frontal sinuses</strong> — superior anterior</li>
    <li><strong>Ethmoid sinuses</strong> — superior</li>
    <li><strong>Paired maxillary sinuses</strong> — lateral</li>
    <li><strong>Sphenoid sinuses</strong> — posterior</li>
  </ul>
  <p class="hl-y">All paranasal sinuses, <strong>except the sphenoid</strong>, communicate with the nasal cavity via ducts that drain through <strong>ostia</strong>, which empty into spaces located on the <strong>lateral wall</strong>.</p>
  <p>The <strong>sphenoid sinus</strong> empties into the <strong>posterior roof</strong> (the <strong>spheno-ethmoidal recess</strong>).</p>
</div>

${_ill1(3, "Frontal-view skull: 4 paranasal sinus groups in different colors — frontal, ethmoid, maxillary, sphenoid; arrows showing where each drains")}

<span class="q-section-title">Meatuses</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Meatus</th><th>Location</th><th>Drains</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Superior meatus</strong></td>
        <td>Between <strong>roof</strong> and <strong>middle nasal concha</strong></td>
        <td><strong>Sphenoidal sinus</strong>, posterior ethmoidal sinus</td>
      </tr>
      <tr>
        <td><strong>Middle meatus</strong></td>
        <td>Between <strong>middle and inferior conchae</strong></td>
        <td>Anterior + middle ethmoidal cells, <strong>frontal sinus</strong>, <strong>maxillary sinus</strong></td>
      </tr>
      <tr>
        <td><strong>Inferior meatus</strong></td>
        <td>Between <strong>inferior concha</strong> and <strong>floor</strong></td>
        <td><strong>Nasolacrimal duct</strong></td>
      </tr>
      <tr>
        <td><strong>Spheno-ethmoidal recess</strong> (posterior roof)</td>
        <td>—</td>
        <td><strong>Sphenoid sinus</strong></td>
      </tr>
    </tbody>
  </table>
</div>

${_ill1(4, "Lateral wall with conchae cut away — 3 meatuses exposed, arrows from each sinus to its correct meatus, arrow from eye → nasolacrimal duct → inferior meatus")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Roof: frontal/nasal → cribriform → sphenoid</li>
    <li>Floor: maxilla + palatine = hard palate</li>
    <li>Septum: perpendicular plate of ethmoid + vomer + septal cartilages</li>
    <li>3 regions: vestibule (skin) / respiratory (ciliated + mucous) / olfactory (apex)</li>
    <li>All sinuses → lateral wall — EXCEPT sphenoid (posterior roof / spheno-ethmoidal recess)</li>
  </ul>
</div>
`;

// ── Q5 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[5] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Bony Orbit</h2>
  <p class="q-subtitle">Walls · Relation to neighboring structures · Passages</p>
</div>

<span class="q-section-title">Introduction — Bones Forming the Orbit</span>
<div class="q-card">
  <p><strong>Seven bones</strong> contribute to the framework of each orbit:</p>
  <ol>
    <li><strong>Maxilla</strong></li>
    <li><strong>Zygomatic</strong></li>
    <li><strong>Frontal</strong></li>
    <li><strong>Ethmoid</strong></li>
    <li><strong>Lacrimal</strong></li>
    <li><strong>Sphenoid</strong></li>
    <li><strong>Palatine bones</strong></li>
  </ol>
  <p class="hl-y">Mnemonic: <em>"Many Zoo Friends Eat Lots of Sweet Pretzels"</em> (Maxilla, Zygomatic, Frontal, Ethmoid, Lacrimal, Sphenoid, Palatine)</p>
</div>

${_ill1(1, "Frontal view of one bony orbit — all 7 bones color-coded with labels; inset showing the 4-sided pyramid from above")}

<span class="q-section-title">Geometry of the Orbit</span>
<div class="q-card">
  <p>The orbit is an <strong>irregular four-sided pyramid</strong> located on either side of the root of the nose.</p>
  <ul>
    <li><strong>Base:</strong> orbital opening</li>
    <li><strong>Apex:</strong> optic canal</li>
    <li>Axis directed <strong>posteriorly and medially</strong></li>
    <li>The <strong>medial walls are parallel</strong> to each other</li>
    <li>Medial and lateral walls make an angle of <strong>45°</strong></li>
  </ul>
</div>

<span class="q-section-title">Walls of the Orbit</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Wall</th><th>Bones</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Roof</strong></td>
        <td>Orbital part of the <strong>frontal bone</strong> · <strong>Sphenoid bone</strong> (lesser wing)</td>
      </tr>
      <tr>
        <td><strong>Medial Wall</strong></td>
        <td><strong>Maxilla</strong> · <strong>Lacrimal bone</strong> · <strong>Ethmoid bone</strong> · <strong>Sphenoid bone</strong></td>
      </tr>
      <tr>
        <td><strong>Lateral Wall</strong></td>
        <td><strong>Zygomatic bone</strong> · <strong>Greater wing of the sphenoid</strong></td>
      </tr>
      <tr>
        <td><strong>Floor</strong></td>
        <td>Orbital surface of the <strong>maxilla</strong> · <strong>Zygomatic bone</strong> (small part) · <strong>Palatine bone</strong> (small part)</td>
      </tr>
    </tbody>
  </table>
</div>

${_ill1(2, "4 mini-diagrams (one per wall) — roof, medial, lateral, floor — each with bones color-coded, viewed from inside the orbit")}

<span class="q-section-title">Neighboring Structures</span>
<div class="q-card">
  <p><strong>Periorbita</strong> — the periosteum lining the orbital bones. Sends extensions into the upper and lower eyelids = <strong>orbital septa</strong>.</p>
  <p><strong>Annulus of Zinn</strong> (annular tendon / common tendinous ring) — a <strong>ring of fibrous tissue surrounding the optic nerve</strong> at its entrance at the apex. It is the <span class="hl-y"><strong>common origin of the four rectus muscles</strong></span> (extraocular muscles).</p>
</div>

${_ill1(3, "View into apex: annulus of Zinn around optic nerve, 4 rectus muscles fanning forward from the ring — each labeled with name and action")}

<span class="q-section-title">Eyelids</span>
<div class="q-card">
  <p>The space between open eyelids = <strong>palpebral fissure</strong>. When closed, they protect the surface of the eyeball.</p>
  <p><strong>Layers (anterior → posterior):</strong></p>
  <ol>
    <li><strong>Skin</strong></li>
    <li><strong>Subcutaneous tissue</strong></li>
    <li><strong>Voluntary muscle (orbicularis oculi)</strong> — upper eyelid has 2 more muscles than lower</li>
    <li><strong>Orbital septum</strong> — attaches to the <strong>levator palpebrae superioris</strong> (upper) and to the <strong>tarsus</strong> (lower)</li>
    <li><strong>Tarsus</strong> — plates of dense CT. Attached medially via <strong>medial palpebral ligament</strong> to the anterior lacrimal crest of the maxilla; laterally via <strong>lateral palpebral ligament</strong> to the orbital tubercle on the zygomatic</li>
    <li><strong>Conjunctiva</strong> — thin membrane covering the posterior surface of each eyelid; reflects onto the <strong>sclera</strong> (white of the eye). Functions: lubricates (mucus + tears), <strong>immune surveillance</strong>, prevents entrance of microbes</li>
  </ol>
</div>

${_ill1(4, "Sagittal cross-section of upper eyelid — 6 layers from skin (anterior) to conjunctiva (posterior), tarsus and orbital septum clearly labeled, eyeball behind")}

<span class="q-section-title">Passages of the Orbit</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Passage</th><th>Location</th><th>Opens to</th><th>Contains</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Optic canal</strong></td>
        <td>Between two roots of the <strong>lesser wing of sphenoid</strong> and the sphenoid body</td>
        <td>Middle cranial fossa</td>
        <td><strong>Optic nerve</strong> + <strong>ophthalmic artery</strong></td>
      </tr>
      <tr>
        <td><strong>Superior orbital fissure</strong></td>
        <td>Lateral to optic canal; between <strong>roof and lateral wall</strong></td>
        <td>Middle cranial fossa</td>
        <td><strong>CN III</strong> (superior + inferior branches), <strong>CN IV</strong>, <strong>CN VI</strong>, lacrimal + frontal + nasociliary branches of <strong>CN V₁</strong>, <strong>superior ophthalmic vein</strong></td>
      </tr>
      <tr>
        <td><strong>Inferior orbital fissure</strong></td>
        <td>Between <strong>lateral wall and floor</strong>; greater wing of sphenoid + palatine + maxilla + zygomatic</td>
        <td>—</td>
        <td><strong>Infraorbital nerve</strong>, <strong>maxillary nerve (CN V₂)</strong></td>
      </tr>
      <tr>
        <td><strong>Ethmoidal foramen</strong></td>
        <td>Junction of <strong>frontal and ethmoid</strong> bones (anterior + posterior)</td>
        <td>Ethmoid sinuses · anterior cranial fossa · nasal cavity</td>
        <td><strong>Zygomaticotemporal</strong> and <strong>zygomaticofacial</strong> nerves</td>
      </tr>
    </tbody>
  </table>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Exam High-Yield:</strong> CN III, IV, V₁, VI all pass through the <strong>Superior Orbital Fissure!</strong>
  </div>
</div>

${_ill1(5, "Posterior view of orbital apex — 4 passages color-coded; tap each to reveal contents; CN numbers labeled")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>7 bones: maxilla, zygomatic, frontal, ethmoid, lacrimal, sphenoid, palatine</li>
    <li>Pyramid: base = opening, apex = optic canal; 45° between medial + lateral walls</li>
    <li>Annulus of Zinn = origin of the 4 rectus muscles</li>
    <li>Optic canal: CN II + ophthalmic artery · SOF: III, IV, V₁, VI · IOF: V₂ · Ethmoidal: zygomaticotemporal + zygomaticofacial</li>
  </ul>
</div>
`;

// ── Q6 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[6] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Skull &amp; Vertebral Column</h2>
  <p class="q-subtitle">Skull (neonate + development) · Vertebrae · Connections · Curvatures · Motility</p>
</div>

<span class="q-section-title">PART 1 — THE SKULL</span>
<div class="q-card">
  <p>The skull has <strong>two parts</strong>: <strong>Neurocranium</strong> (houses brain and CNS) and <strong>Viscerocranium</strong> (face). Each develops differently.</p>
</div>

<span class="q-section-title">Neurocranium</span>
<div class="q-card">
  <p><strong>Membranous part</strong> — flat bones surrounding the brain as a vault. Derived from <strong>neural crest cells</strong> (pituitary region → frontal bone) and <strong>paraxial mesoderm / occipital somitomeres</strong> (posterior bones).</p>
  <p><strong>Cartilaginous part (chondrocranium)</strong> — bones of the base of the skull.</p>
  <table class="q-data-table">
    <thead><tr><th>Ossification type</th><th>Region</th><th>Bones</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Intramembranous</strong> (direct: mesenchyme → osteoblast → compact bone with diploë)</td>
        <td>Calvaria (membranous neurocranium)</td>
        <td><strong>Frontal, parietal, occipital</strong></td>
      </tr>
      <tr>
        <td><strong>Endochondral</strong> (indirect: mesenchyme → chondroblast → osteoblast)</td>
        <td>Base of skull (chondrocranium)</td>
        <td><strong>Ethmoid, sphenoid, temporal</strong></td>
      </tr>
    </tbody>
  </table>
  <p>Base of skull further divided by the <strong>sella turcica</strong> (where the notochord ends): <strong>Prechordal area</strong> (neural-crest based, anterior to notochord) · <strong>Chordal area cartilage</strong> (occipital-somitomere based, posterior).</p>
  <div class="q-info-box" style="margin-top:.5rem">Sphenoid, ethmoid, temporal, and frontal bones are <strong>pneumatized bones</strong> with air cells / sinuses.</div>
</div>

<span class="q-section-title">Skull Connections — Sutures and Fontanelles</span>
<div class="q-card">
  <p>A <strong>primary ossification center</strong> develops in the center of each flat skull bone and spreads from there. In the newborn, the different bones are connected by <strong>sutures (syndesmoses)</strong>:</p>
  <ul>
    <li>Sagittal suture · Lambdoid suture · Coronal suture · Squamous suture</li>
  </ul>
  <p>Also some cranial <strong>synchondroses</strong> (temporary, later ossified).</p>
  <p><strong>Fontanelles</strong> (where sutures of >2 bones meet):</p>
  <table class="q-data-table">
    <thead><tr><th>Fontanelle</th><th>Shape</th><th>Ossification</th><th>Becomes</th></tr></thead>
    <tbody>
      <tr><td><strong>Anterior</strong></td><td>Diamond</td><td>~3 years old</td><td>Bregma</td></tr>
      <tr><td><strong>Posterior</strong></td><td>Triangular</td><td>~3 months</td><td>Lambda</td></tr>
      <tr><td><strong>Sphenoid</strong> (paired)</td><td>—</td><td>6th month</td><td>Pterion</td></tr>
      <tr><td><strong>Mastoid</strong> (paired)</td><td>—</td><td>18th month</td><td>Asterion (<span class="cl-red">weakest part of skull</span>)</td></tr>
    </tbody>
  </table>
  <div class="q-clinical-box" style="margin-top:.5rem">
    Sutures allow <strong>molding of skull bones during delivery</strong> — bones can slightly overlap each other to ease delivery. As the brain enlarges, the bones must grow with it.
  </div>
</div>

<span class="q-section-title">Viscerocranium (Face)</span>
<div class="q-card">
  <p>Composed of <strong>1st and 2nd pharyngeal arches</strong> (rich in mesoderm and neural crest cells). <span class="hl-y"><strong>All viscerocranium bones are formed via intramembranous ossification.</strong></span></p>
  <p>Bones: <strong>Maxilla, mandible</strong> · <strong>Zygomatic, nasal, lacrimal</strong> · <strong>Temporal bone</strong> (tympanic part + styloid process)</p>
  <p><strong>1st Pharyngeal Arch:</strong></p>
  <ul>
    <li>Dorsal (maxillary process): maxilla, zygomatic, some temporal</li>
    <li>Ventral (mandibular process): <strong>Meckel's cartilage</strong> → mesenchyme undergoes intramembranous ossification → <strong>mandible</strong> (cartilage degenerates). Also gives: <strong>incus + malleus</strong> (<strong>first bones to ossify</strong>)</li>
  </ul>
  <p><strong>2nd Pharyngeal Arch</strong> → <strong>stapes</strong></p>
  <p>After birth: viscerocranium much smaller than neurocranium; rapid growth due to eruption of teeth + expansion of paranasal sinuses.</p>
  <p><strong>Defects:</strong> Anencephaly (no anterior neural pore closure — no skull vault — not compatible with life) · Meningocele (part of vault missing; dura mater protrudes) · Meningomyelocele (brain herniates into dura protrusion)</p>
</div>

<span class="q-section-title">Cranial Fossae</span>
<div class="q-card">
  <ul>
    <li><strong>Anterior cranial fossa</strong> — frontal lobes</li>
    <li><strong>Middle cranial fossa</strong> — separated from posterior by the <strong>clivus</strong> and the <strong>petrous crest</strong></li>
    <li><strong>Posterior cranial fossa</strong> — between foramen magnum and cerebellar tentorium (dura extension separating cerebellum from occipital lobes). Contains <strong>brainstem and cerebellum</strong></li>
  </ul>
</div>

${_ill1(1, "Skull base from above — 3 cranial fossae color-coded; anterior, middle, posterior labeled with their contents")}

<span class="q-section-title">PART 2 — THE VERTEBRAL COLUMN</span>
<div class="q-card">
  <p><span class="hl-y"><strong>33 vertebrae total:</strong> 7 cervical · 12 thoracic · 5 lumbar · 5 fused sacral · 4 fused coccygeal</span></p>
  <p>Vertebrae = spongy bone covered by thin compact bone; spongy bone filled by highly <strong>hematopoietic bone marrow</strong>.</p>
  <p>The <strong>vertebral arches</strong> = 2 pedicles (lateral) + 2 laminae (posterior). Together with vertebral bodies → <strong>vertebral foramen</strong>. All foramina = <strong>vertebral canal</strong> (contains spinal cord + spinal nerve roots, which emerge through <strong>intervertebral foramina</strong>).</p>
  <p>Adjacent vertebrae connected at articular surfaces by <strong>zygapophyseal joints</strong> (synovial plane joints between articular processes).</p>
</div>

<span class="q-section-title">Vertebra Types</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Type</th><th>Body</th><th>Foramen</th><th>Transverse Process</th><th>Spinous Process</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>7 Cervical</strong> (C1+C2 differ)</td>
        <td>Small, kidney-shaped</td>
        <td>Triangular</td>
        <td><strong>Transverse foramen</strong> (vertebral a. + v.) + <strong>groove for spinal nerve</strong></td>
        <td><strong>Bifid</strong> (except C1 and C7)</td>
      </tr>
      <tr>
        <td><strong>12 Thoracic</strong></td>
        <td>Heart-shaped, tall = wide</td>
        <td>Rounded/diamond</td>
        <td><strong>Transverse costal facet</strong> — articulates with costal tubercle of ribs (absent T11, T12)</td>
        <td>Long, points caudally; <strong>2 demi costal facets</strong></td>
      </tr>
      <tr>
        <td><strong>5 Lumbar</strong></td>
        <td>Tall, wide, kidney-shaped</td>
        <td>Triangular</td>
        <td><strong>Costal process</strong> (embryological remnant of lumbar ribs); mammillary + accessory processes</td>
        <td>Flat, quadrate (in sagittal plane; cranial facet = medial, caudal = lateral)</td>
      </tr>
      <tr>
        <td><strong>Sacral</strong> (S1–S5 fused)</td>
        <td>Fused</td>
        <td>Sacral canal; <strong>anterior foramina</strong> (anterior branch) + <strong>posterior foramina</strong> (4 pairs)</td>
        <td>Fused → lateral sacral crests</td>
        <td>S1–S4 fused → median sacral crest; S5 absent → <strong>sacral hiatus</strong>; sacral cornua articulate with coccyx</td>
      </tr>
    </tbody>
  </table>
  <div class="q-info-box" style="margin-top:.5rem">Different vertebral shapes are regulated by <strong>HOX genes</strong>.</div>
</div>

<span class="q-section-title">Development of the Vertebral Column</span>
<div class="q-card">
  <p><strong>Ventromedial somites (sclerotome)</strong> — paraxial mesoderm undergoes epithelial-to-mesenchyme transition → migrates toward <strong>notochord</strong> and <strong>neural tube</strong> → mesenchyme surrounds them.</p>
  <ul>
    <li>Mesenchyme around <strong>neural tube</strong> → <strong>vertebral arch / spinous process</strong></li>
    <li>Mesenchyme around <strong>notochord</strong> → <strong>vertebral body</strong></li>
  </ul>
  <p><strong>Re-segmentation:</strong> each sclerotome divides into upper + lower halves; lower half fuses with the upper half of the sclerotome below it → intersegmental development. Spinal nerves pass through the gap. Muscles attach to 2 vertebrae → mobility.</p>
  <p>The notochord <strong>degenerates</strong> within the vertebral column; <strong>expands between vertebrae</strong> → <strong>nucleus pulposus</strong>. Mesenchyme forms the <strong>annulus fibrosus</strong> around it → intervertebral disc.</p>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Spina Bifida</strong> — vertebral arch does not close:<br>
    • <em>Occulta</em> — no CNS migration through gap<br>
    • <em>Meningomyelocele</em> — protrusion of spinal cord + meninges<br>
    • <em>Cystica meningomyelocele</em> — posterior neural pore does not close at all; spinal cord exposed to surface
  </div>
</div>

<span class="q-section-title">Curvatures of the Vertebral Column</span>
<div class="q-card">
  <p><strong>Primary curvatures (Kyphosis)</strong> — formed in the fetal period; <strong>dorsal convexity</strong>:</p>
  <ul>
    <li>Thoracic kyphosis · Sacral kyphosis</li>
  </ul>
  <p><strong>Secondary curvatures (Lordosis)</strong> — formed in late fetal period to infancy; <strong>ventral convexity</strong>:</p>
  <ul>
    <li><strong>Cervical lordosis</strong> — develops as child raises its head</li>
    <li><strong>Lumbar lordosis</strong> — develops as child stands and walks</li>
  </ul>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Scoliosis</strong> — lateral curve; characterized by <strong>wedging and rotation of vertebrae</strong>; C-type and S-type.
  </div>
</div>

<span class="q-section-title">Movements of the Vertebral Column</span>
<div class="q-card">
  <ul>
    <li><strong>Anteroposterior and lateral bending (flexion and extension)</strong> — cervical and lumbar spine</li>
    <li><strong>Rotation around an axis</strong> — mostly the craniovertebral joint</li>
  </ul>
</div>

<span class="q-section-title">Vertebral Connections — Ligaments</span>
<div class="q-card">
  <p><strong>Long Ligaments:</strong></p>
  <ul>
    <li><strong>Anterior longitudinal ligament</strong> — ventral surface of vertebral bodies, C1–S1; stabilizes and fixates. Caudal continuation: <em>anterior sacro-coccygeal ligament</em></li>
    <li><strong>Posterior longitudinal ligament</strong> — dorsal surface of vertebral bodies inside the vertebral canal; <strong>prevents prolapse of intervertebral discs into the canal</strong>; fused with discs. Caudal: <em>posterior sacro-coccygeal</em>. Cranial: <em>tectorial membrane</em> (through foramen magnum; covers median atlanto-axial joint)</li>
  </ul>
  <p><strong>Zygapophyseal Joint:</strong> synovial plane joints connecting articular processes; 22 pairs (C2–S); simple; limited sliding.</p>
  <p><strong>Short Ligaments:</strong></p>
  <ul>
    <li><strong>Ligamenta flava</strong> — elastic CT; between vertebral arches; maintains erect column + allows passive extension</li>
    <li><strong>Interspinous ligament</strong> — between spinous processes</li>
    <li><strong>Intertransverse ligaments</strong> — between transverse processes</li>
    <li><strong>Supraspinous ligament</strong> — tips of spinous processes (cervical, thoracic, upper lumbar)</li>
    <li><strong>Nuchal ligament</strong> — cranial continuation of supraspinous; spinous process of C7 → external occipital protuberance</li>
  </ul>
</div>

<span class="q-section-title">Intervertebral Disc</span>
<div class="q-card">
  <p><strong>23 discs in total.</strong> Evenly distribute pressure; act as shock absorbers.</p>
  <ul>
    <li><strong>Annulus fibrosus</strong> — ring of fibrous cartilage; most of the disc mass</li>
    <li><strong>Nucleus pulposus</strong> — spherical, <strong>incompressible, gel-like substance</strong>; located in the middle</li>
  </ul>
  <p><strong>Lumbosacral symphysis</strong> — disc between L5 and sacrum. <strong>Sacrococcygeal symphysis</strong> — disc between sacrum and coccyx; <span class="hl-y">ossifies by the 40th year</span>; becomes looser during pregnancy due to <strong>relaxin</strong>.</p>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Herniation</strong> — wear and tear → nucleus pulposus may be pushed through the annulus fibrosus → disc displacement.
  </div>
</div>

${_ill1(2, "Intervertebral disc cross-section: nucleus pulposus (gel center), annulus fibrosus (ring), adjacent vertebral bodies, long ligaments")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Neurocranium: calvaria (intramembranous) · base (endochondral)</li>
    <li>Fontanelles: anterior (3 yrs, bregma) · posterior (3 mo, lambda) · pterion (6 mo) · asterion (18 mo)</li>
    <li>33 vertebrae: 7C + 12T + 5L + 5S + 4Co</li>
    <li>Nucleus pulposus = remnant of notochord</li>
    <li>Kyphosis (primary, dorsal convexity) · Lordosis (secondary, ventral convexity)</li>
  </ul>
</div>
`;

// ── Q7 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[7] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Craniovertebral Joint</h2>
  <p class="q-subtitle">Where the skull meets the spine</p>
</div>

<span class="q-section-title">Overview</span>
<div class="q-card">
  <p>The <strong>craniovertebral joints</strong> connect the <strong>occipital bone</strong> to the <strong>atlas (C1)</strong>, and the <strong>atlas to the axis (C2)</strong>. There are <strong>3 joints</strong> in this group.</p>
</div>

${_ill1(1, "Posterior view: skull base + C1 (atlas) + C2 (axis) — occipital condyles on atlas, dens of axis pointing up; 3 joints color-coded")}

<span class="q-section-title">1. Atlanto-Occipital Joint — "The YES joint"</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Pairing</strong></td><td>Paired</td></tr>
      <tr><td><strong>Type</strong></td><td>Simple, <strong>synovial</strong></td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Ellipsoid</strong> — ovoid process in elongated cavity → flexion, extension, abduction, adduction</td></tr>
      <tr><td><strong>Articular head</strong></td><td><strong>Occipital condyle</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td><strong>Superior articular facet of the atlas</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Ligaments:</strong></p>
  <ul>
    <li><strong>Anterior atlanto-occipital membrane</strong> (continuation of anterior longitudinal ligament)</li>
    <li><strong>Posterior atlanto-occipital membrane</strong> (ligamenta flava — continuous with posterior atlanto-axial membrane)</li>
  </ul>
  <p><strong>Movements:</strong> <strong>ante-flexion</strong>, <strong>retro-flexion</strong>, slight <strong>lateral flexion</strong> — <em>"nodding yes"</em></p>
</div>

${_ill1(2, "Side view: skull on atlas with curved arrows showing nodding motion")}

<span class="q-section-title">2. Median Atlanto-Axial Joint — "The NO joint"</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Pairing</strong></td><td>Unpaired</td></tr>
      <tr><td><strong>Type</strong></td><td>Simple, <strong>synovial</strong></td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Pivot</strong> — cylinder-shaped bone rotates inside a ligament-bone ring</td></tr>
      <tr><td><strong>Articular head</strong></td><td><strong>Dens of the axis</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td><strong>Facet for the dens on the posterior surface of the anterior arch of the atlas</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Ligaments:</strong></p>
  <ul>
    <li><strong>Cruciate ligament of atlas</strong> — transverse + longitudinal bands</li>
    <li><strong>Alar ligament</strong></li>
    <li><strong>Tectorial membrane</strong> — covers the dorsal surface of the joint</li>
  </ul>
  <p><strong>Movements:</strong> <span class="hl-y"><strong>30° rotation</strong></span> of the atlas around the dens in each direction — <em>"shaking no"</em></p>
</div>

${_ill1(3, "Top-down view: dens of axis inside ring of atlas + transverse ligament; rotation arrows left and right")}

<span class="q-section-title">3. Lateral Atlanto-Axial Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Pairing</strong></td><td>Paired</td></tr>
      <tr><td><strong>Type</strong></td><td>Simple, <strong>synovial</strong> (basically a zygapophyseal joint)</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Plane</strong> — triaxial sliding, limited movement</td></tr>
      <tr><td><strong>Articular head</strong></td><td><strong>Inferior articular facet of the lateral mass of the atlas</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td><strong>Superior articular facet of the axis</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Movements:</strong> Very limited in all three axes; <strong>inclination of the atlas</strong></p>
  <p><strong>Ligaments:</strong></p>
  <ul>
    <li><strong>Cruciate ligament of atlas:</strong> transverse ligaments of atlas (transverse) + longitudinal bands (behind tectorial membrane)</li>
    <li><strong>Alar ligaments</strong> — one on each side, above the longitudinal bands</li>
    <li><strong>Apical ligament of the dens</strong> — projection on the head of the dens</li>
    <li><strong>Tectorial membrane</strong> — covers everything (posterior)</li>
  </ul>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>3 joints: atlanto-occipital (paired, ellipsoid, YES/nodding) · median atlanto-axial (unpaired, pivot, NO/rotation, 30°) · lateral atlanto-axial (paired, plane, inclination)</li>
    <li>Tectorial membrane = cranial continuation of posterior longitudinal ligament</li>
    <li>Cruciate + alar ligaments stabilize the dens</li>
  </ul>
</div>
`;

// ── Q8 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[8] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Skeleton of the Thorax</h2>
  <p class="q-subtitle">Development · Connections · Motility of the Ribs</p>
</div>

<span class="q-section-title">Composition of the Thorax</span>
<div class="q-card">
  <p>The thorax consists of the <strong>sternum</strong> and <strong>twelve pairs of ribs</strong>:</p>
  <ul>
    <li><span class="cl-green"><strong>Ribs 1–7</strong></span> — <strong>true ribs</strong>, connected directly to the sternum</li>
    <li><span class="cl-orange"><strong>Ribs 8–10</strong></span> — <strong>false ribs</strong>, connect to the cartilage of the rib above</li>
    <li><span class="cl-red"><strong>Ribs 11–12</strong></span> — <strong>floating ribs</strong>, no anterior attachment</li>
  </ul>
</div>

${_ill1(1, "Frontal thoracic cage: sternum (manubrium, body, xiphoid), 12 rib pairs, costal cartilages; 3 rib groups color-coded — true (green), false (yellow), floating (red)")}

<span class="q-section-title">Anatomy of a Rib</span>
<div class="q-card">
  <ul>
    <li><strong>Head</strong> — articulates with the vertebral body; <strong>articular facets separated by a crest</strong> (except in ribs 1, 10, 11, 12) → articulate with costal facets on thoracic vertebral bodies</li>
    <li><strong>Neck</strong></li>
    <li><strong>Tubercle</strong> — borders neck and body</li>
    <li><strong>Body</strong></li>
    <li><strong>Angle</strong> — curvature in the <strong>dorsal third</strong></li>
    <li><strong>Costal groove</strong> — inferior margin of dorsal surface; forms the <strong>superior border of the intercostal space</strong></li>
    <li><strong>Costal cartilage</strong> — ventral end: true ribs → sternum; false ribs → cartilage above</li>
  </ul>
</div>

${_ill1(2, "A single rib from above — head with 2 facets and crest, neck, tubercle, body, angle (dorsal third), costal groove on inferior margin, costal cartilage at ventral end")}

<span class="q-section-title">Atypical Ribs</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Rib</th><th>Features</th></tr></thead>
    <tbody>
      <tr><td><strong>Rib 1</strong></td><td>Shorter + wider; <strong>one facet</strong> (no vertebra above); superior surface marked by <strong>two grooves for subclavian vessels</strong></td></tr>
      <tr><td><strong>Rib 2</strong></td><td>Thinner + longer; 2 normal facets; <strong>roughened area on upper surface</strong> (origin of <strong>serratus anterior</strong>)</td></tr>
      <tr><td><strong>Rib 10</strong></td><td><strong>One facet</strong> for its corresponding vertebra</td></tr>
      <tr><td><strong>Ribs 11–12</strong></td><td><strong>No neck</strong>; <strong>one facet</strong> for corresponding vertebra</td></tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Sternum</span>
<div class="q-card">
  <ul>
    <li><strong>Manubrium</strong> — cranial part; origin of sternohyoid, sternothyroid, sternal part of SCM
      <ul>
        <li>Jugular notch → jugular fossa</li>
        <li>Clavicular notch → articulates with clavicle</li>
        <li>1st costal notch → articulates with 1st rib</li>
      </ul>
    </li>
    <li><span class="hl-y"><strong>Sternal angle of Louis</strong></span> — obtuse angle between manubrium and body; at the level of the <strong>2nd rib</strong></li>
    <li><strong>Body</strong> — costal notches → articulates with 2nd–7th ribs</li>
    <li><strong>Xiphoid process</strong> — variable length and shape; can be bifurcated</li>
  </ul>
</div>

<span class="q-section-title">Development of Ribs and Sternum</span>
<div class="q-card">
  <p><strong>Ribs:</strong></p>
  <ul>
    <li>Bony portion → from <strong>sclerotome cells</strong> remaining in paraxial mesoderm, growing out from <strong>costal processes</strong> of thoracic vertebrae</li>
    <li>Costal cartilages → from sclerotome cells migrating into <strong>lateral plate mesoderm</strong> (ab-axial domain)</li>
  </ul>
  <p><strong>Sternum:</strong> Develops <strong>independently</strong> in the parietal (somatic) layer of lateral plate mesoderm in the ventral body wall. Two <strong>sternal bands</strong> form on either side of midline → fuse → cartilaginous models → manubrium + sternum + xiphoid (via <strong>endochondral ossification</strong>).</p>
</div>

<span class="q-section-title">Connections and Motility of the Ribs</span>
<div class="q-card">
  <p><strong>Costo-vertebral Joints:</strong></p>
  <p><em>Joints of the Head of the Rib:</em></p>
  <ul>
    <li>Articular head: head of rib (2 articular facets separated by a crest) · Articular fossa: superior + inferior costal demi-facets of the vertebral body</li>
    <li>Ligaments: <strong>radiate ligaments</strong> of the head + <strong>intra-articular ligament</strong></li>
  </ul>
  <p><em>Costotransverse Joint</em> (rib ↔ transverse process):</p>
  <ul>
    <li>Articular head: <strong>tubercle of the rib</strong> · Articular fossa: <strong>transverse costal facet</strong></li>
    <li>Movements: <strong>sliding movements</strong></li>
    <li>Ligaments: costotransverse + superior and lateral costotransverse · 12th rib: <strong>lumbocostal ligament</strong> (L1 → rib 12)</li>
  </ul>
  <p><strong>Sternocostal Joints:</strong></p>
  <ul>
    <li>Articular head: cartilage of 2nd–7th ribs · Articular fossa: costal notches on sternum</li>
    <li>Ligaments: radiate sternocostal ligaments (form the <strong>sternal membrane</strong>) + costoxiphoid ligament</li>
    <li>1st, 6th, and 7th ribs = <strong>synchondroses</strong></li>
  </ul>
  <p><strong>Inter-chondral Joints:</strong> Between cartilages of 6th–9th ribs.</p>
  <p>Rib movements <strong>expand and contract the thorax</strong> → inspiration and expiration. Maximal inspiration requires mobility in costo-vertebral joint + elasticity of costal cartilages.</p>
</div>

<span class="q-section-title">Sternoclavicular Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Ball and socket, complex</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Clavicular notch on the manubrium</td></tr>
      <tr><td><strong>Articular head</strong></td><td>Sternal articular surface of the clavicle</td></tr>
      <tr><td><strong>Ligaments</strong></td><td>Interclavicular · Anterior and posterior sternoclavicular · Costoclavicular (with 1st rib)</td></tr>
      <tr><td><strong>Accessory features</strong></td><td>Articular disc — oval fibrocartilage plate; separates synovial cavities for independent movements</td></tr>
      <tr><td><strong>Movement</strong></td><td>Very limited in all directions</td></tr>
    </tbody>
  </table>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>True ribs (1–7) → sternum · False (8–10) → rib above · Floating (11–12) → nothing</li>
    <li>Sternal angle of Louis = 2nd rib landmark</li>
    <li>Ribs from sclerotome; sternum from sternal bands (endochondral)</li>
    <li>Sternoclavicular = ball and socket, complex (with articular disc)</li>
  </ul>
</div>
`;

// ── Q9 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[9] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Temporomandibular Joint</h2>
  <p class="q-subtitle">Structure and Motility</p>
</div>

<span class="q-section-title">Structure of the TMJ</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Complex</strong> (has an articular disc)</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Bicondylar</strong> — ovoid articular surface (condyle) in an elliptical cavity → 2 planes → flexion, extension, adduction, abduction, circumduction</td></tr>
      <tr><td><strong>Articular head</strong></td><td><strong>Head of the mandible</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td><strong>Mandibular fossa of the temporal bone</strong></td></tr>
      <tr><td><strong>Capsule</strong></td><td><strong>Loose</strong></td></tr>
    </tbody>
  </table>
</div>

${_ill1(1, "Lateral view: head of mandible (condyle) sitting in the mandibular fossa of the temporal bone; articular disc between them; joint capsule highlighted")}

<span class="q-section-title">Special Features</span>
<div class="q-card">
  <ul>
    <li><strong>Articular disc</strong> — separates the joint into <span class="hl-y"><strong>2 separate cavities</strong></span></li>
    <li>The cartilage covering the bone is <span class="hl-y"><strong>fibrocartilage</strong> (NOT hyaline)</span></li>
    <li>The <strong>lateral pterygoid muscle</strong> inserts into the <strong>capsule</strong></li>
  </ul>
</div>

${_ill1(2, "Close-up cross-section: head of mandible, mandibular fossa above, articular disc between them, loose capsule, upper and lower cavities labeled")}

<span class="q-section-title">Ligaments</span>
<div class="q-card">
  <ol>
    <li><strong>Lateral (temporomandibular) ligament</strong> — main reinforcement on the lateral side</li>
    <li><strong>Spheno-mandibular ligament</strong> — runs to the <strong>lingula of the mandible</strong></li>
    <li><strong>Stylo-mandibular ligament</strong> — runs to the <strong>angle of the mandible</strong></li>
  </ol>
</div>

${_ill1(3, "Lateral skull: lateral (TMJ) ligament, spheno-mandibular (deep, to lingula), stylo-mandibular (from styloid to angle of mandible) — all labeled")}

<span class="q-section-title">Movements</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Movement</th><th>Muscles</th></tr></thead>
    <tbody>
      <tr><td><strong>Protraction</strong></td><td>Lateral + medial pterygoid muscles</td></tr>
      <tr><td><strong>Retraction</strong></td><td>Temporalis (posterior fibers), masseter (deep), geniohyoid, digastric</td></tr>
      <tr><td><strong>Depression</strong></td><td>Gravity, digastric, geniohyoid, mylohyoid</td></tr>
      <tr><td><strong>Elevation</strong></td><td>Temporalis, masseter, medial pterygoid</td></tr>
      <tr><td><strong>Lateropulsion</strong></td><td>Pterygoid muscles (alternating sides) — <em>"like a camel chewing"</em></td></tr>
    </tbody>
  </table>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Exam High-Yield:</strong> Both TMJs (left and right) are <strong>interrelated</strong> in their movements — even when one side appears to move, the opposite joint is always involved.
  </div>
</div>

${_ill1(4, "5 head/jaw icons showing each movement — protraction (jaw forward), retraction (jaw back), depression (mouth open), elevation (mouth closed), lateropulsion (jaw to side) — with main muscle labeled")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>TMJ = complex (disc) + bicondylar + loose capsule</li>
    <li>Disc → divides into 2 cavities</li>
    <li>Fibrocartilage covers bone (NOT hyaline!)</li>
    <li>Lateral pterygoid inserts into the capsule</li>
    <li>Both TMJs always work together</li>
  </ul>
</div>
`;

// ── Q10 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[10] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Development and Growth of the Limb</h2>
  <p class="q-subtitle">Molecular Mechanisms · Limb Defects</p>
</div>

<span class="q-section-title">Overview</span>
<div class="q-card">
  <p>The <strong>limbs, shoulders, and pelvic girdles</strong> = the <strong>appendicular skeleton</strong>. They develop from <strong>limb buds</strong> — out-pocketings from the ventrolateral body wall. Upper and lower limbs develop similarly; the <span class="hl-y"><strong>lower limb is 1–2 days behind</strong></span>.</p>
</div>

<span class="q-section-title">Proximal–Distal Development (7 steps)</span>
<div class="q-card">
  <ol>
    <li><strong>End of week 4</strong> — limb buds appear from the ventrolateral body wall. Forelimb first, then hindlimb 1–2 days later</li>
    <li>Limb buds consist of a <strong>mesenchymal core</strong> (from parietal/somatic lateral plate mesoderm) covered by <strong>ectoderm</strong></li>
    <li>Ectoderm at the distal end thickens → <strong>Apical Ectodermal Ridge (AER)</strong>. Via <strong>FGF</strong>, keeps adjacent mesenchyme rapidly proliferating but <strong>not differentiating</strong> = <strong>undifferentiated / progress zone</strong></li>
    <li>As limbs grow, cells farther from the AER differentiate into cartilage → <strong>proximo-distal development</strong> with 4 components:
      <ul>
        <li><strong>Cingulum</strong> — immovable part (girdle)</li>
        <li><strong>Stylopod</strong> — humerus / femur</li>
        <li><strong>Zeugopod</strong> — ulna + radius / tibia + fibula</li>
        <li><strong>Autopod</strong> — carpals, metacarpals, digits / tarsals, metatarsals</li>
      </ul>
    </li>
    <li><strong>Week 6</strong> — terminal portion flattens → <strong>hand plate / foot plate</strong>. Circular constrictions → wrist + ankle; second constriction → elbow + knee</li>
    <li><strong>Fingers form via cell death (apoptosis) in the AER</strong> — separates the ridge into 5 parts. 5 AER segments → 5 digits. Further development: mesenchyme condenses → cartilage molds → ossification</li>
    <li><strong>Week 7</strong> — limbs rotate 90°: <span class="hl-y">upper rotates <strong>laterally</strong></span>; <span class="hl-y">lower rotates <strong>medially</strong></span></li>
  </ol>
</div>

${_ill1(1, "4-step embryonic limb-bud growth: week 4 (small bud), week 5 (longer with AER), week 6 (paddle-shaped plate), week 7 (digits forming + 90° rotation)")}

${_ill1(2, "One limb showing 4 proximo-distal segments: Cingulum, Stylopod, Zeugopod, Autopod — arrows showing AER signaling distally")}

<span class="q-section-title">Antero-Posterior Development</span>
<div class="q-card">
  <p><strong>ZPA (Zone of Polarizing Activity)</strong> — special cells on the posterior border of the developing limb (near AER). Activates <strong>Sonic Hedgehog (SHH)</strong> → specifies the <strong>anteroposterior axis</strong> → thumb on the <strong>anterior side</strong>.</p>
</div>

${_ill1(3, "Top-down view of developing hand plate: AER along distal edge, ZPA on posterior border secreting SHH (gradient arrows), thumb at anterior side")}

<span class="q-section-title">Bone Formation in the Limb</span>
<div class="q-card">
  <ol>
    <li>Mesenchyme in limb buds <strong>condenses</strong> → differentiates into <strong>chondroblasts</strong> → hyaline cartilage models (1st model in week 6)</li>
    <li>Hyaline cartilage models undergo <strong>endochondral ossification</strong> → bone. Primary ossification centers present in all long bones of limbs by the <span class="hl-y"><strong>12th week</strong></span></li>
    <li>At birth: <strong>diaphysis ossified</strong>; <strong>epiphysis still cartilaginous</strong>. Shortly after birth → secondary ossification centers in epiphyses</li>
    <li>Epiphyseal growth plates → elongation of bones up to <strong>~20 years</strong></li>
  </ol>
</div>

<span class="q-section-title">Joint Development</span>
<div class="q-card">
  <ol>
    <li>Chondrogenesis <strong>arrests</strong> in some regions → <strong>joint interzone</strong> is induced</li>
    <li>Cells in the region condense → <strong>cell death</strong> forms the <strong>joint cavity</strong></li>
    <li>Surrounding cells differentiate → <strong>joint capsule</strong></li>
  </ol>
</div>

<span class="q-section-title">Musculature Formation</span>
<div class="q-card">
  <p>Muscle cells derived from <strong>somites (myotomes)</strong>:</p>
  <ul>
    <li>Upper limb: <strong>C5–T2</strong></li>
    <li>Lower limb: <strong>L2–S2</strong></li>
  </ul>
  <p>Cells divide into <strong>ventral (flexor)</strong> and <strong>dorsal (extensor)</strong> components → undergo fusion and splitting (one muscle may come from multiple segments).</p>
</div>

<span class="q-section-title">Innervation</span>
<div class="q-card">
  <ol>
    <li>Ventral primary rami of spinal nerves penetrate the mesenchyme with dorsal (epaxial back muscles) and ventral (limbs) branches</li>
    <li>Small branches unite → large ventral and dorsal branches per segment</li>
    <li>Nerves establish intimate contact with differentiating mesenchyme immediately after entry — <strong>very important for functional differentiation</strong></li>
  </ol>
</div>

<span class="q-section-title">Molecular Mechanisms</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Molecule</th><th>Role</th></tr></thead>
    <tbody>
      <tr><td><strong>HOX genes</strong></td><td>Control <strong>craniocaudal location</strong> of limb-bud formation (limb positioning)</td></tr>
      <tr><td><strong>TBX4</strong></td><td>Specification of the <strong>forelimb</strong></td></tr>
      <tr><td><strong>TBX5</strong></td><td>Specification of the <strong>hindlimb</strong></td></tr>
      <tr><td><strong>FGF10</strong></td><td>Initiates limb growth</td></tr>
      <tr><td><strong>FGF4 + FGF8</strong></td><td>Maintain undifferentiated zones (secreted by AER)</td></tr>
      <tr><td><strong>BMP</strong> (bone morphogenic proteins)</td><td>Induce formation of the <strong>AER</strong>; expressed in ventral ectoderm</td></tr>
      <tr><td><strong>Radical fringe</strong></td><td>Restricts AER formation to the <strong>distal tip</strong> of the limbs</td></tr>
      <tr><td><strong>SHH</strong> (sonic hedgehog)</td><td>Specifies <strong>anteroposterior axis</strong>; secreted in ZPA (posterior border near AER)</td></tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Limb Defects</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Defect</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Amelia</strong></td><td>Complete absence of a limb</td></tr>
      <tr><td><strong>Meromelia</strong></td><td>Partial absence of a limb</td></tr>
      <tr><td><strong>Phocomelia</strong></td><td>Type of meromelia; irregularly shaped bones</td></tr>
      <tr><td><strong>Micromelia</strong></td><td>All bones present but very short</td></tr>
      <tr><td><strong>Meyomelia</strong></td><td>Abnormal proportions</td></tr>
      <tr><td><strong>Thalidomide</strong></td><td>Damages the AER → prevents limb development. <span class="hl-y">Limb buds very sensitive to teratogens during weeks 4–5</span></td></tr>
      <tr><td><strong>Brachydactyly</strong></td><td>Short fingers; autosomal dominant</td></tr>
      <tr><td><strong>Polydactyly</strong></td><td>Extra fingers; usually lack proper muscle connections; usually bilateral</td></tr>
      <tr><td><strong>Syndactyly</strong></td><td>Fused fingers; caused by <strong>failure of cell-death process</strong> segmenting the fingers</td></tr>
      <tr><td><strong>Achondroplasia</strong></td><td>Growth plate closes too early; limbs remain proportioned like a 3–4-year-old's</td></tr>
    </tbody>
  </table>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>AER + FGF → proximal–distal axis · ZPA + SHH → anteroposterior axis</li>
    <li>TBX5 = upper · TBX4 = lower · HOX genes = positioning</li>
    <li>4 proximo-distal segments: Cingulum → Stylopod → Zeugopod → Autopod</li>
    <li>Week 7: upper limb rotates laterally; lower rotates medially</li>
    <li>Syndactyly = failed apoptosis · Thalidomide = AER damage (weeks 4–5)</li>
  </ul>
</div>
`;

// ── Q11 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[11] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Shoulder Joint and Elbow Joint</h2>
  <p class="q-subtitle">Structure and Movements</p>
</div>

<span class="q-section-title">PART 1 — THE SHOULDER JOINT (Glenohumeral)</span>
<div class="q-card">
  <p>The <strong>head of the humerus</strong> is relatively large; the <strong>glenoid cavity of the scapula</strong> is shallow → the joint is <strong>very mobile yet unstable</strong>.</p>
  <p>Stability is provided by the <strong>rotator cuff muscles</strong>, <strong>long head of biceps brachii</strong>, related <strong>bony processes (acromion + coracoid)</strong>, and <strong>extracapsular ligaments</strong>.</p>
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Simple</strong></td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Ball and socket</strong></td></tr>
      <tr><td><strong>Articular head</strong></td><td>Head of the humerus</td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Glenoid cavity of the scapula</td></tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Range of Motion — Shoulder</span>
<div class="q-card">
  <ul>
    <li><strong>Anteflexion:</strong> 0–90°; with external rotation of the inferior angle of the scapula: up to <strong>180°</strong></li>
    <li><strong>Retroflexion:</strong> 0–50°</li>
    <li><strong>Abduction:</strong> 0–90° · <strong>Adduction:</strong> 0–75°</li>
    <li><strong>External rotation:</strong> 0–90° · <strong>Internal rotation:</strong> 0–90°</li>
  </ul>
</div>

<span class="q-section-title">Capsule — Shoulder</span>
<div class="q-card">
  <p>Attaches to the <strong>neck of the scapula</strong> and the <strong>anatomical neck of the humerus</strong>.</p>
  <ul>
    <li><strong>Fibrous membrane</strong> — wraps around the outside of the glenoid labrum; encloses the labrum and head of the biceps tendon</li>
    <li><strong>Synovial membrane</strong> — lines the fibrous membrane; forms <strong>bursae</strong> (reduce friction). Folds around the <strong>long head of biceps</strong> and extends along the tendon into the <strong>intertubercular sulcus</strong></li>
  </ul>
</div>

<span class="q-section-title">Ligaments — Shoulder</span>
<div class="q-card">
  <ol>
    <li><strong>Coracohumeral ligament</strong> — root of the coracoid process → greater tuberosity. <strong>Prevents inferior displacement of the humerus.</strong></li>
    <li><strong>Glenohumeral ligaments</strong> (superior, middle, inferior) — give strength to the capsule; visible from an anterior view</li>
    <li><strong>Coracoacromial ligament</strong> — acromion ↔ coracoid process of the scapula</li>
    <li><strong>Transverse humeral ligament</strong> — bridges the gap between greater and lesser tuberosities; holds the tendon of the <strong>long head of biceps</strong> in the intertubercular sulcus</li>
  </ol>
</div>

<span class="q-section-title">Accessory Features — Shoulder</span>
<div class="q-card">
  <ul>
    <li><strong>Glenoid labrum</strong> — cartilaginous margin that <strong>enlarges the articular cavity</strong>; compensates for instability</li>
    <li><strong>Tendon of long head of biceps</strong> — attaches to the <strong>supraglenoid tubercle</strong>; adds stability; runs in the intertubercular sulcus</li>
    <li><strong>Bursae:</strong>
      <ul>
        <li><strong>Sub-deltoid bursa</strong> — under the deltoid; continues with the sub-acromial bursa</li>
        <li><strong>Sub-acromial bursa</strong> — under the acromion</li>
        <li><strong>Subtendinous bursa of subscapularis</strong> — between the subscapularis tendon and fibrous membrane; <span class="hl-y">normally communicates with the glenohumeral joint</span> → if infected, reaches the joint too</li>
      </ul>
    </li>
  </ul>
</div>

<span class="q-section-title">Rotator Cuff</span>
<div class="q-card">
  <p>Group of <strong>4 muscles</strong> attaching to the greater and lesser tubercle of the humerus. <strong>Stabilize the shoulder joint</strong> and aid in its <strong>rotation</strong>.</p>
  <ul>
    <li><strong>Greater tubercle:</strong> Supraspinatus · Infraspinatus · Teres minor</li>
    <li><strong>Lesser tubercle:</strong> Subscapularis</li>
  </ul>
</div>

<span class="q-section-title">Innervation and Blood Supply — Shoulder</span>
<div class="q-card">
  <ul>
    <li><strong>Innervation:</strong> Suprascapular nerve · Axillary nerve · Lateral pectoral nerve</li>
    <li><strong>Blood supply:</strong> Anterior and posterior <strong>circumflex humeral arteries</strong> + <strong>suprascapular artery</strong></li>
  </ul>
</div>

${_ill1(1, "Shoulder joint: glenoid labrum, head of humerus in shallow glenoid cavity, rotator cuff muscles labeled (SITS), glenohumeral ligaments, bursae")}

<span class="q-section-title">PART 2 — THE ELBOW JOINT</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Compound synovial joint</strong> — 3 bones articulating in 3 simple joints (radius + humerus = ball and socket; humeroulnar = hinge joint)</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Biaxial hinge joint</strong></td></tr>
      <tr><td><strong>Capsule</strong></td><td>Attaches to the humerus inferior to epicondyles, to the neck of the radius, and to the ulna on the borders of its articular surface</td></tr>
    </tbody>
  </table>
  <p><strong>Sacciform recess</strong> — a pouch within the articular capsule over the <strong>neck of the radius</strong>.</p>
</div>

<span class="q-section-title">Ligaments — Elbow</span>
<div class="q-card">
  <ul>
    <li><strong>Ulnar collateral ligament</strong> — triangular; medial side; anterior + posterior parts</li>
    <li><strong>Radial collateral ligament</strong> — lateral side</li>
    <li><strong>Annular ligament of the radius</strong> — attaches to the ulna; <strong>encircles the head of the radius</strong></li>
  </ul>
  <p><strong>Accessory:</strong> Subtendinous bursa of triceps brachii — at the olecranon.</p>
</div>

<span class="q-section-title">Movements — Elbow</span>
<div class="q-card">
  <ul>
    <li><strong>Flexion:</strong> 0–145° · <strong>Extension:</strong> 0–5° (<span class="hl-y">hyperextension up to 10° is physiological in females</span> — smaller olecranon)</li>
    <li><strong>Pronation</strong> (radius crosses over ulna): 0–90°</li>
    <li><strong>Supination</strong> (radius and ulna parallel): 0–90°</li>
  </ul>
</div>

<span class="q-section-title">Distal Radio-Ulnar Joint</span>
<div class="q-card">
  <p>The proximal and distal radio-ulnar joints form a <strong>functional unit</strong> enabling pronation and supination.</p>
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Simple</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Pivot</strong></td></tr>
      <tr><td><strong>Articular head</strong></td><td>Articular circumference of the head of the ulna</td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Ulnar notch of the radius</td></tr>
    </tbody>
  </table>
  <ul>
    <li><strong>Pronation</strong> — radius crosses over the ulna; palm turns <strong>dorsally</strong></li>
    <li><strong>Supination</strong> — radius parallel to ulna; palm turns <strong>ventrally</strong></li>
  </ul>
</div>

<span class="q-section-title">Radio-Ulnar Syndesmosis</span>
<div class="q-card">
  <ul>
    <li><strong>Interosseous membrane of the forearm</strong> — fibers run <strong>mediodistally</strong> from radius to ulna</li>
    <li><strong>Oblique cord</strong> — narrow band of fibers running <strong>laterodistally</strong> from ulna to radius</li>
  </ul>
</div>

<div class="q-clinical-box">
  <strong>Tennis Elbow</strong> — overuse of muscle tendons: either the <strong>flexor common tendon</strong> (medial epicondyle) or the <strong>lateral common tendon</strong> (lateral epicondyle) → pain and inflammation around the relevant epicondyle.
</div>

${_ill1(2, "Elbow: 3 articulations (humeroulnar hinge, humeroradial ball-socket, proximal radioulnar pivot); 3 ligaments labeled; sacciform recess")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Shoulder = simple, ball-and-socket; very mobile, unstable → stabilized by rotator cuff (SITS) + glenoid labrum + ligaments</li>
    <li>Elbow = compound, biaxial hinge; 3 simple joints within one capsule</li>
    <li>Pronation/supination = proximal + distal radio-ulnar joints working as a unit (pivot joints)</li>
    <li>Hyperextension up to 10° is physiological in females</li>
  </ul>
</div>
`;

// ── Q12 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[12] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Bones and Joints of the Hand</h2>
  <p class="q-subtitle">Including X-Ray Reading</p>
</div>

<span class="q-section-title">Carpal Bones</span>
<div class="q-card">
  <p class="hl-y"><strong>Mnemonic — "Some Lovers Try Positions That They Can't Handle":</strong></p>
  <table class="q-data-table">
    <thead><tr><th>Mnemonic word</th><th>Bone</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>Some</td><td><strong>Scaphoid</strong></td><td>Most common carpal fracture; blood supply runs distal → proximal → fracture can cause <strong>avascular necrosis</strong></td></tr>
      <tr><td>Lovers</td><td><strong>Lunate</strong></td><td>Articulates with radius → wrist joint (radiocarpal joint)</td></tr>
      <tr><td>Try</td><td><strong>Triquetrum</strong></td><td>—</td></tr>
      <tr><td>Positions</td><td><strong>Pisiform</strong></td><td>Sesamoid bone; formed within the tendon of <strong>flexor carpi ulnaris</strong></td></tr>
      <tr><td>That</td><td><strong>Trapezium</strong></td><td>—</td></tr>
      <tr><td>They</td><td><strong>Trapezoid</strong></td><td>—</td></tr>
      <tr><td>Can't</td><td><strong>Capitate</strong></td><td>—</td></tr>
      <tr><td>Handle</td><td><strong>Hamate</strong></td><td>Has the <strong>"hook of hamate"</strong> on its palmar surface</td></tr>
    </tbody>
  </table>
  <p>The <strong>flexor retinaculum</strong> spans between the medial and lateral edges of the carpal arch → forms the <strong>carpal tunnel</strong>.</p>
  <p>Proximally: <strong>scaphoid + lunate</strong> articulate with the <strong>radius</strong> → <strong>wrist joint (radiocarpal)</strong>. In the distal row, all carpals articulate with metacarpals.</p>
</div>

${_ill1(1, "X-ray and drawing of the hand — 8 carpals labeled in 2 rows (proximal: Scaphoid, Lunate, Triquetrum, Pisiform; distal: Trapezium, Trapezoid, Capitate, Hamate); 5 metacarpals; 14 phalanges")}

<span class="q-section-title">Metacarpal Bones</span>
<div class="q-card">
  <p>I (Thumb) · II (Index) · III (Middle) · IV (Ring) · V (Little)</p>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Boxer's fracture</strong> — fracture of the <strong>4th or 5th metacarpal</strong>.<br>
    <strong>Bennett's fracture</strong> — fracture of the <strong>1st metacarpal base</strong>; caused by <strong>forced hyper-abduction of the thumb</strong>.
  </div>
</div>

<span class="q-section-title">Blood Supply of the Hand</span>
<div class="q-card">
  <p><strong>Deep Palmar Arch</strong> — formed by the <strong>radial artery</strong> as it wraps around the thumb and crosses the deep palm. Supplies thumb and index finger; connects to the superficial palmar arch. Gives rise to the <strong>"princeps pollicis" artery</strong> (main supply to the thumb).</p>
  <p><strong>Superficial Palmar Arch</strong> — formed by the <strong>ulnar artery</strong> crossing the palm. Communicates with the deep palmar arch. Gives off <strong>common digital arteries</strong> → supply to the fingers.</p>
  <p>The <strong>radial artery to the index finger</strong> branches off the deep palmar arch → supplies the thumb side of the index finger. The <strong>ulnar side</strong> of the index finger is supplied by a branch of a common digital artery.</p>
  <p><strong>Proper digital arteries</strong> supply the fingers. The thumb and index finger also receive branches from the deep palmar arch.</p>
</div>

${_ill1(2, "Palmar view of hand: deep palmar arch (radial artery, deep), superficial palmar arch (ulnar artery), common digital arteries, princeps pollicis, proper digital arteries — all labeled")}

<span class="q-section-title">Joints of the Hand</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Joint</th><th>Location</th><th>Key Features</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Proximal Radioulnar</strong></td>
        <td>Near elbow</td>
        <td><strong>Pivot</strong> — head of radius in radial notch of ulna</td>
      </tr>
      <tr>
        <td><strong>Distal Radioulnar</strong></td>
        <td>Near wrist</td>
        <td><strong>Pivot</strong> — ulnar notch of radius + ulnar head. With the proximal joint → enables pronation/supination</td>
      </tr>
      <tr>
        <td><strong>DIP</strong> (Distal Interphalangeal)</td>
        <td>Tip of finger (before nail)</td>
        <td>Arthritis common here; also frequently fractured</td>
      </tr>
      <tr>
        <td><strong>PIP</strong> (Proximal Interphalangeal)</td>
        <td>Middle of finger</td>
        <td>Flexion + extension; becomes stiff easily after injury</td>
      </tr>
      <tr>
        <td><strong>MCP</strong> (Metacarpophalangeal)</td>
        <td>Knuckle</td>
        <td>Flexion, extension, spread of fingers</td>
      </tr>
      <tr>
        <td><strong>CMC</strong> (Carpometacarpal)</td>
        <td>Base of hand</td>
        <td>Varies per finger: index finger has little motion; small finger has a lot</td>
      </tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Wrist Joint (Radiocarpal)</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Compound</strong> (4 articular surfaces) and <strong>Complex</strong> (articular disc)</td></tr>
      <tr><td><strong>Articular head</strong></td><td>Scaphoid · Lunate · Triquetrum</td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Carpal articular surface of the <strong>radius</strong> + the <strong>articular disc</strong></td></tr>
      <tr><td><strong>Capsule</strong></td><td>Loose; allows wide range of movements</td></tr>
      <tr><td><strong>Articular disc</strong></td><td>Forms the medial part of the articular fossa; the <strong>ulna does not directly articulate with carpal bones</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Ligaments:</strong> Radiate carpal · Palmar + dorsal radiocarpal · Palmar ulnocarpal · Ulnar + radial collateral ligaments</p>
  <p><strong>Movements:</strong> Palmar flexion 0–80° · Dorsiflexion 0–85° · Ulnar abduction 0–45° · Radial abduction 0–15°</p>
</div>

${_ill1(3, "X-ray and labeled diagram of wrist: radius articular surface, articular disc (medial), scaphoid-lunate-triquetrum forming the articular head")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>8 carpals (SLTPTTCH) in 2 rows; flexor retinaculum = carpal tunnel roof</li>
    <li>Scaphoid = most common carpal fracture → risk of AVN (blood supply distal to proximal)</li>
    <li>Wrist joint = compound + complex; ulna does NOT contact carpals (articular disc instead)</li>
    <li>Deep palmar arch = radial artery · Superficial palmar arch = ulnar artery</li>
    <li>Boxer's = metacarpal 4/5 · Bennett's = 1st metacarpal base</li>
  </ul>
</div>
`;

// ── Q13 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[13] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Bony Pelvis as a Complex</h2>
  <p class="q-subtitle">Connections · Passages · Diameters · Planes · Sexual Differences</p>
</div>

<span class="q-section-title">Overview</span>
<div class="q-card">
  <p>The <strong>pelvic girdle</strong> = <strong>left and right hip bones</strong> + <strong>sacrum</strong>.</p>
  <p>Divided by the <strong>linea terminalis</strong> into:</p>
  <ul>
    <li><strong>Greater / false pelvis</strong> — contains small and large intestine</li>
    <li><strong>Lesser / true pelvis</strong> — contains urinary bladder, male and female internal genital organs, rectum</li>
  </ul>
  <p>The <strong>hip bone</strong> consists of <strong>3 fused bones</strong>: <strong>ilium, ischium, and pubis</strong>, which articulate at the <strong>acetabulum</strong>. In childhood, connected by hyaline cartilage; <strong>ossifies at puberty</strong>.</p>
</div>

${_ill1(1, "Anterior view of the bony pelvis: hip bones (ilium, ischium, pubis), sacrum, obturator foramen, acetabulum, pubic symphysis; false vs true pelvis divided by linea terminalis")}

<span class="q-section-title">Main Passages</span>
<div class="q-card">
  <p><strong>Obturator Foramen</strong></p>
  <ul>
    <li>Surrounded by <strong>ischium and pubis</strong>; almost fully closed by the <strong>obturator membrane</strong></li>
    <li><strong>Obturator canal:</strong> obturator nerve + vessels</li>
  </ul>
  <p><strong>Greater Sciatic Foramen</strong></p>
  <ul>
    <li>Formed by greater sciatic notch + <strong>sacrospinous ligament</strong> (ischial spine → sacrum) + <strong>sacrotuberous ligament</strong> (ischial tuberosity → sacrum)</li>
    <li>Divided by the <strong>piriformis muscle</strong>:
      <ul>
        <li><strong>Suprapiriformis foramen:</strong> superior gluteal vessels</li>
        <li><strong>Infrapiriformis foramen</strong> (lateral → medial): sciatic nerve · posterior cutaneous femoral nerve · inferior gluteal vessels · pudendal nerve · internal pudendal vessels</li>
      </ul>
    </li>
  </ul>
  <p><strong>Lesser Sciatic Foramen</strong></p>
  <ul>
    <li>Formed by lesser sciatic notch + ischial spine + sacrospinous + sacrotuberous ligaments</li>
    <li>Contains: internal pudendal vessels · pudendal nerve · nerve to obturator internus · obturator internus tendon</li>
  </ul>
</div>

<span class="q-section-title">Connections</span>
<div class="q-card">
  <p><strong>Sacro-iliac Joint:</strong></p>
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Simple (amphiarthrosis — mostly transmits force between pelvis and vertebral column)</td></tr>
      <tr><td><strong>Shape</strong></td><td>Plane</td></tr>
      <tr><td><strong>Surfaces</strong></td><td>Articular surface of sacrum and ilium</td></tr>
      <tr><td><strong>Ligaments</strong></td><td>Anterior, posterior, and interosseous sacro-iliac ligaments</td></tr>
    </tbody>
  </table>
  <div class="q-clinical-box" style="margin-top:.5rem">
    <strong>Sacro-iliac overloading</strong> — pain radiates into the thigh; most commonly caused by sports and forward-bending positions.
  </div>
  <p><strong>Pubic Symphysis:</strong></p>
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Fibrocartilaginous joint</td></tr>
      <tr><td><strong>Surfaces</strong></td><td>Unites two pubic bones in the midline</td></tr>
      <tr><td><strong>Accessory</strong></td><td>Pubic bones covered by hyaline cartilage continuous with a <strong>fibrocartilaginous disc</strong></td></tr>
      <tr><td><strong>Ligaments</strong></td><td>Superior + inferior pubic ligaments</td></tr>
    </tbody>
  </table>
  <div class="q-clinical-box" style="margin-top:.5rem">
    In females, <strong>hormonal changes during pregnancy</strong> loosen the cartilage → prepares the pelvis for parturition. Hormone: <strong>relaxin</strong>.
  </div>
</div>

<span class="q-section-title">External Pelvic Diameters</span>
<div class="q-card">
  <ul>
    <li><strong>Interspinous distance:</strong> <span class="hl-y">26 cm</span> — ASIS to ASIS</li>
    <li><strong>Intercristal distance:</strong> <span class="hl-y">29 cm</span> — iliac crest to iliac crest</li>
    <li><strong>Intertrochanteric distance:</strong> <span class="hl-y">31 cm</span> — trochanter to trochanter</li>
  </ul>
  <p class="cl-blue"><em>From superior to inferior: Intercristal (29) → Interspinous (26) → Intertrochanteric (31)</em></p>
</div>

<span class="q-section-title">Pelvic Planes and Diameters</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Plane</th><th>Borders</th><th>Key Diameters</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Pelvic Inlet</strong></td>
        <td>Promontory · linea terminalis · superior symphysis</td>
        <td>Transverse 13 cm (longest) · Diagonal 11 cm · Oblique 12.5 cm</td>
      </tr>
      <tr>
        <td><strong>Pelvic Width (Amplitudo)</strong></td>
        <td>Middle of sacrum · middle of symphysis · acetabulum</td>
        <td>Oblique (longest) 13.5 cm: greater sciatic notch → obturator groove</td>
      </tr>
      <tr>
        <td><strong>Pelvic Narrow (Angustia)</strong></td>
        <td>Inferior symphysis · apex of sacrum · ischial spines</td>
        <td>Straight (longest) 11.5 cm: inferior symphysis → sacrococcygeal symphysis</td>
      </tr>
      <tr>
        <td><strong>Pelvic Outlet</strong></td>
        <td>Inferior symphysis · apex of coccyx · ischial tuberosities</td>
        <td>Straight 9.5–11.5 cm (fetus pushes coccyx dorsally → increases to 11.5 cm during labor)</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Additional Measurements:</strong></p>
  <ul>
    <li><strong>Diagonal conjugate:</strong> inferior symphysis → promontory = <strong>13 cm</strong></li>
    <li><span class="hl-y"><strong>True conjugate / Obstetric conjugate</strong> (smallest in the pelvis)</span>: posterior symphysis → promontory = <strong>10 cm</strong></li>
  </ul>
</div>

<span class="q-section-title">Sexual Differences in Pelvis Shape</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Male</th><th>Female</th></tr></thead>
    <tbody>
      <tr><td><strong>Shape</strong></td><td>Heart-shaped (due to sacral promontory)</td><td>Oval</td></tr>
      <tr><td><strong>Pelvic outlet</strong></td><td>—</td><td>Wider; obturator foramina everted</td></tr>
      <tr><td><strong>Pelvic cavity</strong></td><td>—</td><td>More spacious</td></tr>
      <tr><td><strong>False pelvis (lesser)</strong></td><td>—</td><td>Shallow in females; greater than in males</td></tr>
      <tr><td><strong>Pubic arch</strong></td><td>V-shape (subpubic angle)</td><td>Wider arch (thumb–finger mnemonic)</td></tr>
    </tbody>
  </table>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Pelvic girdle = 2 hip bones (ilium + ischium + pubis) + sacrum</li>
    <li>Greater sciatic foramen: suprapiriformis = superior gluteal; infrapiriformis = sciatic n. + pudendal n. + inferior gluteal</li>
    <li>External diameters (S→I): Intercristal 29 · Interspinous 26 · Intertrochanteric 31</li>
    <li>Obstetric conjugate = smallest pelvic diameter = 10 cm</li>
    <li>Female pelvis = oval, wider, more spacious; relaxin loosens joints in pregnancy</li>
  </ul>
</div>
`;

// ── Q14 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[14] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Hip Joint</h2>
  <p class="q-subtitle">Structure · Movements · Developmental Dysplasia of the Hip</p>
</div>

<span class="q-section-title">Structure</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Simple synovial</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Limited ball and socket</strong> (very deep socket)</td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Lunate surface of the acetabulum</td></tr>
      <tr><td><strong>Articular head</strong></td><td>Femoral head</td></tr>
      <tr><td><strong>Joint capsule</strong></td><td>Attached to the hip bone outside the acetabular lip. Extracapsular neck: <span class="hl-y">shorter at the back than at the front</span> → dislocations most likely <strong>posteriorly</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Accessory features:</strong></p>
  <ul>
    <li><strong>Acetabular lip (labrum)</strong> — fibrocartilaginous; deepens the socket; helps grip the femoral head</li>
    <li><strong>Fat pad</strong> — in the acetabular fossa</li>
  </ul>
</div>

${_ill1(1, "Anterior view: femoral head in acetabulum, acetabular lip (labrum) around rim, joint capsule, zona orbicularis as collar around narrowest part of neck")}

<span class="q-section-title">Movements — Limited in All 3 Axes</span>
<div class="q-card">
  <ul>
    <li><strong>Flexion</strong> 0–130° · <strong>Extension</strong> 0–30° — <span class="hl-y">limited by the tension of the iliofemoral ligament</span></li>
    <li><strong>Abduction</strong> 0–45° · <strong>Adduction</strong> 0–30°</li>
    <li><strong>External (lateral) rotation</strong> to 45° · <strong>Internal (medial) rotation</strong> to 35°</li>
  </ul>
</div>

<span class="q-section-title">Ligaments — 5 total (4 extracapsular, 1 intracapsular)</span>
<div class="q-card">
  <p><strong>Extracapsular Ligaments:</strong></p>
  <ol>
    <li><strong>Iliofemoral ligament</strong> — AIIS + rim of acetabulum → intertrochanteric line. <span class="hl-y">Strongest ligament in the human body: ~350 kg tensile strength.</span> Limits extension.</li>
    <li><strong>Ischiofemoral ligament</strong> — ischium (below acetabulum) → radiates into the zona orbicularis → attaches to lateral attachment of iliofemoral. <strong>Prevents medial rotation.</strong></li>
    <li><strong>Pubofemoral ligament</strong> (weakest of the three) — obturator crests → radiates into capsule (zona orbicularis). <strong>Restricts abduction.</strong></li>
    <li><strong>Zona orbicularis</strong> — lies like a <strong>collar around the narrowest part of the femoral neck</strong>; receives projections from the ischiofemoral and pubofemoral ligaments. <strong>Helps maintain contact between head and socket.</strong></li>
  </ol>
  <p><strong>Intracapsular Ligament:</strong></p>
  <ul>
    <li><strong>Ligament of the head of the femur</strong> — acetabular notch → fovea capitis. No real mechanical function; contains the <strong>artery to the head of the femur</strong> (from acetabular branch of the <strong>obturator artery</strong>). The head is also supplied by branches of <strong>medial and lateral circumflex femoral arteries</strong>.</li>
  </ul>
</div>

${_ill1(2, "Cross-section of hip: 3 extracapsular ligaments (iliofemoral, ischiofemoral, pubofemoral), zona orbicularis collar, intracapsular ligament with artery")}

<span class="q-section-title">Developmental Dysplasia of the Hip (DDH)</span>
<div class="q-card">
  <div class="q-clinical-box">
    <strong>DDH</strong> — congenital deformity; if untreated → orthopedic problems throughout life. Characterized by a <strong>misshapen acetabulum and/or head/neck of the femur</strong> → misalignment of bone-to-bone contact between articular head and fossa.<br><br>
    <strong>All newborns screened for DDH after birth</strong> with specialized examination including <strong>ultrasound</strong>.
  </div>
</div>

<span class="q-section-title">Hip Dislocation</span>
<div class="q-card">
  <div class="q-clinical-box">
    Caused by <strong>high-energy trauma</strong> (typically car accidents, knees impacting the dashboard = <strong>"dashboard injury"</strong>). <strong>90% are posterior dislocations</strong> — through a weak spot between the capsule-strengthening ligaments.
  </div>
</div>

<span class="q-section-title">Fracture of the Femoral Neck</span>
<div class="q-card">
  <div class="q-clinical-box">
    <strong>Intracapsular fracture</strong> — blood can "eat" the cartilage → <strong>avascular necrosis (AVN) of the femoral head</strong>. The blood supply to the femoral head runs proximally via the ligament of the head and the circumflex femoral arteries → disruption causes ischemia.
  </div>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Simple synovial, limited ball-and-socket (very deep socket)</li>
    <li>5 ligaments: 4 extra + 1 intracapsular</li>
    <li>Iliofemoral = strongest ligament (~350 kg); limits extension</li>
    <li>Zona orbicularis = collar around femoral neck</li>
    <li>90% of dislocations are posterior (dashboard injury)</li>
    <li>DDH → all newborns screened via ultrasound</li>
  </ul>
</div>
`;

// ── Q15 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[15] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Knee Joint</h2>
  <p class="q-subtitle">Structure · Biomechanics · Movements</p>
</div>

<span class="q-section-title">Overview — Most Complicated Synovial Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td><strong>Compound</strong> (3 bones) and <strong>Complex</strong> (2 menisci)</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Bicondylar joint (hinge)</strong></td></tr>
    </tbody>
  </table>
  <p>The knee = <strong>2 joints</strong>:</p>
  <ul>
    <li><strong>Femoro-Patellar Joint</strong> — plane; head = patellar surface of femur; fossa = articular surface of patella</li>
    <li><strong>Femoro-Tibial Joint</strong> — combination of hinge + pivot; head = condyles of femur; fossa = condyles of tibia</li>
  </ul>
</div>

<span class="q-section-title">Articular Capsule</span>
<div class="q-card">
  <ul>
    <li><strong>Fibrous capsule</strong> — originates below the <strong>epicondyles of the femur</strong>; attaches to circumference of articular surfaces of tibia + patella</li>
    <li><strong>Synovial membrane</strong> — lines the fibrous layer. <span class="hl-y"><strong>Does NOT cover the cruciate ligaments.</strong></span> Gives rise to the <strong>infrapatellar synovial fold</strong> (projects dorsally → branches into alar folds)</li>
  </ul>
</div>

<span class="q-section-title">Menisci</span>
<div class="q-card">
  <p><strong>Fibrocartilage wedges</strong> within the knee joint. Absorb shock; help keep femoral condyles on tibia during flexion.</p>
  <table class="q-data-table">
    <thead><tr><th>Meniscus</th><th>Shape</th><th>Attachment</th><th>Mobility</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Medial</strong></td>
        <td>C-shaped</td>
        <td><strong>Firmly attached medially to articular capsule, laterally to tibial collateral ligament</strong> → limits mobility</td>
        <td>Less mobile (more prone to injury)</td>
      </tr>
      <tr>
        <td><strong>Lateral</strong></td>
        <td>O-shaped</td>
        <td><strong>NOT attached to capsule</strong>; fixed by popliteus muscle</td>
        <td>More mobile</td>
      </tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">Synovial Bursae and Recesses (~20 bursae + 2 recesses)</span>
<div class="q-card">
  <p><strong>Communicating with the knee joint:</strong></p>
  <ul>
    <li>Suprapatellar recess (needle point) · Sub-popliteal recess · Suprapatellar bursa · Gastrocnemio-semimembranosus bursa</li>
  </ul>
  <p><strong>NOT communicating:</strong></p>
  <ul>
    <li>Anserine bursa · Subcutaneous prepatellar bursa · Subcutaneous infrapatellar bursa</li>
  </ul>
  <p><strong>Infrapatellar fat pad</strong> — between fibrous and synovial layers.</p>
</div>

<span class="q-section-title">Movements</span>
<div class="q-card">
  <ul>
    <li><strong>Flexion:</strong> 0–150° · <strong>Extension:</strong> 0°</li>
    <li><strong>Rotation</strong> (only in flexed knees): Internal 5–10° · External up to 40°</li>
  </ul>
</div>

<span class="q-section-title">Ligaments (12 total)</span>
<div class="q-card">
  <p><strong>Intra-Articular Ligaments:</strong></p>
  <ul>
    <li><strong>ACL</strong> (Anterior Cruciate Ligament) — lateral condyle of femur (medial surface) → anterior intercondylar area of tibia. <strong>Restricts anterior displacement of tibia on femur.</strong></li>
    <li><strong>PCL</strong> (Posterior Cruciate Ligament) — medial condyle of femur (lateral surface) → posterior intercondylar area. <strong>Restricts posterior displacement of tibia on femur.</strong></li>
    <li><strong>Transverse ligament of the knee</strong> — connects both menisci ventrally; not covered by synovial membrane</li>
    <li><strong>Anterior + posterior meniscofemoral ligaments</strong> — weak ligaments around the PCL</li>
  </ul>
  <p><strong>Collateral Ligaments:</strong></p>
  <ul>
    <li><strong>LCL</strong> (Lateral/Fibular) — lateral epicondyle of femur → head of fibula. <strong>Prevents lateral bending.</strong></li>
    <li><strong>MCL</strong> (Medial/Tibial) — medial epicondyle of femur → medial proximal tibia. <strong>Prevents medial bending (valgus force).</strong></li>
  </ul>
  <p><strong>Ventral Ligaments:</strong></p>
  <ul>
    <li><strong>Medial + lateral patellar retinaculum</strong> — attaches quadriceps femoris directly to tibial tuberosity; holds patella in the patellar surface</li>
    <li><strong>Patellar ligament</strong> — insertion of quadriceps femoris: patella → tibial tuberosity</li>
  </ul>
  <p><strong>Dorsal Ligaments:</strong></p>
  <ul>
    <li><strong>Oblique popliteal ligament</strong> — insertion of semimembranosus</li>
    <li><strong>Arcuate popliteal ligament</strong> — forms an arch above the tendon of popliteus</li>
  </ul>
</div>

${_ill1(1, "Anterior knee: femur, tibia, fibula, patella, ACL + PCL crossing, medial (C-shaped) + lateral (O-shaped) menisci, MCL, LCL, patellar ligament — all labeled")}

<span class="q-section-title">Biomechanics</span>
<div class="q-card">
  <p><strong>Knee Locking — Screw-Home Mechanism:</strong></p>
  <p>During extension, an <span class="hl-y"><strong>obligatory terminal rotation of ~5°</strong></span> occurs (the joint is "screwed home"):</p>
  <ul>
    <li><strong>Medial rotation of the femur on the tibia</strong> (weight-bearing leg)</li>
    <li><strong>Lateral rotation of the tibia</strong> (non-weight-bearing leg)</li>
  </ul>
  <p>This rotation <strong>locks the joint</strong> and is <strong>reinforced by the collateral ligaments</strong>.</p>
  <p><strong>Knee Unlocking:</strong></p>
  <ul>
    <li>Medial rotation restricted by: <strong>cruciate ligaments</strong> (twisting around each other)</li>
    <li>Lateral rotation restricted by: <strong>tibial collateral ligament</strong></li>
    <li>Initial unlocking: <strong>popliteus muscle</strong> contracts → 5° lateral rotation of femur on tibia</li>
  </ul>
  <p><strong>Motion types:</strong></p>
  <ul>
    <li><strong>Rotation:</strong> sliding movement — condyles of femur + menisci slide on tibia dorsally</li>
    <li><strong>Flexion and extension:</strong> rolling movement — condyles of femur roll over the menisci</li>
  </ul>
</div>

${_ill1(2, "Biomechanics: screw-home mechanism — lateral view showing medial rotation of femur at end of extension; popliteus unlocking the knee")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Compound (3 bones) + complex (2 menisci) + bicondylar hinge</li>
    <li>Medial meniscus = C-shaped, less mobile · Lateral meniscus = O-shaped, more mobile</li>
    <li>ACL → restricts anterior tibial displacement · PCL → restricts posterior</li>
    <li>Synovial membrane does NOT cover cruciate ligaments</li>
    <li>Screw-home mechanism: knee locks in full extension; popliteus unlocks it</li>
    <li>Flexion = rolling; rotation = sliding</li>
  </ul>
</div>
`;

// ── Q16 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[16] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Talocrural and Subtalar Joints</h2>
  <p class="q-subtitle">Structure and Movements</p>
</div>

<span class="q-section-title">Talocrural Joint — Ankle Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Compound joint (3 articulating bones)</td></tr>
      <tr><td><strong>Shape</strong></td><td><strong>Hinge joint</strong></td></tr>
      <tr><td><strong>Articular head</strong></td><td>Superior trochlea of the <strong>talus</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Distal ends of <strong>tibia + fibula</strong> → forming a <strong>mortise</strong></td></tr>
    </tbody>
  </table>
  <p>The <strong>mortise</strong> is built from:</p>
  <ul>
    <li>Inferior articular surface of the <strong>tibia</strong></li>
    <li>Medial malleolus of the <strong>tibia</strong></li>
    <li>Lateral malleolus of the <strong>fibula</strong></li>
  </ul>
  <p><strong>Movements:</strong></p>
  <ul>
    <li><strong>Plantar flexion:</strong> 0–50°</li>
    <li><strong>Dorsiflexion:</strong> 0–20°</li>
  </ul>
</div>

${_ill1(1, "Ankle mortise: tibia + fibula forming the fork around the superior trochlea of the talus; medial + lateral malleoli labeled; plantar flexion and dorsiflexion arrows")}

<span class="q-section-title">Ligaments — Ankle</span>
<div class="q-card">
  <p><strong>Deltoid (Medial Collateral) Ligament — 4 parts:</strong></p>
  <ul>
    <li><strong>Anterior tibiotalar</strong></li>
    <li><strong>Posterior tibiotalar</strong></li>
    <li><strong>Tibionavicular</strong> — tibia → navicular; covers anterior tibiotalar</li>
    <li><strong>Tibiocalcaneal</strong> — tibia → <strong>sustentaculum tali</strong></li>
  </ul>
  <p><strong>Lateral Collateral Ligament — 3 ligaments:</strong></p>
  <ul>
    <li><strong>Anterior talofibular ligament (ATFL)</strong> — lateral malleolus → neck of talus</li>
    <li><strong>Posterior talofibular ligament</strong> — lateral malleolus → posterior talar process</li>
    <li><strong>Calcaneofibular ligament</strong></li>
  </ul>
</div>

${_ill1(2, "Medial and lateral ankle ligaments: deltoid (4 parts) on medial side; ATFL, posterior talofibular, calcaneofibular on lateral side — all labeled")}

<span class="q-section-title">Talocalcaneal (Subtalar) and Talocalcaneonavicular Joints</span>
<div class="q-card">
  <p>Although separate, these joints <span class="hl-y"><strong>act in unison</strong></span>:</p>
  <ul>
    <li><strong>Subtalar</strong> = posterior part of the functional unit</li>
    <li><strong>Talocalcaneonavicular</strong> = anterior part</li>
  </ul>
</div>

<span class="q-section-title">Subtalar / Talocalcaneal Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Simple</td></tr>
      <tr><td><strong>Shape</strong></td><td>Cylindrical</td></tr>
      <tr><td><strong>Articular head</strong></td><td>Posterior articular talar surface of the <strong>calcaneus</strong></td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Posterior calcaneal articular facet of the <strong>talus</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Ligaments (4):</strong> Posterior · Medial · Lateral · Interosseous talocalcaneal</p>
</div>

<span class="q-section-title">Talocalcaneonavicular Joint</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Feature</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>Type</strong></td><td>Compound (3 articulating bones)</td></tr>
      <tr><td><strong>Articular head</strong></td><td>Head of talus + anterior and middle articular talar surface of calcaneus (Talus ×1, Calcaneus ×2)</td></tr>
      <tr><td><strong>Articular fossa</strong></td><td>Navicular + anterior + middle calcaneal, talus and <strong>navicular fibrocartilage</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Ligaments:</strong> Talonavicular · <strong>Plantar calcaneonavicular (spring ligament)</strong> · Bifurcate ligament (dorsal calcaneonavicular + calcaneocuboid)</p>
  <p><strong>Accessory feature:</strong> Navicular fibrocartilage — enlarges the fossa for the head of the talus</p>
</div>

<span class="q-section-title">Movements of the Combined Functional Unit</span>
<div class="q-card">
  <p><strong>Rotation:</strong></p>
  <ul>
    <li><strong>Supination</strong> — elevation of the <strong>medial edge</strong> of the foot</li>
    <li><strong>Pronation</strong> — elevation of the <strong>lateral edge</strong> of the foot</li>
  </ul>
</div>

${_ill1(3, "Foot from behind: subtalar (posterior) + talocalcaneonavicular (anterior) joint complex; arrows showing pronation and supination; spring ligament labeled")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Ankle mortise = tibia (inferior + medial malleolus) + fibula (lateral malleolus) around talus trochlea</li>
    <li>Deltoid = 4 parts (medial) · Lateral = 3 ligaments (ATFL most commonly torn in ankle sprains)</li>
    <li>Subtalar + talocalcaneonavicular → act in unison → supination + pronation</li>
    <li>Spring ligament (plantar calcaneonavicular) supports head of talus</li>
  </ul>
</div>
`;

// ── Q17 ──────────────────────────────────────────────────────────────────────
window.CH1_CONTENT[17] = `
<div class="q-hero" style="--cc:#52C490">
  <h2 class="q-title">Bones and Joints of the Foot</h2>
  <p class="q-subtitle">X-Ray Reading · Plantar Arches and Their Support</p>
</div>

<span class="q-section-title">Bones of the Foot — 26 Total</span>
<div class="q-card">
  <p><strong>Tarsals (7):</strong></p>
  <ul>
    <li>Talus · Calcaneus · Navicular · Cuboid · <strong>3 Cuneiforms</strong> (medial, intermediate, lateral)</li>
  </ul>
  <p><strong>Metatarsals (5):</strong> I–V (medial → lateral)</p>
  <p><strong>Phalanges (14):</strong></p>
  <ul>
    <li><strong>Hallux</strong> — <span class="hl-y">2 phalanges</span> (proximal + distal)</li>
    <li><strong>Other toes</strong> — 3 phalanges each (proximal, middle, distal)</li>
  </ul>
</div>

${_ill1(1, "X-ray and dorsal view of foot: 7 tarsals labeled, 5 metatarsals, 14 phalanges, Chopart's and Lisfranc's joint lines marked")}

<span class="q-section-title">Joints of the Foot</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Joint</th><th>Bones</th><th>Type</th><th>Ligaments</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Intertarsal Joints</strong></td>
        <td>Calcaneocuboid · Cuneonavicular · Cuneocuboid · Cuboideonavicular · Intercuneiform</td>
        <td>Amphiarthrosis</td>
        <td>Dorsal, plantar (palmar), and interosseous ligaments (same name)</td>
      </tr>
      <tr>
        <td><strong>Tarsometatarsal Joint</strong></td>
        <td>Tarsal → metatarsal</td>
        <td>—</td>
        <td>Tarsometatarsal + cuneometatarsal ligaments (dorsal + plantar)</td>
      </tr>
      <tr>
        <td><strong>Metatarsophalangeal (MTP)</strong></td>
        <td>—</td>
        <td>Ball and socket</td>
        <td>Deep transverse metatarsal ligament + collateral ligament (restrict movement)</td>
      </tr>
      <tr>
        <td><strong>Intermetatarsal</strong></td>
        <td>—</td>
        <td>—</td>
        <td>Dorsal, interosseous, and plantar ligaments</td>
      </tr>
      <tr>
        <td><strong>Interphalangeal (IP)</strong></td>
        <td>—</td>
        <td>Hinge</td>
        <td>Plantar ligaments (plate) + collateral ligaments</td>
      </tr>
    </tbody>
  </table>
</div>

<span class="q-section-title">The Two Joint Lines (Amputation Lines)</span>
<div class="q-card">
  <ul>
    <li><strong>Chopart's joint line</strong> (transverse tarsal joint — *incorrectly named*) — between <strong>talus + calcaneus</strong> and <strong>cuboid + navicular</strong> → amputation of forefoot and midfoot. Key: the <strong>bifurcate ligament</strong> must be divided.</li>
    <li><strong>Lisfranc's joint line</strong> — between <strong>tarsals and metatarsals</strong>. <span class="hl-y">NOT straight</span> because the <strong>2nd metatarsal invades proximally</strong>.</li>
  </ul>
</div>

${_ill1(2, "Foot diagram showing Chopart's line (between talocalcaneal and naviculocuboid) and Lisfranc's line (tarsometatarsal); 2nd metatarsal's proximal invasion labeled")}

<span class="q-section-title">Plantar Arches</span>
<div class="q-card">
  <p><strong>Transverse Arch</strong></p>
  <ul>
    <li><strong>Borders:</strong> metaphalangeal line</li>
    <li><strong>Reinforced by:</strong>
      <ul>
        <li>Ligament: <strong>Deep transverse metatarsal ligament</strong></li>
        <li>Muscles (the <strong>"stirrup of the foot"</strong> — cross the plantar surface): <strong>Tibialis anterior tendon</strong> + <strong>Fibularis longus tendon</strong></li>
      </ul>
    </li>
  </ul>
  <p><strong>Medial Longitudinal Arch</strong></p>
  <ul>
    <li><strong>Borders:</strong> calcaneus · talus · navicular · cuneiform · metatarsal 1–2</li>
    <li><strong>Reinforced by:</strong>
      <ul>
        <li>Ligament: <strong>Long plantar ligament</strong> (calcaneus → cuboid and navicular)</li>
        <li>Muscles: Abductor hallucis · Flexor hallucis · Medial part of central muscles</li>
      </ul>
    </li>
  </ul>
  <p><strong>Lateral Longitudinal Arch</strong></p>
  <ul>
    <li><strong>Borders:</strong> calcaneus · talus · cuboid · metatarsal 2–5</li>
    <li><strong>Reinforced by:</strong>
      <ul>
        <li>Ligament: <strong>Long plantar ligament</strong></li>
        <li>Muscles: Abductor digiti minimi · Flexor digiti minimi · Lateral part of central muscles</li>
      </ul>
    </li>
  </ul>
</div>

${_ill1(3, "Medial view of foot: medial longitudinal arch (calcaneus → talus → navicular → cuneiform → MT1); long plantar ligament; stirrup (tibialis anterior + fibularis longus) crossing the plantar surface")}

${_ill1(4, "Plantar view of foot: all 3 arches marked — transverse, medial longitudinal, lateral longitudinal; key ligaments and muscles supporting each arch")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>7 tarsals: Calcaneus · Talus · Navicular · Cuboid · 3 Cuneiforms</li>
    <li>5 metatarsals; 14 phalanges (hallux has only 2)</li>
    <li>3 arches: transverse (metatarsal line) · medial longitudinal (higher) · lateral longitudinal (lower)</li>
    <li>Stirrup of the foot = tibialis anterior + fibularis longus → cross the plantar surface → support transverse arch</li>
    <li>Chopart's line = midfoot amputation · Lisfranc's = tarsometatarsal (2nd MT invades proximally)</li>
    <li>Pes planus = flat medial arch · Pes cavus = high arch (often neurological)</li>
  </ul>
</div>
`;

// ── IIFE — patch ch1 topics ──────────────────────────────────────────────────
(function() {
  var ch1 = CHAPTERS.find(function(c){ return c.id === 'ch1'; });
  if (!ch1) return;
  ch1.topics.forEach(function(t) {
    if (window.CH1_CONTENT[t.q]) t.content = window.CH1_CONTENT[t.q];
  });
})();





