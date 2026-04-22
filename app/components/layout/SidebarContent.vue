<!-- app/components/layout/SidebarContent.vue -->
<script setup lang="ts">
import { ref } from "vue";
import AppLogo from "../shared/AppLogo.vue";
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
  ChevronDown,
  Sparkles,
  LogOut,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const props = defineProps<{
  isCollapsed: boolean;
}>();

const emit = defineEmits(["click"]);

const { activeRoute } = useSidebar();
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
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/matchmaking/dashboard",
      },
      { label: "Search", icon: Search, href: "/matchmaking/search" },
      { label: "Profile", icon: User, href: "/matchmaking/profile" },
      {
        label: "Messages",
        icon: MessageSquare,
        href: "/matchmaking/messages",
        badge: 8,
      },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { label: "Pricing", icon: CreditCard, href: "/matchmaking/pricing" },
      {
        label: "Activities",
        icon: Activity,
        collapsible: true,
        children: [
          {
            label: "Rejected",
            icon: XCircle,
            href: "/matchmaking/activities/rejected",
          },
          {
            label: "Short Listed",
            icon: Star,
            href: "/matchmaking/activities/shortlisted",
          },
          {
            label: "Block List",
            icon: Ban,
            href: "/matchmaking/activities/blocked",
          },
        ],
      },
    ],
  },
  {
    label: "SUPPORT",
    items: [
      { label: "Settings", icon: Settings, href: "/matchmaking/settings" },
    ],
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
  <div class="flex flex-col h-full overflow-hidden">
    <!-- Desktop Logo (Hidden in mobile view which has its own header) -->
    <div
      class="h-16 hidden lg:flex items-center px-3 border-b border-slate-100 dark:border-slate-800 shrink-0"
    >
      <AppLogo :collapsed="props.isCollapsed" />
    </div>

    <!-- NAV -->
    <nav class="flex-1 overflow-y-auto py-4 px-2 space-y-5" role="navigation">
      <div v-for="section in navSections" :key="section.label">
        <!-- Section Label -->
        <template v-if="!props.isCollapsed">
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
                      v-if="!props.isCollapsed"
                      class="overflow-hidden whitespace-nowrap"
                    >
                      {{ item.label }}
                    </span>
                    <ChevronDown
                      v-if="!props.isCollapsed"
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
                      @click="emit('click')"
                      class="flex items-center gap-3 rounded-lg py-2 text-sm w-full transition-colors duration-150 cursor-pointer"
                      :class="[
                        props.isCollapsed ? 'px-3' : 'pl-8 pr-3',
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
                        v-if="!props.isCollapsed"
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
                @click="emit('click')"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full transition-colors duration-150 cursor-pointer"
                :class="[
                  isActive(item.href)
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-700 dark:hover:text-slate-200',
                ]"
              >
                <component :is="item.icon" class="size-[18px] shrink-0" />
                <span
                  v-if="!props.isCollapsed"
                  class="overflow-hidden whitespace-nowrap"
                >
                  {{ item.label }}
                </span>
                <!-- Badge -->
                <span
                  v-if="item.badge && !props.isCollapsed"
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
      <!-- Upgrade Plan Card -->
      <div
        v-if="!props.isCollapsed"
        class="mb-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group"
      >
        <div
          class="absolute -right-4 -top-4 size-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"
        ></div>
        <div class="relative z-10 space-y-3">
          <div class="flex items-center gap-2">
            <div
              class="size-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <Sparkles class="size-4 text-primary" />
            </div>
            <span
              class="text-xs font-bold text-slate-900 dark:text-white tracking-tight"
              >Upgrade Plan</span
            >
          </div>
          <p
            class="text-[10px] text-slate-500 dark:text-slate-400 leading-normal"
          >
            Get unlimited matches and priority support.
          </p>
          <Button
            variant="default"
            size="sm"
            class="w-full h-8 text-[11px] font-bold bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md shadow-primary/20"
          >
            Go Premium
          </Button>
        </div>
      </div>

      <!-- Collapsed Upgrade Icon -->
      <div v-else class="mb-4 flex justify-center">
        <button
          class="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
        >
          <Sparkles class="size-5" />
        </button>
      </div>

      <!-- Logout -->
      <button
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
      >
        <LogOut class="size-[18px] shrink-0" />
        <span v-if="!props.isCollapsed">Logout</span>
      </button>

      <!-- Footer -->
      <p
        v-if="!props.isCollapsed"
        class="text-center text-[10px] text-slate-400 dark:text-slate-500 mt-3"
      >
        © 2024 Shuvo Bibaho, Inc.
      </p>
    </div>
  </div>
</template>
