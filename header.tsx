<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 80" width="394" height="80" role="img" aria-label="Login button with avatar and lock">
  <style>
    :root{
      --bg: #ffffff;       /* canvas background (transparent if you prefer) */
      --panel: #0b7df0;    /* left panel color (avatar background) */
      --accent: #0a66d9;   /* lock accent */
      --text: #0b1220;     /* main text color */
      --icon: #ffffff;     /* icon color on panel */
    }
    .label{ font: 700 28px/1 "Inter", "Segoe UI", Arial, sans-serif; fill: var(--text); }
    .small{ font: 500 12px/1 "Inter", Arial, sans-serif; fill: #6b7480; }
  </style>

  <!-- left rounded panel with avatar -->
  <rect x="8" y="8" rx="12" ry="12" width="96" height="64" fill="var(--panel)"/>

  <!-- avatar: head -->
  <circle cx="56" cy="30" r="11" fill="var(--icon)"/>

  <!-- avatar: shoulders -->
  <path d="M40 56c4-8 10-12 16-12s12 4 16 12v4H40v-4z" fill="var(--icon)"/>

  <!-- small lock badge overlay on bottom-right of panel -->
  <g transform="translate(80,44) scale(0.8)">
    <!-- circular badge -->
    <circle cx="0" cy="0" r="12" fill="#ffffff" opacity="0.14"/>
    <!-- lock body -->
    <rect x="-6" y="-2" width="12" height="10" rx="1.6" fill="var(--icon)"/>
    <!-- lock shackle -->
    <path d="M-3 -2a3 3 0 0 1 6 0" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    <!-- keyhole -->
    <circle cx="0" cy="1.6" r="1.2" fill="var(--accent)"/>
  </g>

  <!-- main text -->
  <text class="label" x="122" y="42">Login</text>

  <!-- optional subtitle small text -->
  <text class="small" x="122" y="62">Sign in to continue</text>
</svg>
