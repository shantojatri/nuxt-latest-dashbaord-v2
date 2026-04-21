# agents.md — Shuvo Bibaho Dashboard Agent

## Purpose

AI agent instructions for generating the **Shuvo Bibaho** matrimony dashboard.
Attach this file + `vue-js-guideline.md` + `nexus-dashboard.webp` as context
when using any AI code-generation tool (Cursor, Windsurf, Copilot, antigravity).

---

## Project Identity

- **App Name:** Shuvo Bibaho (শুভ বিবাহ) — matrimony / matchmaking platform
- **Stack:** Nuxt 4 · Tailwind CSS v4 · shadcn-vue · TypeScript · Inter font
- **Directory:** Nuxt 4 `app/` structure
- **Package manager:** pnpm

---

## Design System Quick Reference

| Token        | Hex                             | Usage                                  |
| ------------ | ------------------------------- | -------------------------------------- |
| `primary`    | `#FF2400`                       | CTA buttons, badges, active indicators |
| `secondary`  | `#4F46E5`                       | Charts, progress bars, highlights      |
| `accent`     | `#D97706`                       | Warnings, donut chart, secondary stats |
| Light bg     | `bg-white` / `bg-slate-50`      | Page, cards                            |
| Dark bg      | `bg-slate-900` / `bg-slate-950` | Dark mode                              |
| Border light | `border-slate-100`              | Cards, sidebar, navbar                 |
| Border dark  | `border-slate-800`              | Dark mode                              |
| Muted text   | `text-slate-500`                | Labels, subtitles                      |

**Font:** Inter · **Radius:** `rounded-xl` cards · `rounded-lg` inputs/buttons
**Navbar height:** `h-16` · **Sidebar width:** `w-64` (collapsed `w-[72px]`)
**Card shadow:** `shadow-sm`

---

## Screenshot Visual Contract

> **Reference:** `nexus-dashboard.webp`
>
> The generated code must match these exact visual patterns from the screenshot:
>
> 1. **Sidebar** — white bg, left border, section labels (GENERAL / TOOLS / SUPPORT),
>    nav items with icon+label, active item has light grey bg pill, badge on Messages,
>    bottom has team card + "Upgrade Plan" outline button + footer © text
> 2. **Navbar** — full-width, white bg, bottom border, left=logo+collapse,
>    center=search input with ⌘+F hint, right=icon buttons + avatar+name+role
> 3. **Stats Row** — 3 equal white cards, each has icon+title top row,
>    large value + inline trend badge (green↗ or red↘), info icon top-right
> 4. **Charts Row** — left panel (~60%) has grouped bar chart 3 months with legend,
>    right panel (~40%) has weekly bar chart with active day highlighted in indigo
> 5. **Bottom Row** — left panel has donut/semicircle chart + 3 value labels above it,
>    right panel has sortable table with checkbox, avatar, status badge, progress bar

---

## Agent Rules

### ALWAYS

- `<script setup lang="ts">` on every component
- `defineProps<{}>()` and `defineEmits<{}>()` with TypeScript generics
- `definePageMeta({ layout: 'dashboard' })` on every page
- Import icons individually: `import { Bell } from 'lucide-vue-next'`
- Use Tailwind color tokens — never hex in templates
- Add `dark:` variant for every color utility
- Wrap Chart.js charts in `<ClientOnly>`
- Components under 200 lines — split when larger

### NEVER

- Options API (`export default { data() {} }`)
- `@apply` in `<style>` blocks
- Hardcoded hex in templates (`bg-[#FF2400]`)
- Editing files inside `app/components/ui/` (shadcn-managed)
- Importing entire icon libraries

---

## Reusable Components Spec

### `AppLayout.vue`

```
Shell wrapper for all dashboard pages.
<template>
  <div class="flex h-screen bg-slate-50 dark:bg-slate-950">
    <AppSidebar />
    <div class="flex flex-1 flex-col overflow-hidden">
      <AppNavbar />
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
```

### `AppNavbar.vue`

```
h-16 · sticky top-0 z-50 · bg-white dark:bg-slate-900 · border-b

LEFT:   AppLogo + collapse toggle button (emits 'toggle-sidebar')
CENTER: <Input> with Search icon inside, placeholder="Search  ⌘ + F", w-64
RIGHT:  LanguageSwitcher | ThemeToggle | Gift icon | NotificationBell
        | Plus icon | <Separator orientation="vertical"> | UserMenu

UserMenu:  Avatar + "Rina Khatun" + "Premium" role text + ChevronDown
           DropdownMenu: Profile · Settings · Separator · Logout
```

### `AppSidebar.vue`

```
w-64 → w-[72px] when collapsed · transition-all duration-300
bg-white dark:bg-slate-900 · border-r · flex flex-col · h-screen sticky top-0

Sections rendered from a navItems array:
const navSections = [
  {
    label: 'GENERAL',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
      { label: 'Search', icon: Search, href: '/search' },
      { label: 'Profile', icon: User, href: '/profile' },
      { label: 'Messages', icon: MessageSquare, href: '/messages', badge: 8 },
    ],
  },
  {
    label: 'TOOLS',
    items: [
      { label: 'Pricing', icon: CreditCard, href: '/pricing' },
      {
        label: 'Activities',
        icon: Activity,
        collapsible: true,
        children: [
          { label: 'Rejected', icon: XCircle, href: '/activities/rejected' },
          { label: 'Short Listed', icon: Star, href: '/activities/shortlisted' },
          { label: 'Block List', icon: Ban, href: '/activities/blocked' },
        ],
      },
    ],
  },
  {
    label: 'SUPPORT',
    items: [
      { label: 'Settings', icon: Settings, href: '/settings' },
    ],
  },
]

Bottom:
  Team card (Avatar + "Team" label + name + ChevronsUpDown)
  "Upgrade Plan" Button variant="outline" w-full
  Logout row (LogOut icon + "Logout" text, text-red-500)
  © 2024 Shuvo Bibaho, Inc.
```

### `StatsCard.vue`

```vue
Props: { title, value, trend, trendType: 'up'|'down', icon: Component, iconClass
}

<template>
  <div
    class="rounded-xl border border-slate-100 dark:border-slate-800
              bg-white dark:bg-slate-900 p-6 shadow-sm"
  >
    <!-- top row: icon+title  info icon -->
    <!-- value + trend badge on same line -->
  </div>
</template>

Trend badge: up: bg-green-50 text-green-600 | TrendingUp icon + "15.8% ↗" down:
bg-red-50 text-red-500 | TrendingDown icon + "34.0% ↘"
```

### `ThemeToggle.vue`

```
useColorMode() from @nuxtjs/color-mode
Toggle: 'light' ↔ 'dark'
Icon: Sun when dark, Moon when light
Wrapped in Tooltip: "Toggle theme"
```

### `LanguageSwitcher.vue`

```
DropdownMenu trigger: Globe icon + current lang code ("EN")
Items: 🇬🇧 English · 🇧🇩 বাংলা
On select: store preference, update UI
```

### `NotificationBell.vue`

```
Bell icon + absolute top-0 right-0 w-2 h-2 rounded-full bg-primary (dot badge)
Popover on click: list of recent notifications
useNotifications() composable for state
```

---

## Page Specifications

### `/dashboard`

```
definePageMeta({ layout: 'dashboard' })

Header: "Dashboard" h2 + date range selector + Monthly dropdown + Filter + Export

Grid:
  <div class="space-y-6">
    <!-- stats -->
    <div class="grid grid-cols-3 gap-4">
      <StatsCard × 3 />
    </div>
    <!-- charts -->
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3"><MatchOverviewChart /></div>
      <div class="col-span-2"><NewMembersChart /></div>
    </div>
    <!-- bottom -->
    <div class="grid grid-cols-2 gap-4">
      <MatchDistribution />
      <RecentProfilesTable />
    </div>
  </div>
```

### `/search`

```
Filter bar: age range slider, location select, religion, profession, marital status
Profile grid: grid-cols-3 gap-4
Profile card: photo (aspect-square), name, age, city, match % badge, "Send Interest" btn
Pagination bottom
```

### `/profile`

```
Cover image + floating avatar (bottom-left)
Profile completion Progress bar (shadcn, color secondary)
Sections (shadcn Tabs): About · Family · Lifestyle · Preferences
Edit mode: toggle button top-right
```

### `/messages`

```
Two-panel layout:
  Left (w-80): conversation list — avatar + name + last msg preview + time
  Right (flex-1): chat thread — bubbles + input + send
Unread: bold name + blue dot
```

### `/pricing`

```
3 cards: Free · Premium (highlighted, ring-2 ring-primary) · Platinum
Feature comparison grid below
CTA: "Get Started" (outline) · "Upgrade Now" (bg-primary) · "Contact Us" (ghost)
```

### `/activities/rejected` · `/activities/shortlisted` · `/activities/blocked`

```
Page header with breadcrumb: Activities > [Page Name]
Table: checkbox · avatar+name · age · location · date · action button
Filter bar top
Empty state: illustration + CTA text
```

### `/settings`

```
shadcn Tabs: Account · Privacy · Notifications · Subscription · Danger Zone
Each tab: card sections with form fields (shadcn Input, Switch, Select)
Save Changes button (bg-primary) at bottom of each section
```

---

## nuxt.config.ts (complete)

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["shadcn-nuxt", "@nuxtjs/color-mode", "@vueuse/nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "class-variance-authority",
        "reka-ui",
        "clsx",
        "tailwind-merge",
      ],
    },
  },
});
```

---

## All shadcn-vue CLI Commands

```bash
pnpm dlx shadcn-vue@latest add button
pnpm dlx shadcn-vue@latest add badge
pnpm dlx shadcn-vue@latest add avatar
pnpm dlx shadcn-vue@latest add card
pnpm dlx shadcn-vue@latest add input
pnpm dlx shadcn-vue@latest add dropdown-menu
pnpm dlx shadcn-vue@latest add separator
pnpm dlx shadcn-vue@latest add tooltip
pnpm dlx shadcn-vue@latest add popover
pnpm dlx shadcn-vue@latest add sheet
pnpm dlx shadcn-vue@latest add tabs
pnpm dlx shadcn-vue@latest add table
pnpm dlx shadcn-vue@latest add progress
pnpm dlx shadcn-vue@latest add collapsible
```

## All Additional Packages

```bash
pnpm add lucide-vue-next
pnpm add @nuxtjs/color-mode
pnpm add @vueuse/core @vueuse/nuxt
pnpm add vue-chartjs chart.js
```

---

## ═══════════════════════════════════════════

## ANTIGRAVITY PROMPTS — COPY-PASTE READY

## ═══════════════════════════════════════════

---

### MASTER PROMPT (attach: agents.md + vue-js-guideline.md + nexus-dashboard.webp)

```
You are a senior Nuxt 4 / Vue 3 developer building "Shuvo Bibaho" (শুভ বিবাহ),
a modern matrimony web platform.

## Attached Context
- vue-js-guideline.md  — full coding conventions, component specs, color tokens
- agents.md            — component library, page specs, nuxt.config.ts
- nexus-dashboard.webp — screenshot showing the exact layout and visual style to replicate

## Tech Stack
Nuxt 4 · Tailwind CSS v4 (@tailwindcss/vite, @theme directive) · shadcn-vue ·
TypeScript strict · Inter font · lucide-vue-next · @nuxtjs/color-mode · vue-chartjs

## Brand Colors (Tailwind token names — never use hex directly)
Primary:   #FF2400  → bg-primary / text-primary / border-primary
Secondary: #4F46E5  → bg-secondary / text-secondary
Accent:    #D97706  → bg-accent / text-accent

## Design Rules (from screenshot)
- White cards, rounded-xl, shadow-sm, border border-slate-100 dark:border-slate-800
- Sidebar: w-64, white, border-r, section labels (GENERAL/TOOLS/SUPPORT), bottom team card
- Navbar: h-16, sticky, search center, icon buttons + avatar right
- Stats: 3 equal cards, large value + inline trend badge (green↗ / red↘)
- Charts: grouped bar (3-month) left + weekly bar right, vue-chartjs
- Bottom: donut chart left + table with checkboxes right
- Always include dark: variants for every color utility

## Hard Rules
- ALWAYS <script setup lang="ts">
- ALWAYS defineProps<{}>() and defineEmits<{}>() with TypeScript generics
- ALWAYS definePageMeta({ layout: 'dashboard' }) on pages
- NEVER Options API, NEVER hex in templates, NEVER @apply in <style>
- NEVER edit app/components/ui/ files

## Task
[DESCRIBE WHAT TO BUILD — e.g. "Build AppSidebar.vue"]

## File Path
[e.g. app/components/layout/AppSidebar.vue]

## Specific Requirements
[LIST REQUIREMENTS]

Match the visual design from nexus-dashboard.webp exactly, substituting
all Nexus content with Shuvo Bibaho matrimony content.
```

---

### COMPONENT PROMPT (for a single component)

```
Build [COMPONENT NAME] for Shuvo Bibaho — a Nuxt 4 matrimony app.

File: [app/components/...]

Stack: Nuxt 4 · Tailwind CSS v4 · shadcn-vue · TypeScript · lucide-vue-next

Visual reference: nexus-dashboard.webp — match the [SECTION NAME] section exactly.

Requirements:
[LIST REQUIREMENTS]

Rules:
- <script setup lang="ts">
- defineProps<{}>() / defineEmits<{}>()  typed generics
- Tailwind tokens: bg-primary, text-secondary, border-accent (no hex)
- dark: variant on every color utility
- Matrimony content (members, matches, proposals — not payments/revenue)
- Inter font
```

---

### PAGE PROMPT (for a full page)

```
Build the [PAGE NAME] page for Shuvo Bibaho matrimony app.

File: app/pages/[path]/index.vue

Rules:
- definePageMeta({ layout: 'dashboard' }) at top
- <script setup lang="ts">
- Use AppLayout slot (already handles sidebar + navbar)
- Tailwind CSS v4 tokens, dark: variants
- shadcn-vue components from @/components/ui/
- Import lucide icons individually
- Matrimony content — replace any finance/payment content with
  match-related equivalents (members, proposals, connections, profiles)

Visual reference: match the equivalent section in nexus-dashboard.webp

Page content requirements:
[LIST REQUIREMENTS]
```

---

### ITERATION / REFACTOR PROMPT

```
Refactor this component for Shuvo Bibaho Nuxt 4 project.

Current file: [path]
Current code:
[PASTE CODE]

Changes needed:
1. [change]
2. [change]

Constraints:
- Preserve <script setup lang="ts"> pattern
- Keep all props/emits interfaces unchanged
- Do NOT touch app/components/ui/ files
- Maintain all dark: variants
- Follow vue-js-guideline.md conventions
- Match visual spec from nexus-dashboard.webp screenshot
```

---

## Matrimony Content Substitutions

Use these when replacing Nexus (SaaS/finance) content:

| Nexus                        | Shuvo Bibaho                           |
| ---------------------------- | -------------------------------------- |
| Page Views                   | Total Members                          |
| Total Revenue                | New Matches Today                      |
| Bounce Rate                  | Connection Rate                        |
| Sales Overview               | Match Overview                         |
| Total Subscriber             | New Registrations                      |
| Sales Distribution           | Match Distribution                     |
| List of Integration          | Recent Profiles                        |
| Payment                      | Proposals                              |
| Customers                    | Members                                |
| Invoice                      | Match Requests                         |
| Analytics                    | Compatibility Stats                    |
| Automation                   | Smart Matching                         |
| China / UE / USA / Canada    | Dhaka / Chittagong / Sylhet / Rajshahi |
| $9,257.51                    | 1,257 matches                          |
| Website / Mobile App / Other | Verified / Premium / Free              |
| Stripe / Zapier / Shopify    | (member profiles with name, age, city) |
| Finance / CRM / Marketplace  | Active / Pending / Rejected            |
| Team > Marketing             | [User] > Premium                       |
| Upgrade Plan                 | Upgrade to Premium                     |
