---
layout: null
title: "Logic Design Lab | RF, Professional Audio and Electronic Design"
description: "Independent electronic design practice by Michelangelo Carrozzo, focused on RF, professional audio, industrial electronics and EMC."
permalink: /
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Michelangelo Carrozzo">
  <meta name="description" content="Independent electronic design practice focused on RF, professional audio, industrial electronics and EMC.">
  <meta name="theme-color" content="#101412">

  <meta property="og:title" content="Logic Design Lab">
  <meta property="og:description" content="RF, professional audio and industrial electronic design by Michelangelo Carrozzo.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://logicdesignlab.com">

  <title>Logic Design Lab | RF, Professional Audio and Electronic Design</title>

  <style>
    :root {
      --ink: #17201c;
      --muted: #657069;
      --paper: #f2f1eb;
      --paper-2: #e8e8e0;
      --panel: rgba(255, 255, 255, 0.48);
      --line: rgba(23, 32, 28, 0.17);
      --accent: #1c6549;
      --accent-dark: #124633;
      --dark: #101412;
      --dark-muted: #aeb9b2;
      --max-width: 1180px;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      color: var(--ink);
      background:
        linear-gradient(rgba(23, 32, 28, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(23, 32, 28, 0.035) 1px, transparent 1px),
        var(--paper);
      background-size: 32px 32px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
      line-height: 1.65;
      text-rendering: optimizeLegibility;
    }

    a {
      color: inherit;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.2em;
    }

    a:hover {
      color: var(--accent);
    }

    .mono,
    .eyebrow,
    .section-index,
    nav,
    .tag,
    .detail-label,
    footer {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
    }

    .container {
      width: min(calc(100% - 48px), var(--max-width));
      margin: 0 auto;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 20;
      border-bottom: 1px solid var(--line);
      background: rgba(242, 241, 235, 0.9);
      backdrop-filter: blur(14px);
    }

    .header-inner {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--ink);
      font-weight: 700;
      letter-spacing: -0.02em;
      text-decoration: none;
    }

    .brand-mark {
      width: 30px;
      height: 30px;
      border: 1px solid var(--ink);
      display: grid;
      place-items: center;
      background: var(--paper);
    }

    .brand-mark svg {
      width: 22px;
      height: 22px;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 24px;
      font-size: 0.76rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    nav a {
      text-decoration: none;
    }

    .hero {
      min-height: calc(100vh - 72px);
      display: grid;
      align-items: center;
      padding: 96px 0 80px;
      border-bottom: 1px solid var(--line);
    }

    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
      align-items: center;
      gap: clamp(56px, 8vw, 112px);
    }

    .eyebrow {
      margin: 0 0 28px;
      color: var(--accent-dark);
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      max-width: 820px;
      margin-bottom: 32px;
      font-size: clamp(3.2rem, 8vw, 7.8rem);
      font-weight: 620;
      line-height: 0.91;
      letter-spacing: -0.072em;
    }

    .hero-lead {
      max-width: 710px;
      margin-bottom: 42px;
      color: #3d4842;
      font-size: clamp(1.05rem, 2vw, 1.32rem);
      line-height: 1.65;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 20px;
      border: 1px solid var(--ink);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-decoration: none;
      text-transform: uppercase;
      transition: background 150ms ease, color 150ms ease, transform 150ms ease;
    }

    .button:hover {
      color: var(--paper);
      background: var(--ink);
      transform: translateY(-1px);
    }

    .button-primary {
      color: var(--paper);
      background: var(--ink);
    }

    .button-primary:hover {
      background: var(--accent-dark);
    }

    .scope-line {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      margin-top: 46px;
    }

    .tag {
      padding: 7px 10px;
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.28);
      color: var(--muted);
      font-size: 0.7rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .instrument {
      position: relative;
      padding: 24px;
      border: 1px solid var(--line);
      background: var(--dark);
      box-shadow: 18px 18px 0 rgba(23, 32, 28, 0.07);
    }

    .instrument::before {
      content: "RF / AUDIO ANALYSIS";
      display: block;
      margin-bottom: 18px;
      color: var(--dark-muted);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.65rem;
      letter-spacing: 0.14em;
    }

    .instrument svg {
      display: block;
      width: 100%;
      height: auto;
    }

    .instrument-readout {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 20px;
      border-top: 1px solid rgba(222, 238, 229, 0.18);
    }

    .instrument-readout div {
      padding: 16px 10px 0 0;
    }

    .instrument-readout strong,
    .instrument-readout span {
      display: block;
    }

    .instrument-readout strong {
      color: #d7e9df;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.78rem;
      font-weight: 500;
    }

    .instrument-readout span {
      margin-top: 3px;
      color: #7e9186;
      font-size: 0.67rem;
      text-transform: uppercase;
    }

    section {
      scroll-margin-top: 92px;
    }

    .section {
      padding: 112px 0;
      border-bottom: 1px solid var(--line);
    }

    .section-heading {
      display: grid;
      grid-template-columns: 130px minmax(0, 1fr);
      gap: 32px;
      margin-bottom: 72px;
    }

    .section-index {
      color: var(--accent);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }

    h2 {
      max-width: 820px;
      margin-bottom: 0;
      font-size: clamp(2.2rem, 5vw, 4.6rem);
      font-weight: 580;
      line-height: 1.02;
      letter-spacing: -0.055em;
    }

    .about-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(270px, 0.7fr);
      gap: clamp(48px, 9vw, 130px);
      padding-left: 162px;
    }

    .large-copy {
      max-width: 720px;
      font-size: clamp(1.25rem, 2.4vw, 1.8rem);
      line-height: 1.55;
      letter-spacing: -0.02em;
    }

    .body-copy {
      max-width: 650px;
      color: var(--muted);
    }

    .facts {
      margin: 0;
      border-top: 1px solid var(--line);
    }

    .fact {
      display: grid;
      grid-template-columns: 112px 1fr;
      gap: 20px;
      padding: 16px 0;
      border-bottom: 1px solid var(--line);
    }

    .fact dt,
    .fact dd {
      margin: 0;
    }

    .fact dt {
      color: var(--muted);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .fact dd {
      font-size: 0.92rem;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
    }

    .expertise-card {
      min-height: 410px;
      padding: clamp(28px, 5vw, 52px);
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      background: var(--panel);
    }

    .card-number {
      display: block;
      margin-bottom: 64px;
      color: var(--accent);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.72rem;
    }

    h3 {
      margin-bottom: 22px;
      font-size: clamp(1.7rem, 3vw, 2.6rem);
      font-weight: 580;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .expertise-card p {
      max-width: 530px;
      color: var(--muted);
    }

    .technical-list {
      margin: 30px 0 0;
      padding: 0;
      list-style: none;
      border-top: 1px solid var(--line);
    }

    .technical-list li {
      position: relative;
      padding: 10px 0 10px 18px;
      border-bottom: 1px solid var(--line);
      font-size: 0.88rem;
    }

    .technical-list li::before {
      content: "·";
      position: absolute;
      left: 2px;
      color: var(--accent);
      font-weight: 700;
    }

    .method {
      background: var(--dark);
      color: #eef2ef;
    }

    .method .section-heading {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .method .section-index {
      color: #86b79f;
    }

    .method-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      border-top: 1px solid rgba(255, 255, 255, 0.17);
      border-left: 1px solid rgba(255, 255, 255, 0.17);
    }

    .method-step {
      min-height: 260px;
      padding: 30px;
      border-right: 1px solid rgba(255, 255, 255, 0.17);
      border-bottom: 1px solid rgba(255, 255, 255, 0.17);
    }

    .method-step span {
      color: #86b79f;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", monospace;
      font-size: 0.7rem;
    }

    .method-step h3 {
      margin-top: 60px;
      font-size: 1.35rem;
      letter-spacing: -0.02em;
    }

    .method-step p {
      margin-bottom: 0;
      color: var(--dark-muted);
      font-size: 0.88rem;
    }

    .contact {
      min-height: 72vh;
      display: grid;
      align-items: center;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: end;
      gap: 60px;
    }

    .contact h2 {
      max-width: 900px;
      margin-bottom: 30px;
    }

    .contact p {
      max-width: 660px;
      color: var(--muted);
      font-size: 1.08rem;
    }

    .contact-details {
      min-width: 290px;
      border-top: 1px solid var(--line);
    }

    .contact-detail {
      padding: 16px 0;
      border-bottom: 1px solid var(--line);
    }

    .detail-label {
      display: block;
      margin-bottom: 5px;
      color: var(--muted);
      font-size: 0.67rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .contact-detail a {
      overflow-wrap: anywhere;
    }

    footer {
      padding: 26px 0;
      background: var(--dark);
      color: var(--dark-muted);
      font-size: 0.7rem;
      letter-spacing: 0.035em;
    }

    .footer-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 18px 32px;
    }

    footer a {
      color: #dbe5df;
    }

    @media (max-width: 900px) {
      .hero {
        min-height: auto;
      }

      .hero-grid,
      .about-grid,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .hero-grid {
        gap: 72px;
      }

      .instrument {
        max-width: 620px;
      }

      .about-grid {
        padding-left: 0;
      }

      .expertise-grid,
      .method-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 650px) {
      .container {
        width: min(calc(100% - 30px), var(--max-width));
      }

      .site-header {
        position: static;
      }

      .header-inner {
        min-height: 64px;
      }

      nav {
        display: none;
      }

      .hero {
        padding: 72px 0 64px;
      }

      h1 {
        font-size: clamp(3.15rem, 18vw, 5.2rem);
      }

      .section {
        padding: 82px 0;
      }

      .section-heading {
        grid-template-columns: 1fr;
        gap: 14px;
        margin-bottom: 48px;
      }

      .expertise-grid,
      .method-grid {
        grid-template-columns: 1fr;
      }

      .expertise-card {
        min-height: auto;
      }

      .card-number {
        margin-bottom: 42px;
      }

      .instrument-readout {
        grid-template-columns: 1fr;
      }

      .fact {
        grid-template-columns: 90px 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      .button {
        transition: none;
      }
    }
  </style>
</head>

<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Logic Design Lab home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M2 12h3l2.2-5 4.1 10 2.4-6 2 4H22" stroke="currentColor" stroke-width="1.4"/>
          </svg>
        </span>
        <span>Logic Design Lab</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#method">Method</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Independent electronic design practice · Est. 2007</p>

          <h1 id="hero-title">Electronic design for difficult signals.</h1>

          <p class="hero-lead">
            RF, professional audio and industrial electronics by Michelangelo
            Carrozzo. Architecture, circuit design, measurement and compliance,
            handled directly from first principles to production.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#expertise">Technical expertise</a>
            <a class="button" href="mailto:logicdesignlabs@gmail.com">Email</a>
          </div>

          <div class="scope-line" aria-label="Fields of expertise">
            <span class="tag">RF &amp; wireless</span>
            <span class="tag">Professional audio</span>
            <span class="tag">Analog &amp; mixed-signal</span>
            <span class="tag">EMC</span>
            <span class="tag">Industrial electronics</span>
          </div>
        </div>

        <div class="instrument" aria-label="Decorative RF and audio measurement display">
          <svg viewBox="0 0 560 420" role="img" aria-labelledby="scope-title scope-desc">
            <title id="scope-title">RF spectrum and audio waveform</title>
            <desc id="scope-desc">A technical illustration representing measured signals.</desc>

            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#294238" stroke-width="0.6"/>
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3c5c4f" stroke-width="1"/>
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.3" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <rect width="560" height="420" fill="#0c120f"/>
            <rect x="20" y="20" width="520" height="380" fill="url(#grid)" stroke="#31473e"/>

            <g opacity="0.34" stroke="#7aa98f">
              <line x1="280" y1="20" x2="280" y2="400"/>
              <line x1="20" y1="210" x2="540" y2="210"/>
            </g>

            <path
              d="M20 307
                 L55 306 L73 302 L91 305 L112 294 L128 301
                 L148 283 L163 299 L180 270 L195 300
                 L213 250 L229 297 L247 222 L260 293
                 L276 169 L288 294 L301 238 L316 298
                 L333 260 L350 301 L371 278 L389 302
                 L412 291 L437 304 L462 297 L488 306 L540 307"
              fill="none"
              stroke="#75d29e"
              stroke-width="2.2"
              filter="url(#glow)"
            />

            <path
              d="M20 115
                 C45 115, 45 70, 70 70
                 S95 160, 120 160
                 S145 76, 170 76
                 S195 151, 220 151
                 S245 89, 270 89
                 S295 140, 320 140
                 S345 98, 370 98
                 S395 132, 420 132
                 S445 105, 470 105
                 S495 126, 540 126"
              fill="none"
              stroke="#d5e7dd"
              stroke-width="1.5"
              opacity="0.85"
            />

            <g fill="#7b9185" font-family="monospace" font-size="11">
              <text x="30" y="43">REF -10 dBm</text>
              <text x="412" y="43">SPAN 100 MHz</text>
              <text x="30" y="390">CENTER 433.92 MHz</text>
              <text x="432" y="390">RBW 10 kHz</text>
            </g>
          </svg>

          <div class="instrument-readout">
            <div>
              <strong>RF</strong>
              <span>signal integrity</span>
            </div>
            <div>
              <strong>µV → W</strong>
              <span>signal chain</span>
            </div>
            <div>
              <strong>LAB</strong>
              <span>measure first</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container">
        <div class="section-heading">
          <span class="section-index">01 / About</span>
          <h2 id="about-title">Experience is useful only when it improves the next design.</h2>
        </div>

        <div class="about-grid">
          <div>
            <p class="large-copy">
              Logic Design Lab is the independent engineering practice of
              Michelangelo Carrozzo. Established in 2007, it continues a career
              in electronic and wireless design that began in the late 1980s.
            </p>

            <p class="body-copy">
              Work is deliberately direct and hands-on. The same person follows
              the technical problem from initial architecture and circuit design
              through prototype bring-up, measurement, compliance and production
              support. Decisions are based on analysis, laboratory evidence and
              practical manufacturing experience.
            </p>

            <p class="body-copy">
              The laboratory is equipped for RF, audio, mixed-signal and EMC
              investigation, supporting both new developments and the diagnosis
              of existing products.
            </p>
          </div>

          <dl class="facts">
            <div class="fact">
              <dt>Practice</dt>
              <dd>Independent electronic design</dd>
            </div>
            <div class="fact">
              <dt>Founded</dt>
              <dd>2007</dd>
            </div>
            <div class="fact">
              <dt>Focus</dt>
              <dd>RF, professional audio, EMC</dd>
            </div>
            <div class="fact">
              <dt>Location</dt>
              <dd>Bologna, Italy</dd>
            </div>
            <div class="fact">
              <dt>Approach</dt>
              <dd>Design, measure, refine</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section" id="expertise" aria-labelledby="expertise-title">
      <div class="container">
        <div class="section-heading">
          <span class="section-index">02 / Expertise</span>
          <h2 id="expertise-title">Selected fields of work.</h2>
        </div>

        <div class="expertise-grid">
          <article class="expertise-card">
            <span class="card-number">A / RF</span>
            <h3>RF and wireless circuit design</h3>
            <p>
              Custom radio solutions and redesign of existing products, from
              low-frequency radio to microwave front ends. Experience includes
              broadcast, ISM, WLAN and cellular applications, with attention to
              real-world performance, repeatability and regulatory constraints.
            </p>
            <ul class="technical-list">
              <li>Transmitters, receivers and transceivers</li>
              <li>Matching networks, filters and RF signal paths</li>
              <li>Low-noise and power stages</li>
              <li>RF measurement, tuning and fault analysis</li>
              <li>Antenna interface and integration review</li>
            </ul>
          </article>

          <article class="expertise-card">
            <span class="card-number">B / AUDIO</span>
            <h3>Professional audio electronics</h3>
            <p>
              Low-noise, low-distortion electronics for professional audio
              equipment. The objective is not merely a good schematic, but a
              stable signal path whose measured and audible behaviour survives
              layout, grounding, power supply and production tolerances.
            </p>
            <ul class="technical-list">
              <li>Microphone, line and instrument front ends</li>
              <li>Analog and mixed-signal audio paths</li>
              <li>ADC, DAC, clocking and DSP integration</li>
              <li>Low-noise power supplies</li>
              <li>Grounding, shielding, noise and distortion analysis</li>
            </ul>
          </article>

          <article class="expertise-card">
            <span class="card-number">C / DESIGN</span>
            <h3>Electronic product design</h3>
            <p>
              Development of electronic devices from product concept to
              production release. Design for manufacturability and testability
              are considered from the beginning rather than added at the end.
            </p>
            <ul class="technical-list">
              <li>Product concept and technical specifications</li>
              <li>Analog, digital and mixed-signal hardware</li>
              <li>Embedded firmware and software integration</li>
              <li>Prototype manufacture, bring-up and verification</li>
              <li>Certification preparation and production support</li>
            </ul>
          </article>

          <article class="expertise-card">
            <span class="card-number">D / EMC</span>
            <h3>EMC review and troubleshooting</h3>
            <p>
              Electromagnetic compatibility work throughout the design cycle,
              from early schematic and PCB review to the diagnosis of emissions
              or immunity failures. Support can continue on site during
              laboratory testing when direct investigation is useful.
            </p>
            <ul class="technical-list">
              <li>Schematic and PCB layout review</li>
              <li>Pre-compliance assessment</li>
              <li>Emissions and susceptibility debugging</li>
              <li>Filtering, shielding and grounding corrections</li>
              <li>Support during EMC laboratory tests</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section method" id="method" aria-labelledby="method-title">
      <div class="container">
        <div class="section-heading">
          <span class="section-index">03 / Method</span>
          <h2 id="method-title">A practical engineering process.</h2>
        </div>

        <div class="method-grid">
          <article class="method-step">
            <span>01</span>
            <h3>Define</h3>
            <p>
              Reduce the product idea to measurable requirements, interfaces,
              constraints and failure modes.
            </p>
          </article>

          <article class="method-step">
            <span>02</span>
            <h3>Design</h3>
            <p>
              Select the architecture and develop the circuit around signal
              integrity, manufacturability and compliance.
            </p>
          </article>

          <article class="method-step">
            <span>03</span>
            <h3>Measure</h3>
            <p>
              Bring up prototypes methodically. Compare actual behaviour with
              calculations, simulations and specifications.
            </p>
          </article>

          <article class="method-step">
            <span>04</span>
            <h3>Release</h3>
            <p>
              Refine the product for certification and repeatable production,
              with technical support where it matters.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <span class="section-index">04 / Contact</span>
          <h2 id="contact-title">Selected design, review and troubleshooting work.</h2>
          <p>
            For technical enquiries, describe the product, the present design
            stage and the problem to be solved.
          </p>
          <a class="button button-primary" href="mailto:logicdesignlabs@gmail.com">
            logicdesignlabs@gmail.com
          </a>
        </div>

        <div class="contact-details">
          <div class="contact-detail">
            <span class="detail-label">Engineer</span>
            Michelangelo Carrozzo
          </div>
          <div class="contact-detail">
            <span class="detail-label">Location</span>
            Bologna, Italy
          </div>
          <div class="contact-detail">
            <span class="detail-label">Fields</span>
            RF · Professional audio · EMC
          </div>
          <div class="contact-detail">
            <span class="detail-label">Source</span>
            <a href="{{ site.github.repository_url }}">GitHub repository</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <span>
        © {{ site.time | date: "%Y" }}
        Logic Design Consulting di Carrozzo Michelangelo
      </span>
      <span>
        <a href="mailto:logicdesignlabs@gmail.com">Email</a>
        ·
        <a href="{{ site.github.repository_url }}">GitHub</a>
      </span>
    </div>
  </footer>
</body>
</html>
