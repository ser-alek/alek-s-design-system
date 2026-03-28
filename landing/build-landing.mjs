import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../tokens.json"), "utf8")
);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Forma — Design System</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease,
        box-shadow 200ms ease, fill 200ms ease;
    }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: "Inter", system-ui, sans-serif;
      color: var(--semantic-color-text-body);
      background: var(--semantic-color-background-secondary);
      transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease,
        box-shadow 200ms ease;
    }
    a { color: inherit; text-decoration: none; }
    .wrap {
      width: 100%;
      max-width: var(--layout-max-width);
      margin-inline: auto;
      padding-inline: var(--primitive-space-400);
    }
    .section {
      padding-block: var(--section-padding-y);
    }
    .section-label {
      font-size: var(--primitive-font-size-100);
      font-weight: var(--primitive-font-weight-semibold);
      color: var(--primitive-color-indigo-600);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin: 0 0 var(--primitive-space-200);
    }
    .section-title {
      font-size: var(--primitive-font-size-700);
      font-weight: var(--primitive-font-weight-bold);
      color: var(--semantic-color-text-heading);
      line-height: var(--primitive-line-height-200);
      margin: 0 0 var(--primitive-space-300);
    }
    .section-desc {
      font-size: var(--primitive-font-size-200);
      font-weight: var(--primitive-font-weight-regular);
      color: var(--primitive-color-neutral-700);
      max-width: min(
        100%,
        calc(var(--primitive-space-800) * 11 + var(--primitive-space-600))
      );
      margin: 0 0 var(--primitive-space-600);
      line-height: var(--primitive-line-height-400);
    }
    [data-theme="dark"] .section-desc { color: var(--semantic-color-text-secondary); }
    .two-col {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: var(--primitive-space-700);
      align-items: start;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }
    @media (max-width: 375px) {
      .wrap { padding-inline: var(--primitive-space-300); }
      .hero h1 { font-size: var(--primitive-font-size-700); }
    }
    /* Nav */
    .nav {
      position: sticky;
      top: 0;
      z-index: var(--semantic-z-index-navigation);
      background: var(--semantic-color-background-secondary);
      border-bottom: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      transition: background-color 200ms ease, border-color 200ms ease;
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: var(--primitive-size-700);
      max-width: var(--layout-max-width);
      margin-inline: auto;
      padding-inline: var(--primitive-space-400);
    }
    .nav-brand {
      font-size: var(--primitive-font-size-200);
      font-weight: var(--primitive-font-weight-semibold);
      color: var(--semantic-color-text-primary);
    }
    .nav-links {
      display: flex;
      gap: var(--primitive-space-500);
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    .nav-links a {
      font-size: var(--primitive-font-size-100);
      color: var(--semantic-color-text-secondary);
      transition: color 200ms ease;
    }
    .nav-links a:hover { color: var(--semantic-color-text-active); }
    .theme-toggle {
      display: inline-flex;
      align-items: center;
      gap: var(--primitive-space-200);
      padding: var(--primitive-space-100) var(--primitive-space-300);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-secondary);
      border-radius: var(--semantic-border-radius-default);
      background: var(--semantic-color-background-secondary);
      color: var(--semantic-color-text-primary);
      cursor: pointer;
      font-size: var(--primitive-font-size-100);
      font-family: inherit;
      transition: border-color 200ms ease, background-color 200ms ease, color 200ms ease;
    }
    .theme-toggle:hover {
      border-color: var(--semantic-color-border-hover);
    }
    /* Hero */
    .hero {
      background: var(--hero-bg);
      transition: background-color 200ms ease;
      padding-block: var(--primitive-space-800);
    }
    .hero h1 {
      font-size: var(--primitive-font-size-800);
      font-weight: var(--primitive-font-weight-bold);
      color: var(--semantic-color-text-heading);
      line-height: var(--primitive-line-height-200);
      margin: 0 0 var(--primitive-space-500);
      letter-spacing: -0.02em;
    }
    .hero-pills {
      display: flex;
      flex-wrap: wrap;
      gap: var(--primitive-space-200);
      margin-bottom: var(--primitive-space-400);
    }
    .pill {
      display: inline-block;
      padding: var(--primitive-space-100) var(--primitive-space-300);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-secondary);
      border-radius: var(--semantic-border-radius-pill);
      font-size: var(--primitive-font-size-100);
      font-weight: var(--primitive-font-weight-medium);
      color: var(--semantic-color-text-secondary);
      background: transparent;
    }
    .hero-tagline {
      font-size: var(--primitive-font-size-300);
      color: var(--semantic-color-text-body);
      margin: 0 0 var(--primitive-space-600);
    }
    .btn-cta {
      display: inline-flex;
      align-items: center;
      gap: var(--primitive-space-200);
      padding: var(--primitive-space-300) var(--primitive-space-500);
      background: var(--semantic-color-background-highlight);
      color: var(--semantic-color-text-button-primary);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-button-primary);
      border-radius: var(--semantic-border-radius-default);
      font-size: var(--primitive-font-size-200);
      font-weight: var(--primitive-font-weight-semibold);
      cursor: pointer;
      transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
    }
    .btn-cta:hover {
      background: var(--semantic-color-background-button-primary-hover);
      color: var(--semantic-color-text-button-primary-hover);
    }
    /* Methodology */
    .methodology {
      background: var(--primitive-color-neutral-900);
      color: var(--primitive-color-neutral-100);
      text-align: center;
    }
    .methodology .section-label { color: var(--primitive-color-indigo-300); }
    .methodology .section-title { color: var(--primitive-color-neutral-100); }
    .methodology .section-desc {
      color: var(--primitive-color-neutral-400);
      margin-inline: auto;
    }
    .method-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      margin-top: var(--primitive-space-700);
      text-align: left;
    }
    @media (max-width: 900px) {
      .method-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .method-grid { grid-template-columns: 1fr; }
    }
    .method-cell {
      padding: var(--primitive-space-500);
      border-right: var(--primitive-border-width-thin) solid var(--primitive-color-neutral-800);
    }
    .method-cell:last-child { border-right: none; }
    @media (max-width: 900px) {
      .method-cell:nth-child(2n) { border-right: none; }
      .method-cell { border-bottom: var(--primitive-border-width-thin) solid var(--primitive-color-neutral-800); }
    }
    .method-icon {
      width: var(--primitive-size-400);
      height: var(--primitive-size-400);
      margin-bottom: var(--primitive-space-300);
      color: var(--primitive-color-indigo-400);
    }
    .method-cell h3 {
      margin: 0 0 var(--primitive-space-200);
      font-size: var(--primitive-font-size-300);
      font-weight: var(--primitive-font-weight-semibold);
      color: var(--primitive-color-neutral-100);
    }
    .method-cell p {
      margin: 0;
      font-size: var(--primitive-font-size-200);
      line-height: var(--primitive-line-height-400);
      color: var(--primitive-color-neutral-500);
    }
    /* Color primitives */
    .color-group { margin-bottom: var(--primitive-space-700); }
    .color-group-title {
      font-size: var(--primitive-font-size-300);
      font-weight: var(--primitive-font-weight-semibold);
      color: var(--semantic-color-text-heading);
      margin: 0 0 var(--primitive-space-400);
    }
    .color-row {
      display: grid;
      grid-template-columns: minmax(0, 140px) 1fr;
      gap: var(--primitive-space-500);
      align-items: start;
    }
    @media (max-width: 600px) {
      .color-row { grid-template-columns: 1fr; }
    }
    .color-row-label {
      font-size: var(--primitive-font-size-200);
      font-weight: var(--primitive-font-weight-medium);
      color: var(--semantic-color-text-secondary);
      padding-top: var(--primitive-space-200);
    }
    .swatch-strip {
      display: flex;
      flex-wrap: wrap;
      gap: var(--primitive-space-300);
    }
    .swatch-item { text-align: center; }
    .swatch {
      width: var(--primitive-space-700);
      height: var(--primitive-space-500);
      border-radius: var(--primitive-border-radius-300);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      margin-bottom: var(--primitive-space-100);
    }
    .swatch-name {
      font-size: var(--primitive-font-size-50);
      color: var(--semantic-color-text-weak);
      display: block;
    }
    /* Semantic color table */
    .sem-category { margin-bottom: var(--primitive-space-600); }
    .sem-category h4 {
      margin: 0 0 var(--primitive-space-300);
      font-size: var(--primitive-font-size-200);
      font-weight: var(--primitive-font-weight-semibold);
      color: var(--semantic-color-text-heading);
      text-transform: capitalize;
    }
    .sem-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(--primitive-space-400);
      align-items: center;
      padding: var(--primitive-space-200) 0;
      border-bottom: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      font-size: var(--primitive-font-size-100);
    }
    .sem-row-name { color: var(--semantic-color-text-secondary); word-break: break-all; }
    .sem-row-val {
      display: flex;
      align-items: center;
      gap: var(--primitive-space-200);
    }
    .sem-swatch {
      width: var(--primitive-space-600);
      height: var(--primitive-space-300);
      border-radius: var(--primitive-border-radius-200);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
    }
    .sem-hex { color: var(--semantic-color-text-weak); font-variant-numeric: tabular-nums; }
    /* Typography */
    .type-table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--primitive-font-size-100);
      margin-bottom: var(--primitive-space-400);
    }
    .type-table th, .type-table td {
      text-align: left;
      padding: var(--primitive-space-200) var(--primitive-space-300) var(--primitive-space-200) 0;
      border-bottom: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
    }
    .type-table th { color: var(--semantic-color-text-weak); font-weight: var(--primitive-font-weight-semibold); }
    .type-specimen {
      font-size: var(--primitive-font-size-700);
      font-weight: var(--primitive-font-weight-regular);
      color: var(--semantic-color-text-heading);
      line-height: var(--primitive-line-height-200);
      margin: 0;
    }
    .type-scale-line {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: var(--primitive-space-400);
      border-bottom: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      padding: var(--primitive-space-200) 0;
    }
    .type-scale-label {
      font-size: var(--primitive-font-size-50);
      color: var(--semantic-color-text-weak);
      white-space: nowrap;
    }
    /* Spacing */
    .flow-row {
      display: flex;
      align-items: center;
      gap: var(--primitive-space-300);
      padding: var(--primitive-space-200) 0;
      border-bottom: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      font-size: var(--primitive-font-size-100);
    }
    .flow-num { color: var(--semantic-color-text-weak); width: var(--primitive-size-600); }
    .flow-name { color: var(--semantic-color-text-secondary); flex: 1; }
    .flow-px { color: var(--semantic-color-text-weak); font-variant-numeric: tabular-nums; }
    .bar-chart {
      display: flex;
      align-items: flex-end;
      gap: var(--primitive-space-300);
      min-height: var(--primitive-space-800);
      padding-top: var(--primitive-space-400);
    }
    .bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--primitive-space-200);
    }
    .bar-track {
      width: 100%;
      height: var(--primitive-space-200);
      background: transparent;
      border-radius: var(--primitive-border-radius-100);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bar-fill {
      height: var(--primitive-border-width-medium);
      background: var(--primitive-color-indigo-500);
      border-radius: var(--primitive-border-radius-100);
      width: var(--bar-pct, 50%);
      max-width: 100%;
      transition: none;
    }
    .bar-track { transition: none; }
    .bar-label {
      font-size: var(--primitive-font-size-50);
      color: var(--semantic-color-text-weak);
    }
    /* Radius */
    .radius-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: var(--primitive-space-500);
    }
    .radius-card {
      background: var(--semantic-color-background-modal);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-secondary);
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .radius-meta {
      text-align: center;
      margin-top: var(--primitive-space-200);
      font-size: var(--primitive-font-size-50);
      color: var(--semantic-color-text-weak);
    }
    /* Shadow section */
    .shadow-stage {
      background: var(--semantic-color-background-weak);
      padding: var(--primitive-space-700);
      border-radius: var(--semantic-border-radius-large);
    }
    .shadow-row {
      display: flex;
      flex-wrap: wrap;
      gap: var(--primitive-space-600);
      justify-content: center;
    }
    .shadow-card-wrap {
      text-align: center;
    }
    .shadow-card {
      width: var(--primitive-space-800);
      height: var(--primitive-space-800);
      background: var(--semantic-color-background-modal);
      border-radius: var(--semantic-border-radius-default);
      margin: 0 auto var(--primitive-space-200);
    }
    .shadow-label {
      font-size: var(--primitive-font-size-50);
      color: var(--semantic-color-text-weak);
    }
    /* Button matrix */
    .matrix {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--primitive-font-size-50);
    }
    .matrix th, .matrix td {
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
      padding: var(--primitive-space-300);
      vertical-align: middle;
      text-align: center;
    }
    .matrix th {
      background: var(--semantic-color-background-weak);
      color: var(--semantic-color-text-secondary);
      font-weight: var(--primitive-font-weight-semibold);
    }
    .matrix td:first-child {
      background: var(--semantic-color-background-weak);
      color: var(--semantic-color-text-secondary);
      font-weight: var(--primitive-font-weight-medium);
      text-align: left;
    }
    .matrix-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--primitive-space-200);
      padding: var(--primitive-space-200) var(--primitive-space-400);
      border-radius: var(--semantic-border-radius-default);
      font-size: var(--primitive-font-size-100);
      font-weight: var(--primitive-font-weight-semibold);
      font-family: inherit;
      border: var(--primitive-border-width-thin) solid transparent;
      min-width: var(--primitive-size-800);
      pointer-events: none;
    }
    .matrix-btn i { font-size: var(--semantic-size-icon-button-primary); width: var(--semantic-size-icon-button-primary); }
    /* Tech */
    .tech {
      text-align: center;
      padding-block: var(--primitive-space-800);
    }
    .tech-pills {
      display: flex;
      flex-wrap: wrap;
      gap: var(--primitive-space-300);
      justify-content: center;
      margin-top: var(--primitive-space-500);
    }
    .tech-pill {
      display: inline-flex;
      align-items: center;
      gap: var(--primitive-space-200);
      padding: var(--primitive-space-200) var(--primitive-space-400);
      border: var(--primitive-border-width-thin) solid var(--semantic-color-border-secondary);
      border-radius: var(--semantic-border-radius-pill);
      font-size: var(--primitive-font-size-100);
      color: var(--semantic-color-text-secondary);
      background: var(--semantic-color-background-secondary);
    }
    .tooltip {
      position: relative;
    }
    footer {
      padding: var(--primitive-space-600);
      text-align: center;
      font-size: var(--primitive-font-size-100);
      color: var(--semantic-color-text-weak);
      border-top: var(--primitive-border-width-thin) solid var(--semantic-color-border-weak);
    }
  </style>
</head>
<body data-theme="light">
  <nav class="nav" aria-label="Primary">
    <div class="nav-inner">
      <a class="nav-brand" href="#top">Forma</a>
      <div class="nav-links">
        <a href="#methodology">Methodology</a>
        <a href="#color">Color</a>
        <a href="#typography">Typography</a>
        <a href="#spacing">Spacing</a>
        <a href="#components">Components</a>
        <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
          <span id="theme-label">Dark</span>
        </button>
      </div>
    </div>
  </nav>

  <main id="top">
    <header class="hero">
      <div class="wrap">
        <h1>Forma /<br />Design System</h1>
        <div class="hero-pills" role="list">
          <span class="pill" role="listitem">Primitive</span>
          <span class="pill" role="listitem">Semantic</span>
          <span class="pill" role="listitem">Component</span>
        </div>
        <p class="hero-tagline">Token-based. Scalable. Built from scratch.</p>
        <a class="btn-cta" href="https://github.com" target="_blank" rel="noopener noreferrer">
          View on GitHub
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </header>

    <section class="section methodology" id="methodology">
      <div class="wrap">
        <p class="section-label">Methodology</p>
        <h2 class="section-title">Atomic-Driven Design Methodology</h2>
        <p class="section-desc">Layers build from immutable primitives through semantic intent to reusable patterns. Each tier compounds clarity for product teams.</p>
        <div class="method-grid">
          <div class="method-cell">
            <svg class="method-icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="currentColor" /></svg>
            <h3>Primitive</h3>
            <p>Foundational scales: color ramps, spacing, radii, and type that stay raw and context-free.</p>
          </div>
          <div class="method-cell">
            <svg class="method-icon" viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="6" width="20" height="20" rx="2" fill="currentColor" /></svg>
            <h3>Semantic</h3>
            <p>Named roles that map primitives to meaning—background, border, text, and icon intent.</p>
          </div>
          <div class="method-cell">
            <svg class="method-icon" viewBox="0 0 32 32" aria-hidden="true"><polygon points="16,4 28,28 4,28" fill="currentColor" /></svg>
            <h3>Component</h3>
            <p>Composable UI pieces—buttons, inputs, cards—assembled from semantic tokens only.</p>
          </div>
          <div class="method-cell">
            <svg class="method-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 L26 12 L22 28 H10 L6 12 Z" fill="currentColor" /></svg>
            <h3>Pattern</h3>
            <p>Recurring layouts and flows that repeat component grammar across surfaces.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="color">
      <div class="wrap">
        <h2 class="section-title">Color System</h2>
        <p class="section-desc">Primitive ramps progress light to dark. Semantic aliases resolve per theme for UI chrome.</p>

        <h3 class="color-group-title">Primitives</h3>
        <div id="primitive-colors"></div>

        <h3 class="color-group-title" style="margin-top: var(--primitive-space-800)">Semantic tokens</h3>
        <div id="semantic-colors"></div>
      </div>
    </section>

    <section class="section" id="typography">
      <div class="wrap">
        <h2 class="section-title">Typography</h2>
        <p class="section-desc">Font sizes and weights are tokenized. The specimen and scale below use Inter with values from the primitive layer.</p>
        <div class="two-col">
          <div>
            <h3 class="color-group-title">Tokens</h3>
            <p style="font-size: var(--primitive-font-size-200); color: var(--semantic-color-text-secondary); margin-top: 0;">Font size and weight scales drive all text styles.</p>
            <table class="type-table" id="font-size-table"></table>
            <table class="type-table" id="font-weight-table"></table>
          </div>
          <div>
            <p class="type-specimen" id="type-specimen">Aa</p>
          </div>
        </div>
        <div id="type-scale" style="margin-top: var(--primitive-space-700)"></div>
      </div>
    </section>

    <section class="section" id="spacing">
      <div class="wrap">
        <h2 class="section-title">Spacing and Radius</h2>
        <p class="section-desc">Spacing uses a numbered scale aligned to implementation. Radius tokens shape surfaces from sharp to pill.</p>

        <div class="two-col" style="margin-bottom: var(--primitive-space-800)">
          <div>
            <p class="section-label" style="margin-bottom: var(--primitive-space-200)">Spacing</p>
            <p class="section-desc" style="margin-bottom: var(--primitive-space-400)">Each step maps a scale key to a token name and pixel value for layout and component padding.</p>
            <div id="spacing-flow"></div>
          </div>
          <div>
            <div class="bar-chart" id="spacing-bars" aria-label="Spacing scale chart"></div>
          </div>
        </div>

        <div class="two-col">
          <div>
            <p class="section-label" style="margin-bottom: var(--primitive-space-200)">Border radius</p>
            <p class="section-desc" style="margin-bottom: var(--primitive-space-400)">Radius keys follow the same numeric scale; <code style="font-size: var(--primitive-font-size-100)">full</code> maps to a circular pill.</p>
            <div class="flow-row" style="border: none; padding-top: 0;">
              <span class="flow-num">e.g.</span>
              <span class="flow-name">border-radius.300</span>
              <span class="flow-px" id="radius-example-val"></span>
            </div>
          </div>
          <div class="radius-grid" id="radius-grid"></div>
        </div>
      </div>
    </section>

    <section class="section" id="shadow">
      <div class="wrap">
        <h2 class="section-title">Shadow</h2>
        <p class="section-desc">Shadow color roles pair with space-based elevation. Cards below share size; only shadow color tokens differ.</p>
        <div class="shadow-stage">
          <div class="shadow-row" id="shadow-cards"></div>
        </div>
      </div>
    </section>

    <section class="section" id="components">
      <div class="wrap">
        <h2 class="section-title">Components</h2>
        <p class="section-desc">Button variants and states consume semantic backgrounds, borders, text, and icon colors.</p>
        <div style="overflow-x: auto">
          <table class="matrix" id="button-matrix">
            <thead>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Primary</th>
                <th scope="col">Primary + icon</th>
                <th scope="col">Secondary</th>
                <th scope="col">Secondary + icon</th>
              </tr>
            </thead>
            <tbody id="button-matrix-body"></tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section tech" id="stack">
      <div class="wrap">
        <h2 class="section-title" style="text-align: center">Built with</h2>
        <div class="tech-pills" id="tech-pills"></div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap">Forma Design System · Token documentation</div>
  </footer>

  <script>
    const TOKENS = ${JSON.stringify(tokens)};
  </script>
  <script>
    (function () {
      const root = document.documentElement;
      const body = document.body;

      function walkPrimitive(obj, parts, out) {
        if (!obj || typeof obj !== "object") return;
        if ("value" in obj && obj.type) {
          out["--primitive-" + parts.join("-")] = obj.value;
          return;
        }
        for (const k of Object.keys(obj)) {
          walkPrimitive(obj[k], [...parts, k], out);
        }
      }

      function resolveRef(ref) {
        if (typeof ref !== "string") return ref;
        const m = ref.match(/^\\{([^}]+)\\}$/);
        if (!m) return ref;
        const parts = m[1].split(".");
        let cur = TOKENS.primitive;
        for (const p of parts) {
          cur = cur && cur[p];
        }
        return cur && cur.value !== undefined ? cur.value : ref;
      }

      function resolveChain(ref) {
        let v = ref;
        let guard = 0;
        while (typeof v === "string" && /^\\{[^}]+\\}$/.test(v) && guard++ < 24) {
          v = resolveRef(v);
        }
        return v;
      }

      function semanticColorVars(mode) {
        const out = {};
        const tree = TOKENS.semantic.color;
        for (const cat of Object.keys(tree)) {
          for (const key of Object.keys(tree[cat])) {
            const node = tree[cat][key];
            if (!node || typeof node.value !== "string") continue;
            let ref = node.value;
            if (mode === "dark" && node.$extensions && node.$extensions.dark) {
              ref = node.$extensions.dark;
            }
            const val = resolveChain(ref);
            const cssKey = "--semantic-color-" + cat + "-" + key.replace(/\\./g, "-");
            out[cssKey] = val;
          }
        }
        return out;
      }

      function semanticFlat(groupKey, mode) {
        const out = {};
        const g = TOKENS.semantic[groupKey];
        if (!g) return out;
        for (const key of Object.keys(g)) {
          const node = g[key];
          if (!node || typeof node.value !== "string") continue;
          let ref = node.value;
          if (mode === "dark" && node.$extensions && node.$extensions.dark) {
            ref = node.$extensions.dark;
          }
          out["--semantic-" + groupKey.replace(/\\./g, "-") + "-" + key.replace(/\\./g, "-")] = resolveChain(ref);
        }
        return out;
      }

      function applyPrimitives() {
        const out = {};
        walkPrimitive(TOKENS.primitive, [], out);
        for (const k of Object.keys(out)) {
          root.style.setProperty(k, out[k]);
        }
      }

      function layoutVars() {
        const s800 = resolveChain("{space.800}");
        const s700 = resolveChain("{space.700}");
        const s400 = resolveChain("{space.400}");
        const maxW = "calc(" + s800 + " * 18 + " + s700 + ")";
        const sectionY = "calc(" + s800 + " + " + s400 + ")";
        root.style.setProperty("--layout-max-width", maxW);
        root.style.setProperty("--section-padding-y", sectionY);
      }

      function applyTheme(mode) {
        body.setAttribute("data-theme", mode);
        const sem = Object.assign(
          {},
          semanticColorVars(mode),
          semanticFlat("border-radius", mode),
          semanticFlat("size", mode),
          semanticFlat("z-index", mode)
        );
        for (const k of Object.keys(sem)) {
          root.style.setProperty(k, sem[k]);
        }
        const n100 = resolveChain("{color.neutral.100}");
        const n900 = resolveChain("{color.neutral.900}");
        root.style.setProperty("--hero-bg", mode === "light" ? n100 : n900);
        const toggleIcon = document.querySelector("#theme-toggle i");
        const toggleLabel = document.getElementById("theme-label");
        if (toggleIcon && toggleLabel) {
          toggleIcon.className = mode === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
          toggleLabel.textContent = mode === "light" ? "Dark" : "Light";
        }
      }

      function parsePx(val) {
        const m = String(val).match(/([0-9.]+)px/);
        return m ? parseFloat(m[1]) : 0;
      }

      function renderPrimitiveColors() {
        const groups = ["neutral", "indigo", "amber", "success", "error", "warning"];
        const el = document.getElementById("primitive-colors");
        el.innerHTML = "";
        for (const g of groups) {
          const colors = TOKENS.primitive.color[g];
          const keys = Object.keys(colors).sort((a, b) => Number(a) - Number(b));
          const row = document.createElement("div");
          row.className = "color-group";
          const inner = document.createElement("div");
          inner.className = "color-row";
          const lab = document.createElement("div");
          lab.className = "color-row-label";
          lab.textContent = g;
          const strip = document.createElement("div");
          strip.className = "swatch-strip";
          for (const k of keys) {
            const hex = colors[k].value;
            const item = document.createElement("div");
            item.className = "swatch-item";
            const sw = document.createElement("div");
            sw.className = "swatch tooltip";
            sw.style.background = hex;
            sw.title = hex;
            const nm = document.createElement("span");
            nm.className = "swatch-name";
            nm.textContent = g + "." + k;
            item.appendChild(sw);
            item.appendChild(nm);
            strip.appendChild(item);
          }
          inner.appendChild(lab);
          inner.appendChild(strip);
          row.appendChild(inner);
          el.appendChild(row);
        }
      }

      const SEM_GROUPS = [
        ["background", TOKENS.semantic.color.background],
        ["border", TOKENS.semantic.color.border],
        ["text", TOKENS.semantic.color.text],
        ["icon", TOKENS.semantic.color.icon],
      ];

      function renderSemanticColors() {
        const container = document.getElementById("semantic-colors");
        container.innerHTML = "";
        for (const [title, group] of SEM_GROUPS) {
          const wrap = document.createElement("div");
          wrap.className = "sem-category";
          const h = document.createElement("h4");
          h.textContent = title;
          wrap.appendChild(h);
          const keys = Object.keys(group).sort();
          for (const k of keys) {
            const row = document.createElement("div");
            row.className = "sem-row";
            const name = document.createElement("div");
            name.className = "sem-row-name";
            name.textContent = "color." + title + "." + k;
            const valCell = document.createElement("div");
            valCell.className = "sem-row-val";
            const sw = document.createElement("div");
            sw.className = "sem-swatch";
            const mode = body.getAttribute("data-theme") || "light";
            const node = group[k];
            let ref = node.value;
            if (mode === "dark" && node.$extensions && node.$extensions.dark) ref = node.$extensions.dark;
            const hex = resolveChain(ref);
            sw.style.background = hex;
            sw.title = hex;
            const hx = document.createElement("span");
            hx.className = "sem-hex";
            hx.textContent = hex;
            valCell.appendChild(sw);
            valCell.appendChild(hx);
            row.appendChild(name);
            row.appendChild(valCell);
            wrap.appendChild(row);
          }
          container.appendChild(wrap);
        }
      }

      function renderFontTables() {
        const fs = TOKENS.primitive["font-size"];
        const fw = TOKENS.primitive["font-weight"];
        const fsBody = document.getElementById("font-size-table");
        fsBody.innerHTML = "<thead><tr><th>Name</th><th>Value</th></tr></thead><tbody></tbody>";
        const fsTbody = fsBody.querySelector("tbody");
        for (const k of Object.keys(fs).sort((a, b) => Number(a) - Number(b))) {
          const tr = document.createElement("tr");
          tr.innerHTML = "<td>font-size." + k + "</td><td>" + fs[k].value + "</td>";
          fsTbody.appendChild(tr);
        }
        const fwBody = document.getElementById("font-weight-table");
        fwBody.innerHTML = "<thead><tr><th>Name</th><th>Value</th></tr></thead><tbody></tbody>";
        const fwTbody = fwBody.querySelector("tbody");
        for (const k of Object.keys(fw)) {
          const tr = document.createElement("tr");
          tr.innerHTML = "<td>font-weight." + k + "</td><td>" + fw[k].value + "</td>";
          fwTbody.appendChild(tr);
        }
        const specimen = document.getElementById("type-specimen");
        specimen.style.fontSize = TOKENS.primitive["font-size"]["700"].value;
      }

      function renderTypeScale() {
        const el = document.getElementById("type-scale");
        const fs = TOKENS.primitive["font-size"];
        const keys = Object.keys(fs).sort((a, b) => Number(b) - Number(a));
        el.innerHTML = "";
        for (const k of keys) {
          const line = document.createElement("div");
          line.className = "type-scale-line";
          const text = document.createElement("span");
          text.textContent = "The quick brown fox";
          text.style.fontSize = fs[k].value;
          text.style.color = "var(--semantic-color-text-heading)";
          const lab = document.createElement("span");
          lab.className = "type-scale-label";
          lab.textContent = "font-size." + k + " · " + fs[k].value;
          line.appendChild(text);
          line.appendChild(lab);
          el.appendChild(line);
        }
      }

      function renderSpacing() {
        const space = TOKENS.primitive.space;
        const flow = document.getElementById("spacing-flow");
        flow.innerHTML = "";
        const keys = Object.keys(space).sort((a, b) => Number(a) - Number(b));
        const pxVals = keys.map((k) => parsePx(space[k].value));
        const maxPx = Math.max.apply(null, pxVals);
        const bars = document.getElementById("spacing-bars");
        bars.innerHTML = "";
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const row = document.createElement("div");
          row.className = "flow-row";
          row.innerHTML =
            '<span class="flow-num">#' +
            k +
            '</span><span class="flow-name">space.' +
            k +
            '</span><span class="flow-px">' +
            space[k].value +
            "</span>";
          flow.appendChild(row);
          const bi = document.createElement("div");
          bi.className = "bar-item";
          const track = document.createElement("div");
          track.className = "bar-track";
          const fill = document.createElement("div");
          fill.className = "bar-fill";
          const pct = maxPx ? (pxVals[i] / maxPx) * 100 : 0;
          fill.style.width = pct + "%";
          track.appendChild(fill);
          const bl = document.createElement("div");
          bl.className = "bar-label";
          bl.textContent = space[k].value;
          bi.appendChild(track);
          bi.appendChild(bl);
          bars.appendChild(bi);
        }
      }

      function renderRadius() {
        const br = TOKENS.primitive["border-radius"];
        const grid = document.getElementById("radius-grid");
        grid.innerHTML = "";
        const keys = Object.keys(br);
        const order = keys.sort((a, b) => {
          if (a === "full") return 1;
          if (b === "full") return -1;
          return Number(a) - Number(b);
        });
        document.getElementById("radius-example-val").textContent = br["300"].value;
        for (const k of order) {
          const wrap = document.createElement("div");
          const card = document.createElement("div");
          card.className = "radius-card";
          card.style.borderRadius = br[k].value;
          const meta = document.createElement("div");
          meta.className = "radius-meta";
          meta.textContent = "border-radius." + k + " · " + br[k].value;
          wrap.appendChild(card);
          wrap.appendChild(meta);
          grid.appendChild(wrap);
        }
      }

      function renderShadows() {
        const shadowColors = TOKENS.semantic.color.shadow;
        const row = document.getElementById("shadow-cards");
        row.innerHTML = "";
        const keys = Object.keys(shadowColors);
        const y = resolveChain("{space.200}");
        const blur = resolveChain("{space.500}");
        const spread = resolveChain("{space.100}");
        for (const k of keys) {
          const node = shadowColors[k];
          const mode = body.getAttribute("data-theme") || "light";
          let ref = node.value;
          if (mode === "dark" && node.$extensions && node.$extensions.dark) ref = node.$extensions.dark;
          const c = resolveChain(ref);
          const wrap = document.createElement("div");
          wrap.className = "shadow-card-wrap";
          const card = document.createElement("div");
          card.className = "shadow-card";
          card.style.boxShadow =
            "0 " + y + " " + blur + " " + spread + " " + c;
          const lab = document.createElement("div");
          lab.className = "shadow-label";
          lab.textContent = "shadow." + k;
          wrap.appendChild(card);
          wrap.appendChild(lab);
          row.appendChild(wrap);
        }
      }

      function getSem(name) {
        return getComputedStyle(root).getPropertyValue(name).trim();
      }

      function matrixButton(state, col) {
        const primary = col === "p" || col === "pi";
        const icon = col === "pi" || col === "si";
        const wrap = document.createElement("span");
        wrap.className = "matrix-btn";
        if (primary) {
          wrap.style.borderStyle = "solid";
          wrap.style.borderWidth = resolveChain("{border-width.thin}");
          if (state === "default") {
            wrap.style.background = getSem("--semantic-color-background-highlight");
            wrap.style.color = getSem("--semantic-color-text-button-primary");
            wrap.style.borderColor = getSem("--semantic-color-border-button-primary");
          } else if (state === "hover") {
            wrap.style.background = getSem("--semantic-color-background-button-primary-hover");
            wrap.style.color = getSem("--semantic-color-text-button-primary-hover");
            wrap.style.borderColor = getSem("--semantic-color-border-button-primary");
          } else if (state === "focus") {
            wrap.style.background = getSem("--semantic-color-background-button-primary-focus");
            wrap.style.color = getSem("--semantic-color-text-button-primary");
            wrap.style.borderColor = getSem("--semantic-color-border-focus");
            wrap.style.boxShadow =
              "0 0 0 " + resolveChain("{space.100}") + " " + getSem("--semantic-color-border-focus");
          } else if (state === "pressed") {
            wrap.style.background = getSem("--semantic-color-background-button-primary-pressed");
            wrap.style.color = getSem("--semantic-color-text-button-primary");
            wrap.style.borderColor = getSem("--semantic-color-border-active");
          } else if (state === "disabled") {
            wrap.style.background = getSem("--semantic-color-background-inactive");
            wrap.style.color = getSem("--semantic-color-text-button-primary-disabled");
            wrap.style.borderColor = getSem("--semantic-color-border-disabled");
            wrap.style.opacity = "1";
          }
          if (icon) {
            const i = document.createElement("i");
            i.className = "fa-solid fa-arrow-right";
            i.setAttribute("aria-hidden", "true");
            i.style.color =
              state === "disabled"
                ? getSem("--semantic-color-icon-disabled")
                : getSem("--semantic-color-icon-button-primary");
            wrap.appendChild(i);
          }
          wrap.appendChild(document.createTextNode("Button"));
        } else {
          if (state === "default") {
            wrap.style.background = getSem("--semantic-color-background-secondary");
            wrap.style.color = getSem("--semantic-color-text-button-secondary");
            wrap.style.borderColor = getSem("--semantic-color-border-button-secondary");
          } else if (state === "hover") {
            wrap.style.background = getSem("--semantic-color-background-button-secondary-hover");
            wrap.style.color = getSem("--semantic-color-text-button-secondary-hover");
            wrap.style.borderColor = getSem("--semantic-color-border-hover");
          } else if (state === "focus") {
            wrap.style.background = getSem("--semantic-color-background-button-secondary-focus");
            wrap.style.color = getSem("--semantic-color-text-inverse");
            wrap.style.borderColor = getSem("--semantic-color-border-focus");
            wrap.style.boxShadow =
              "0 0 0 " + resolveChain("{space.100}") + " " + getSem("--semantic-color-border-focus");
          } else if (state === "pressed") {
            wrap.style.background = getSem("--semantic-color-background-button-secondary-pressed");
            wrap.style.color = getSem("--semantic-color-text-button-secondary");
            wrap.style.borderColor = getSem("--semantic-color-border-active");
          } else if (state === "disabled") {
            wrap.style.background = getSem("--semantic-color-background-inactive");
            wrap.style.color = getSem("--semantic-color-text-button-secondary-disabled");
            wrap.style.borderColor = getSem("--semantic-color-border-disabled");
          }
          wrap.style.borderWidth = resolveChain("{border-width.thin}");
          wrap.style.borderStyle = "solid";
          if (icon) {
            const i = document.createElement("i");
            i.className = "fa-solid fa-arrow-right";
            i.setAttribute("aria-hidden", "true");
            i.style.color =
              state === "disabled"
                ? getSem("--semantic-color-icon-disabled")
                : getSem("--semantic-color-icon-button-secondary");
            wrap.appendChild(i);
          }
          wrap.appendChild(document.createTextNode("Button"));
        }
        return wrap;
      }

      function renderMatrix() {
        const tbody = document.getElementById("button-matrix-body");
        tbody.innerHTML = "";
        const states = [
          ["default", "Default"],
          ["hover", "Hover"],
          ["focus", "Focus"],
          ["pressed", "Pressed"],
          ["disabled", "Disabled"],
        ];
        const cols = [
          ["p", "Primary"],
          ["pi", "Primary + icon"],
          ["s", "Secondary"],
          ["si", "Secondary + icon"],
        ];
        for (const [sid, slabel] of states) {
          const tr = document.createElement("tr");
          const th = document.createElement("th");
          th.scope = "row";
          th.textContent = slabel;
          tr.appendChild(th);
          for (const [cid] of cols) {
            const td = document.createElement("td");
            td.appendChild(matrixButton(sid, cid));
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        }
      }

      function renderTech() {
        const el = document.getElementById("tech-pills");
        const items = [
          ["Figma", "fa-brands fa-figma"],
          ["Token Studio", "fa-solid fa-swatchbook"],
          ["GitHub", "fa-brands fa-github"],
          ["CSS Custom Properties", "fa-brands fa-css3-alt"],
          ["Cursor", "fa-solid fa-terminal"],
          ["Claude", "fa-solid fa-robot"],
        ];
        el.innerHTML = "";
        for (const [name, ic] of items) {
          const p = document.createElement("span");
          p.className = "tech-pill";
          const i = document.createElement("i");
          i.className = ic;
          i.setAttribute("aria-hidden", "true");
          p.appendChild(i);
          p.appendChild(document.createTextNode(" " + name));
          el.appendChild(p);
        }
      }

      function init() {
        applyPrimitives();
        layoutVars();
        let stored = null;
        try {
          stored = localStorage.getItem("forma-theme");
        } catch (e) {}
        applyTheme(stored === "dark" || stored === "light" ? stored : "light");
        renderPrimitiveColors();
        renderSemanticColors();
        renderFontTables();
        renderTypeScale();
        renderSpacing();
        renderRadius();
        renderShadows();
        renderMatrix();
        renderTech();

        document.getElementById("theme-toggle").addEventListener("click", function () {
          const next = body.getAttribute("data-theme") === "light" ? "dark" : "light";
          applyTheme(next);
          try {
            localStorage.setItem("forma-theme", next);
          } catch (e) {}
          renderSemanticColors();
          renderShadows();
          renderMatrix();
        });
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "index.html"), html, "utf8");
console.log("Wrote landing/index.html");
