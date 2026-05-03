// Ch9 Content — Q112–Q120 (Lymphatic System)
window.CH9_CONTENT = {};
function _ill9(n, desc){
  return `<div style="border:2px dashed rgba(82,196,144,.35);border-radius:12px;padding:1.1rem 1.4rem;text-align:center;margin:1rem 0 1.5rem;background:rgba(82,196,144,.06)"><span style="font-size:1.6rem">📷</span><p style="margin:.4rem 0 0;color:rgba(82,196,144,.75);font-size:.8rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase">[Illustration ${n} &#8212; ${desc}]</p></div>`;
}

window.CH9_CONTENT[112] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.6rem;margin-bottom:.3rem">Thymus — Structure, Position and Syntopy, Function</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card" style="background:rgba(82,196,144,.09);border-left:4px solid #52C490">
  <div class="q-section-title" style="color:#1B5E20;font-weight:700">General Introduction</div>
  <p>The <strong>lymphatic system</strong> functions to drain tissue fluid, plasma proteins, and other cellular debris back into the bloodstream and is also involved in <u>immune defense</u>. Once this collection of substances enters the lymphatic vessels, it is known as <strong>lymph</strong>. Lymph is then filtered by <strong>lymph nodes</strong> and directed into the venous system. The lymphatic vessels are located in almost every tissue <strong>except for cartilage, cornea, bone marrow, placenta, and the central nervous system</strong> — in those sites the drainage of extracellular fluid occurs in a different way.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Definition</div>
  <p>The <strong>thymus</strong> is a <strong>lymphoepithelial organ</strong> located in the <strong>ventral part of the superior mediastinum</strong> (just behind the <strong>sternum</strong>). It contains <strong>T-lymphocytes</strong> undergoing maturation. The thymus is largest and most active during the <strong>neonatal period</strong> — during puberty it begins to <u>atrophy and involute</u> (around <strong>age 50</strong> — it is <span class="cl-red">completely replaced by adipose tissue</span>, although some residual thymic tissue may persist throughout life).</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Syntopy</div>
  ${_ill9(1,'Thymus in situ in the superior mediastinum — sternum (anterior); heart, ascending aorta, SVC, trachea (posterior); heart and pericardium (inferior); thyroid gland (superior); lungs, internal thoracic vessels, phrenic nerve, pericardiophrenic vessels (right and left)')}
  <ul>
    <li><strong>Anterior:</strong> <strong>sternum</strong></li>
    <li><strong>Posterior:</strong> <strong>heart</strong>, <strong>ascending aorta</strong>, <strong>SVC</strong>, <strong>trachea</strong></li>
    <li><strong>Inferior:</strong> <strong>heart</strong> and <strong>pericardium</strong></li>
    <li><strong>Superior:</strong> <strong>thyroid gland</strong></li>
    <li><strong>Right and Left:</strong> <strong>lungs</strong>, <strong>internal thoracic vessels</strong>, <strong>phrenic nerve</strong>, and <strong>pericardiophrenic vessels</strong></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Function</div>
  ${_ill9(2,'Positive and negative selection of T-lymphocytes inside the thymus (cortex → medulla); 2–3% surviving cells migrate out to secondary lymphoid organs')}
  <p>The thymus is the <strong>site of <u>T-lymphocyte differentiation</u></strong> and the selective removal of T cells reactive against self-antigens, as part of the <strong><u>central self-tolerance</u></strong>.</p>
  <p>Most of the T-lymphocytes are eliminated by <u>apoptosis</u> (programmed cell death) during the process of <strong><u>positive and negative selection</u></strong>:</p>
  <ul>
    <li><strong>Positive selection:</strong> ensures the cells recognize self and are able to bind it.</li>
    <li><strong>Negative selection:</strong> ensures the cells do <strong>not</strong> bind too strongly — strong binding would create an <strong>autoimmune response</strong>.</li>
  </ul>
  <p><span class="cl-red">The <strong>2–3 %</strong> of cells that pass selection migrate to the <strong>secondary lymphatic organs</strong>.</span></p>
  <p>In addition, the thymus has an <strong><u>endocrine function</u></strong>: it influences <strong>T-lymphocyte proliferation and maturation</strong>, regulates their functions, and influences the <strong>migration of macrophages</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Structure</div>
  ${_ill9(3,'Histology-style cross-section of the thymus — capsule, lobes, lobules, cortical septa, cortex (densely packed T-lymphocytes), medulla, corpuscles of Hassal')}
  <ul>
    <li>Since its volume remains almost the same, its <strong>relative size is larger in the newborn</strong> than in the adult.</li>
    <li><strong>Right and left lobes</strong> enclosed in a <strong>capsule</strong>.</li>
    <li><strong>Incomplete lobules</strong> separated by <strong>cortical septa</strong> — a band of mediastinal fibrous tissue in the cortex.</li>
    <li><strong>Cortex:</strong> mainly <strong>T-lymphocytes</strong>.</li>
    <li><strong>Medulla:</strong> reticular epithelial tissue with fewer T-lymphocytes, and <strong>corpuscles of Hassal</strong> (whose <u>function</u> is unknown).</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Embryonic Origin (dual)</div>
  ${_ill9(4,'Embryological diagram — 3rd pharyngeal pouch (endoderm) + 3rd pharyngeal cleft (ectoderm) give rise to thymic epithelium; mesodermal hematopoietic cells from bone marrow migrate in during week 9')}
  <ul>
    <li>The <strong>thymic epithelium</strong> develops from the <span style="color:#4F7EF7"><strong>ventral part of the 3rd pharyngeal pouch (endoderm)</strong></span> and the <span style="color:#4F7EF7"><strong>ectoderm of the 3rd pharyngeal cleft</strong></span>.</li>
    <li>In the <span style="color:#4F7EF7"><strong>9th week</strong></span>, <span style="color:#4F7EF7"><strong>hematopoietic (mesodermal) cells</strong></span> from the <strong>bone marrow</strong> start to migrate to the thymus, "bringing" the <span style="color:#4F7EF7">thymocytes</span> to the thymic gland.</li>
  </ul>
  <p>The <u>lymphoid tissue</u> (<span style="color:#4F7EF7">mesodermal thymocytes</span>) then becomes unified with the epithelial cells (<span style="color:#4F7EF7">ectoderm</span>).</p>
</div>
`;

window.CH9_CONTENT[113] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.3rem;margin-bottom:.3rem">Lymph Node — Structure and Functional Zones, Sentinel Lymph Node, Lymphatic Tissue in Organs, Main Lymphatic Ducts</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Definition</div>
  ${_ill9(1,'Labeled cross-section of a lymph node — capsule, trabeculae, cortex (with lymph nodules), paracortex, medulla, subcapsular marginal sinus, capsular sinus, medullary sinus, hilum, afferent lymphatic vessels (convex side), efferent lymphatic vessel (hilum)')}
  <p><strong>Lymph nodes</strong> are small, <strong>bean-shaped lymphoreticular organs</strong> of variable size (<strong>1 – 25 mm</strong>). They are located in the paths of the lymphatic vessels and serve as <strong>biological filters</strong>. There are about <strong>500 lymph nodes</strong> in the body. They contain <strong>APCs (antigen-presenting cells)</strong> — <u>lymphocytes</u>, <u>macrophages</u>, and <u>follicular dendritic cells</u>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Function</div>
  <ul>
    <li><strong>Filter of lymph.</strong></li>
    <li><strong>Site of initiation of the specific immune response:</strong> <u>naïve lymphocytes</u> circulate between lymph nodes searching for foreign antigen on <u>APCs</u>. The antigen presentation induces the <strong><u>activation, proliferation, and differentiation</u></strong> of naïve lymphocytes into <strong><u>mature T lymphocytes</u></strong> and <strong><u>mature B lymphocytes</u></strong>, which are capable of mounting a proper immune response.</li>
  </ul>
  <p>The lymph nodes are basically the <strong>centers of antigen presentation, lymphocyte activation, differentiation, and proliferation</strong>.</p>
  <div class="q-info-box"><p><u>Naïve lymphocytes</u> are immature lymphocytes that have not yet encountered antigen.</p></div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Structure</div>
  <ul>
    <li><strong>Capsule (1):</strong> dense collagenous connective tissue on the convex side of the node, which projects <strong>trabeculae</strong> (CT septa) into the node, forming a supportive framework and dividing it into segments.
      <ul><li><strong>Subcapsular marginal sinus:</strong> a lymphatic channel that contains few <u>lymphocytes</u>; the <strong>afferent lymphatic vessels drain into it</strong>.</li></ul>
    </li>
    <li><strong>Hilum (2):</strong> on the concave surface of the node — contains the afferent <strong>blood</strong> vessels and the <strong>efferent lymph vessel</strong>.
      <ul><li>Several <strong>afferent lymphatic vessels</strong> carry lymph <strong>into</strong> the node through its convex surface at various sites.</li></ul>
    </li>
    <li><strong>Cortex (3):</strong> contains lymph nodules made of tightly packed <u>B-lymphocytes</u>, <u>macrophages</u>, and <u>follicular dendritic cells</u>.
      <ul><li><strong>Capsular (internodular / peri-trabecular) sinus:</strong> runs from beneath the capsule, between the lymph nodules.</li></ul>
    </li>
    <li><strong>Paracortex (3.1):</strong> there is <strong>no clear border</strong> between the cortex and paracortex — it is distinguished by the <strong>absence of lymph nodules</strong> and contains most of the <u>T-lymphocytes</u>.</li>
    <li><strong>Medulla (4):</strong> contains less densely packed <u>B-lymphocytes</u>, <u>macrophages</u>, and <u>plasma cells</u>.
      <ul><li><strong>Medullary sinus:</strong> collects lymph from the medulla.</li></ul>
    </li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Lymph Circulation</div>
  <p style="font-size:1rem;line-height:2.2">
    <span style="color:#4F7EF7"><strong>Afferent lymph vessel (5)</strong></span> on the convex surface →
    <span style="color:#4F7EF7"><strong>subcapsular sinus (6)</strong></span> →
    <span style="color:#4F7EF7"><strong>capsular sinus (7)</strong></span> →
    <span style="color:#4F7EF7"><strong>medullary sinus (8)</strong></span> →
    <span style="color:#4F7EF7"><strong>efferent lymph vessel (9)</strong></span> at the hilum.
  </p>
  <p>The sinuses are lined by <strong>flat endothelial cells</strong> and contain <u>lymphocytes</u>, <u>macrophages</u>, and <u>monocytes</u>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Lymph Nodule / Follicles</div>
  ${_ill9(2,'Secondary lymphoid follicle — dark zone (centroblasts), light zone (centrocytes / germinal center), mantle zone (quiescent naïve B cells)')}
  <p>A <strong>lymph nodule (follicle)</strong> is a large aggregation of <u>B cells</u>.</p>
  <ul>
    <li><strong><u>Primary follicle</u>:</strong> inactive — no germinal center.</li>
    <li><strong><u>Secondary follicle</u>:</strong> active — with germinal center.</li>
  </ul>
  <p>The lymph follicles have <strong>3 zones</strong>:</p>
  <ul>
    <li><span class="hl-o"><strong>Dark zone (<u>centroblasts</u>):</strong></span> rapidly proliferating <u>B-lymphocytes</u>.</li>
    <li><span class="hl-o"><strong>Light zone (<u>centrocytes</u>) — germinal center:</strong></span> the <u>B-lymphocytes</u> "compete" to bind unprocessed antigen; the unbound B-lymphocytes will die.</li>
    <li><span class="hl-o"><strong>Mantle zone (quiescent cells):</strong></span> <u>naïve B-cells</u>, surrounding the germinal center.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Types of Lymph Nodes</div>
  <ul>
    <li><strong>Tributary / collecting region:</strong> a specific area drained by a group of lymph nodes.</li>
    <li><strong>Regional lymph nodes:</strong> a group of lymph nodes draining a specific anatomic region.</li>
    <li><strong>Sentinel lymph node:</strong> the <strong>first node (or group of nodes) draining a particular organ</strong> — and therefore the <strong>first to be invaded by metastasizing cancer cells (the "1st alarm")</strong>. <span class="cl-red"><em>Swelling always indicates a pathological process.</em></span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Non-encapsulated Lymphatic Tissue — MALT</div>
  ${_ill9(3,'Body schematic — locations of MALT components: GALT (Peyer\'s patches in ileum, vermiform appendix), NALT, BALT, SALT, CALT, UTALT, vagina, mammary gland')}
  <p>Lymphoid tissue located both <strong>diffusely</strong> and in <strong>nodules</strong> throughout the body — forms the mucosal immune system, <strong>MALT (mucosa-associated lymphoid tissue)</strong>: it contains the same number of <u>lymphocytes</u> as the rest of the body. <strong>MALT</strong> forms barriers against pathogens in the GIT, respiratory system, skin, and other organs.</p>
  <p><strong>Types:</strong></p>
  <ul>
    <li><strong>D-MALT (diffuse):</strong> diffuse cells, mainly located in the GIT.</li>
    <li><strong>O-MALT (organized):</strong> concentrations of lymphoid tissue:
      <ul>
        <li><strong>GALT (gut):</strong>
          <ul>
            <li>Solitary lymphoid nodules</li>
            <li>Aggregated lymphoid nodules:
              <ul>
                <li><strong>Peyer's patches</strong> in the ileum</li>
                <li>Lymphoid nodules of the <strong>vermiform appendix</strong></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>NALT</strong> (nose), <strong>BALT</strong> (bronchus), <strong>SALT</strong> (skin/surface), <strong>CALT</strong> (conjunctiva), <strong>UTALT</strong> (urinary tract), vagina, and mammary gland.</li>
      </ul>
    </li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Main Lymphatic Duct</div>
  ${_ill9(4,'Whole-body schematic — right lymphatic duct (right ½ of upper body) and thoracic duct with cisterna chyli at T11–L1; regions drained by each')}
  <p><strong>Lymphatic Trunks (paired)</strong></p>
  <ul>
    <li><strong>Jugular trunk:</strong> head and neck.</li>
    <li><strong>Subclavian trunk:</strong> upper extremity.</li>
    <li><strong>Broncho-mediastinal trunk:</strong> thorax.</li>
    <li><strong>Lumbar trunk:</strong> lower extremity and pelvis.</li>
    <li><strong>Intestinal trunk (unpaired):</strong> unpaired abdominal organs.</li>
  </ul>
  <p><strong>Lymphatic Ducts</strong></p>
  <ul>
    <li><strong>Right lymphatic duct:</strong> collects from the <strong>right ½ of the upper body</strong> (head, neck, upper extremity, and upper thorax):
      <ul>
        <li><strong>Right jugular trunk</strong></li>
        <li><strong>Right subclavian trunk</strong></li>
        <li><strong>Right broncho-mediastinal trunk</strong></li>
        <li><span class="cl-red"><strong>Exception:</strong> the right ½ of the heart drains to the <strong>thoracic duct</strong>.</span></li>
      </ul>
    </li>
    <li><strong>Thoracic duct:</strong> originates from the <strong>lumbar trunk</strong> — collects lymph from <strong>both lower extremities, the pelvis, the abdominal cavity, and the left ½ of the upper body</strong>.
      <ul>
        <li>Divided into <strong>4 parts</strong> according to its course: <strong>lumbar, abdominal, thoracic, and cervical</strong>.</li>
        <li><strong>Cisterna chyli:</strong> a widening at the beginning of the thoracic duct (<strong>T11 – L1</strong>).</li>
        <li><span class="cl-red"><strong>Exception:</strong> the <strong>4th–10th segments of the left lung</strong> + the <strong>left ½ of the heart</strong> drain to the <strong>right lymphatic duct</strong>.</span></li>
      </ul>
    </li>
  </ul>
</div>
`;

window.CH9_CONTENT[114] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.6rem;margin-bottom:.3rem">Spleen — Structure, Position, Syntopy, Vascular Supply</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Definition</div>
  <p>The <strong>spleen</strong> is the <span class="cl-red"><strong>largest secondary lymphoid organ</strong></span>. It is an <u>intraperitoneal organ</u>, located in the <strong>left hypochondrium</strong> (between the <span class="cl-red"><strong>9th – 11th rib</strong></span>).</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Function</div>
  ${_ill9(1,'External anatomy of the spleen — superior border (sharp), inferior border (obtuse), splenic hilum, diaphragmatic surface, visceral surface with impressions (stomach, kidney, pancreas, left colic flexure)')}
  <p>The spleen is active in the initiation of <strong>immune reactions</strong> against <u>antigens</u> filtered from the blood and participates in the <strong>degeneration of old blood cells and thrombocytes</strong>. It also performs <u>erythropoiesis</u> until the <strong>7th month of intrauterine life</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">External Structures</div>
  <ul>
    <li><strong>Superior border:</strong> sharp margin.</li>
    <li><strong>Inferior border:</strong> obtuse margin.</li>
    <li><strong>Splenic hilum:</strong> entry point of vessels and nerves.</li>
    <li><strong>Diaphragmatic surface:</strong> the dorso-cranial surface adjacent to the <strong>diaphragm</strong>.</li>
    <li><strong>Visceral surface:</strong> the ventral surface in contact with the <strong>stomach, left kidney, pancreas, and left colic flexure</strong>.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Internal Structures</div>
  ${_ill9(2,'Cross-section of the spleen — capsule, trabeculae, white pulp (with PALS around the central artery), splenic lymphoid nodules, marginal zone, red pulp (cords of Billroth and splenic sinuses)')}
  <ul>
    <li><strong>Capsule:</strong> connective tissue, sending <strong>trabeculae</strong> into the <u>parenchyma</u>; surrounded by <strong>mesothelium (serosa)</strong>.</li>
    <li><strong>Splenic pulp:</strong> the main substance of the spleen.
      <ul>
        <li><span class="hl-g"><strong>White pulp</strong></span> — <u>immune function</u>:
          <ul>
            <li><strong>Periarteriolar lymphoid sheath (PALS):</strong> <u>T-lymphocytes</u> surrounding the central artery.</li>
            <li><strong>Splenic lymphoid nodules.</strong></li>
          </ul>
        </li>
        <li><strong>Marginal zone:</strong> the region at the interface between the <strong>non-lymphoid red pulp</strong> and the <strong>lymphoid white pulp</strong>. Contains <u>macrophages and B lymphocytes</u> — lymphocytes transfer from here to the red pulp.</li>
        <li><span class="hl-g"><strong>Red pulp</strong></span>:
          <ul>
            <li><strong>Splenic cords of reticular tissue (cords of Billroth)</strong> between the splenic sinuses.</li>
            <li><strong>Splenic sinuses (venous):</strong> sinusoidal capillaries with a <strong>discontinuous basal lamina</strong>.
              <ul><li>Through these, healthy blood cells are returned to the bloodstream — <span class="cl-red">old RBCs are macrophaged</span>.</li></ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Supporting Ligaments</div>
  <ul>
    <li><strong>Spleno-renal (lienorenal) ligament:</strong> spleen → kidney.</li>
    <li><strong>Gastro-splenic ligament:</strong> spleen → stomach.</li>
    <li><strong>Spleno-colic ligament:</strong> spleen → transverse colon.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Position</div>
  ${_ill9(3,'Body schematic — spleen in left hypochondrium / upper-left quadrant, under 9th–11th ribs and diaphragm, with surrounding organs: stomach, pancreas, left kidney, adrenal gland, left colic flexure')}
  <p>The spleen is an <u>intraperitoneal organ</u> (surrounded by peritoneum except at the hilum). It is located in the <strong>upper-left quadrant of the abdomen</strong>, covered by the <strong>diaphragm and ribcage (9th–11th ribs)</strong> — therefore <span class="cl-red">it cannot be palpated</span> under normal conditions.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Syntopy</div>
  <ul>
    <li><strong>Superior:</strong> <strong>diaphragm</strong>.</li>
    <li><strong>Inferior:</strong> <strong>left colic (splenic) flexure</strong>.</li>
    <li><strong>Left:</strong> 9th–10th ribs with the intercostal muscles.</li>
    <li><strong>Right:</strong> <strong>stomach</strong>, <strong>pancreas</strong>, <strong>left kidney</strong>, and <strong>adrenal gland</strong>.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Blood Supply</div>
  ${_ill9(4,'Splenic vasculature — splenic artery → trabecular arteries → central arteries (within PALS) → penicillar arteries → arterial capillaries → red pulp; red pulp veins → trabecular veins → splenic veins → portal vein')}
  <p><strong>Arteries</strong></p>
  <p style="color:#4F7EF7;line-height:2">The <strong>splenic artery</strong> enters the spleen through the <strong>hilum</strong> → <strong>trabecular arteries</strong> (run within the trabeculae) → <strong>central arteries</strong> (leave the trabeculae and enter the white pulp) enveloped with <strong>PALS</strong> → <strong>penicillar arteries</strong> (enter the red pulp) → <strong>arterial capillaries</strong> (in the splenic cords / directly connecting to the venous sinuses).</p>
  <p><strong>Veins</strong></p>
  <p style="color:#4F7EF7;line-height:2"><strong>Red pulp veins</strong> → <strong>trabecular veins</strong> → <strong>splenic veins</strong> → <strong>portal vein</strong>.</p>
</div>
`;

window.CH9_CONTENT[115] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.5rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Head and Neck</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">General Overview</div>
  ${_ill9(1,'Lateral view of the head and neck — ring of superficial lymph nodes: occipital, mastoid, parotid, pre-auricular, facial/maxillary, submental, submandibular, superficial cervical, supraclavicular; all draining toward the deep cervical chain')}
  <p>Lymph nodes of the head and neck are divided into <strong>superficial</strong> and <strong>deep</strong> nodes.</p>
  <p><strong>Drainage flow:</strong> <span style="color:#4F7EF7">Superficial → Deep → <strong>Jugular lymphatic trunk</strong></span>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Superficial Lymph Nodes</div>
  <p>The superficial nodes collect lymph from the <u>scalp, face, and neck</u>. They are arranged in a <strong>ring shape</strong>. They drain into the <strong>deep cervical nodes</strong>, which then drain into the <strong>jugular lymphatic trunk</strong>.</p>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Occipital</strong></span></p>
    <ul>
      <li>Usually <strong>1–3 occipital lymph nodes</strong>.</li>
      <li>Located at the <strong>back of the head</strong>, at the <strong>lateral border of the trapezius muscle</strong>.</li>
      <li>Collect lymph from the <u>occipital area of the scalp</u> and the <u>back of the neck</u>.</li>
      <li>Drain to the <strong>deep cervical lymph node</strong>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Mastoid</strong></span></p>
    <ul>
      <li>Usually <strong>2 mastoid lymph nodes</strong>.</li>
      <li>Located <strong>posterior to the ear</strong>, on the <strong>mastoid process</strong>.</li>
      <li>Collect lymph from the <u>posterior neck, upper ear, and the back of the external auditory meatus (the ear canal)</u>.</li>
      <li>Drain to the <strong>deep cervical lymph node</strong>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Parotid</strong></span></p>
    <ul>
      <li>A small group of nodes located <strong>superficially to the parotid gland</strong>.</li>
      <li>Collect lymph from the <u>nose, nasal cavity, external acoustic meatus, tympanic cavity, and the lateral borders of the orbit</u>.</li>
      <li><strong>Deep parotid lymph nodes:</strong>
        <ul>
          <li>Found <strong>under the parotid gland</strong>.</li>
          <li>Drain the <u>parotid gland, nasal cavities, and the nasopharynx</u>.</li>
        </ul>
      </li>
      <li>Drain to the <strong>deep cervical lymph node</strong>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Pre-auricular</strong></span></p>
    <ul>
      <li>Usually <strong>1–3 pre-auricular lymph nodes</strong>.</li>
      <li>Located <strong>anterior to the auricle of the ear</strong>.</li>
      <li>Collect lymph from the <u>superficial areas of the face and the temporal region</u>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Facial / Maxillary</strong></span></p>
    <p><em>(Listed as a superficial node group of head and neck.)</em></p>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Submental</strong></span></p>
    <ul>
      <li>Located <strong>superficially to the mylohyoid muscle</strong>.</li>
      <li>Collect lymph from the <u>central lower lip, the floor of the mouth, and the apex of the tongue</u>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Submandibular (submandibular triangle)</strong></span></p>
    <ul>
      <li>Usually <strong>3–6 submandibular nodes</strong>.</li>
      <li>Located <strong>below the mandible</strong> in the <strong>submandibular triangle</strong>.</li>
      <li>Collect lymph from the <u>cheeks, the lateral aspects of the nose, the upper lip, the lateral parts of the lower lip, the gums, and the anterior tongue</u>.</li>
      <li>They also act as a <strong>second filtering</strong> station and receive lymph from the <strong>submental and facial lymph nodes</strong>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Superficial Cervical</strong></span></p>
    <ul>
      <li><strong>Anterior cervical nodes:</strong> lie close to the <strong>anterior jugular vein</strong>, collecting lymph from the <u>superficial surfaces of the anterior neck</u>.</li>
      <li><strong>Posterior lateral superficial cervical lymph nodes:</strong> lie close to the <strong>external jugular vein</strong>, collecting lymph from the <u>superficial surfaces of the neck</u>.</li>
    </ul>
  </div>

  <div style="margin:1rem 0 .5rem">
    <p><span class="hl-o"><strong>Supraclavicular (supraclavicular fossa)</strong></span></p>
    ${_ill9(4,'Close-up illustrating the Node of Virchow-Troiser above the left clavicle (clinical landmark)')}
    <ul>
      <li><span class="cl-red"><strong>Node of Virchow-Troiser</strong></span> (a single node — clinical importance):
        <ul>
          <li>It is located <strong>above the left clavicle</strong>.</li>
          <li>Its <strong>enlargement usually indicates a tumor</strong> of the <span class="cl-red"><strong>stomach (70 %)</strong></span>, <strong>left mammary gland</strong>, <strong>left lung</strong>, <strong>large intestine</strong>, <strong>left side of the neck</strong>, or a <strong>primary lymphoma</strong>.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Deep Lymph Nodes</div>
  ${_ill9(2,'Deep cervical chain along the internal jugular vein within the carotid sheath — pre-laryngeal, pre-tracheal, paratracheal, retropharyngeal, infrahyoid, jugulodigastric (tonsillar), jugulo-omohyoid, supraclavicular, deep anterior, deep lateral cervical nodes (superior + inferior)')}
  <p>Deep nodes receive lymph from the <u>head and neck</u>, either <strong>directly</strong> or <strong>indirectly</strong> from the superficial nodes. They are arranged in a <strong>vertical chain close to the internal jugular vein</strong>, within the <strong>carotid sheath</strong>. The efferent vessels from the deep cervical lymph nodes converge to form the <strong>jugular lymphatic trunk</strong>.</p>
  <ul>
    <li><strong>Pre-laryngeal nodes</strong></li>
    <li><strong>Pre-tracheal nodes</strong></li>
    <li><strong>Paratracheal nodes</strong></li>
    <li><strong>Retropharyngeal nodes</strong></li>
    <li><strong>Infrahyoid nodes</strong></li>
    <li><strong>Jugulodigastric (tonsillar) nodes</strong></li>
    <li><strong>Jugulo-omohyoid nodes</strong></li>
    <li><strong>Supraclavicular nodes</strong></li>
    <li><strong>Deep anterior cervical lymph node</strong></li>
    <li><strong>Deep lateral cervical lymph node</strong> — superior and inferior</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Final Drainage</div>
  ${_ill9(3,'Root of the neck — left jugular lymphatic trunk → thoracic duct → left subclavian vein; right jugular lymphatic trunk → right lymphatic duct → right subclavian vein')}
  <ul>
    <li><span style="color:#4F7EF7"><strong>Left jugular lymphatic trunk:</strong></span> combines with the <strong>thoracic duct</strong> at the root of the neck, and empties into the venous system via the <strong>left subclavian vein</strong>.</li>
    <li><span style="color:#4F7EF7"><strong>Right jugular lymphatic trunk:</strong></span> forms the <strong>right lymphatic duct</strong> at the root of the neck, and empties into the venous system via the <strong>right subclavian vein</strong>.</li>
  </ul>
</div>
`;

window.CH9_CONTENT[116] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.45rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Thoracic Wall and Lungs</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Overview</div>
  ${_ill9(1,'Thoracic lymph nodes plotted along the vertebral column T1–T12 — four positional groups with numeric labels (1.1, 1.2, 2.2, 2.4, 2.5, 3.2, 3.3, 4.1, 4.2)')}
  <p>The lymph nodes of the <u>thoracic wall</u> and <u>lungs</u> are located in the <strong>mediastinum</strong> and drain the <u>intrathoracic organs</u> and <u>mammary glands</u>.</p>
  <p><span class="cl-red">Because this area is <strong>poorly accessible</strong>, <em>it is very difficult to differentiate pathological enlargement of those nodes.</em></span></p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Two Main Categories</div>
  <p>The lymph nodes of this region can be divided into:</p>
  <ul>
    <li><strong>Parietal:</strong> in the <strong>wall of the body</strong>.</li>
    <li><strong>Visceral:</strong> nodes lying <strong>adjacent to the organs</strong>.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Drainage</div>
  <ul>
    <li><span style="color:#4F7EF7"><strong>Parietal: right → right lymphatic duct</strong>, <strong>left → thoracic duct</strong>.</span></li>
    <li><span style="color:#4F7EF7"><strong>Visceral:</strong> drain to the <strong>mediastinal and lumbar lymph nodes</strong>.</span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Classification According to Position</div>

  <p><span class="hl-o"><strong>Superior</strong></span></p>
  <ul>
    <li><strong>Superior trachea-bronchial nodes (1.1)</strong></li>
    <li><strong>Paratracheal nodes (1.2)</strong></li>
  </ul>

  <p><span class="hl-o"><strong>Inferior-anterior</strong></span></p>
  <ul>
    <li><strong>Para-mammary nodes</strong></li>
    <li><strong>Parasternal nodes (2.2)</strong></li>
    <li><strong>Intercostal nodes</strong></li>
    <li><strong>Superior diaphragmatic nodes (2.4)</strong></li>
    <li><strong>Prepericardial nodes (2.5)</strong></li>
  </ul>

  <p><span class="hl-o"><strong>Inferior</strong></span></p>
  <ul>
    <li><strong>Broncho-pulmonary nodes</strong></li>
    <li><strong>Inferior trachea-bronchial nodes (3.2)</strong></li>
    <li><strong>Lateral pericardial nodes (3.3)</strong></li>
  </ul>

  <p><span class="hl-o"><strong>Inferior posterior</strong></span></p>
  <ul>
    <li><strong>Juxta-esophageal nodes (4.1)</strong></li>
    <li><strong>Prevertebral nodes (4.2)</strong></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Classification According to Organs Drained</div>
  ${_ill9(2,'Lungs and trachea — intrapulmonary nodes (5) along bronchi inside lung parenchyma; broncho-pulmonary nodes (6) at lung hilum; inferior trachea-bronchial nodes (7) below bifurcation; right and left superior trachea-bronchial nodes (8) lateral to bifurcation; paratracheal nodes (9) along trachea')}
  <ul>
    <li><strong>Intrapulmonary nodes (5):</strong> along the course of the bronchi <strong>inside the <u>lung parenchyma</u></strong>.</li>
    <li><strong>Broncho-pulmonary nodes (6):</strong> in the <strong>hilum of the lung</strong>, next to the entry of the main bronchi into the lung.</li>
    <li><strong>Inferior trachea-bronchial nodes (7):</strong> <strong>below</strong> the bifurcation of the <strong>trachea</strong>.</li>
    <li><strong>Right and left superior trachea-bronchial nodes (8):</strong> <strong>lateral</strong> to the bifurcation of the trachea.</li>
    <li><strong>Paratracheal nodes (9):</strong> along the <u>trachea</u>.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Final Pathway</div>
  ${_ill9(3,'Thoracic lymph entering the right and left broncho-mediastinal trunks → right lymphatic duct (right side) and thoracic duct (left side)')}
  <p style="color:#4F7EF7;font-weight:700">Lymph passes into the right and left broncho-mediastinal trunks.</p>
</div>

<div class="q-clinical-box">
  <div class="q-section-title hl-y">Clinical Note</div>
  ${_ill9(4,'Hodgkin\'s lymphoma typical sites — neck, axilla, mediastinum; arrows showing spread to adjacent lymph nodes / systemic circulation')}
  <p><span class="cl-red"><strong>Hodgkin's lymphoma</strong> — cancer of the lymphatic system that usually manifests in the lymph nodes of the <strong>neck, axilla, or mediastinum</strong> — and then spreads to adjacent lymph nodes or to the <strong>systemic circulation</strong>. It usually occurs in <strong>young adults and the elderly</strong>.</span></p>
</div>
`;

window.CH9_CONTENT[117] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.45rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Stomach, Liver, and Pancreas</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Overview</div>
  ${_ill9(1,'Anterior view of upper abdominal organs — stomach, liver, pancreas, duodenum — with regional lymph node groups: gastric, gastro-omental, pyloric, pancreaticoduodenal, pancreatic, and hepatic')}
  <p>The <u>unpaired organs of the peritoneal cavity</u> (stomach, liver, pancreas, etc.) drain to lymph nodes situated <strong>within the <u>walls of these organs</u></strong>, which then drain along the <strong>unpaired branches of the <u>abdominal aorta</u></strong>, then to the <strong>coeliac lymph nodes</strong>, then via the <strong>intestinal trunks</strong>, and finally into the <strong>thoracic duct</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Drainage Pathway</div>
  ${_ill9(2,'Flow chart — walls of the unpaired organs → unpaired branches of the abdominal aorta → coeliac lymph nodes → intestinal trunks → thoracic duct')}
  <p style="text-align:center;font-size:1rem;line-height:2.5">
    <span style="color:#4F7EF7"><strong>Walls of the unpaired organs</strong></span>
    <span class="cl-red"> → </span>
    <span style="color:#4F7EF7"><strong>unpaired branches of the abdominal aorta</strong></span>
    <span class="cl-red"> → </span>
    <span style="color:#4F7EF7"><strong>coeliac lymph nodes</strong></span>
    <span class="cl-red"> → </span>
    <span style="color:#4F7EF7"><strong>intestinal trunks</strong></span>
    <span class="cl-red"> → </span>
    <span style="color:#4F7EF7"><strong>thoracic duct</strong></span>.
  </p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Visceral Lymph Nodes</div>
  ${_ill9(3,'Coeliac trunk with three branches (left gastric, splenic, common hepatic) and coeliac lymph nodes clustered around them — anchoring where the unpaired branches of the abdominal aorta sit')}
  <ul>
    <li><span class="hl-o"><strong>Gastric, gastro-omental, pyloric, and pancreaticoduodenal nodes.</strong></span></li>
    <li><span class="hl-o"><strong>Pancreatic nodes.</strong></span></li>
    <li><span class="hl-o"><strong>Hepatic lymph nodes.</strong></span></li>
  </ul>
</div>
`;

window.CH9_CONTENT[118] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.3rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Intestines, Lymph Nodes and Collectors of Testis</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Overview</div>
  ${_ill9(1,'Posterior abdominal wall — kidneys, abdominal aorta, lumbar lymph nodes (left, intermediate, right); arrows indicating drainage from pelvis, lower extremities, abdominal wall, paired organs, gonads')}
  <p>The lymph nodes of the <u>intraperitoneal organs</u> drain to the <strong>coeliac lymph nodes</strong> and then, via <strong>two or three intestinal trunks</strong>, to the <strong>thoracic duct</strong>.</p>
  <p>The <strong>lumbar lymph nodes</strong> collect lymph from the <u>pelvic region, lower extremities, abdominal wall, paired organs of the abdominal cavity, gonads, and the organs of the inframesocolic part of the peritoneal cavity</u>.</p>
  <div class="q-info-box">
    <p><em>As seen in the previous question:</em> lymph from the <u>unpaired organs of the abdominal cavity</u> drains first to the lymph nodes situated along the vessels within the walls of those organs, and then to the lymph nodes located along the <strong>unpaired branches of the abdominal aorta</strong>. Lymph from the <strong>coeliac lymph nodes</strong> is collected by the <strong>intestinal trunk</strong> and drained into the <strong>thoracic duct</strong>.</p>
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Intestine</div>
  ${_ill9(2,'Small and large intestine — superior mesenteric nodes (drain to coeliac and lumbar) and inferior mesenteric nodes (drain solely to lumbar) with colored arrows')}
  <p>The lymph from the intestine is collected by the <strong>superior</strong> and <strong>inferior mesenteric nodes</strong>.</p>
  <ul>
    <li>Lymph from the <strong>superior mesenteric lymph nodes</strong> is collected by the <strong>coeliac and lumbar lymph nodes</strong>.</li>
    <li>Lymph from the <strong>inferior mesenteric lymph nodes</strong> is drained <strong>solely</strong> to the <strong>lumbar lymph nodes</strong>.</li>
  </ul>
  <p>The <u>lumbar nodes</u> also collect from the <u>abdominal wall</u>, the <strong>paired organs of the abdominal cavity</strong>, and the <strong>gonads</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Two Main Drainage Chains</div>
  ${_ill9(3,'Two parallel colored flow arrows: (1) Coeliac nodes → 2/3 intestinal trunks → cisterna chyli → thoracic duct; (2) Lumbar nodes → paired lumbar trunks → cisterna chyli → thoracic duct')}
  <ul>
    <li><span class="hl-o"><span style="color:#4F7EF7"><strong>Coeliac nodes → 2/3 intestinal trunks → cisterna chyli → thoracic duct.</strong></span></span></li>
    <li><span class="hl-o"><span style="color:#4F7EF7"><strong>Lumbar nodes → paired lumbar trunks → cisterna chyli → thoracic duct.</strong></span></span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Parietal Nodes</div>
  <ul>
    <li><strong>Left lumbar nodes</strong></li>
    <li><strong>Intermediate lumbar nodes</strong></li>
    <li><strong>Right lumbar nodes</strong></li>
    <li><strong>Inferior diaphragmatic nodes</strong></li>
    <li><strong>Inferior epigastric nodes</strong></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Visceral Nodes</div>
  <ul>
    <li><strong>Superior mesenteric nodes →</strong> coeliac and lumbar nodes.</li>
    <li><strong>Inferior mesenteric nodes →</strong> only lumbar nodes.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Testis</div>
  ${_ill9(4,'Pelvic / inguinal diagram — testis and epididymis draining upward to the lumbar nodes (superior lumbar embryological origin); tunics of the testis and scrotum draining to inguinal nodes (superficial in the femoral triangle → deep)')}
  <p>Lymph nodes from the <strong>testis and epididymis</strong> drain into the <strong>lumbar nodes</strong> (since they originate in the <span class="cl-red"><strong>superior lumbar region</strong></span>) — <span class="cl-red"><em>classic exam fact</em></span>.</p>
  <p>Nodes from the <strong>tunics of the testis and the scrotum</strong> drain to the <strong>inguinal nodes</strong> (<strong>superficial</strong> in the <strong>femoral triangle</strong> → <strong>deep</strong>).</p>
</div>
`;

window.CH9_CONTENT[119] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.35rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Vagina, Uterus, and Ovaries</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Overview</div>
  ${_ill9(1,'Anterior view — female internal reproductive organs with lymphatic drainage arrows: ovaries → lumbar; uterine tube → lumbar (isthmus → superficial inguinal); uterine body/fundus → three directions; cervix → iliac/sacral; vagina → iliac and superficial inguinal')}
  <p>The lymph nodes of the female reproductive system <strong>drain separately</strong>:</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Ovaries</div>
  <ul>
    <li><span class="cl-red"><strong>Lymph nodes of the ovaries → lumbar nodes</strong> (since they originate in the <strong>superior lumbar region</strong>) — <em>classic exam fact</em>.</span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Uterine Tube</div>
  <ul>
    <li><strong>Lymph of the uterine tube → lumbar nodes.</strong></li>
    <li><strong>Isthmus of the uterine tube → superficial inguinal nodes.</strong></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Uterus — Body and Fundus</div>
  ${_ill9(2,'Uterus — three lymphatic drainage routes: (1) along suspensory ligament of the ovary → lymph nodes along the aorta; (2) along round ligament of the uterus → superficial inguinal nodes; (3) along broad ligament of the uterus → lymph nodes near division of common iliac artery')}
  <p>The lymph of the <u>body and fundus</u> of the <strong>uterus</strong> mostly flows in <u>three directions</u>:</p>
  <ul>
    <li><span class="hl-o"><span style="color:#4F7EF7"><strong>Lymph nodes along the aorta</strong></span> — drain along the <strong>suspensory ligament of the ovary</strong>.</span></li>
    <li><span class="hl-o"><span style="color:#4F7EF7"><strong>Superficial inguinal nodes</strong></span> — drain along the <strong>round ligament of the uterus</strong>.</span></li>
    <li><span class="hl-o"><span style="color:#4F7EF7"><strong>Lymph nodes along the division of the common iliac artery</strong></span>, which also collect a part of the <strong>lymph nodes of the cervix of the uterus</strong> — drain along the <strong>broad ligament of the uterus</strong>.</span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Cervix</div>
  ${_ill9(3,'Cervix with arrows to the internal iliac nodes and sacral nodes (posteriorly)')}
  <p>Additional lymphatic vessels pass from the <strong>cervix</strong> to the <u>parietal lymph nodes</u> along the <strong>internal iliac artery</strong>, and <u>posteriorly</u> to the <strong>sacral nodes</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Vagina</div>
  <p>Lymph from the <strong>vagina</strong> → <strong>external and internal iliac lymph nodes</strong> and <strong>superficial inguinal nodes</strong>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Inguinal Nodes — Summary</div>
  ${_ill9(4,'Inguinal region — superficial inguinal nodes in the femoral triangle; deep inguinal nodes in the iliopectineal fossa')}
  <p><strong>Inguinal nodes:</strong> <span style="color:#4F7EF7"><strong>superficial</strong> (in the <strong>femoral triangle</strong>) → <strong>deep</strong> (in the <strong>iliopectineal fossa</strong>)</span>.</p>
</div>
`;

window.CH9_CONTENT[120] = `
<div class="q-hero" style="--cc:#52C490">
  <div style="text-align:center;padding:1.5rem 1rem .5rem">
    <h1 class="q-title" style="color:#8B0000;font-size:1.45rem;margin-bottom:.3rem">Lymph Nodes and Collectors of Upper and Lower Limbs</h1>
    <hr style="border:none;border-top:2px solid rgba(82,196,144,.5);margin:.4rem auto;max-width:440px">
  </div>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Upper Limb</div>
  ${_ill9(1,'Anterior view of the upper limb — three superficial collector pathways: (1) lateral collectors along the cephalic vein → axillary nodes; (2) medial collectors along the basilic vein → axillary nodes; (3) anterior collectors along the median antebrachial vein → superficial cubital lymph nodes')}
  <p>The lymph nodes of the <u>upper limb</u> are located mainly in the <strong>axillary fossa</strong> — they form a dense network that drains lymph from a large region: the <u>upper limb</u>, <u>mammary gland</u>, and the <u>lateral and ventral aspects of the thorax</u>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Superficial Collectors of Upper Limb</div>
  <ul>
    <li><span style="color:#4F7EF7"><strong>Lateral collectors (1):</strong> run along the <strong>cephalic vein</strong> → <strong>axillary nodes</strong>.</span></li>
    <li><span style="color:#4F7EF7"><strong>Medial collectors (2):</strong> run along the <strong>basilic vein</strong> → <strong>axillary nodes</strong>.</span></li>
    <li><span style="color:#4F7EF7"><strong>Anterior collectors (3):</strong> run along the <strong>median antebrachial vein</strong> → <strong>superficial cubital lymph nodes</strong>.</span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Deep Collectors of the Upper Limb</div>
  <p>The deep lymphatic vessels of the <u>upper limb</u> follow the major deep veins (i.e. <strong>radial, ulnar, and brachial veins</strong>), terminating in the <strong>humeral axillary lymph nodes</strong>. They function to drain lymph from <u>joint capsules, periosteum, tendons, and muscles</u>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Lymph Nodes of Upper Limb</div>
  <ul>
    <li><strong>Superficial and deep cubital nodes (4)</strong></li>
    <li><strong>Brachial nodes</strong></li>
    <li><strong>Deltopectoral (infraclavicular) nodes</strong></li>
    <li><strong>Interpectoral nodes</strong></li>
    <li><strong>Axillary nodes (8):</strong> ~40 nodes.</li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Axillary Lymph Nodes</div>
  ${_ill9(2,'Axilla diagram — five axillary node groups (apical, central, humeral/lateral, subscapular/posterior, pectoral/anterior) and position of Sorgius node at the 2nd/3rd slip of serratus anterior (sentinel for the mammary gland)')}
  <ul>
    <li><span class="hl-o"><strong>Apical nodes</strong></span></li>
    <li><span class="hl-o"><strong>Central nodes</strong></span></li>
    <li><span class="hl-o"><strong>Humeral (lateral) nodes</strong></span></li>
    <li><span class="hl-o"><strong>Subscapular (posterior) nodes</strong></span></li>
    <li><span class="hl-o"><strong>Pectoral (anterior) nodes</strong></span>
      <ul>
        <li><span class="hl-g"><span class="cl-red"><strong>Sorgius node:</strong></span></span> located at the <strong>2nd/3rd slip of the serratus anterior muscle</strong> — it is the <span class="cl-red"><strong>sentinel lymph node of the mammary gland</strong></span>.</li>
      </ul>
    </li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Lower Limb</div>
  ${_ill9(3,'Anterior + posterior view of the lower limb — three collector pathways: (1) medial collecting vessel along great saphenous vein → superficial inguinal nodes; (2) lateral collecting vessels along tributaries of great saphenous vein → superficial inguinal nodes; (3) posterior collecting vessels along small saphenous vein → superficial popliteal nodes')}
  <p>The lymph nodes of the <u>lower limb</u> are mainly located in the <strong>inguinal region</strong> and the <strong>femoral triangle</strong> — they drain the <u>lower limb</u>, <u>external genital organs</u>, and part of the <u>anterior-lateral abdominal wall</u>.</p>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Collectors of Lower Limb</div>
  <ul>
    <li><span style="color:#4F7EF7"><strong>Medial collecting vessel (1):</strong> runs along the <strong>great saphenous vein</strong> → <strong>superficial inguinal nodes</strong>.</span></li>
    <li><span style="color:#4F7EF7"><strong>Lateral collecting vessels (2):</strong> run along the tributaries of the <strong>great saphenous vein</strong> → <strong>superficial inguinal nodes</strong>.</span></li>
    <li><span style="color:#4F7EF7"><strong>Posterior collecting vessels (3):</strong> run along the <strong>small saphenous vein</strong> → <strong>superficial popliteal nodes</strong>.</span></li>
  </ul>
</div>

<div class="q-card">
  <div class="q-section-title hl-y">Lymph Nodes of Lower Limb</div>
  ${_ill9(4,'Inguinal region — superficial inguinal nodes (femoral triangle) → deep inguinal nodes (iliopectineal fossa); Lymph node of Cabanas (sentinel of the penis); Node of Clocquet (most medial in the lacuna vasorum)')}
  <ul>
    <li><strong>Popliteal node:</strong> <strong>superficial</strong> and <strong>deep</strong>.</li>
    <li><strong>Inguinal nodes:</strong>
      <ul>
        <li><strong>Superficial inguinal node</strong> — drains:
          <ul>
            <li>Almost the <u>entire lower limb</u> (except the posterior surface).</li>
            <li><u>Skin.</u></li>
            <li><u>Subcutaneous tissue of the gluteal region.</u></li>
            <li><u>Perineum.</u></li>
            <li><u>Anus.</u></li>
            <li><u>External genital organs.</u></li>
            <li><u>Inferior-anterior abdominal wall.</u></li>
            <li><span class="hl-g"><span class="cl-red"><strong>Lymph node of Cabanas:</strong></span></span> the <span class="cl-red"><strong>sentinel node of the penis</strong></span>.</li>
          </ul>
        </li>
        <li><strong>Deep inguinal node:</strong> drains into the <strong>internal / external iliac nodes</strong>.
          <ul>
            <li><span class="hl-g"><span class="cl-red"><strong>Node of Clocquet:</strong></span></span> the <span class="cl-red"><strong>most medial node in the lacuna vasorum</strong></span>.</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
`;

(function() {
  var ch9 = CHAPTERS.find(function(c){ return c.id === 'ch9'; });
  if (!ch9) return;
  ch9.topics.forEach(function(t) {
    if (window.CH9_CONTENT[t.q]) t.content = window.CH9_CONTENT[t.q];
  });
})();



