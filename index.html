<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
    <title>نقطه | Noghteh Architecture Studio</title>
    <meta name="description" content="Noghteh Architecture Studio — استودیو معماری نقطه">

    <!-- Favicon (logo.png) -->
    <link rel="icon" type="image/png" href="logo.png">
    <link rel="apple-touch-icon" href="logo.png">
    <link rel="shortcut icon" href="logo.png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;700&display=swap" rel="stylesheet">

    <!-- Apply saved theme before paint to avoid flash of wrong theme -->
    <script>
        (function () {
            try {
                var saved = localStorage.getItem('noghteh-theme');
                var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
                var theme = saved || (prefersLight ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        })();
    </script>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* ----- Theme tokens ----- */
        :root[data-theme="dark"] {
            --bg: #000000;
            --fg: #ffffff;
            --muted: rgba(255, 255, 255, 0.45);
            --line: rgba(255, 255, 255, 0.85);
            --hairline: rgba(255, 255, 255, 0.18);
            --surface: rgba(255, 255, 255, 0.04);
            --surface-hover: rgba(255, 255, 255, 0.08);
            --logo-filter: brightness(0) invert(1);
            /* Canvas */
            --dot-rgb: 255, 255, 255;
            --dot-alpha: 0.75;
            --line-alpha: 0.35;
        }

        :root[data-theme="light"] {
            --bg: #ffffff;
            --fg: #0a0a0a;
            --muted: rgba(10, 10, 10, 0.5);
            --line: rgba(10, 10, 10, 0.85);
            --hairline: rgba(10, 10, 10, 0.18);
            --surface: rgba(10, 10, 10, 0.03);
            --surface-hover: rgba(10, 10, 10, 0.07);
            --logo-filter: brightness(0) invert(0);
            /* Canvas */
            --dot-rgb: 10, 10, 10;
            --dot-alpha: 0.75;
            --line-alpha: 0.28;
        }

        html, body {
            height: 100%;
            background: var(--bg);
            color: var(--fg);
            font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: background-color 0.4s ease, color 0.4s ease;
        }

        /* Constellation canvas (dots + connecting lines) */
        #constellation {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: block;
            touch-action: none; /* allow pointermove tracking on touch */
        }

        /* Thin border frame */
        .frame {
            position: fixed;
            inset: 24px;
            border: 1px solid var(--hairline);
            pointer-events: none;
            z-index: 3;
            transition: border-color 0.4s ease;
        }

        /* Corner ticks */
        .tick {
            position: fixed;
            background: var(--fg);
            z-index: 4;
            pointer-events: none;
            transition: background-color 0.4s ease;
        }
        .tick.h { width: 22px; height: 1px; }
        .tick.v { width: 1px; height: 22px; }

        .tick.tl-h { top: 24px; left: 24px; }
        .tick.tl-v { top: 24px; left: 24px; }
        .tick.tr-h { top: 24px; right: 24px; }
        .tick.tr-v { top: 24px; right: 24px; }
        .tick.bl-h { bottom: 24px; left: 24px; }
        .tick.bl-v { bottom: 24px; left: 24px; }
        .tick.br-h { bottom: 24px; right: 24px; }
        .tick.br-v { bottom: 24px; right: 24px; }

        /* Corner dots */
        .corner-dot {
            position: fixed;
            width: 5px;
            height: 5px;
            background: var(--fg);
            border-radius: 50%;
            z-index: 5;
            pointer-events: none;
            transition: background-color 0.4s ease;
        }
        .corner-dot.tl { top: 21.5px; left: 21.5px; }
        .corner-dot.tr { top: 21.5px; right: 21.5px; }
        .corner-dot.bl { bottom: 21.5px; left: 21.5px; }
        .corner-dot.br { bottom: 21.5px; right: 21.5px; }

        /* Header */
        .header {
            position: fixed;
            top: 56px;
            left: 56px;
            right: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 10;
            gap: 16px;
            animation: fadeDown 1.2s ease-out both;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
            direction: ltr;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .brand img {
            width: 38px;
            height: 38px;
            object-fit: contain;
            filter: var(--logo-filter);
            transition: filter 0.4s ease;
        }

        .brand-text {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }

        .brand-text .fa {
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.02em;
        }

        .brand-text .en {
            font-family: 'Vazirmatn', sans-serif;
            font-size: 10px;
            font-weight: 300;
            letter-spacing: 0.25em;
            color: var(--muted);
            text-transform: uppercase;
            direction: ltr;
            margin-top: 2px;
        }

        /* Instagram pill (visual left) */
        .instagram {
            direction: ltr;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--fg);
            text-decoration: none;
            font-size: 12px;
            letter-spacing: 0.12em;
            padding: 10px 16px;
            border: 1px solid var(--hairline);
            border-radius: 999px;
            background: var(--surface);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .instagram:hover {
            background: var(--fg);
            color: var(--bg);
            border-color: var(--fg);
        }

        .instagram svg {
            width: 16px;
            height: 16px;
        }

        /* Theme toggle button */
        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            border: 1px solid var(--hairline);
            background: var(--surface);
            color: var(--fg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .theme-toggle:hover {
            background: var(--fg);
            color: var(--bg);
            border-color: var(--fg);
            transform: rotate(20deg);
        }

        .theme-toggle:focus-visible {
            outline: 2px solid var(--fg);
            outline-offset: 3px;
        }

        .theme-toggle svg {
            width: 18px;
            height: 18px;
        }

        /* Show sun in dark mode (to switch to light), moon in light mode */
        .theme-toggle .icon-sun { display: none; }
        .theme-toggle .icon-moon { display: block; }
        :root[data-theme="dark"] .theme-toggle .icon-sun { display: block; }
        :root[data-theme="dark"] .theme-toggle .icon-moon { display: none; }

        /* Center composition */
        .stage {
            position: relative;
            z-index: 6;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 32px;
            text-align: center;
            pointer-events: none; /* let canvas receive pointer events */
        }
        .stage > * { pointer-events: auto; }

        .dot-accent {
            width: 10px;
            height: 10px;
            background: var(--fg);
            border-radius: 50%;
            margin-bottom: 28px;
            animation: blink 2.4s ease-in-out infinite, fadeIn 1s ease-out both;
            transition: background-color 0.4s ease;
        }

        .status-block {
            display: inline-block;
            text-align: center;
        }

        .status {
            font-size: clamp(18px, 3.2vw, 34px);
            font-weight: 300;
            letter-spacing: 0.01em;
            line-height: 1.6;
            animation: fadeIn 1.4s ease-out 0.2s both;
            white-space: nowrap;
        }

        .white-line {
            width: 100%;
            height: 1px;
            background: var(--line);
            margin: 26px 0;
            animation: expand 1.2s ease-out 0.5s both;
            transform-origin: left center;
            transition: background-color 0.4s ease;
        }

        .signature-row {
            width: 100%;
            display: flex;
            justify-content: flex-end; /* visual left in RTL → under the final period */
            animation: fadeIn 1.4s ease-out 0.7s both;
        }

        .signature {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: clamp(12px, 1.4vw, 16px);
            font-weight: 400;
            color: var(--fg);
            direction: rtl;
        }

        .signature .dash {
            display: inline-block;
            width: 18px;
            height: 1px;
            background: var(--fg);
            transition: background-color 0.4s ease;
        }

        /* Footer */
        .footer {
            position: fixed;
            bottom: 56px;
            left: 56px;
            right: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
            font-size: 11px;
            letter-spacing: 0.2em;
            color: var(--muted);
            direction: ltr;
            animation: fadeUp 1.2s ease-out 0.4s both;
        }

        .footer .site {
            text-transform: uppercase;
        }

        .footer .meta {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .footer .meta .dot-sm {
            width: 4px;
            height: 4px;
            background: var(--fg);
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.4s ease;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(0.85); }
        }

        /* Responsive */
        @media (max-width: 900px) {
            .header { top: 44px; left: 36px; right: 36px; }
            .footer { bottom: 44px; left: 36px; right: 36px; }
        }

        @media (max-width: 768px) {
            .frame { inset: 16px; }
            .tick.tl-h, .tick.tl-v { top: 16px; left: 16px; }
            .tick.tr-h, .tick.tr-v { top: 16px; right: 16px; }
            .tick.bl-h, .tick.bl-v { bottom: 16px; left: 16px; }
            .tick.br-h, .tick.br-v { bottom: 16px; right: 16px; }
            .corner-dot.tl { top: 13.5px; left: 13.5px; }
            .corner-dot.tr { top: 13.5px; right: 13.5px; }
            .corner-dot.bl { bottom: 13.5px; left: 13.5px; }
            .corner-dot.br { bottom: 13.5px; right: 13.5px; }

            .header {
                top: 32px;
                left: 24px;
                right: 24px;
            }
            .footer {
                bottom: 32px;
                left: 24px;
                right: 24px;
                font-size: 10px;
            }

            .brand img { width: 30px; height: 30px; }
            .brand-text .fa { font-size: 12px; }
            .brand-text .en { font-size: 9px; letter-spacing: 0.2em; }

            .instagram {
                padding: 8px 10px;
                font-size: 10px;
            }
            .instagram span.handle { display: none; }

            .theme-toggle { width: 36px; height: 36px; }
            .theme-toggle svg { width: 16px; height: 16px; }

            .status { white-space: normal; }
        }

        @media (max-width: 480px) {
            .header {
                top: 24px;
                left: 20px;
                right: 20px;
            }
            .footer {
                bottom: 24px;
                left: 20px;
                right: 20px;
                font-size: 9px;
                letter-spacing: 0.15em;
            }
            .brand-text .en { display: none; }
            .footer .meta { gap: 6px; }
        }

        @media (max-height: 520px) {
            .header { top: 20px; }
            .footer { bottom: 20px; }
            .dot-accent { margin-bottom: 14px; }
            .white-line { margin: 16px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>
    <!-- Constellation background -->
    <canvas id="constellation" aria-hidden="true"></canvas>

    <!-- Frame -->
    <div class="frame" aria-hidden="true"></div>

    <!-- Corner marks -->
    <span class="tick h tl-h" aria-hidden="true"></span>
    <span class="tick v tl-v" aria-hidden="true"></span>
    <span class="tick h tr-h" aria-hidden="true"></span>
    <span class="tick v tr-v" aria-hidden="true"></span>
    <span class="tick h bl-h" aria-hidden="true"></span>
    <span class="tick v bl-v" aria-hidden="true"></span>
    <span class="tick h br-h" aria-hidden="true"></span>
    <span class="tick v br-v" aria-hidden="true"></span>

    <span class="corner-dot tl" aria-hidden="true"></span>
    <span class="corner-dot tr" aria-hidden="true"></span>
    <span class="corner-dot bl" aria-hidden="true"></span>
    <span class="corner-dot br" aria-hidden="true"></span>

    <!-- Header -->
    <header class="header">
        <!-- Left cluster (visual left in RTL viewport): Instagram + theme toggle -->
        <div class="header-left">
            <a class="instagram" href="https://instagram.com/noghteh.arc.studio" target="_blank" rel="noopener noreferrer" aria-label="Instagram @noghteh.arc.studio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <span class="handle">noghteh.arc.studio</span>
            </a>

            <button id="themeToggle" class="theme-toggle" type="button" aria-label="Toggle color theme" title="Toggle theme">
                <!-- Sun (shown in dark mode → click for light) -->
                <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
                <!-- Moon (shown in light mode → click for dark) -->
                <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
                </svg>
            </button>
        </div>

        <!-- Brand / logo on the right (RTL) -->
        <div class="brand" aria-label="Noghteh Architecture Studio">
            <div class="brand-text">
                <span class="fa">استودیو معماری نقطه</span>
                <span class="en">Noghteh&nbsp;·&nbsp;Architecture&nbsp;Studio</span>
            </div>
            <img src="logo.svg" alt="Noghteh Architecture Studio logo" onerror="this.onerror=null;this.src='logo.svg';">
        </div>
    </header>

    <!-- Center composition -->
    <main class="stage">
        
        <div class="status-block">
            <p class="status">این صفحه درحال توسعه می باشد</p>
            <div class="white-line" aria-hidden="true"></div>
            <div class="signature-row">
                <span class="signature">
                    <span class="dash" aria-hidden="true"></span>
                    <span>نقطه</span>
                </span>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <span class="site">NOGHTEH.SITE</span>
        <span class="meta">
            <span>UNDER CONSTRUCTION</span>
            <span class="dot-sm" aria-hidden="true"></span>
            <span>2026</span>
        </span>
    </footer>

    <script>
        /* -------------------- Theme switching -------------------- */
        (function () {
            const root = document.documentElement;
            const btn = document.getElementById('themeToggle');
            const KEY = 'noghteh-theme';
            const media = window.matchMedia('(prefers-color-scheme: light)');

            function apply(theme, persist) {
                root.setAttribute('data-theme', theme);
                // Update meta theme-color for browser chrome
                const meta = document.querySelector('meta[name="theme-color"]:not([media])');
                if (meta) meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#000000');
                if (persist) {
                    try { localStorage.setItem(KEY, theme); } catch (e) {}
                }
                // Notify canvas so colors refresh immediately
                window.dispatchEvent(new CustomEvent('noghteh:themechange', { detail: { theme } }));
            }

            btn.addEventListener('click', function () {
                const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
                apply(current === 'light' ? 'dark' : 'light', true);
            });

            // If the user hasn't manually chosen, follow OS changes live
            media.addEventListener && media.addEventListener('change', function (e) {
                try {
                    if (localStorage.getItem(KEY)) return; // user choice wins
                } catch (err) { /* ignore */ }
                apply(e.matches ? 'light' : 'dark', false);
            });
        })();

        /* -------------------- Interactive constellation -------------------- */
        (function () {
            const canvas = document.getElementById('constellation');
            const ctx = canvas.getContext('2d');
            let width, height, dpr;
            let points = [];
            const pointer = { x: null, y: null, active: false };
            let cohesionFade = 0; // 0 = no cohesion (original behaviour), 1 = full cohesion

            // Theme-aware colors (read from CSS vars)
            let DOT_RGB = '255,255,255';
            let DOT_ALPHA = 0.75;
            let LINE_ALPHA = 0.35;

            const config = {
                density: 0.00015,
                maxDist: 140,
                pointerRadius: 0.00000180,      // radius of pointer influence
                attractStrength: 0.01,  // how strongly dots drift toward pointer
                cohesionStrength: 0, // how strongly dots attract each other
                cohesionRadius: 120,     // distance within which dots pull each other
                repelDist: 18,           // distance below which dots softly push apart
                speed: 0.12,
                dotRadius: 1.4
            };

            function readThemeColors() {
                const cs = getComputedStyle(document.documentElement);
                DOT_RGB = (cs.getPropertyValue('--dot-rgb') || '255,255,255').trim();
                DOT_ALPHA = parseFloat(cs.getPropertyValue('--dot-alpha')) || 0.75;
                LINE_ALPHA = parseFloat(cs.getPropertyValue('--line-alpha')) || 0.35;
            }

            function resize() {
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

                // Scale maxDist, pointerRadius and cohesionRadius on small screens
                const min = Math.min(width, height);
                config.maxDist = Math.max(90, Math.min(160, min * 0.18));
                config.pointerRadius = Math.max(120, Math.min(220, min * 0.28));
                config.cohesionRadius = Math.max(70, Math.min(130, min * 0.15));

                initPoints();
            }

            function initPoints() {
                const count = Math.max(40, Math.floor(width * height * config.density));
                points = [];
                for (let i = 0; i < count; i++) {
                    points.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * config.speed,
                        vy: (Math.random() - 0.5) * config.speed,
                        r: config.dotRadius * (0.6 + Math.random() * 0.9)
                    });
                }
            }

            function step() {
                ctx.clearRect(0, 0, width, height);

                const pr = config.pointerRadius;
                const prSq = pr * pr;
                const cr = config.cohesionRadius;
                const crSq = cr * cr;
                const rd = config.repelDist;

                // Ramp cohesion up while pointer is active; fade it back to 0 after pointer leaves.
                // At 60 fps: ramp-up ≈ 0.5 s, fade-out ≈ 4 s.
                if (pointer.active) {
                    cohesionFade = Math.min(1, cohesionFade + 0.03);
                } else {
                    cohesionFade = Math.max(0, cohesionFade - 0.004);
                }

                // Inter-dot cohesion: dots attract each other within cohesionRadius,
                // and softly repel when they get closer than repelDist.
                // This runs every frame regardless of pointer state so dots always
                // have a natural tendency to cluster and return together after interaction.
                for (let i = 0; i < points.length; i++) {
                    for (let j = i + 1; j < points.length; j++) {
                        const a = points[i], b = points[j];
                        const dx = b.x - a.x;
                        const dy = b.y - a.y;
                        const dSq = dx * dx + dy * dy;
                        if (dSq < crSq && dSq > 0.01) {
                            const d = Math.sqrt(dSq);
                            let force;
                            if (d < rd) {
                                // Soft repulsion — prevents full collapse
                                force = -config.cohesionStrength * (rd / d - 1);
                            } else {
                                // Attraction — proportional to closeness
                                force = config.cohesionStrength * (1 - d / cr);
                            }
                            force *= cohesionFade;
                            const fx = (dx / d) * force;
                            const fy = (dy / d) * force;
                            a.vx += fx; a.vy += fy;
                            b.vx -= fx; b.vy -= fy;
                        }
                    }
                }

                // Update + draw dots (with pointer attraction)
                for (let i = 0; i < points.length; i++) {
                    const p = points[i];

                    if (pointer.active && pointer.x !== null) {
                        const dx = pointer.x - p.x;
                        const dy = pointer.y - p.y;
                        const dSq = dx * dx + dy * dy;
                        if (dSq < prSq && dSq > 0.01) {
                            const d = Math.sqrt(dSq);
                            const force = (1 - d / pr) * config.attractStrength;
                            p.vx += (dx / d) * force;
                            p.vy += (dy / d) * force;
                        }
                    }

                    // Gentle damping to avoid runaway speeds
                    p.vx *= 0.985;
                    p.vy *= 0.985;

                    // Keep a minimum drift so the constellation stays alive
                    const sp = Math.hypot(p.vx, p.vy);
                    if (sp < 0.05) {
                        p.vx += (Math.random() - 0.5) * 0.04;
                        p.vy += (Math.random() - 0.5) * 0.04;
                    }

                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0) { p.x = 0; p.vx *= -1; }
                    else if (p.x > width) { p.x = width; p.vx *= -1; }
                    if (p.y < 0) { p.y = 0; p.vy *= -1; }
                    else if (p.y > height) { p.y = height; p.vy *= -1; }

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(' + DOT_RGB + ',' + DOT_ALPHA + ')';
                    ctx.fill();
                }

                // Connections between points
                const md = config.maxDist;
                for (let i = 0; i < points.length; i++) {
                    for (let j = i + 1; j < points.length; j++) {
                        const a = points[i], b = points[j];
                        const dx = a.x - b.x, dy = a.y - b.y;
                        const dSq = dx * dx + dy * dy;
                        if (dSq < md * md) {
                            const d = Math.sqrt(dSq);
                            const alpha = (1 - d / md) * LINE_ALPHA;
                            ctx.strokeStyle = 'rgba(' + DOT_RGB + ',' + alpha.toFixed(3) + ')';
                            ctx.lineWidth = 0.6;
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.stroke();
                        }
                    }
                }

                // Connections from pointer to nearby dots
                if (pointer.active && pointer.x !== null) {
                    for (let i = 0; i < points.length; i++) {
                        const p = points[i];
                        const dx = pointer.x - p.x;
                        const dy = pointer.y - p.y;
                        const dSq = dx * dx + dy * dy;
                        if (dSq < prSq) {
                            const d = Math.sqrt(dSq);
                            const alpha = (1 - d / pr) * (LINE_ALPHA + 0.25);
                            ctx.strokeStyle = 'rgba(' + DOT_RGB + ',' + alpha.toFixed(3) + ')';
                            ctx.lineWidth = 0.9;
                            ctx.beginPath();
                            ctx.moveTo(pointer.x, pointer.y);
                            ctx.lineTo(p.x, p.y);
                            ctx.stroke();
                        }
                    }

                    // Central pulse at pointer
                    ctx.beginPath();
                    ctx.arc(pointer.x, pointer.y, 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(' + DOT_RGB + ',0.9)';
                    ctx.fill();
                }

                requestAnimationFrame(step);
            }

            /* Pointer + touch tracking */
            function setPointer(x, y) {
                pointer.x = x;
                pointer.y = y;
                pointer.active = true;
            }
            function clearPointer() {
                pointer.active = false;
                pointer.x = null;
                pointer.y = null;
            }

            // Listen on window so the pointer works even over overlaid UI
            window.addEventListener('pointermove', function (e) {
                setPointer(e.clientX, e.clientY);
            }, { passive: true });

            window.addEventListener('pointerdown', function (e) {
                setPointer(e.clientX, e.clientY);
            }, { passive: true });

            window.addEventListener('pointerleave', clearPointer);
            window.addEventListener('pointercancel', clearPointer);
            window.addEventListener('blur', clearPointer);

            // Touch support (in addition to pointer events, for older browsers)
            window.addEventListener('touchmove', function (e) {
                if (e.touches && e.touches[0]) {
                    setPointer(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, { passive: true });
            window.addEventListener('touchstart', function (e) {
                if (e.touches && e.touches[0]) {
                    setPointer(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, { passive: true });
            window.addEventListener('touchend', clearPointer);

            // Device orientation (slight parallax on phones/tablets)
            window.addEventListener('deviceorientation', function (e) {
                if (pointer.active) return; // don't override an active touch
                const gamma = e.gamma || 0; // left/right tilt (-90..90)
                const beta = e.beta || 0;   // front/back tilt (-180..180)
                const cx = width / 2;
                const cy = height / 2;
                const x = cx + (gamma / 45) * (width * 0.35);
                const y = cy + (beta / 45) * (height * 0.25);
                pointer.x = Math.max(0, Math.min(width, x));
                pointer.y = Math.max(0, Math.min(height, y));
                pointer.active = true;
            }, { passive: true });

            // Theme change → refresh color cache
            window.addEventListener('noghteh:themechange', readThemeColors);

            // Resize
            window.addEventListener('resize', function () {
                clearTimeout(window.__rsz);
                window.__rsz = setTimeout(resize, 150);
            });
            window.addEventListener('orientationchange', function () {
                setTimeout(resize, 200);
            });

            readThemeColors();
            resize();
            step();
        })();
    </script>
</body>
</html>
