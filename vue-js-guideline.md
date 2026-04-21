# Vue.js Guideline — Shuvo Bibaho

## Project Overview
**Shuvo Bibaho** (শুভ বিবাহ) is a modern matrimony web application built with:
- **Nuxt 4** (latest) — App directory structure (`app/`)
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin, `@theme` directive
- **shadcn-vue** (latest) — Radix Vue + Tailwind component system
- **TypeScript** — strict mode enabled
- **Inter** font
- **lucide-vue-next** — icon library
- **@nuxtjs/color-mode** — dark/light mode
- **@vueuse/nuxt** — utility composables
- **vue-chartjs + chart.js** — charts

---

## Visual Design Reference
> Reference screenshot: `nexus-dashboard.webp`
>
> Adapt all layout proportions, spacing, typography scale, and component
> placement from this reference — replacing all Nexus-specific content
> with Shuvo Bibaho matrimony content.

### Layout Blueprint (from screenshot)
```
┌──────────────────────────────────────────────────────────────────┐
│  NAVBAR  h-16 · sticky top-0 z-50 · border-b · bg-white         │
│  [≋ Logo + collapse ◀]  [🔍 Search   ⌘+F]  [🌐 ◑ 🔔 ➕ Avatar]  │
├──────────────┬───────────────────────────────────────────────────┤
│  SIDEBAR     │  PAGE HEADER                                      │
│  w-64        │  "Dashboard"  [📅 Oct–Nov] [Monthly▾] [Filter] [↑Export]
│  border-r    ├───────────────────────────────────────────────────┤
│              │  STATS ROW  — 3 equal cards (grid-cols-3 gap-4)   │
│  GENERAL     │  ┌──────────────┐┌──────────────┐┌─────────────┐ │
│  Dashboard ● │  │👁 Total Members││❤ New Matches ││🔗 Conn. Rate│ │
│  Search      │  │  12,450 +15% ││  363  -34%   ││ 86.5% +24% │ │
│  Profile     │  └──────────────┘└──────────────┘└─────────────┘ │
│  Messages  8 ├───────────────────────────────────────────────────┤
│              │  CHARTS ROW — col-span 3 + col-span 2            │
│  TOOLS       │  ┌─────────────────────────┐┌───────────────────┐│
│  Pricing     │  │  Match Overview         ││  New Members      ││
│  Activities▾ │  │  Grouped bar chart      ││  Weekly bar chart ││
│   Rejected   │  │  (3 months, 5 colors)   ││  (Sun–Sat)        ││
│   Shortlist  │  └─────────────────────────┘└───────────────────┘│
│   Blocked    ├───────────────────────────────────────────────────┤
│              │  BOTTOM ROW — grid-cols-2 gap-4                  │
│  SUPPORT     │  ┌──────────────────────┐┌───────────────────────┐│
│  Settings    │  │  Match Distribution  ││  Recent Profiles      ││
│              │  │  Donut chart         ││  Table w/ checkboxes  ││
│  ───────     │  │  3 source labels     ││  name·status·match%   ││
│  [Team card] │  └──────────────────────┘└───────────────────────┘│
│  Upgrade btn │                                                   │
│  Logout      │                                                   │
│  © footer    │                                                   │
└──────────────┴───────────────────────────────────────────────────┘
```

---

## Brand Colors

```css
/* app/assets/css/tailwind.css */
@import "tailwindcss";

@theme {
  --color-primary:     #FF2400;
  --color-primary-50:  #FFEDEC;
  --color-primary-100: #FFDEDD;
  --color-primary-200: #FFBBB9;
  --color-primary-300: #FF9693;
  --color-primary-400: #FF6B66;
  --color-primary-500: #FF2400;
  --color-primary-600: #CE1B00;
  --color-primary-700: #9C1200;
  --color-primary-800: #6E0900;
  --color-primary-900: #430300;
  --color-primary-950: #2B0100;

  --color-secondary:     #4F46E5;
  --color-secondary-50:  #EEF2FF;
  --color-secondary-100: #E0E7FF;
  --color-secondary-200: #C7D2FE;
  --color-secondary-300: #A5B4FC;
  --color-secondary-400: #818CF8;
  --color-secondary-500: #6366F1;
  --color-secondary-600: #4F46E5;
  --color-secondary-700: #4338CA;
  --color-secondary-800: #3730A3;
  --color-secondary-900: #312E81;
  --color-secondary-950: #1E1B4B;

  --color-accent:     #D97706;
  --color-accent-50:  #FFFBEB;
  --color-accent-100: #FEF3C7;
  --color-accent-200: #FDE68A;
  --color-accent-300: #FCD34D;
  --color-accent-400: #FBBF24;
  --color-accent-500: #F59E0B;
  --color-accent-600: #D97706;
  --color-accent-700: #B45309;
  --color-accent-800: #92400E;
  --color-accent-900: #78350F;
  --color-accent-950: #451A03;

  --font-sans: 'Inter', sans-serif;
}
```

---

## Project Structure

```
my-app/
├── app/
│   ├── assets/css/tailwind.css            # Tailwind v4 entry + @theme tokens
│   ├── components/
│   │   ├── ui/                            # shadcn-vue CLI-managed — DO NOT EDIT
│   │   │   ├── button/
│   │   │   ├── badge/
│   │   │   ├── avatar/
│   │   │   ├── card/
│   │   │   ├── collapsible/
│   │   │   ├── dropdown-menu/
│   │   │   ├── input/
│   │   │   ├── popover/
│   │   │   ├── progress/
│   │   │   ├── separator/
│   │   │   ├── sheet/
│   │   │   ├── table/
│   │   │   ├── tabs/
│   │   │   └── tooltip/
│   │   ├── layout/
│   │   │   ├── AppNavbar.vue              # Sticky top bar
│   │   │   ├── AppSidebar.vue             # Left nav with grouped sections
│   │   │   └── AppLayout.vue             # Shell wrapper: sidebar + navbar + slot
│   │   ├── dashboard/
│   │   │   ├── StatsCard.vue              # KPI card: value + trend badge
│   │   │   ├── MatchOverviewChart.vue     # Grouped bar chart (3 months)
│   │   │   ├── NewMembersChart.vue        # Weekly bar chart (Sun–Sat)
│   │   │   ├── MatchDistribution.vue      # Donut chart + 3 source labels
│   │   │   └── RecentProfilesTable.vue   # Table: avatar, name, status, match%, action
│   │   └── shared/
│   │       ├── AppLogo.vue                # ❤ icon + "Shuvo Bibaho" wordmark
│   │       ├── ThemeToggle.vue            # Sun/Moon icon button
│   │       ├── LanguageSwitcher.vue       # EN / বাংলা dropdown
│   │       ├── NotificationBell.vue       # Bell + unread count badge
│   │       └── UserMenu.vue              # Avatar + name + role + dropdown
│   ├── composables/
│   │   ├── useTheme.ts                    # wraps useColorMode()
│   │   ├── useNotifications.ts            # notification state + unread count
│   │   └── useSidebar.ts                  # isOpen, isCollapsed, toggle, collapse
│   ├── layouts/
│   │   └── dashboard.vue                  # Nuxt layout: <AppLayout><slot /></AppLayout>
│   ├── pages/
│   │   ├── index.vue                      # navigateTo('/dashboard')
│   │   ├── dashboard/index.vue
│   │   ├── search/index.vue
│   │   ├── profile/index.vue
│   │   ├── messages/index.vue
│   │   ├── pricing/index.vue
│   │   ├── activities/index.vue
│   │   ├── activities/rejected.vue
│   │   ├── activities/shortlisted.vue
│   │   ├── activities/blocked.vue
│   │   └── settings/index.vue
│   ├── plugins/ssr-width.ts
│   ├── types/index.ts
│   └── app.vue
├── components.json
├── nuxt.config.ts
├── tsconfig.json
└── package.json
```

---

## Coding Conventions

### Script Setup (always)
```vue
<script setup lang="ts">
// ALWAYS: <script setup lang="ts">
// NEVER: export default { data() {} }
</script>
```

### Props & Emits — always generic typed
```ts
const props = defineProps<{
  title: string
  value: string | number
  trend?: number
  trendType?: 'up' | 'down'
  color?: 'primary' | 'secondary' | 'accent'
}>()

const emit = defineEmits<{
  close: []
  select: [id: string]
}>()
```

### Composable pattern
```ts
// composables/useSidebar.ts
export const useSidebar = () => {
  const isOpen = ref(true)
  const isCollapsed = ref(false)
  const toggle = () => { isOpen.value = !isOpen.value }
  const collapse = () => { isCollapsed.value = !isCollapsed.value }
  return { isOpen, isCollapsed, toggle, collapse }
}
```

### Page meta (every dashboard page)
```vue
<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>
```

### Tailwind rules
- ✅ `bg-primary` · `text-secondary-600` · `border-accent`
- ✅ `dark:bg-slate-900` · `dark:text-slate-100` on every element
- ❌ Never `bg-[#FF2400]` — always use theme tokens
- ❌ Never `@apply` in `<style>` blocks

### Icon imports (individual only)
```ts
import { Bell, Search, Heart, Users, ChevronDown, LogOut, Settings } from 'lucide-vue-next'
```

---

## Component Visual Specs (from screenshot)

### AppNavbar
```
Height:       h-16  |  sticky top-0 z-50
Background:   bg-white dark:bg-slate-900
Border:       border-b border-slate-100 dark:border-slate-800
Padding:      px-6

LEFT:   [AppLogo]  [collapse button ◀ — icon only, text-slate-400]
        Collapse button: size-8 rounded-md hover:bg-slate-100

CENTER: Search input
        placeholder="Search  ⌘ + F"
        class="h-9 w-64 pl-9 rounded-lg border-slate-200 bg-slate-50
               dark:bg-slate-800 dark:border-slate-700 text-sm"
        Search icon: absolute left-2.5 size-4 text-slate-400

RIGHT:  flex items-center gap-2
        ─ LanguageSwitcher  (Globe icon + "EN" text, text-sm)
        ─ ThemeToggle       (half-moon/sun icon, size-8 icon button)
        ─ Gift icon button  (size-8, text-slate-500)
        ─ NotificationBell  (Bell icon + red dot badge top-right)
        ─ Plus icon button  (size-8, text-slate-500)
        ─ Separator vertical h-8
        ─ UserMenu:
            Avatar (size-8, rounded-full)
            Name "Rina Khatun" (text-sm font-medium)
            Role "Premium" (text-xs text-slate-500)
            ChevronDown (size-4 text-slate-400)
```

### AppSidebar
```
Width:        w-64 (collapsed: w-[72px])
Transition:   transition-all duration-300 ease-in-out
Background:   bg-white dark:bg-slate-900
Border:       border-r border-slate-100 dark:border-slate-800
Padding:      px-3 py-4
Height:       100vh sticky top-0  (flex flex-col)

TOP:
  Logo area h-16 (matches navbar) — px-3 flex items-center justify-between
  Collapse toggle button — right-aligned ◀/▶

NAV (flex-1 overflow-y-auto, mt-4 space-y-6):
  Section label: text-[10px] font-semibold uppercase tracking-widest
                 text-slate-400 px-3 mb-1

  GENERAL
    Dashboard     LayoutDashboard  /dashboard
    Search        Search           /search
    Profile       User             /profile
    Messages      MessageSquare    /messages
                  + Badge right: unread count
                    bg-primary text-white text-xs rounded-full px-1.5

  TOOLS
    Pricing       CreditCard       /pricing
    Activities    Activity         collapsible
      → Rejected  XCircle          /activities/rejected   pl-8
      → Shortlist Star             /activities/shortlisted pl-8
      → Blocked   Ban              /activities/blocked    pl-8

  SUPPORT
    Settings      Settings         /settings

Nav item base:
  flex items-center gap-3 rounded-lg px-3 py-2 text-sm
  transition-colors duration-150 cursor-pointer w-full

Active:
  bg-slate-100 dark:bg-slate-800
  text-slate-900 dark:text-white font-medium

Inactive:
  text-slate-500 dark:text-slate-400
  hover:bg-slate-50 dark:hover:bg-slate-800/60
  hover:text-slate-700 dark:hover:text-slate-200

Activities dropdown chevron:
  ml-auto ChevronDown size-4
  rotate-180 when open (transition-transform)

BOTTOM (mt-auto pt-4 border-t border-slate-100 dark:border-slate-800):
  Team card:
    flex items-center gap-3 rounded-xl bg-slate-50
    dark:bg-slate-800 px-3 py-2.5 mb-3
    Avatar (gradient bg-secondary, size-8, rounded-lg)
    "Team" label text-xs text-slate-500
    Name "Rina Khatun" text-sm font-medium
    ChevronsUpDown icon size-4 ml-auto

  Upgrade Plan button:
    w-full, variant="outline", size="sm"
    border-slate-200, text-slate-700, mb-3

  Logout button:
    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
    text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30

  Footer:
    text-center text-[10px] text-slate-400 mt-3
    "© 2024 Shuvo Bibaho, Inc."
```

### StatsCard
```
Container:    rounded-xl border border-slate-100 dark:border-slate-800
              bg-white dark:bg-slate-900 p-6 shadow-sm

Top row:      flex items-center justify-between mb-4
  Left:       flex items-center gap-2
              Icon (size-5, color matches card theme)
              Title (text-sm text-slate-500 dark:text-slate-400)
  Right:      Info icon (size-4 text-slate-300, hover shows tooltip)

Value row:    flex items-center gap-3 mt-1
  Value:      text-3xl font-bold text-slate-900 dark:text-white
              tracking-tight
  Trend badge:
    inline-flex items-center gap-0.5 rounded-full px-2 py-0.5
    text-xs font-medium
    Up:   bg-green-50 text-green-600  dark:bg-green-950 dark:text-green-400
          TrendingUp icon size-3
    Down: bg-red-50 text-red-500  dark:bg-red-950 dark:text-red-400
          TrendingDown icon size-3
```

### Dashboard Stats Data (matrimony)
```ts
const stats = [
  {
    title: 'Total Members',
    value: '12,450',
    trend: 15.8,
    trendType: 'up',
    icon: Users,
    iconClass: 'text-secondary',
  },
  {
    title: 'New Matches Today',
    value: '363',
    trend: 34.0,
    trendType: 'down',
    icon: Heart,
    iconClass: 'text-primary',
  },
  {
    title: 'Connection Rate',
    value: '86.5%',
    trend: 24.2,
    trendType: 'up',
    icon: Link2,
    iconClass: 'text-accent',
  },
]
```

### MatchOverviewChart
```
Container:    col-span-3 rounded-xl border p-6
Header:       "Match Overview" (text-base font-semibold)
              right: [Filter btn] [Sort btn] [...more]
Value:        "1,257" text-2xl font-bold
              + trend badge + "+ 143 increased" text-sm text-slate-500
Chart type:   Grouped vertical bar chart (Chart.js Bar)
X-axis:       Oct / Nov / Dec
Series colors:
  primary-500, secondary-500, accent-500, teal-500 (#14B8A6), slate-300
Legend:       row below chart, colored dot + label
  Dhaka · Chittagong · Sylhet · Rajshahi · Other
```

### NewMembersChart
```
Container:    col-span-2 rounded-xl border p-6
Header:       "New Members"  [Weekly ▾ dropdown]
Value:        "24,473" text-2xl font-bold
              + trend badge + "+ 749 increased"
Chart type:   Vertical bar chart (Chart.js Bar)
X-axis:       Sun Mon Tue Wed Thu Fri Sat
Active bar:   secondary gradient (tallest, current day)
Other bars:   slate-200 dark:slate-700
```

### MatchDistribution
```
Container:    col-span-1 rounded-xl border p-6
Header:       "Match Distribution"  [Monthly ▾]
3 labels row: "Verified" / "Premium" / "Free"
              each: text-xs text-slate-500 + value text-lg font-bold
                    "374" / "241" / "213"
Chart type:   Doughnut / semicircle (Chart.js Doughnut)
Colors:       secondary-600, primary-500, accent-500
```

### RecentProfilesTable
```
Container:    col-span-1 rounded-xl border p-6
Header:       "Recent Profiles"  [See All →]  (text-primary text-sm)
Table:
  Columns:    □  |  NAME  |  STATUS  |  MATCH %  |  ACTION
  Row:
    Checkbox (shadcn)
    Avatar (size-8 rounded-full) + Name (text-sm font-medium) + Age
    Status badge:
      Active:   bg-green-50 text-green-700 dark:bg-green-950
      Pending:  bg-amber-50 text-amber-700 dark:bg-amber-950
      Rejected: bg-red-50   text-red-700   dark:bg-red-950
    Progress bar (shadcn Progress, h-1.5, color secondary)
    "View" button  (variant="ghost" size="sm")
```

---

## Dark Mode Config
```ts
// nuxt.config.ts
colorMode: {
  classSuffix: '',
  preference: 'system',
  fallback: 'light',
}
```
Pattern: `bg-white dark:bg-slate-900` · `border-slate-100 dark:border-slate-800`
Text: `text-slate-900 dark:text-white` · muted: `text-slate-500 dark:text-slate-400`

---

## Accessibility
- Icon-only buttons: `aria-label="..."`
- Active nav: `aria-current="page"`
- Nav: `role="navigation"`
- Focus: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`

---

## Performance
- Charts: `<ClientOnly>` wrapper
- Profile photos: `<NuxtImage>` with `loading="lazy"`
- Non-critical fetches: `useLazyFetch`

---

## shadcn-vue Components to Install
```bash
pnpm dlx shadcn-vue@latest add button badge avatar card input
pnpm dlx shadcn-vue@latest add dropdown-menu separator tooltip popover
pnpm dlx shadcn-vue@latest add sheet tabs table progress collapsible
```

## Additional Packages
```bash
pnpm add lucide-vue-next @nuxtjs/color-mode @vueuse/core @vueuse/nuxt
pnpm add vue-chartjs chart.js
```

---

## Git Conventions
```
feat: add AppSidebar with collapsible activities section
feat: add StatsCard with up/down trend badge
feat: add MatchOverviewChart grouped bar chart
fix: sidebar active state not reflecting current route
fix: dark mode flicker on page load
chore: add shadcn collapsible + progress components
refactor: extract RecentProfilesTable from dashboard page
style: match sidebar bottom section to screenshot spec
```
