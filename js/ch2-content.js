// Ch2 Content — Q18–Q31 (Muscles & Fascias)
window.CH2_CONTENT = {};
function _ill2(n, desc){
  return `<div style="border:2px dashed rgba(224,114,78,.35);border-radius:12px;padding:1.1rem 1.4rem;text-align:center;margin:1rem 0 1.5rem;background:rgba(224,114,78,.06)"><span style="font-size:1.6rem">📷</span><p style="margin:.4rem 0 0;color:rgba(224,114,78,.75);font-size:.8rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase">[Illustration ${n} — ${desc}]</p></div>`;
}

// ── Q18 ──────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[18] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2 class="q-title">Origin and Development of Muscles</h2>
  <p class="q-subtitle">Molecular Mechanisms</p>
</div>

<span class="q-section-title">Origin of Muscle Types</span>
<div class="q-card">
  <p><strong>Smooth muscle</strong> is derived from:</p>
  <ul>
    <li><strong>Splanchnic (visceral) mesoderm</strong> — GIT smooth muscle</li>
    <li><strong>Ectodermal origin</strong> — sweat glands, mammary gland, pupillary muscles</li>
  </ul>
  <p><strong>Cardiac muscle</strong> is derived from:</p>
  <ul>
    <li><strong>Splanchnic (visceral) mesoderm</strong> surrounding the heart tube. Forms similarly to skeletal muscle but <em>without the fusion of myoblasts</em>.</li>
  </ul>
  <p><strong>Skeletal muscle</strong> is derived from:</p>
  <ul>
    <li><strong>Paraxial mesoderm — somites</strong></li>
  </ul>
</div>

<span class="q-section-title">Skeletal Muscles — Development from Somites</span>
<div class="q-card">
  <p>Somites undergo <strong>epithelization</strong>, forming a donut-shaped epithelial structure. Each somite differentiates into:</p>
  <ul>
    <li><strong>Ventral part — Sclerotome</strong> — bone-forming cells for vertebrae and ribs</li>
    <li><strong>Upper part — Dermatomes</strong> — on each side are two muscle-forming areas:
      <ul>
        <li><span class="hl-y"><strong>Ventrolateral (VLL) muscle-forming area</strong></span> — some cells migrate to the parietal mesoderm</li>
        <li><span class="hl-y"><strong>Dorsomedial (DML) muscle-forming area</strong></span></li>
      </ul>
    </li>
  </ul>
  <p>Cells from both areas undergo <strong>epithelial-to-mesenchyme transition</strong>, then migrate and proliferate ventral to the dermatome, forming the <strong>myotome</strong> (together with the dermatome → <strong>dermomyotome</strong>).</p>
  <div class="q-info-box" style="margin-top:.5rem">Each myotome receives <strong>innervation from a spinal nerve</strong> according to its original segment — corresponding with the dermatomes.</div>
</div>

${_ill2(1, "Somite differentiation: sclerotome (ventral, bone), dermatome (upper), VLL and DML muscle-forming areas — leading to myotome formation")}

<span class="q-section-title">Lateral Somitic Frontier</span>
<div class="q-card">
  <p>A distinct border between each somite and the parietal mesoderm, separating <strong>two mesodermal domains</strong>:</p>
  <ul>
    <li><span class="hl-y"><strong>Primaxial domain</strong></span> — around the neural tube; somites and their derivatives
      <ul><li>Includes: <strong>back and intercostal muscles, shoulder girdle</strong></li></ul>
    </li>
    <li><span class="hl-y"><strong>Abaxial domain</strong></span> — parietal mesoderm + migrated somatic cells
      <ul><li>Includes: <strong>infrahyoid, abdominal, and limb muscles</strong></li></ul>
    </li>
  </ul>
  <p>Also separates:</p>
  <ul>
    <li>Cartilaginous parts of ribs (parietal mesoderm) from bony part (somite)</li>
    <li>Dermis from dermatome (somite) from dermis from parietal mesoderm</li>
  </ul>
</div>

${_ill2(2, "Lateral somitic frontier: primaxial domain (around neural tube) vs abaxial domain (parietal mesoderm)")}

<span class="q-section-title">Muscle Patterning</span>
<div class="q-card">
  <p>Controlled by the <strong>connective tissue (CT)</strong> into which myoblasts migrate:</p>
  <ul>
    <li><strong>Head region</strong> — CT from <strong>neural crest</strong></li>
    <li><strong>Cervical and occipital</strong> — CT from <strong>somites</strong></li>
    <li><strong>Body wall and limbs</strong> — CT from <strong>parietal layer of the lateral plate</strong></li>
  </ul>
</div>

<span class="q-section-title">Molecular Mechanisms</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Signal</th><th>Source</th><th>Target / Effect</th></tr></thead>
    <tbody>
      <tr>
        <td><span class="hl-y"><strong>BMP4</strong> + <strong>FGFs</strong> + <strong>WNT</strong></span> (from adjacent ectoderm)</td>
        <td>Lateral plate mesoderm + ectoderm (dorsal neural tube)</td>
        <td><strong>VLL cells</strong> → express <strong>MyoD</strong> (muscle-specific gene)</td>
      </tr>
      <tr>
        <td><span class="hl-y"><strong>Low SHH</strong></span> (Sonic Hedgehog) + <strong>WNT</strong></td>
        <td>Notochord + floor plate of neural tube</td>
        <td><strong>DML cells</strong> → express <strong>MYF5 and MyoD</strong></td>
      </tr>
    </tbody>
  </table>
  <p><strong>MRFs (Myogenic Regulatory Factors)</strong> — both MYF5 and MyoD cause muscle development.</p>
  <p><span class="hl-y"><strong>SRF (Serum Response Factor)</strong></span> — responsible for <strong>smooth muscle cell differentiation</strong>.</p>
</div>

${_ill2(3, "Molecular signals: BMP4/FGF/WNT → VLL → MyoD; low SHH + WNT → DML → MYF5 + MyoD")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Smooth = splanchnic mesoderm · Cardiac = splanchnic mesoderm (no myoblast fusion) · Skeletal = paraxial mesoderm (somites)</li>
    <li>VLL → activated by BMP4 + FGF + WNT → MyoD</li>
    <li>DML → activated by SHH + WNT → MYF5 + MyoD</li>
    <li>SRF → smooth muscle differentiation</li>
    <li>Primaxial = back/intercostal/shoulder · Abaxial = infrahyoid/abdominal/limb muscles</li>
  </ul>
</div>
`;

// ── Q19 ──────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[19] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2 class="q-title">General Features of Striated Muscle</h2>
  <p class="q-subtitle">Auxiliary Structures · Motor &amp; Proprioceptive Innervation</p>
</div>

<span class="q-section-title">Types of Skeletal Muscles by Shape</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Shape</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><strong>Flat</strong></td><td>Parallel fibers, often with an aponeurosis</td><td>External oblique, sartorius</td></tr>
      <tr><td><strong>Pennate — Unipennate</strong></td><td>Fibers attach to one side of a central tendon (feather-like)</td><td>Extensor digitorum longus</td></tr>
      <tr><td><strong>Pennate — Bipennate</strong></td><td>Fibers attach to both sides of a central tendon</td><td>Rectus femoris</td></tr>
      <tr><td><strong>Pennate — Multipennate</strong></td><td>Multiple feather-like sets of fibers</td><td>Deltoid</td></tr>
      <tr><td><strong>Fusiform</strong></td><td>Narrow at both ends, large belly</td><td>Biceps brachii</td></tr>
      <tr><td><strong>Circular (sphincteral)</strong></td><td>Surrounds a body opening; constricts when contracting</td><td>Orbicularis oris</td></tr>
      <tr><td><strong>Convergent</strong></td><td>Broad origin converging into a single tendon</td><td>Pectoralis major</td></tr>
      <tr><td><strong>Quadrate</strong></td><td>Square shape</td><td>Rectus abdominis</td></tr>
      <tr><td><strong>Multiheaded / multibellied</strong></td><td>Multiple heads or bellies</td><td>Digastric</td></tr>
    </tbody>
  </table>
</div>

${_ill2(1, "7 muscle shapes: flat, unipennate, bipennate, multipennate, fusiform, circular, convergent, quadrate, multiheaded — each with small example")}

<span class="q-section-title">Muscle Protective Sheaths</span>
<div class="q-card">
  <ul>
    <li><strong>Epimysium</strong> — sheath of <strong>dense CT</strong> surrounding all fascicles of the muscle. Large vessels and nerves penetrate and course through it.</li>
    <li><strong>Perimysium</strong> — sheath of <strong>loose CT</strong> surrounding each <strong>fascicle</strong> (group of muscle fibers)</li>
    <li><strong>Endomysium</strong> — surrounds each individual muscle fiber inside the fascicle. Contains: reticular fibers, ground substance, fibroblasts, capillaries, and nerve endings</li>
  </ul>
  <p class="hl-y"><strong>Hierarchy:</strong> Fascicle → Muscle fiber → Myofibril → Sarcomere (actin and myosin filaments)</p>
</div>

${_ill2(2, "Cross-section of muscle: epimysium → perimysium → endomysium → fascicle → muscle fiber → myofibril → sarcomere")}

<span class="q-section-title">Sarcomere Structure</span>
<div class="q-card">
  <ul>
    <li><strong>Dark A bands</strong> — filled mainly with <strong>thick myosin filaments</strong></li>
    <li><strong>Light I bands</strong> — consist of <strong>thin actin filaments</strong> that don't overlap with myosin; anchored to the Z line by <strong>α-actinin</strong></li>
    <li><strong>Z line</strong> — the <strong>border between two sarcomeres</strong></li>
    <li><strong>M line</strong> — in the middle of the sarcomere; where myosin filaments are anchored</li>
    <li><strong>H band</strong> — zone of <strong>myosin only</strong> (no actin)</li>
  </ul>
</div>

${_ill2(3, "Labeled sarcomere: A band, I band, Z line, M line, H band; actin and myosin filaments shown")}

<span class="q-section-title">Auxiliary Structures</span>
<div class="q-card">
  <ul>
    <li><strong>Fasciae</strong> — CT sheaths enclosing individual muscles or groups; allow muscles to move relative to one another</li>
    <li><strong>Tendon (synovial) sheaths</strong> — increase gliding ability of tendons passing through tunnels or rough bone surfaces:
      <ul>
        <li><strong>Inner synovial layer</strong> (lining the tendon)</li>
        <li><strong>Outer parietal layer</strong> (lining the cavity)</li>
        <li><strong>Synovial fluid</strong> fills the cavity — layers connected by the <strong>mesotendon (synovial fold)</strong></li>
        <li>Synovial membrane covered by a <strong>fibrous capsule</strong></li>
      </ul>
    </li>
    <li><strong>Synovial bursa</strong> — helps muscles act more smoothly by giving sliding ability</li>
    <li><strong>Fat pads</strong> — placed between muscles; reduce friction</li>
    <li><strong>Sesamoid bones / cartilages</strong> — where high pressure exists on muscles; used as a <strong>lever for muscle action</strong></li>
  </ul>
</div>

${_ill2(4, "Tendon synovial sheath: inner synovial layer + outer parietal layer + mesotendon; synovial fluid between layers")}

<span class="q-section-title">Motor End Plate (Neuromuscular Junction)</span>
<div class="q-card">
  <p>Axons of <strong>α motor neurons</strong> branch within the muscle so each muscle fiber contacts one axonal branch.</p>
  <ul>
    <li><span class="hl-y">In <strong>extra-ocular muscles</strong>: ~<strong>3 fibers</strong> per axon</span></li>
    <li>In other muscles: ~<strong>50 fibers</strong> per axon</li>
  </ul>
  <p><strong>Motor unit</strong> — <em>the axon and all the muscle fibers it branches into</em>. This unit contracts simultaneously.</p>
  <p>The <strong>motor end plate (neuromuscular junction)</strong> = the flattened unmyelinated part of the axon that contacts the muscle fiber:</p>
  <ul>
    <li><strong>Presynaptic axolemma</strong> on one side</li>
    <li><strong>Infoldings of postsynaptic sarcolemma</strong> on the other</li>
  </ul>
  <p class="hl-y"><strong>Acetylcholine</strong> is the neurotransmitter — depolarizes the muscle fibers.</p>
</div>

${_ill2(5, "α motor neuron branching to multiple fibers; neuromuscular junction with presynaptic axolemma and postsynaptic sarcolemma infoldings")}

<span class="q-section-title">Muscle Spindle (Intrafusal Muscle Fibers)</span>
<div class="q-card">
  <p>5–10 striated muscle fibers running <strong>parallel to extrafusal fibers</strong>, surrounded by a <strong>fluid-filled CT capsule</strong>.</p>
  <ul>
    <li>Stretching/shortening of extrafusal fibers has a similar effect on intrafusal fibers</li>
    <li>The more delicate the movement, the more spindles the muscle has</li>
  </ul>
  <p><strong>Two Regions:</strong></p>
  <ul>
    <li><strong>Central (sensory) region</strong> — innervated by <strong>thick afferent sensory neurons</strong></li>
    <li><strong>Peripheral (contractile) region</strong> — innervated by <strong>thin γ-motoneurons</strong> (from ventral horn); contraction stretches the central part → stimulates sensory fibers → increases sensitivity</li>
  </ul>
  <p><strong>Types of intrafusal fibers:</strong></p>
  <ul>
    <li><strong>Nuclear chain fibers</strong> — sense the <strong>extent</strong> of stretching</li>
    <li><strong>Nuclear bag fibers</strong> — sense the <strong>speed</strong> of stretching</li>
  </ul>
  <p><strong>Function:</strong> Stretch receptor. As the muscle contracts, signal frequency decreases. Signals travel to CNS; some connect to α motor neurons in the spinal cord → <span class="hl-y"><strong>stretch reflexes</strong></span>.</p>
</div>

${_ill2(6, "Muscle spindle: intrafusal fibers (nuclear chain + nuclear bag), sensory (central) region, γ-motoneurons (peripheral), CT capsule")}

<span class="q-section-title">Golgi Tendon Organ</span>
<div class="q-card">
  <p>Lies at the <strong>junction between muscle and tendon</strong>, surrounded by a thin CT sheath innervated by a <strong>myelinated nerve fiber</strong>.</p>
  <ul>
    <li>Nerve fiber penetrates the CT sheath → loses myelin → wraps around collagen fibers</li>
    <li>When the tendon tenses → collagen fibers exert pressure on the nerve</li>
    <li>Sensory signal travels to the <strong>dorsal horn of the spinal cord</strong></li>
    <li><span class="hl-y"><strong>Inhibitory effect on muscle contraction</strong></span> → prevents excessive contraction</li>
  </ul>
</div>

${_ill2(7, "Golgi tendon organ at muscle-tendon junction: myelinated nerve fiber wrapping collagen fibers; inhibitory signal pathway")}

<span class="q-section-title">Motor and Proprioceptive Innervation</span>
<div class="q-card">
  <p><strong>Motor (usually multipolar):</strong> Motor cortex → ventral horn of spinal cord → <strong>α motor neuron</strong> → motor end plate</p>
  <p><strong>Proprioception:</strong></p>
  <ul>
    <li><strong>Muscle spindle</strong></li>
    <li><strong>Golgi tendon organ</strong></li>
    <li><strong>Tensor receptors</strong> in joint capsules and ligaments</li>
  </ul>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Epimysium (whole muscle) → Perimysium (fascicle) → Endomysium (single fiber)</li>
    <li>Sarcomere: A band (myosin), I band (actin), Z line (border), H band (myosin only)</li>
    <li>Motor unit = axon + all its fibers; ACh is the neurotransmitter</li>
    <li>Muscle spindle: senses stretch; nuclear chain = extent; nuclear bag = speed; γ-motoneurons increase sensitivity</li>
    <li>Golgi tendon organ: inhibits excessive contraction</li>
  </ul>
</div>
`;

// ─── Q20 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[20] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of the Head</h2>
  <p class="q-hero-sub">Facial Expression · Fascias · CN VII Innervation</p>
</div>

<span class="q-section-title">Fasciae of the Head</span>
<div class="q-card">
  <p>The fascia of the head is divided into <strong>four parts</strong>.</p>
  <ul>
    <li><strong style="color:#1565C0">Temporal fascia (fascia temporalis)</strong> — a strong fibrous plate divided by:
      <ul>
        <li>The <strong>superficial plate (lamina superficialis)</strong></li>
        <li>The <strong>deep plate (lamina profunda)</strong></li>
        <li>It covers both sides of the sheets of the <strong>temporal muscle</strong>.</li>
      </ul>
    </li>
    <li><strong style="color:#1565C0">Parotid fascia (fascia parotidea)</strong> — covers the <strong>parotid gland</strong> and partially fuses with the masseteric fascia, forming the <strong>parotidomasseteric fascia</strong>.</li>
    <li><strong style="color:#1565C0">Chewing fascia — Masseteric fascia (fascia masseterica)</strong> — covers the <strong>masseter muscle</strong> and is continuous with the <strong>superficial layer of the cervical fascia</strong>.</li>
    <li><strong style="color:#1565C0">Buccopharyngeal fascia (fascia buccopharyngea)</strong> — covers the <strong>buccinator muscle</strong> and continues into the fibrous tissue of the <strong>pharynx</strong>.</li>
    <li><strong style="color:#1565C0">Inter-pterygoid plate</strong> — a fibrous plate between the <strong>pterygoid muscles</strong>, attached to the <strong>base of the skull and the mandible</strong>.</li>
    <li><strong style="color:#1565C0">Buccal fat pad / Bichat's fat pad</strong> — located in the <strong>infratemporal fossa</strong>, divided into <strong>3 lobules</strong>: <strong>anterior, intermediate, and posterior</strong>.</li>
  </ul>
</div>

${_ill2(1, "Lateral view of head — temporal, parotid, masseteric, buccopharyngeal fasciae, inter-pterygoid plate, buccal fat pad of Bichat")}

<span class="q-section-title">Muscles of Facial Expression — General Information</span>
<div class="q-card">
  <p class="hl-y"><strong>All facial muscles are innervated by CN VII (facial nerve)</strong>. They develop from mesenchyme of the <strong>2nd pharyngeal arch</strong>. <strong>Facial muscles are placed directly under the skin</strong>.</p>
</div>

${_ill2(2, "Anterior view of the face — all facial expression muscles labelled")}

<span class="q-section-title">List of Facial Muscles</span>
<div class="q-card">
  <ol>
    <li><strong class="cl-green">Occipito-frontalis (Epicranialis)</strong> — <u>elevates eyebrows, wrinkles forehead</u> <span style="color:#FB923C">(surprise)</span>. Using just <strong>frontalis</strong>: furrows eyebrows medially. Using <strong>both bellies</strong>: lift eyebrows, move scalp.</li>
    <li><strong class="cl-green">Orbicularis Oculi</strong> — 3 parts: <mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px"><strong>Palpebral</strong></mark> — <u>closes eyes gently</u>; <mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px"><strong>Orbital</strong></mark> — <u>closes eyes tightly, squint</u>; <mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px"><strong>Lacrimal</strong></mark> — <u>draws tears out so capillaries can drain them</u>.</li>
    <li><strong class="cl-green">Auricularis muscles</strong> — anterior, middle, posterior. Not all people have this. <u>Allows movement of the auricle, retracts and elevates the ear</u>.</li>
    <li><strong class="cl-green">Levator Labii Superioris</strong> — <u>elevates upper lip, dilates nares</u> <span style="color:#FB923C">(disgust)</span>.</li>
    <li><strong class="cl-green">Zygomaticus Minor</strong> — <u>elevates upper lip</u>.</li>
    <li><strong class="cl-green">Zygomaticus Major</strong> — <u>draws angle of mouth up</u> <span style="color:#FB923C">(smaller smile)</span>.</li>
    <li><strong class="cl-green">Depressor Septi</strong> — <u>constricts nares</u>.</li>
    <li><strong class="cl-green">Risorius</strong> — <u>retracts angle of mouth more</u> <span style="color:#FB923C">(smile widely, big cheesy grin)</span>.</li>
    <li><strong class="cl-green">Depressor Anguli Oris</strong> — <u>depresses the angle of the mouth</u>.</li>
    <li><strong class="cl-green">Corrugator Supercilii</strong> — <u>draws eyebrows down and medially</u> <span style="color:#FB923C">(anger, frowning)</span>.</li>
    <li><strong class="cl-green">Procerus</strong> — <u>wrinkles skin over the forehead</u> <span style="color:#FB923C">(sadness)</span>.</li>
    <li><strong class="cl-green">Levator Labii Superioris Alaeque Nasi</strong> — <u>elevates ala of nose and upper lip</u>.</li>
    <li><strong class="cl-green">Levator Anguli Oris</strong> — <u>elevates angle of mouth medially</u>.</li>
    <li><strong class="cl-green">Buccinator</strong> — <u>holds cheeks tight when blowing hard</u>. Named after the word for <em>trumpet</em>. If you use only one side, you can pull the mouth to one side (half-smile).</li>
    <li><strong class="cl-green">Orbicularis Oris</strong> — <u>closes lips and purses them</u> (kiss, straw).</li>
    <li><strong class="cl-green">Depressor Labii Inferioris</strong> — <u>pulls down the lower lip</u>.</li>
    <li><strong class="cl-green">Mentalis</strong> — <u>elevates and protrudes lower lip, wrinkles chin</u>.</li>
    <li><strong class="cl-green">Nasalis</strong> — <u>pulls ala of nose toward the septum, wrinkles the nose</u>. <strong>Dilator naris</strong>: opens nostrils. <strong>Compressor naris</strong>: constricts nostrils.</li>
    <li><strong class="cl-green">Platysma</strong> — <u>lowers the mandible, helps frowning, tenses skin of lower face and neck</u>.</li>
  </ol>
</div>

${_ill2(3, "Nasalis, dilator naris, compressor naris; platysma extending into the neck")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>4 fasciae: Temporal · Parotid · Masseteric · Buccopharyngeal + Inter-pterygoid plate + Buccal fat pad (3 lobules)</li>
    <li>All 19 facial expression muscles = CN VII; from 2nd pharyngeal arch; directly under skin</li>
    <li>Orbicularis oculi: palpebral / orbital / lacrimal parts</li>
  </ul>
</div>
`;

// ─── Q21 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[21] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of the Neck</h2>
  <p class="q-hero-sub">Transverse Section · Fascial Layers · Carotid Sheath</p>
</div>

<span class="q-section-title">Fascia of the Neck — Overview</span>
<div class="q-card">
  <p>The cervical fascia has <strong>3 layers</strong> that embed and cover the cervical muscles. The fascia forms <strong>spaces</strong> containing organs, nerves, and vessels.</p>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Transverse section of neck — all fascial layers, SCM, trapezius, platysma, larynx/trachea, esophagus, thyroid, vertebral column, scalene muscles, common carotid artery, internal jugular vein, vagus nerve, sympathetic trunk")}

<span class="q-section-title" style="color:#1565C0">Superficial Cervical Fascia</span>
<div class="q-card">
  <ul>
    <li><strong>Subcutaneous CT</strong>.</li>
    <li><u>Contains</u>: <strong>cutaneous nerves, arteries/veins/lymphatics, superficial lymph nodes</strong>.</li>
    <li><strong>Encloses the platysma</strong>.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Superficial (Investing) Layer of Deep Fascia</span>
<div class="q-card">
  <ul>
    <li>Surrounds the <strong>deeper parts of the neck</strong>.</li>
    <li><u>Encloses</u> <strong>SCM and Trapezius muscles</strong>.</li>
    <li>Also encloses the <strong>submandibular gland</strong> and forms the <strong>fibrous sheath of the parotid gland</strong>.</li>
    <li>Has the <strong>suprasternal space</strong> — contains the <strong>anterior jugular vein</strong> and the <strong>arch of the jugular vein</strong>.</li>
    <li><strong>Attachments:</strong>
      <ul>
        <li><strong>Superior</strong>: mandible, mastoid process, external occipital protuberance, superior nuchal line.</li>
        <li><strong>Inferior</strong>: acromion process, scapular spine, clavicle, manubrium.</li>
      </ul>
    </li>
  </ul>
</div>

${_ill2(2, "Side view of neck — superior and inferior attachments of superficial investing layer")}

<span class="q-section-title" class="cl-green">Prevertebral Fascia of Deep Fascia</span>
<div class="q-card">
  <ul>
    <li><strong>Cylindrical</strong>, encloses the <strong>vertebral column</strong> and the muscles within it.</li>
    <li>Covers the <strong>scalene muscles</strong> and <strong>deep muscles of the back</strong>.</li>
    <li>Extends <strong>laterally into the axillary sheath</strong> — which contains the <strong>axillary artery/vein and brachial plexus</strong>.</li>
    <li>Attaches to the <strong>external occipital protuberance</strong> and the <strong>basilar part of the occipital bone</strong>.</li>
    <li>In contact with the <strong>endothoracic fascia</strong> and the <strong>anterior longitudinal ligament</strong> of the vertebrae.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#FF8080">Carotid Sheath</span>
<div class="q-card">
  <p><strong>Contents:</strong></p>
  <ul>
    <li><strong style="color:#FF8080">Common, Internal, and External carotid arteries</strong></li>
    <li><strong style="color:#FF8080">Internal jugular vein</strong></li>
    <li><strong style="color:#FF8080">CN X (vagus nerve)</strong></li>
    <li><strong style="color:#FF8080">Nerve to the carotid sinus</strong></li>
    <li><strong style="color:#FF8080">Deep cervical lymph nodes</strong></li>
  </ul>
  <p class="hl-y"><strong>DOES NOT contain the Sympathetic (SNS) Trunk</strong> — the SNS trunk is <strong>posterior to the carotid sheath</strong> and <strong>anterior to the prevertebral fascia</strong>.</p>
  <p>Blends with the <strong>prevertebral, pre-tracheal, and investing layers</strong>, and attaches to the <strong>base of the skull</strong>.</p>
</div>

${_ill2(3, "Carotid sheath contents (CCA, ICA, ECA, IJV, CN X, deep cervical lymph nodes) and sympathetic trunk posterior to it")}

<span class="q-section-title" style="color:#FB923C">Pre-tracheal Fascia of Deep Fascia</span>
<div class="q-card">
  <ul>
    <li><u>Invests</u> the <strong>larynx, trachea, and esophagus</strong>.</li>
    <li><strong>Encloses the thyroid gland</strong> and contributes to the <strong>carotid sheath formation</strong>.</li>
    <li>Has a thin muscle layer of the <strong>infrahyoid muscles</strong>.</li>
    <li>Connects with the <strong>buccopharyngeal fascia superiorly</strong>.</li>
    <li><strong>Attachments:</strong> Superior: thyroid and cricoid cartilage. Inferior: pericardium.</li>
  </ul>
</div>

<span class="q-section-title">Buccopharyngeal Fascia</span>
<div class="q-card">
  <ul>
    <li>Covers the <strong>buccinator muscle</strong> and the <strong>pharynx</strong>.</li>
    <li>Attached to the <strong>pharyngeal tubercle</strong> and the <strong>pterygomandibular raphe</strong>.</li>
  </ul>
</div>

<div class="q-info-box">
  <strong>Quick Recap — Cervical Fascia</strong>
  <ul>
    <li><strong style="color:#1565C0">Superficial cervical fascia</strong>: subcutaneous, platysma, cutaneous nerves/vessels</li>
    <li><strong style="color:#1565C0">Superficial investing layer</strong>: SCM + trapezius; mandible → manubrium</li>
    <li><strong class="cl-green">Prevertebral fascia</strong>: vertebral column + scalenes; extends as axillary sheath</li>
    <li><strong style="color:#FF8080">Carotid sheath</strong>: CCA/ICA/ECA, IJV, CN X, deep cervical nodes — NO sympathetic trunk</li>
    <li><strong style="color:#FB923C">Pre-tracheal fascia</strong>: larynx + trachea + esophagus + thyroid; thyroid cartilage → pericardium</li>
    <li><strong>Buccopharyngeal fascia</strong>: buccinator + pharynx</li>
  </ul>
</div>
`;

// ─── Q22 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[22] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of Thorax, Diaphragm</h2>
  <p class="q-hero-sub">Structure · Passages · Function · Innervation · Diaphragmatic Hernias</p>
</div>

<span class="q-section-title">Diaphragm — Overview</span>
<div class="q-card">
  <p>The <strong>diaphragm</strong> is a flat muscle forming a <strong>horizontal septum</strong> between the <strong>thoracic and abdominal cavity</strong>. It is comprised of <strong>three muscular parts</strong>: <strong>lumbar part, costal part, and sternal part</strong>. These parts are connected in a <strong>central fibrous tendon</strong>.</p>
</div>

<span class="q-section-title" class="cl-green">Parts of the Diaphragm</span>
<div class="q-card">
  <p><strong>Sternal part</strong> — from the <strong>inner surface of the xiphoid process</strong> to the <strong>central tendon</strong>.</p>
  <p><strong>Costal part</strong> — from the <strong>inner cartilage of ribs 7–12</strong>.</p>
  <p><strong>Lumbar part</strong> — has a <strong>medial crus</strong> and a <strong>lateral crus</strong>:</p>
  <ul>
    <li><strong>Right medial crus</strong> — from the bodies of <strong>L1–L4 lumbar vertebrae</strong>.</li>
    <li><strong>Left medial crus</strong> — from the bodies of <strong>L1–L3 lumbar vertebrae</strong>.</li>
    <li><strong>Lateral left and right crus</strong> — from <strong>L1 to the 12th rib</strong>.</li>
  </ul>
  <p>Muscle fibers combine to form a <strong>central tendon</strong> which fuses with the <strong>inferior surface of the fibrous pericardium</strong>. On either side the diaphragm ascends to form <strong>left and right domes</strong>. At rest, the <strong>right dome lies slightly higher than the left</strong> — due to the <strong>liver</strong>.</p>
</div>

${_ill2(1, "View of diaphragm from below — sternal, costal, and lumbar parts, central tendon, right/left medial crura and lateral crura, right/left domes")}

<span class="q-section-title">Function</span>
<div class="q-card">
  <p>The diaphragm is the <strong>primary muscle of respiration</strong>.</p>
  <ul>
    <li><strong>Inspiration</strong>: <u>contracts and flattens</u>, <strong>increasing the vertical diameter</strong> of the thoracic cavity → lung expansion → air is <strong>drawn in</strong>.</li>
    <li><strong>Expiration</strong>: <strong>passively relaxes</strong>, returns to dome shape → <strong>reduces the volume</strong> of the thoracic cavity.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Pathways Through the Diaphragm</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Hiatus</th><th>Level</th><th>Contents</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Caval hiatus</strong></td>
        <td class="hl-y"><strong>T8</strong></td>
        <td><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Inferior vena cava</strong>, terminal branches of the <strong>right phrenic nerve</strong></mark></td>
      </tr>
      <tr>
        <td><strong>Oesophageal hiatus</strong></td>
        <td class="hl-y"><strong>T10</strong></td>
        <td><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Esophagus</strong>, <strong>right and left vagus nerves</strong> (right goes behind, left goes in front of esophagus)</mark></td>
      </tr>
      <tr>
        <td><strong>Aortic hiatus</strong></td>
        <td class="hl-y"><strong>T12</strong></td>
        <td><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Aorta</strong>, <strong>thoracic duct</strong>, <strong>azygos vein</strong>, <strong>hemi-azygos vein</strong></mark></td>
      </tr>
      <tr>
        <td><strong>Costal part</strong></td>
        <td>—</td>
        <td><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Left phrenic nerve</strong></mark></td>
      </tr>
      <tr>
        <td><strong>Sternocostal triangle</strong></td>
        <td>—</td>
        <td><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Internal thoracic artery and vein</strong></mark></td>
      </tr>
    </tbody>
  </table>
</div>

${_ill2(2, "3 main hiatuses: caval at T8, esophageal at T10, aortic at T12 — labelled contents passing through each")}

<span class="q-section-title" style="color:#FB923C">Innervation and Vasculature</span>
<div class="q-card">
  <p>Each half of the diaphragm receives <strong>motor innervation from the phrenic nerve</strong>. Each phrenic nerve is formed in the <strong>neck within the cervical plexus</strong> and contains fibers from <span class="hl-y"><strong>spinal roots C3–C5</strong></span>.</p>
  <p><strong>Arterial supply:</strong></p>
  <ul>
    <li><strong>Inferior phrenic arteries</strong> — main supply, directly from the <strong>abdominal aorta</strong></li>
    <li><strong>Superior phrenic arteries</strong> — parietal branches of the thoracic aorta</li>
    <li><strong>Pericardicophrenic arteries</strong> — from the internal thoracic artery</li>
    <li><strong>Musculophrenic arteries</strong> — from the internal thoracic artery</li>
  </ul>
  <p>The <strong>draining veins</strong> follow the aforementioned arteries.</p>
</div>

${_ill2(3, "Phrenic nerve path from cervical plexus (C3–C5) descending to diaphragm; inferior phrenic arteries")}

<span class="q-section-title" style="color:#FF8080">Diaphragmatic Hernias</span>
<div class="q-card">
  <p>A <strong>diaphragmatic hernia</strong> is a defect in the diaphragm allowing abdominal contents to <strong>move into the chest cavity</strong>. Treatment is usually <strong>surgical</strong>. May be <strong>congenital or acquired</strong>.</p>
  <p><strong>True diaphragmatic hernias</strong> usually occur in the <strong>central tendon</strong> or <strong>costal part</strong>. Weak spots:</p>
  <ul>
    <li><strong>Esophageal hiatus</strong></li>
    <li><strong>Lumbocostal triangle</strong></li>
    <li><strong>Sternocostal triangle</strong></li>
  </ul>
  <p>Most common congenital hernia = enlargement of the <strong>lumbocostal triangle</strong>. Another type: <strong>para-esophageal</strong> — <strong>always occurs on the right side of the esophagus</strong>.</p>
</div>

<div class="q-clinical-box">
  <p><strong style="color:#FF8080">Types of Diaphragmatic Hernias:</strong></p>
  <ul>
    <li><strong>Congenital diaphragmatic hernia</strong> — birth defect, impairs lung formation:
      <ul>
        <li><strong>Morgagni's hernia</strong></li>
        <li class="hl-y"><strong>Bochdalek hernia</strong> — <strong>most common type</strong></li>
      </ul>
    </li>
    <li><strong>Hiatal hernia</strong> — mostly in <strong>older and diabetic people</strong>; caused by lifting, bending, or hard coughing. May result in <strong>GERD</strong> or <strong>LPR</strong>, with acid taste or <strong>heartburn</strong>.</li>
    <li><strong>Iatrogenic diaphragmatic hernia</strong>.</li>
    <li><strong>Traumatic diaphragmatic hernia</strong> — a tear of the diaphragm.</li>
  </ul>
</div>

${_ill2(4, "Weak spots (lumbocostal triangle, sternocostal triangle, esophageal hiatus) — Morgagni's vs Bochdalek hernia locations")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>3 parts: sternal (xiphoid), costal (ribs 7–12), lumbar (medial + lateral crus, L1–L4/L3)</li>
    <li>T8 = caval (IVC + right phrenic); T10 = esophageal (esophagus + vagus); T12 = aortic (aorta + thoracic duct + azygos)</li>
    <li>Phrenic nerve = C3–C5; main supply = inferior phrenic arteries from abdominal aorta</li>
    <li>Most common congenital hernia = Bochdalek; Hiatal → GERD</li>
  </ul>
</div>
`;

// ─── Q23 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[23] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles of Abdominal Wall, Fascias, Function</h2>
  <p class="q-hero-sub">Layers · Anterolateral Muscles · Posterior Muscles · Fascial Continuity</p>
</div>

<span class="q-section-title" style="color:#1565C0">Layers of the Abdominal Wall (superficial → deep)</span>
<div class="q-card">
  <ol>
    <li><strong style="color:#1565C0">Skin</strong></li>
    <li><strong style="color:#1565C0">Subcutaneous tissue</strong>
      <ul>
        <li><strong style="color:#FB923C">Camper's fascia</strong> — In men: continues over the penis and blends with Scarpa's fascia → <strong>superficial fascia of the penis</strong> → extends into the <strong>scrotum</strong> where it contains <strong>smooth muscle fibers</strong> = <strong>dartos fascia</strong>. Scarpa's fascia continues into the perineum = <strong>Colles' fascia</strong>. In women: continues into the <strong>labia majora and anterior perineum</strong>.</li>
        <li><span class="hl-y"><strong style="color:#FB923C">Scarpa's fascia</strong> — strongly attached to the <strong>linea alba</strong> and <strong>pubic symphysis</strong>, and fuses with the <strong>fascia lata</strong> right below the <strong>inguinal ligament</strong></span>.</li>
      </ul>
    </li>
    <li><strong style="color:#1565C0">Muscles</strong></li>
    <li><strong style="color:#1565C0">Transversalis fascia</strong></li>
    <li><strong style="color:#1565C0">Extraperitoneal fat</strong></li>
    <li><strong style="color:#1565C0">Peritoneum</strong></li>
  </ol>
</div>

${_ill2(1, "Layered cross-section of anterior abdominal wall: skin → Camper's → Scarpa's → external oblique → internal oblique → transversus abdominis → transversalis fascia → extraperitoneal fat → peritoneum")}

<span class="q-section-title" class="cl-green">Anterolateral Muscles of Abdominal Wall</span>
<div class="q-card">
  <ul>
    <li><strong>Transversus abdominis muscle</strong></li>
    <li><strong>Internal abdominal oblique muscle</strong></li>
    <li><strong>Rectus abdominis muscle</strong> — innervated by the <strong>subcostal nerve</strong></li>
    <li><strong>External abdominal oblique muscle</strong></li>
    <li><strong>Pyramidalis muscle</strong> — innervated by the <strong>subcostal nerve</strong></li>
  </ul>
</div>

${_ill2(2, "Anterior view: External oblique, Internal oblique, Transversus abdominis, Rectus abdominis, and Pyramidalis")}

<span class="q-section-title" style="color:#C084FC">Posterior Muscles of Abdominal Wall</span>
<div class="q-card">
  <ul>
    <li><strong>Psoas major muscle</strong></li>
    <li><strong>Iliacus muscle</strong></li>
    <li><strong>Quadratus lumborum muscle</strong></li>
    <li><strong>Psoas minor muscle</strong></li>
  </ul>
</div>

${_ill2(3, "Posterior view: Psoas major, Iliacus, Quadratus lumborum, and Psoas minor")}

<span class="q-section-title">Muscle Table</span>
<table class="q-data-table">
  <thead>
    <tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Innervation</th><th>Function</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>External abdominal oblique</strong></td>
      <td>External surface of ribs 5–12</td>
      <td>Linea alba, pubic tubercle, anterior half of iliac crest</td>
      <td><mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px">T7–T11, subcostal (T12), iliohypogastric (L1)</mark></td>
      <td><u>Bilateral: trunk flexion, compresses viscera, expiration. Unilateral: lateral flexion (ipsilateral), rotation (contralateral)</u></td>
    </tr>
    <tr>
      <td><strong>Internal abdominal oblique</strong></td>
      <td>Thoracolumbar fascia, anterior iliac crest, iliopectineal arch</td>
      <td>Inferior borders ribs 10–12, linea alba, cremaster junction, pectineal line (via conjoint tendon)</td>
      <td><mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px">T7–T11, T12, L1 (iliohypogastric + ilioinguinal)</mark></td>
      <td><u>Bilateral: trunk flexion, compresses viscera, expiration. Unilateral: lateral flexion (ipsilateral), rotation (ipsilateral)</u></td>
    </tr>
    <tr>
      <td><strong>Transversus abdominis</strong></td>
      <td>Costal cartilages ribs 7–12, thoracolumbar fascia, anterior iliac crest, iliopectineal arch</td>
      <td>Linea alba, aponeurosis of internal oblique; pubic crest, pectineal line</td>
      <td><mark style="background:rgba(255,182,193,.4);padding:1px 3px;border-radius:3px">T7–T11, T12, L1 (iliohypogastric + ilioinguinal)</mark></td>
      <td><u>Bilateral: compresses viscera, expiration. Unilateral: rotation (ipsilateral)</u></td>
    </tr>
  </tbody>
</table>

${_ill2(4, "Fascial continuity: Camper's → Scarpa's → Colles' (perineum) → dartos (scrotum) → superficial fascia of penis / labia majora in females")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>6 layers: skin → Camper's → Scarpa's → muscles → transversalis fascia → extraperitoneal fat → peritoneum</li>
    <li>Scarpa's fascia: attached to linea alba + pubic symphysis; fuses with fascia lata below inguinal ligament</li>
    <li>Colles' fascia = Scarpa's in perineum; dartos = smooth muscle in scrotum</li>
    <li>3 flat anterolateral muscles (transversus/internal/external oblique) + rectus abdominis + pyramidalis</li>
    <li>Posterior: psoas major, iliacus, quadratus lumborum, psoas minor</li>
  </ul>
</div>
`;


// ─── Q24 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[24] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Inguinal Canal (draw scheme), Inguinal Hernias</h2>
  <p class="q-hero-sub">Deep Ring · Superficial Ring · Walls · Contents · Hesselbach's Triangle · Hernias</p>
</div>

<span class="q-section-title" style="color:#1565C0">Inguinal Canal — Overview</span>
<div class="q-card">
  <p>The <strong>inguinal canal</strong> is a <strong>passageway between the muscle layers of the anterior abdominal wall</strong> in the inguinal region. The canal is an <strong>oblique tunnel</strong>, with <strong>deep (internal)</strong> and <strong>superficial (external)</strong> openings/rings.</p>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Scheme of inguinal canal — deep inguinal ring, superficial inguinal ring, anterior wall (external oblique aponeurosis), posterior wall (conjoint tendon + transversalis fascia), floor (inguinal ligament), roof (transversalis fascia + internal oblique + transversus abdominis); spermatic cord passing through")}

<span class="q-section-title" style="color:#1565C0">Rings of the Canal</span>
<div class="q-card">
  <p><strong>Deep Inguinal Ring</strong></p>
  <ul>
    <li><strong>Internal opening</strong>, formed by the <strong>invagination of the transversalis fascia</strong>, which continues as the <strong>internal spermatic fascia</strong> (innermost cover of the spermatic cord).</li>
  </ul>
  <p><strong>Superficial Inguinal Ring</strong></p>
  <ul>
    <li><strong>Opening in the aponeurosis of the external abdominal oblique</strong>.</li>
    <li>Visible only after <strong>dissecting off the external spermatic fascia</strong>.</li>
    <li>It is bounded by: <strong>medial crus</strong>, <strong>lateral crus</strong>, and <strong>intercrural fibers</strong>.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Borders of the Inguinal Canal</span>
<div class="q-card">
  <ul>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Anterior wall</strong>: <strong>External oblique muscle aponeurosis</strong>.</mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Posterior wall</strong>: <strong>Conjoint tendon</strong> (inguinal aponeurotic falx — origin from abdominal internal oblique and transversus abdominis) and <strong>transversalis fascia</strong>.</mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Floor</strong>: <strong>Inguinal ligament</strong>.</mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Roof</strong>: <strong>Transversalis fascia, internal oblique, and transversus abdominis</strong>.</mark></li>
  </ul>
</div>

<span class="q-section-title" class="cl-green">Contents</span>
<div class="q-card">
  <table class="q-data-table">
    <thead><tr><th>Males</th><th>Females</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Spermatic cord</strong> (with <strong>genital branch of genitofemoral nerve</strong>)</td>
        <td><strong>Round ligament</strong></td>
      </tr>
      <tr>
        <td><strong>Ilioinguinal nerve</strong></td>
        <td><strong>Genital branch of genitofemoral nerve</strong></td>
      </tr>
      <tr>
        <td></td>
        <td><strong>Ilioinguinal nerve</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<span class="q-section-title" style="color:#FB923C">Inguinal Triangle (Hesselbach's Triangle)</span>
<div class="q-card">
  <p><strong>Borders:</strong></p>
  <ul>
    <li><strong>Medial</strong>: lateral margin of the <strong>rectus abdominis</strong>.</li>
    <li><strong>Lateral</strong>: <strong>inferior epigastric artery and vein</strong>.</li>
    <li><strong>Inferior</strong>: <strong>inguinal ligament</strong>.</li>
  </ul>
</div>

${_ill2(2, "Hesselbach's (inguinal) triangle — three borders: medial (rectus abdominis), lateral (inferior epigastric vessels), inferior (inguinal ligament)")}

<span class="q-section-title" style="color:#FF8080">Hernias</span>
<div class="q-card">
  <p>A <strong>hernia</strong> is an <strong>abnormal protrusion of intra-abdominal contents</strong>.</p>
  <ul>
    <li><span class="hl-y"><strong>Indirect hernia</strong></span> — may be <strong>congenital or acquired</strong>. <span class="hl-y"><strong>Lateral to the inferior epigastric vessels</strong></span>. <u>Passes through the deep inguinal ring from behind, crosses the entire inguinal canal, and exits from the superficial inguinal ring.</u></li>
    <li><span class="hl-y"><strong>Direct hernia</strong></span> — <strong>acquired</strong>. <span class="hl-y"><strong>Medial to the inferior epigastric vessels</strong></span>. <u>Enters Hesselbach's triangle / supravesical fossa and exits from the superficial inguinal ring.</u></li>
    <li><span class="hl-y"><strong>Femoral hernia</strong></span> — through the <strong>femoral ring</strong>. <span class="hl-y"><strong>Emerges inferior to the inguinal ligament</strong></span>. <u>May not involve any tearing of tissues.</u> <strong>More common in females</strong> because of the proportionally <strong>wider bone structure of the female pelvis</strong>.</li>
  </ul>
</div>

${_ill2(3, "Side-by-side comparison: Indirect hernia (lateral, through deep ring) vs Direct hernia (medial, through Hesselbach's triangle) vs Femoral hernia (through femoral ring, below inguinal ligament)")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Deep ring = invagination of transversalis fascia → internal spermatic fascia</li>
    <li>Superficial ring = opening in external oblique aponeurosis (medial crus + lateral crus + intercrural fibers)</li>
    <li>Walls: Anterior = EO aponeurosis; Posterior = conjoint tendon + transversalis; Floor = inguinal ligament; Roof = transversalis + IO + TA</li>
    <li>Males: spermatic cord + genital branch GFN + ilioinguinal nerve</li>
    <li>Females: round ligament + genital branch GFN + ilioinguinal nerve</li>
    <li>Indirect = lateral to inferior epigastric vessels; Direct = medial; Femoral = below inguinal ligament, more common in females</li>
  </ul>
</div>
`;

// ─── Q25 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[25] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Pelvic Floor Muscles, Perineal Muscles, Ischioanal Fossa, Pelvic Fascias</h2>
  <p class="q-hero-sub">Pelvic Diaphragm · Urogenital Diaphragm · Perineum · Frontal Section</p>
</div>

<span class="q-section-title">Overview</span>
<div class="q-card">
  <p>The <strong>pelvic floor</strong> is the closure of the trunk <strong>inferiorly and posteriorly</strong>. It is formed by the <strong>pelvic diaphragm</strong> and the <strong>urogenital diaphragm</strong>. The muscles of the pelvic floor are attached to the wall of the <strong>lesser pelvis</strong> and contain passage for the <strong>rectum, vagina, and urethra</strong>. They take part in the <strong>deep stabilizing system</strong>.</p>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Frontal (coronal) section of pelvis — pelvic diaphragm (levator ani + coccygeus), urogenital diaphragm beneath it, ischiorectal (ischioanal) fossa between them, rectum passing through, superior and inferior pelvic and urogenital diaphragmatic fascias")}

<span class="q-section-title" class="cl-green">Pelvic Diaphragm</span>
<div class="q-card">
  <p>Consists of <strong>Levator ani</strong> and <strong>Coccygeus (ischiococcygeus)</strong> muscles.</p>
</div>

<span class="q-section-title" class="cl-green">Levator Ani — 3 Parts</span>
<div class="q-card">
  <p><strong>Iliococcygeus</strong></p>
  <ul>
    <li><u>Origin</u> — <strong>ischial spine</strong>, <strong>tendinous arch of the levator ani</strong>.</li>
    <li><u>Insertion</u> — <strong>coccyx (lateral side)</strong>, <strong>iliococcygeal raphe</strong>.</li>
  </ul>
  <p><strong>Pubococcygeus</strong></p>
  <ul>
    <li>Muscular band between the <strong>coccyx and the pubis</strong>, encircles the organs of the lesser pelvis.</li>
    <li>Divided into parts that are not macroscopically visible.</li>
  </ul>
  <p><strong>Puborectalis</strong></p>
  <ul>
    <li><u>Origin</u> — <strong>pubis superior ramus</strong>.</li>
    <li><u>Insertion</u> — <strong>encircles the rectum</strong>, connects to the contralateral muscles.</li>
  </ul>
  <p><strong>Functions:</strong></p>
  <ul>
    <li>Concerned with <strong>intra-abdominal pressure</strong>.</li>
    <li>Bears the weight of the pelvic contents — <strong>supporting and stabilizing function</strong>.</li>
    <li>Participates in the <strong>closure of the rectum</strong>.</li>
    <li><strong>Elevates the pelvic floor and anus</strong>.</li>
  </ul>
  <p class="hl-y"><strong>Innervation</strong>: <strong>Pudendal nerve</strong>, anterior rami of spinal nerves <strong>S2–S4</strong>.</p>
</div>

${_ill2(2, "View from above of pelvic floor — three parts of Levator ani (Iliococcygeus, Pubococcygeus, Puborectal) and Coccygeus")}

<span class="q-section-title" class="cl-green">Ischiococcygeus / Coccygeus</span>
<div class="q-card">
  <p>A thin muscle that <strong>merges with the sacrospinous ligament</strong>.</p>
  <ul>
    <li><u>Origin</u> — <strong>ischial spine</strong>, <strong>sacrospinous ligament</strong>, <strong>wall of the pelvis</strong>.</li>
    <li><u>Insertion</u> — <strong>coccyx</strong>, <strong>vertebra S5</strong>.</li>
    <li><strong>Function</strong> — pulls the <strong>coccyx ventrally</strong> to its former position during defecation and delivery.</li>
    <li class="hl-y"><strong>Innervation</strong> — <strong>anterior ramus of spinal nerve S4</strong>.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">External Anal Sphincter</span>
<div class="q-card">
  <ul>
    <li><strong>Subcutaneous part</strong> — below the <strong>internal anal sphincter</strong>.</li>
    <li><strong>Superficial part</strong> — encircles the <strong>caudal part of the internal anal sphincter</strong>.</li>
    <li><strong>Deep part</strong> — encircles the <strong>cranial part of the internal anal sphincter</strong>, partially <strong>merges with the puborectalis</strong>.</li>
  </ul>
  <p><strong>Function</strong>: <strong>Compresses the anal canal</strong> and <strong>maintains the anorectal content</strong>.</p>
  <p class="hl-y"><strong>Innervation</strong>: <strong>Pudendal nerve</strong>, anterior rami of spinal nerves <strong>S3–S4</strong>.</p>
</div>

${_ill2(3, "External anal sphincter — subcutaneous, superficial, and deep parts; relation to internal anal sphincter and puborectalis")}

<span class="q-section-title" style="color:#C084FC">Urogenital Diaphragm</span>
<div class="q-card">
  <p>Consists mainly of the <strong>deep transverse perineal muscle</strong>.</p>
  <p><strong>Deep Transverse Perineal Muscle</strong></p>
  <ul>
    <li><u>Origin</u> — <strong>ischial ramus (internal surface)</strong> and <strong>inferior ramus (internal surface)</strong>.</li>
    <li><u>Insertion</u> — <strong>urogenital hiatus</strong>.</li>
    <li class="hl-y"><strong>Innervation</strong> — <strong>deep branch of perineal nerve, pudendal nerve (S2–S4)</strong>.</li>
    <li><strong>Function</strong> — <strong>supports and stabilizes the pelvic organs and central tendon</strong>.</li>
  </ul>
  <p><strong>Superficial Transverse Perineal Muscle</strong> (only in men)</p>
  <ul>
    <li><u>Origin</u> — <strong>ischial tuberosity</strong>.</li>
    <li><u>Insertion</u> — <strong>perineal body / central tendon</strong>.</li>
    <li class="hl-y"><strong>Innervation</strong> — <strong>deep branch of perineal nerve, pudendal nerve (S2–S4)</strong>.</li>
    <li><strong>Function</strong> — <strong>supports and stabilizes the pelvic organs and central tendon</strong>.</li>
  </ul>
  <p><strong>Transverse Perineal Ligament</strong> — <strong>anterior</strong> structure that <strong>completes the urogenital diaphragm</strong>.</p>
  <p>Both the <strong>urogenital diaphragm</strong> and the <strong>pelvic diaphragm</strong> are covered on their upper and lower surfaces by the <strong>superior and inferior urogenital diaphragmatic fascia (perineal membrane)</strong> and the <strong>superior and inferior pelvic diaphragmatic fascia</strong>, respectively.</p>
  <p class="hl-y">The <strong>ischiorectal (ischioanal) fossa</strong> lies between the pelvic and urogenital diaphragm and <strong>opens posteriorly</strong>.</p>
</div>

<span class="q-section-title" style="color:#FB923C">Perineum</span>
<div class="q-card">
  <p>The <strong>perineum</strong> is located <strong>between the thighs</strong> and represents the <strong>most inferior part of the pelvic outlet</strong>. It is separated from the pelvic cavity superiorly by the <strong>pelvic floor</strong>. It plays an important role in <strong>micturition, defecation, sexual intercourse, and childbirth</strong>.</p>
  <p>It is a <strong>diamond-shaped structure</strong>.</p>
  <p><strong>Anatomical Borders:</strong></p>
  <ul>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Anterior</strong> — <strong>pubic symphysis</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Posterior</strong> — <strong>tip of the coccyx</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Laterally</strong> — <strong>inferior pubic rami and inferior ischial rami</strong>, and the <strong>sacrotuberous ligament</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Roof</strong> — <strong>pelvic floor</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Base</strong> — <strong>skin and fascia</strong></mark></li>
  </ul>
  <p>A theoretical transverse line between the ischial tuberosities divides the perineum into the <strong>anterior urogenital triangle</strong> and the <strong>posterior anal triangle</strong>.</p>
  <p><strong>Surface Borders:</strong></p>
  <ul>
    <li><strong>Anterior</strong> — <strong>mons pubis</strong> in females, <strong>base of the penis</strong> in males.</li>
    <li><strong>Laterally</strong> — <strong>medial surfaces of the thighs</strong>.</li>
    <li><strong>Posterior</strong> — <strong>superior end of the intergluteal cleft</strong>.</li>
  </ul>
</div>

${_ill2(4, "Diamond-shaped perineum — anatomical borders (pubic symphysis, coccyx, ischial tuberosities) and division into anterior urogenital triangle and posterior anal triangle")}

<span class="q-section-title" style="color:#FB923C">Anal Triangle</span>
<div class="q-card">
  <p>The <strong>posterior half of the perineum</strong>. Bounded by the <strong>coccyx, sacrotuberous ligaments, and a theoretical line between the ischial tuberosities</strong>.</p>
  <p><strong>Main contents:</strong></p>
  <ul>
    <li><strong>Anal aperture</strong> — the opening of the anus.</li>
    <li><strong>External anal sphincter muscle</strong> — voluntary muscle responsible for opening and closing the anus.</li>
    <li><strong>Ischioanal fossae (×2)</strong> — spaces located laterally to the anus; contain <strong>fat and connective tissue</strong>, which allow for <strong>expansion of the anal canal during defecation</strong>. They extend from the <strong>skin of the anal region (inferiorly)</strong> to the <strong>pelvic diaphragm (superiorly)</strong>.</li>
  </ul>
  <p class="hl-y">An important structure within the anal triangle is the <strong>pudendal nerve</strong>, which supplies the <strong>whole perineum with somatic fibers</strong>.</p>
</div>

${_ill2(5, "Anal aperture, external anal sphincter, ischioanal fossae, pudendal nerve")}

<span class="q-section-title" style="color:#FB923C">Urogenital Triangle</span>
<div class="q-card">
  <p>The <strong>anterior half of the perineum</strong>. Bounded by the <strong>pubic symphysis, ischiopubic rami, and a theoretical line between the two ischial tuberosities</strong>. Associated with the structures of the <strong>urogenital system</strong> — the <strong>external genitalia and urethra</strong>. Has an additional layer of strong deep fascia: the <strong>perineal membrane</strong>.</p>
</div>

<span class="q-section-title">Perineal Fascia</span>
<div class="q-card">
  <p>A continuity of the abdominal fascia with <strong>two components</strong>:</p>
  <ul>
    <li><strong>Deep fascia</strong> — covers the <strong>superficial perineal muscles</strong> and protruding structures (penis &amp; clitoris).</li>
    <li><strong>Superficial fascia</strong> — two further layers:
      <ul>
        <li><strong>Superficial layer</strong> — continuous with <strong>Camper's fascia</strong> of the anterior abdominal wall.</li>
        <li><strong>Deep layer (Colles' fascia)</strong> — continuous with <strong>Scarpa's fascia</strong> of the anterior abdominal wall.</li>
      </ul>
    </li>
  </ul>
  <p class="hl-y"><strong>Central Tendon / Perineal Body</strong> — <strong>fibrous tissue</strong> located in the <strong>central point of the perineum</strong>; a <strong>common insertion/origin point for muscles</strong>.</p>
</div>

${_ill2(6, "Central tendon (perineal body) and the muscles that converge on it")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Pelvic diaphragm = levator ani (iliococcygeus + pubococcygeus + puborectalis) + coccygeus; innervation S2–S4</li>
    <li>Urogenital diaphragm = deep transverse perineal (+ superficial in men); innervation S2–S4 via pudendal</li>
    <li>Ischioanal fossa: between pelvic and urogenital diaphragm, opens posteriorly</li>
    <li>Perineum: diamond-shaped; pubic symphysis → coccyx; urogenital triangle (anterior) + anal triangle (posterior)</li>
    <li>Colles' fascia = deep layer of superficial perineal fascia = Scarpa's continuation</li>
    <li>Central tendon = perineal body = common insertion/origin for muscles</li>
  </ul>
</div>
`;

// ─── Q26 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[26] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of Back</h2>
  <p class="q-hero-sub">Superficial Layer · Trapezius · Latissimus Dorsi · Deeper Layers</p>
</div>

<span class="q-section-title">1st Layer (Superficial Layer)</span>

<span class="q-section-title">Trapezius</span>
<div class="q-card">
  <p><strong class="cl-green">Origin:</strong></p>
  <ul>
    <li><strong>Descending part</strong> — <u>nuchal line, external occipital protuberance</u>.</li>
    <li><strong>Transverse part</strong> — <u>C₁–T₃ spinous processes</u>.</li>
    <li><strong>Ascending part</strong> — <u>T₄–T₁₂ spinous processes</u>.</li>
  </ul>
  <p><strong style="color:#1565C0">Insertion:</strong></p>
  <ul>
    <li><strong>Descending part</strong> — <u>lateral third of the clavicle</u>.</li>
    <li><strong>Transverse part</strong> — <u>acromion</u>.</li>
    <li><strong>Ascending part</strong> — <u>spine of the scapula</u>.</li>
  </ul>
  <p><strong style="color:#FF8080">Innervation</strong> — <span class="hl-y"><strong>Accessory nerve (CN XI)</strong></span>.</p>
</div>

<span class="q-section-title">Latissimus Dorsi</span>
<div class="q-card">
  <p><strong class="cl-green">Origin:</strong></p>
  <ul>
    <li><strong>Vertebral part</strong> — <u>T₇–T₁₂ spinous processes</u>.</li>
    <li><strong>Iliac part</strong> — <u>thoracolumbar fascia, iliac crest</u>.</li>
    <li><strong>Costal part</strong> — <u>10th–12th ribs</u>.</li>
    <li><strong>Scapular part</strong> — <u>inferior angle of the scapula</u>.</li>
  </ul>
  <p><strong style="color:#1565C0">Insertion</strong> — <u><strong>Crest of the lesser tubercle</strong> (of humerus)</u>.</p>
  <p><strong style="color:#FF8080">Innervation</strong> — <span class="hl-y"><strong>Thoracodorsal nerve</strong></span>.</p>
</div>

${_ill2(1, "Posterior view of back — superficial layer: Trapezius (upper) + Latissimus dorsi (lower), clearly labelled")}

<div class="q-clinical-box">
  <p><strong>⚠ Sections to Complete (not in original notes)</strong></p>
  <p>The following sections of the back muscles question are <strong>missing</strong> from the source notes and should be reviewed before the exam:</p>
  <ul>
    <li><strong>2nd Layer</strong> — Levator scapulae, Rhomboid major and minor.</li>
    <li><strong>3rd Layer</strong> — Splenius capitis, Splenius cervicis, Serratus posterior superior and inferior.</li>
    <li><strong>4th Layer (deep)</strong> — <strong>Erector spinae</strong> group: Iliocostalis, Longissimus, Spinalis.</li>
    <li><strong>5th Layer (deepest)</strong> — <strong>Transversospinales</strong> group: Semispinalis, Multifidus, Rotatores; and segmental muscles: Interspinales, Intertransversarii.</li>
    <li><strong>Suboccipital muscles</strong> — Rectus capitis posterior major/minor, Obliquus capitis superior/inferior.</li>
    <li><strong>Fascias of the back</strong> — <strong>Thoracolumbar fascia</strong> (anterior, middle, posterior layers), nuchal fascia.</li>
  </ul>
</div>

${_ill2(2, "Layered organization of back muscles (peel-away view): superficial → intermediate → deep")}

${_ill2(3, "Thoracolumbar fascia — anterior, middle, posterior layers")}

<div class="q-info-box">
  <strong>Quick Recap — Superficial Layer</strong>
  <ul>
    <li><strong>Trapezius</strong>: 3 parts (descending/transverse/ascending); O: occiput + C1–T12 spinous; I: clavicle + acromion + scapular spine; CN XI</li>
    <li><strong>Latissimus dorsi</strong>: O: T7–T12 + thoracolumbar fascia + iliac crest + 10–12th ribs + inferior scapula angle; I: crest of lesser tubercle; Thoracodorsal nerve</li>
  </ul>
</div>
`;

// ─── Q27 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[27] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles of Shoulder Girdle, Fascias, Axillary Fossa</h2>
  <p class="q-hero-sub">Deltoid · Rotator Cuff · Axilla Contents · APICAL Lymph Nodes · Fascias</p>
</div>

<span class="q-section-title">Shoulder Girdle Muscles — Table</span>
<table class="q-data-table">
  <thead>
    <tr><th>Muscle</th><th class="cl-green">Origin</th><th style="color:#1565C0">Insertion</th><th style="color:#FF8080">Innervation</th><th style="color:#C084FC">Blood Vessels</th><th style="color:#FB923C">Function</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Deltoid</strong></td>
      <td class="cl-green">• Spinal part: lateral spine of scapula<br>• Acromial part: acromion<br>• Clavicular part: lateral clavicle</td>
      <td style="color:#1565C0"><strong>Humerus — deltoid tuberosity</strong></td>
      <td style="color:#FF8080"><strong>Axillary nerve (C5–C6)</strong></td>
      <td style="color:#C084FC">Posterior circumflex humeral artery; Deltoid branches of thoracoacromial artery</td>
      <td style="color:#FB923C"><u>Increases stability of shoulder joint.</u> Spinal: dorsal flexion + external rotation. Acromial: abduction. Clavicular: ventral flexion, abduction, internal rotation.</td>
    </tr>
    <tr>
      <td><strong>Supraspinatus</strong></td>
      <td class="cl-green">Supraspinous fossa</td>
      <td style="color:#1565C0">Greater tubercle</td>
      <td style="color:#FF8080">Suprascapular nerve C5</td>
      <td style="color:#C084FC">Suprascapular artery</td>
      <td style="color:#FB923C"><u>Initial abduction and external rotation of the arm; stabilization of the head of humerus in the shoulder joint.</u></td>
    </tr>
    <tr>
      <td><strong>Infraspinatus</strong></td>
      <td class="cl-green">Infraspinous fossa</td>
      <td style="color:#1565C0">Greater tubercle</td>
      <td style="color:#FF8080">Suprascapular nerve C5–C6</td>
      <td style="color:#C084FC">Suprascapular artery</td>
      <td style="color:#FB923C"><u>Adduction and external rotation of the arm.</u></td>
    </tr>
    <tr>
      <td><strong>Teres minor</strong></td>
      <td class="cl-green">Scapular cranial 2/3 of the lateral border</td>
      <td style="color:#1565C0">Greater tubercle</td>
      <td style="color:#FF8080">Axillary nerve, variably C4–C6</td>
      <td style="color:#C084FC">Circumflex scapular artery</td>
      <td style="color:#FB923C"><u>Adduction and external rotation of the arm.</u></td>
    </tr>
    <tr>
      <td><strong>Teres major</strong></td>
      <td class="cl-green">Scapular caudal 1/3 of the lateral border</td>
      <td style="color:#1565C0">Crest of lesser tubercle</td>
      <td style="color:#FF8080">Lower subscapular nerve C6</td>
      <td style="color:#C084FC">Circumflex scapular artery</td>
      <td style="color:#FB923C"><u>Adduction, dorsal flexion, and internal rotation of the arm.</u></td>
    </tr>
    <tr>
      <td><strong>Subscapularis</strong></td>
      <td class="cl-green">Scapular costal surface — muscular line</td>
      <td style="color:#1565C0">Lesser tubercle</td>
      <td style="color:#FF8080">Subscapular nerve C5–C6</td>
      <td style="color:#C084FC">Subscapular artery</td>
      <td style="color:#FB923C"><u>Adduction and internal rotation of the arm.</u></td>
    </tr>
  </tbody>
</table>

${_ill2(1, "Posterior view of shoulder girdle — Deltoid (3 parts), Supraspinatus, Infraspinatus, Teres minor, Teres major clearly labelled")}

${_ill2(2, "Anterior view — Subscapularis (on costal surface of scapula) and Deltoid (clavicular part)")}

<span class="q-section-title">Axillary Fossa (Axilla)</span>
<div class="q-card">
  <p>The <strong>axilla</strong> is a region found <strong>under the glenohumeral joint</strong> of the upper limb and thorax. It looks like a <strong>pyramid</strong> with <strong>apex, base, and 4 walls</strong>.</p>
</div>

${_ill2(3, "3D pyramid of axilla — apex, base, and 4 walls: anterior wall (pectoralis major/minor), posterior wall (subscapularis/teres major/latissimus dorsi), medial wall (serratus anterior + ribs 1–4), lateral wall (intertubercular sulcus of humerus); contents labelled (axillary artery & vein, brachial plexus, APICAL lymph nodes)")}

<span class="q-section-title">Axilla Contents</span>
<div class="q-card">
  <ul>
    <li><strong style="color:#C084FC">Axillary artery &amp; vein</strong></li>
    <li><strong style="color:#C084FC">Brachial plexus</strong></li>
    <li class="hl-y"><strong>Lymph nodes</strong> — mnemonic: <strong>APICAL</strong></li>
  </ul>
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 6px;border-radius:3px"><strong>APICAL mnemonic:</strong><br>
  <strong>A</strong>pical · <strong>P</strong>ectoral (anterior) · <strong>I</strong>nfraclavicular · <strong>C</strong>entral · Subsc<strong>A</strong>pular (posterior) · Humera<strong>L</strong> (lateral)</mark></p>
  <p><em>Mnemonic order from notes: Pectoral (anterior) · Subscapular (posterior) · Infraclavicular · Central · Apical · Humeral (lateral) — spelling <strong>APICAL</strong>.</em></p>
</div>

${_ill2(4, "APICAL lymph nodes — Pectoral, Subscapular, Infraclavicular, Central, Apical, Humeral")}

<span class="q-section-title">Fascias</span>
<div class="q-card">
  <p>Each shoulder girdle muscle is <strong>surrounded by its own fascia</strong> to permit free movement against each other.</p>
  <ul>
    <li><strong>Deltoid fascia</strong> — covers the <strong>deltoid muscle</strong>.</li>
    <li><strong>Pectoral fascia</strong> — covers the superficial surface of <strong>pectoralis major</strong>, continues as the <strong>axillary fascia</strong>.</li>
    <li><strong>Clavico-pectoral fascia</strong> — surrounds the <strong>subclavius</strong>, <strong>pectoralis minor</strong>, and partially over the <strong>coracobrachialis</strong>.</li>
  </ul>
</div>

${_ill2(5, "Deltoid fascia, Pectoral fascia (continues as axillary fascia), and Clavico-pectoral fascia schematic")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Deltoid: 3 parts (spinal/acromial/clavicular); axillary nerve (C5–C6); posterior circumflex humeral artery</li>
    <li>Rotator cuff: Supraspinatus + Infraspinatus + Teres minor + Subscapularis (SITS)</li>
    <li>Axilla: pyramid shape; contents = axillary a&v + brachial plexus + APICAL lymph nodes</li>
    <li>APICAL: Apical · Pectoral · Infraclavicular · Central · Subscapular · Humeral</li>
    <li>Fascias: deltoid + pectoral (→axillary) + clavico-pectoral</li>
  </ul>
</div>
`;


// ─── Q28 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[28] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of Arm and Forearm (draw transverse sections)</h2>
  <p class="q-hero-sub">Brachial Fascia · Bicipital Aponeurosis · Antebrachial Fascia · Compartments</p>
</div>

<span class="q-section-title" style="color:#FB923C">Fasciae of the Arm and Forearm</span>
<div class="q-card">
  <ul>
    <li><strong>Brachial fascia</strong> — <u>is continuous with the deltoid and pectoral fascia</u> and forms a <strong>sheath for the muscles of the arm</strong>.</li>
    <li><strong>Bicipital aponeurosis</strong> — <span class="hl-y">is a broad aponeurosis of the <strong>biceps brachii</strong>, located in the <strong>cubital fossa of the elbow</strong></span>.</li>
    <li><strong>Antebrachial fascia</strong> — <u>is continuous with the brachial fascia</u>, forms a <strong>general sheath for the muscles in this region</strong>.</li>
    <li><strong>Tendon of palmaris longus</strong> — located between the <strong>flexor carpi radialis</strong> and the <strong>flexor carpi ulnaris</strong>. <span class="hl-y"><strong>It is not always present</strong></span>.</li>
    <li><strong>Palmar carpal ligament</strong> — is the <strong>thickened portion of antebrachial fascia</strong> on the anterior of the wrist.</li>
  </ul>
</div>

${_ill2(3, "Bicipital aponeurosis in the cubital fossa, with brachial artery and median nerve underneath")}

${_ill2(4, "Palmar carpal ligament and position of palmaris longus tendon between flexor carpi radialis and flexor carpi ulnaris")}

<span class="q-section-title" class="cl-green">Muscles of the Arm (Brachium)</span>
<div class="q-card">
  <p><strong>Anterior compartment (flexors)</strong> — innervated by <strong>musculocutaneous nerve</strong>:</p>
  <ul>
    <li><strong>Biceps brachii</strong> (long head + short head)</li>
    <li><strong>Brachialis</strong></li>
    <li><strong>Coracobrachialis</strong></li>
  </ul>
  <p><strong>Posterior compartment (extensor)</strong> — innervated by <strong>radial nerve</strong>:</p>
  <ul>
    <li><strong>Triceps brachii</strong> (long head, lateral head, medial head)</li>
    <li><strong>Anconeus</strong> (small, at the elbow)</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Muscles of the Forearm (Antebrachium)</span>
<div class="q-card">
  <p><strong>Anterior compartment (flexors and pronators)</strong> — mostly <strong>median nerve</strong>, with <strong>ulnar nerve</strong> for some:</p>
  <ul>
    <li><strong>Superficial</strong>: Pronator teres, Flexor carpi radialis, Palmaris longus, Flexor carpi ulnaris, Flexor digitorum superficialis.</li>
    <li><strong>Deep</strong>: Flexor digitorum profundus, Flexor pollicis longus, Pronator quadratus.</li>
  </ul>
  <p><strong>Posterior compartment (extensors and supinator)</strong> — innervated by <strong>radial nerve</strong> (and its <strong>deep branch / posterior interosseous nerve</strong>):</p>
  <ul>
    <li><strong>Superficial</strong>: Brachioradialis, Extensor carpi radialis longus, Extensor carpi radialis brevis, Extensor digitorum, Extensor digiti minimi, Extensor carpi ulnaris.</li>
    <li><strong>Deep</strong>: Supinator, Abductor pollicis longus, Extensor pollicis brevis, Extensor pollicis longus, Extensor indicis.</li>
  </ul>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Transverse section of arm (mid-humerus) — anterior compartment (biceps brachii, brachialis, coracobrachialis — musculocutaneous nerve), posterior compartment (triceps brachii — radial nerve), medial and lateral intermuscular septa, brachial fascia, major neurovascular bundles (brachial artery & vein, median nerve, ulnar nerve, radial nerve)")}

${_ill2(2, "REQUIRED EXAM DRAWING: Transverse section of forearm (mid) — anterior compartment (flexors: superficial/intermediate/deep), posterior compartment (extensors: superficial and deep), antebrachial fascia, interosseous membrane between radius and ulna, major nerves (median, ulnar, radial — superficial & deep branches)")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Brachial fascia: continuous with deltoid + pectoral fascia; sheath for arm muscles</li>
    <li>Bicipital aponeurosis: in cubital fossa; broad aponeurosis of biceps brachii</li>
    <li>Antebrachial fascia: continuous with brachial fascia; sheath for forearm muscles</li>
    <li>Palmar carpal ligament: thickened antebrachial fascia on anterior wrist</li>
    <li>Palmaris longus tendon: not always present; between FCR and FCU</li>
    <li>Arm: anterior (musculocutaneous) = biceps brachii + brachialis + coracobrachialis; posterior (radial) = triceps brachii + anconeus</li>
    <li>Forearm: anterior (median/ulnar) = flexors + pronators; posterior (radial) = extensors + supinator</li>
  </ul>
</div>
`;

// ─── Q29 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[29] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of Hand, Tendon Sheaths, Carpal Canal</h2>
  <p class="q-hero-sub">Compartments · Thenar/Hypothenar · Lumbricals · Interossei · Carpal Tunnel · Guyon's Canal</p>
</div>

<span class="q-section-title" style="color:#FB923C">Fasciae of the Hand</span>
<div class="q-card">
  <ul>
    <li><strong>Palmar aponeurosis</strong> — central thickened deep fascia of the palm; triangular; apex attached to flexor retinaculum, base fans out to the 5 digits.</li>
    <li><strong>Dorsal fascia of the hand</strong> — thin fascia over the dorsum; allows skin movement.</li>
    <li><strong>Flexor retinaculum (transverse carpal ligament)</strong> — thick ligament forming the <strong>roof of the carpal tunnel</strong>; attached to the pisiform + hamate medially, scaphoid + trapezium laterally.</li>
    <li><strong>Extensor retinaculum</strong> — on the dorsal side of the wrist; holds extensor tendons in place.</li>
  </ul>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Transverse section of hand at metacarpal level — palmar aponeurosis, thenar compartment, hypothenar compartment, central compartment (flexor tendons + lumbricals), adductor compartment, interosseous compartment (palmar + dorsal interossei), 5 metacarpals")}

<span class="q-section-title" class="cl-green">Thenar Muscles</span>
<div class="q-card">
  <ul>
    <li><strong>Abductor pollicis brevis</strong> — <u>abducts thumb</u>; median nerve.</li>
    <li><strong>Flexor pollicis brevis</strong> — <u>flexes thumb</u>; median nerve (superficial head) + ulnar nerve (deep head).</li>
    <li><strong>Opponens pollicis</strong> — <u>opposes thumb (pulls it toward the little finger)</u>; median nerve.</li>
  </ul>
</div>

<span class="q-section-title">Adductor Compartment</span>
<div class="q-card">
  <ul>
    <li><strong>Adductor pollicis</strong> — <u>adducts thumb</u>; <strong>deep branch of ulnar nerve</strong> (oblique + transverse heads).</li>
  </ul>
</div>

<span class="q-section-title" style="color:#C084FC">Hypothenar Muscles</span>
<div class="q-card">
  <ul>
    <li><strong>Abductor digiti minimi</strong> — <u>abducts little finger</u>; ulnar nerve.</li>
    <li><strong>Flexor digiti minimi brevis</strong> — <u>flexes little finger</u>; ulnar nerve.</li>
    <li><strong>Opponens digiti minimi</strong> — <u>opposes little finger</u>; ulnar nerve.</li>
    <li><strong>Palmaris brevis</strong> — <u>wrinkles skin of the hypothenar eminence</u>; ulnar nerve (superficial branch).</li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Lumbricals (×4) and Interossei</span>
<div class="q-card">
  <p><strong>Lumbricals (×4)</strong>:</p>
  <ul>
    <li>Origin: tendons of flexor digitorum profundus.</li>
    <li>Insertion: extensor expansion (dorsal digital expansion).</li>
    <li><u>Flex MCP joints + extend IP joints</u>.</li>
    <li>Innervation: <strong>1st &amp; 2nd by median nerve</strong>; <strong>3rd &amp; 4th by ulnar nerve</strong>.</li>
  </ul>
  <p><strong>Palmar interossei (×3)</strong> — <strong>PAD</strong> (Palmar ADduct fingers 2, 4, 5 toward middle finger); ulnar nerve.</p>
  <p><strong>Dorsal interossei (×4)</strong> — <strong>DAB</strong> (Dorsal ABduct fingers 2, 3, 4 from middle finger); ulnar nerve.</p>
</div>

${_ill2(4, "Palmar view — abductor pollicis brevis, flexor pollicis brevis, opponens pollicis, adductor pollicis (thenar/adductor), and abductor digiti minimi, flexor digiti minimi brevis, opponens digiti minimi (hypothenar)")}

${_ill2(5, "4 lumbricals, 3 palmar interossei (PAD), 4 dorsal interossei (DAB)")}

<span class="q-section-title">Tendon Sheaths of the Hand</span>
<div class="q-card">
  <ul>
    <li><strong>Common synovial sheath of the flexor tendons (ulnar bursa)</strong> — extends from the deep surface of the flexor retinaculum to the distal palm; surrounds all 8 flexor digitorum tendons (FDS + FDP); finger 5 sheath usually continuous with the ulnar bursa.</li>
    <li><strong>Radial bursa</strong> — surrounds the <strong>tendon of flexor pollicis longus</strong>; extends from above the flexor retinaculum to the thumb's distal phalanx.</li>
    <li><strong>Digital synovial sheaths</strong> — of fingers 2–4 (index/middle/ring); separate from the common sheath in the palm.</li>
  </ul>
</div>

${_ill2(3, "Palmar view — common synovial sheath (ulnar bursa) for all fingers' flexor tendons + radial bursa (around flexor pollicis longus); digital sheaths of fingers 2–4")}

<span class="q-section-title" style="color:#FB923C">Carpal Canal (Carpal Tunnel)</span>
<div class="q-card">
  <ul>
    <li><strong>Roof</strong> — <strong>Flexor retinaculum (transverse carpal ligament)</strong>.</li>
    <li><strong>Floor and walls</strong> — <strong>carpal bones</strong> (concave arch).</li>
  </ul>
  <p class="hl-y"><strong>Contents (10 structures total):</strong></p>
  <ul>
    <li>4 tendons of <strong>Flexor digitorum superficialis (FDS)</strong></li>
    <li>4 tendons of <strong>Flexor digitorum profundus (FDP)</strong></li>
    <li>1 tendon of <strong>Flexor pollicis longus (FPL)</strong></li>
    <li><strong>Median nerve</strong></li>
  </ul>
  <p class="hl-y"><strong>9 tendons + median nerve = 10 structures through the carpal canal.</strong></p>
</div>

<div class="q-clinical-box">
  <p><strong style="color:#FF8080">Carpal Tunnel Syndrome</strong> — compression of the <strong>median nerve</strong> within the canal. Causes: repetitive wrist flexion/extension, fluid retention, space-occupying lesions. Symptoms: tingling/numbness in median nerve distribution (thumb, index, middle, and lateral half of ring finger), weakness of thenar muscles.</p>
</div>

${_ill2(2, "REQUIRED EXAM DRAWING: Transverse section at wrist — flexor retinaculum forming roof of carpal tunnel; 9 flexor tendons (4×FDS, 4×FDP, 1×FPL) and median nerve; Guyon's canal medially (ulnar nerve and ulnar artery)")}

<span class="q-section-title">Guyon's Canal (Ulnar Canal)</span>
<div class="q-card">
  <ul>
    <li>Located on the <strong>medial side of the wrist</strong>, lateral to the pisiform.</li>
    <li><strong>Contents</strong> — <strong>Ulnar nerve</strong> and <strong>ulnar artery</strong>.</li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Clinical</strong> — <strong>Guyon's canal syndrome</strong> (ulnar nerve compression at the wrist)</mark></li>
  </ul>
</div>

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Flexor retinaculum = roof of carpal tunnel; carpal bones = floor/walls</li>
    <li>Carpal tunnel: 9 tendons (4 FDS + 4 FDP + 1 FPL) + median nerve = 10 structures</li>
    <li>Carpal tunnel syndrome = median nerve compression</li>
    <li>Guyon's canal (medial wrist): ulnar nerve + ulnar artery</li>
    <li>Thenar (median): AbPB + FPB + Opponens pollicis; Hypothenar (ulnar): AbDM + FDMB + Opponens DM</li>
    <li>Lumbricals: 1st &amp; 2nd = median; 3rd &amp; 4th = ulnar; Interossei all = ulnar</li>
    <li>PAD = Palmar ADduct; DAB = Dorsal ABduct</li>
  </ul>
</div>
`;

// ─── Q30 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[30] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles and Fascias of Hip; Thigh, Femoral Triangle, Popliteal Fossa</h2>
  <p class="q-hero-sub">Gluteal Region · Thigh Compartments · NAVEL · Adductor Canal · Popliteal Fossa</p>
</div>

<span class="q-section-title" style="color:#FB923C">Fasciae of the Hip and Thigh</span>
<div class="q-card">
  <ul>
    <li><strong>Fascia lata</strong> — the <strong>deep fascia of the thigh</strong>, surrounding all the thigh muscles.</li>
    <li><strong>Iliotibial tract (ITT)</strong> — thickening of fascia lata laterally; receives insertion of <strong>gluteus maximus</strong> and <strong>tensor fasciae latae</strong>, attaches to the <strong>lateral condyle of tibia (Gerdy's tubercle)</strong>.</li>
    <li><strong>Cribriform fascia</strong> — covers the <strong>saphenous opening</strong> in the fascia lata; pierced by the <strong>great saphenous vein</strong>.</li>
  </ul>
</div>

<span class="q-section-title" style="color:#FB923C">Muscles of the Hip / Gluteal Region</span>
<div class="q-card">
  <ul>
    <li><strong>Gluteus maximus</strong> — Innervation: <strong>inferior gluteal nerve</strong>. <u>Extension and lateral rotation of thigh</u>.</li>
    <li><strong>Gluteus medius</strong> — Innervation: <strong>superior gluteal nerve</strong>. <u>Abduction and medial rotation; stabilization of pelvis</u>.</li>
    <li><strong>Gluteus minimus</strong> — Innervation: <strong>superior gluteal nerve</strong>. <u>Abduction and medial rotation</u>.</li>
    <li><strong>Tensor fasciae latae (TFL)</strong> — Innervation: <strong>superior gluteal nerve</strong>. <u>Abduction; assists in medial rotation; tenses fascia lata</u>.</li>
    <li><strong>Piriformis</strong> — landmark for inferior/superior gluteal vessels &amp; nerves. <u>External rotation and abduction of thigh</u>.</li>
    <li><strong>Obturator internus</strong> — <u>External rotation of thigh</u>.</li>
    <li><strong>Superior gemellus</strong> / <strong>Inferior gemellus</strong> — <u>External rotation of thigh</u>.</li>
    <li><strong>Quadratus femoris</strong> — <u>External rotation and adduction of thigh</u>.</li>
    <li><strong>Obturator externus</strong> — <u>External rotation of thigh</u>.</li>
  </ul>
</div>

${_ill2(1, "Posterior view of gluteal region — Gluteus maximus, medius, minimus, Tensor fasciae latae, Piriformis, Obturator internus, Superior/Inferior gemelli, Quadratus femoris, Obturator externus")}

<span class="q-section-title" class="cl-green">Anterior Compartment of Thigh (extensors of knee, flexors of hip) — femoral nerve</span>
<div class="q-card">
  <ul>
    <li><strong>Iliopsoas</strong> (Iliacus + Psoas major) — <u>flexion of the hip</u>.</li>
    <li><strong>Sartorius</strong> — <u>flexion, abduction, and external rotation of hip; flexion of knee</u>.</li>
    <li><strong>Quadriceps femoris</strong> — 4 heads: <strong>Rectus femoris</strong>, <strong>Vastus lateralis</strong>, <strong>Vastus medialis</strong>, <strong>Vastus intermedius</strong>. <u>Extension of the knee</u>. All four heads converge on the <strong>quadriceps tendon</strong> → <strong>patella</strong> → <strong>patellar ligament</strong> → <strong>tibial tuberosity</strong>.</li>
    <li><strong>Pectineus</strong> — border between anterior and medial compartments; <strong>femoral nerve</strong> (sometimes obturator). <u>Adduction and flexion of thigh</u>.</li>
  </ul>
</div>

${_ill2(2, "Anterior view of thigh — Sartorius, Quadriceps femoris (Rectus femoris, Vastus lateralis, Vastus medialis, Vastus intermedius), Pectineus, Iliopsoas (Iliacus + Psoas major)")}

<span class="q-section-title" style="color:#1565C0">Medial Compartment of Thigh (adductors) — obturator nerve (mainly)</span>
<div class="q-card">
  <ul>
    <li><strong>Adductor longus</strong> — <u>adduction of thigh</u>; obturator nerve.</li>
    <li><strong>Adductor brevis</strong> — <u>adduction of thigh</u>; obturator nerve.</li>
    <li><strong>Adductor magnus</strong> — adductor part: obturator nerve; hamstring part: tibial division of sciatic. <u>Adduction (and extension) of thigh</u>.</li>
    <li><strong>Gracilis</strong> — <u>adduction of thigh; flexion of knee; medial rotation of leg</u>; obturator nerve.</li>
    <li><strong>Obturator externus</strong> (also classified here) — <u>external rotation of thigh</u>.</li>
  </ul>
</div>

${_ill2(3, "Medial view — adductor compartment: Adductor longus, Adductor brevis, Adductor magnus, Gracilis, Pectineus")}

<span class="q-section-title" style="color:#C084FC">Posterior Compartment of Thigh (hamstrings — flexors of knee, extensors of hip) — sciatic nerve</span>
<div class="q-card">
  <ul>
    <li><strong>Biceps femoris</strong> — long head: tibial division; short head: common fibular division. <u>Flexion of knee; extension of hip (long head)</u>.</li>
    <li><strong>Semitendinosus</strong> — tibial division of sciatic. <u>Flexion of knee; extension of hip; medial rotation of leg</u>.</li>
    <li><strong>Semimembranosus</strong> — tibial division of sciatic. <u>Flexion of knee; extension of hip; medial rotation of leg</u>.</li>
  </ul>
</div>

${_ill2(4, "Posterior view of thigh — hamstrings: Biceps femoris (long & short head), Semitendinosus, Semimembranosus")}

<span class="q-section-title">Femoral Triangle</span>
<div class="q-card">
  <p><strong>Borders:</strong></p>
  <ul>
    <li><strong>Superior (Base)</strong> — <strong>Inguinal ligament</strong>.</li>
    <li><strong>Lateral</strong> — <strong>Sartorius muscle</strong>.</li>
    <li><strong>Medial</strong> — <strong>Adductor longus muscle</strong>.</li>
    <li><strong>Floor</strong> — <strong>Iliopsoas (laterally)</strong> and <strong>pectineus (medially)</strong>.</li>
    <li><strong>Roof</strong> — <strong>Fascia lata</strong>, with the <strong>cribriform fascia</strong> at the <strong>saphenous opening</strong>.</li>
  </ul>
  <p class="hl-y"><strong>Contents (lateral to medial — mnemonic: NAVEL):</strong></p>
  <ul>
    <li><strong>N</strong> — <strong>Femoral nerve</strong></li>
    <li><strong>A</strong> — <strong>Femoral artery</strong></li>
    <li><strong>V</strong> — <strong>Femoral vein</strong></li>
    <li><strong>E</strong> — <strong>Empty space (femoral canal)</strong></li>
    <li><strong>L</strong> — <strong>Lymphatics (deep inguinal lymph nodes)</strong></li>
  </ul>
  <p>The <strong>femoral canal</strong> contains the <strong>lymph node of Cloquet (Rosenm&uuml;ller)</strong>; it is the site of <strong>femoral hernias</strong>.</p>
</div>

${_ill2(5, "Femoral triangle — borders (inguinal ligament superior, sartorius lateral, adductor longus medial) and contents lateral to medial: NAVEL (Nerve, Artery, Vein, Empty space, Lymphatics)")}

<span class="q-section-title">Adductor Canal (Hunter's Canal / Subsartorial Canal)</span>
<div class="q-card">
  <p>Continuation of the femoral triangle <strong>distally</strong>, beneath the sartorius.</p>
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Contents</strong> — <strong>Femoral artery</strong>, <strong>femoral vein</strong>, <strong>saphenous nerve</strong>, <strong>nerve to vastus medialis</strong></mark>.</p>
  <p>Ends at the <strong>adductor hiatus</strong> of adductor magnus, where the femoral artery becomes the <strong>popliteal artery</strong>.</p>
</div>

<span class="q-section-title">Popliteal Fossa</span>
<div class="q-card">
  <p>A <strong>diamond-shaped depression</strong> posterior to the knee.</p>
  <p><strong>Borders:</strong></p>
  <ul>
    <li><strong>Superolateral</strong> — <strong>Biceps femoris</strong>.</li>
    <li><strong>Superomedial</strong> — <strong>Semimembranosus and Semitendinosus</strong>.</li>
    <li><strong>Inferolateral</strong> — <strong>Lateral head of gastrocnemius</strong> + <strong>plantaris</strong>.</li>
    <li><strong>Inferomedial</strong> — <strong>Medial head of gastrocnemius</strong>.</li>
    <li><strong>Floor</strong> — Posterior surface of femur, capsule of knee joint, popliteus muscle.</li>
    <li><strong>Roof</strong> — Popliteal fascia (continuation of fascia lata) and skin.</li>
  </ul>
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Contents (deep to superficial):</strong></mark></p>
  <ul>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Popliteal artery</strong> (deepest)</mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Popliteal vein</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Tibial nerve</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Common fibular (peroneal) nerve</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Small saphenous vein</strong> (pierces the popliteal fascia)</mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Popliteal lymph nodes</strong></mark></li>
    <li><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Genicular branches</strong> of the popliteal artery and tibial nerve</mark></li>
  </ul>
</div>

${_ill2(6, "Popliteal fossa — borders (biceps femoris superolateral, semimembranosus/semitendinosus superomedial, lateral gastrocnemius inferolateral, medial gastrocnemius inferomedial) and contents labelled")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Fascia lata: deep fascia of thigh; iliotibial tract (ITT) = lateral thickening; cribriform fascia covers saphenous opening</li>
    <li>Gluteal: maximus (inferior gluteal), medius + minimus (superior gluteal); piriformis = key landmark</li>
    <li>Thigh: anterior (femoral nerve) = quadriceps + sartorius + iliopsoas; medial (obturator) = adductors + gracilis; posterior (sciatic) = hamstrings</li>
    <li>Femoral triangle: inguinal ligament (superior), sartorius (lateral), adductor longus (medial); NAVEL contents</li>
    <li>Adductor canal (Hunter's): femoral a+v, saphenous nerve, nerve to vastus medialis</li>
    <li>Popliteal fossa: popliteal a, popliteal v, tibial nerve, common fibular nerve, small saphenous vein, popliteal lymph nodes</li>
  </ul>
</div>
`;

// ─── Q31 ─────────────────────────────────────────────────────────────────────
window.CH2_CONTENT[31] = `
<div class="q-hero" style="--cc:#E0724E">
  <h2>Muscles, Fascias and Compartments of Leg and Foot (draw transverse sections)</h2>
  <p class="q-hero-sub">3 Compartments · Retinacula · Tarsal Tunnel · Foot Compartments · Intrinsic Muscles</p>
</div>

<span class="q-section-title" style="color:#FB923C">Fasciae of the Leg</span>
<div class="q-card">
  <ul>
    <li><strong>Crural fascia</strong> — deep fascia of the leg, continuous with the <strong>fascia lata</strong>.</li>
    <li><strong>Anterior intermuscular septum</strong> — between <strong>anterior</strong> and <strong>lateral</strong> compartments.</li>
    <li><strong>Posterior intermuscular septum</strong> — between <strong>lateral</strong> and <strong>posterior</strong> compartments.</li>
    <li><strong>Transverse intermuscular septum</strong> — divides <strong>posterior compartment</strong> into <strong>superficial</strong> and <strong>deep</strong> groups.</li>
    <li><strong>Interosseous membrane</strong> — between tibia and fibula.</li>
  </ul>
</div>

<span class="q-section-title" class="cl-green">Anterior Compartment (dorsiflexors)</span>
<div class="q-card">
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Deep fibular nerve, anterior tibial artery</strong></mark></p>
  <ul>
    <li><strong>Tibialis anterior</strong></li>
    <li><strong>Extensor digitorum longus (EDL)</strong></li>
    <li><strong>Extensor hallucis longus (EHL)</strong></li>
    <li><strong>Fibularis tertius (Peroneus tertius)</strong></li>
  </ul>
</div>

<span class="q-section-title" style="color:#1565C0">Lateral Compartment (everters)</span>
<div class="q-card">
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Superficial fibular nerve</strong></mark></p>
  <ul>
    <li><strong>Fibularis longus (Peroneus longus)</strong></li>
    <li><strong>Fibularis brevis (Peroneus brevis)</strong></li>
  </ul>
</div>

<span class="q-section-title" style="color:#C084FC">Posterior Compartment (plantarflexors)</span>
<div class="q-card">
  <p><mark style="background:rgba(255,182,193,.4);padding:1px 4px;border-radius:3px"><strong>Tibial nerve, posterior tibial artery + fibular artery</strong></mark></p>
  <p><strong>Superficial group:</strong></p>
  <ul>
    <li><strong>Gastrocnemius</strong> (medial + lateral heads)</li>
    <li><strong>Soleus</strong></li>
    <li><strong>Plantaris</strong></li>
  </ul>
  <p>Gastrocnemius + soleus = <strong>Triceps surae</strong> → join at the <strong>calcaneal (Achilles) tendon</strong>.</p>
  <p><strong>Deep group:</strong></p>
  <ul>
    <li><strong>Popliteus</strong></li>
    <li><strong>Tibialis posterior</strong></li>
    <li><strong>Flexor digitorum longus (FDL)</strong></li>
    <li><strong>Flexor hallucis longus (FHL)</strong></li>
  </ul>
</div>

${_ill2(1, "REQUIRED EXAM DRAWING: Transverse section of leg (mid-calf) — anterior compartment (TA, EDL, EHL, fibularis tertius; deep fibular nerve + anterior tibial artery), lateral compartment (fibularis longus + brevis; superficial fibular nerve), posterior compartment superficial (gastrocnemius, soleus, plantaris) and deep (tibialis posterior, FDL, FHL, popliteus) separated by transverse septum; tibial nerve + posterior tibial artery + fibular artery")}

${_ill2(3, "Lateral view of leg — anterior and lateral compartment muscles labelled")}

${_ill2(4, "Posterior view of leg — superficial group (gastrocnemius, soleus, plantaris + Achilles tendon) and deep group (popliteus, tibialis posterior, FDL, FHL)")}

<span class="q-section-title" style="color:#FB923C">Retinacula of the Ankle</span>
<div class="q-card">
  <ul>
    <li><strong>Superior extensor retinaculum</strong> — anterior, superior to ankle.</li>
    <li><strong>Inferior extensor retinaculum</strong> — anterior, Y-shaped over ankle.</li>
    <li><strong>Flexor retinaculum</strong> — medial side; forms the roof of the <strong>tarsal tunnel</strong>.</li>
    <li><strong>Superior fibular retinaculum</strong> and <strong>Inferior fibular retinaculum</strong> — lateral side; hold fibularis tendons.</li>
  </ul>
</div>

<span class="q-section-title">Tarsal Tunnel (medial ankle)</span>
<div class="q-card">
  <ul>
    <li><strong>Roof</strong> — <strong>Flexor retinaculum</strong>.</li>
    <li><strong>Floor</strong> — medial malleolus, talus, calcaneus.</li>
  </ul>
  <p class="hl-y"><strong>Contents — mnemonic "Tom, Dick, ANd Harry":</strong></p>
  <ul>
    <li><strong>T</strong>ibialis posterior tendon</li>
    <li><strong>D</strong>igitorum longus flexor tendon</li>
    <li><strong>A</strong>rtery — posterior tibial artery</li>
    <li><strong>N</strong>erve — tibial nerve</li>
    <li><strong>H</strong>allucis longus tendon (flexor)</li>
  </ul>
  <p><em>(Full mnemonic: "Tom, Dick, And Very Nervous Harry" — including the vein)</em></p>
</div>

${_ill2(6, "Medial view of ankle — flexor retinaculum forming roof of tarsal tunnel; contents (Tom Dick ANd Harry) passing through")}

<span class="q-section-title" style="color:#FB923C">Plantar Aponeurosis and Foot Compartments</span>
<div class="q-card">
  <p><strong>Plantar aponeurosis</strong> — thickening of the deep fascia of the sole; attached posteriorly to the <strong>medial process of the calcaneal tuberosity</strong> and anteriorly to the <strong>bases of the proximal phalanges</strong> (via 5 slips).</p>
  <p><strong>Compartments of the Foot:</strong></p>
  <ul>
    <li><strong>Dorsal compartment</strong> — Extensor digitorum brevis, Extensor hallucis brevis.</li>
    <li><strong>Medial plantar compartment</strong> — Abductor hallucis, Flexor hallucis brevis.</li>
    <li><strong>Lateral plantar compartment</strong> — Abductor digiti minimi, Flexor digiti minimi brevis.</li>
    <li><strong>Central plantar compartment</strong> — Flexor digitorum brevis, Quadratus plantae, Lumbricals, Adductor hallucis (oblique + transverse heads).</li>
    <li><strong>Interosseous compartment</strong> — 3 plantar interossei (PAD), 4 dorsal interossei (DAB).</li>
  </ul>
</div>

<span class="q-section-title">Intrinsic Muscles of the Foot</span>
<div class="q-card">
  <p><strong>Dorsum of the Foot:</strong></p>
  <ul>
    <li><strong>Extensor digitorum brevis</strong> — deep fibular nerve.</li>
    <li><strong>Extensor hallucis brevis</strong> — deep fibular nerve.</li>
  </ul>
  <p><strong>Sole — 4 Layers (1st = most superficial, 4th = deepest):</strong></p>
  <ol>
    <li><strong>Layer 1</strong>: Abductor hallucis, Flexor digitorum brevis, Abductor digiti minimi.</li>
    <li><strong>Layer 2</strong>: Quadratus plantae, Lumbricals (×4).</li>
    <li><strong>Layer 3</strong>: Flexor hallucis brevis, Adductor hallucis (oblique + transverse heads), Flexor digiti minimi brevis.</li>
    <li><strong>Layer 4</strong>: Plantar interossei (×3 — PAD), Dorsal interossei (×4 — DAB).</li>
  </ol>
  <p><strong>Innervation:</strong></p>
  <ul>
    <li><strong>Medial plantar nerve</strong> (branch of tibial) — Abductor hallucis, Flexor digitorum brevis, Flexor hallucis brevis, 1st lumbrical.</li>
    <li><strong>Lateral plantar nerve</strong> (branch of tibial) — all other intrinsic muscles of the sole.</li>
  </ul>
</div>

${_ill2(2, "REQUIRED EXAM DRAWING: Transverse section of foot — dorsal compartment, plantar compartments (medial/lateral/central/interosseous), plantar aponeurosis")}

${_ill2(5, "Dorsal and plantar view of foot — all intrinsic muscles labelled")}

<div class="q-info-box">
  <strong>Quick Recap</strong>
  <ul>
    <li>Anterior compartment (deep fibular): TA, EDL, EHL, fibularis tertius → dorsiflexors</li>
    <li>Lateral compartment (superficial fibular): fibularis longus + brevis → evertors</li>
    <li>Posterior superficial (tibial): gastrocnemius + soleus + plantaris (Triceps surae → Achilles tendon) → plantarflexors</li>
    <li>Posterior deep (tibial): popliteus + tibialis posterior + FDL + FHL</li>
    <li>Tarsal tunnel mnemonic: Tom (Tibialis post.) Dick (Digitorum) ANd (Artery + Nerve) Harry (Hallucis long.)</li>
    <li>Sole: 4 layers of intrinsic muscles; medial plantar nerve = AbH + FDB + FHB + 1st lumbrical; rest = lateral plantar</li>
  </ul>
</div>
`;

// ─── IIFE — inject all Q18–Q31 into ch2 topics ────────────────────────────────
(function() {
  var ch2 = CHAPTERS.find(function(c){ return c.id === 'ch2'; });
  if (!ch2) return;
  ch2.topics.forEach(function(t) {
    if (window.CH2_CONTENT[t.q]) t.content = window.CH2_CONTENT[t.q];
  });
})();
