<!-- app/components/layout/AppSidebar.vue -->
<script setup lang="ts">
import {
  LayoutDashboard,
  Search,
  User,
  MessageSquare,
  CreditCard,
  Activity,
  XCircle,
  Star,
  Ban,
  Settings,
  ChevronsUpDown,
  ChevronDown,
  Sparkles,
  LogOut,
} from "lucide-vue-next";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import AppLogo from "../shared/AppLogo.vue";

const { isCollapsed, activeRoute } = useSidebar();

const activitiesOpen = ref(false);

interface NavChild {
  label: string;
  icon: any;
  href: string;
}

interface NavItem {
  label: string;
  icon: any;
  href?: string;
  badge?: number;
  collapsible?: boolean;
  children?: NavChild[];
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: "GENERAL",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { label: "Search", icon: Search, href: "/search" },
      { label: "Profile", icon: User, href: "/profile" },
      { label: "Messages", icon: MessageSquare, href: "/messages", badge: 8 },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { label: "Pricing", icon: CreditCard, href: "/pricing" },
      {
        label: "Activities",
        icon: Activity,
        collapsible: true,
        children: [
          { label: "Rejected", icon: XCircle, href: "/activities/rejected" },
          {
            label: "Short Listed",
            icon: Star,
            href: "/activities/shortlisted",
          },
          { label: "Block List", icon: Ban, href: "/activities/blocked" },
        ],
      },
    ],
  },
  {
    label: "SUPPORT",
    items: [{ label: "Settings", icon: Settings, href: "/settings" }],
  },
];

const isActive = (href?: string) => {
  if (!href) return false;
  return activeRoute.value === href;
};

const isChildActive = (children?: NavChild[]) => {
  if (!children) return false;
  return children.some((child) => activeRoute.value === child.href);
};
</script>

<template>
  <aside
    class="hidden lg:flex flex-col h-screen sticky top-0 overflow-hidden bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-all duration-300 ease-in-out"
    :class="isCollapsed ? 'w-[72px]' : 'w-64'"
  >
    <!-- TOP: Logo -->
    <div
      class="h-16 flex items-center px-3 border-b border-slate-100 dark:border-slate-800 shrink-0"
    >
      <AppLogo :collapsed="isCollapsed" />
    </div>

    <!-- NAV -->
    <nav class="flex-1 overflow-y-auto py-4 px-2 space-y-5" role="navigation">
      <div v-for="section in navSections" :key="section.label">
        <!-- Section Label -->
        <template v-if="!isCollapsed">
          <span
            class="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-3 mb-1 block"
          >
            {{ section.label }}
          </span>
        </template>
        <template v-else>
          <Separator class="my-2 mx-auto w-8" />
        </template>

        <!-- Nav Items -->
        <div class="mt-1 space-y-0.5">
          <template v-for="item in section.items" :key="item.label">
            <!-- Collapsible Item (Activities) -->
            <template v-if="item.collapsible && item.children">
              <Collapsible v-model:open="activitiesOpen">
                <CollapsibleTrigger as-child>
                  <button
                    class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full transition-colors duration-150 cursor-pointer"
                    :class="[
                      isChildActive(item.children)
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-700 dark:hover:text-slate-200',
                    ]"
                  >
                    <component :is="item.icon" class="size-[18px] shrink-0" />
                    <span
                      v-if="!isCollapsed"
                      class="overflow-hidden whitespace-nowrap"
                    >
                      {{ item.label }}
                    </span>
                    <ChevronDown
                      v-if="!isCollapsed"
                      class="size-4 ml-auto transition-transform duration-200"
                      :class="activitiesOpen ? 'rotate-180' : ''"
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div class="mt-0.5 space-y-0.5">
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.href"
                      :to="child.href"
                      class="flex items-center gap-3 rounded-lg py-2 text-sm w-full transition-colors duration-150 cursor-pointer"
                      :class="[
                        isCollapsed ? 'px-3' : 'pl-8 pr-3',
                        isActive(child.href)
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium'
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-700 dark:hover:text-slate-200',
                      ]"
                    >
                      <component
                        :is="child.icon"
                        class="size-[18px] shrink-0"
                      />
                      <span
                        v-if="!isCollapsed"
                        class="overflow-hidden whitespace-nowrap"
                      >
                        {{ child.label }}
                      </span>
                    </NuxtLink>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </template>

            <!-- Regular Nav Item -->
            <template v-else>
              <NuxtLink
                :to="item.href!"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full transition-colors duration-150 cursor-pointer"
                :class="[
                  isActive(item.href)
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-700 dark:hover:text-slate-200',
                ]"
              >
                <component :is="item.icon" class="size-[18px] shrink-0" />
                <span
                  v-if="!isCollapsed"
                  class="overflow-hidden whitespace-nowrap"
                >
                  {{ item.label }}
                </span>
                <!-- Badge -->
                <span
                  v-if="item.badge && !isCollapsed"
                  class="ml-auto bg-primary text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1"
                >
                  {{ item.badge }}
                </span>
              </NuxtLink>
            </template>
          </template>
        </div>
      </div>
    </nav>

    <!-- BOTTOM -->
    <div
      class="mt-auto pt-3 pb-4 px-2 border-t border-slate-100 dark:border-slate-800 shrink-0"
    >
      <!-- Team Card -->
      <div
        v-if="!isCollapsed"
        class="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800 px-3 py-2.5 mb-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
      >
        <Avatar class="size-8 rounded-lg">
          <AvatarFallback
            class="bg-secondary text-white text-xs font-medium rounded-lg"
          >
            RK
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col min-w-0">
          <span
            class="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide"
            >Team</span
          >
          <span
            class="text-sm font-medium text-slate-700 dark:text-slate-200 truncate"
            >Rina Khatun</span
          >
        </div>
        <ChevronsUpDown class="size-4 text-slate-400 ml-auto shrink-0" />
      </div>
      <!-- Team Card Collapsed -->
      <div v-else class="flex justify-center mb-3">
        <Avatar class="size-8 rounded-lg">
          <AvatarFallback
            class="bg-secondary text-white text-xs font-medium rounded-lg"
          >
            RK
          </AvatarFallback>
        </Avatar>
      </div>

      <!-- Upgrade Plan -->
      <Button
        v-if="!isCollapsed"
        variant="outline"
        size="sm"
        class="w-full mb-2 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
      >
        <Sparkles class="size-4 mr-2 text-accent" />
        Upgrade Plan
      </Button>

      <!-- Logout -->
      <button
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
      >
        <LogOut class="size-[18px] shrink-0" />
        <span v-if="!isCollapsed">Logout</span>
      </button>

      <!-- Footer -->
      <p
        v-if="!isCollapsed"
        class="text-center text-[10px] text-slate-400 dark:text-slate-500 mt-3"
      >
        © 2024 Shuvo Bibaho, Inc.
      </p>
    </div>
  </aside>
</template>
