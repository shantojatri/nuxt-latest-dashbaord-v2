<!-- app/components/layout/AppNavbar.vue -->
<script setup lang="ts">
import {
  Search,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  ChevronRight,
  Crown,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AppLogo from "../shared/AppLogo.vue";
import LanguageSwitcher from "../shared/LanguageSwitcher.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";
import NotificationBell from "../shared/NotificationBell.vue";
import UserMenu from "../shared/UserMenu.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { isCollapsed, collapse, toggleMobile } = useSidebar();
const route = useRoute();

const breadcrumbs = computed(() => {
  const pathParts = route.path.split("/").filter((p) => p);
  return pathParts.map((part, index) => {
    return {
      name: part.replace(/-/g, " "),
      path: "/" + pathParts.slice(0, index + 1).join("/"),
      isLast: index === pathParts.length - 1,
    };
  });
});
</script>

<template>
  <header
    class="h-16 sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 flex items-center justify-between gap-4"
  >
    <!-- LEFT -->
    <div class="flex items-center gap-2">
      <!-- Mobile Menu Toggle -->
      <button
        aria-label="Toggle mobile menu"
        class="lg:hidden flex items-center justify-center size-9 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        @click="toggleMobile()"
      >
        <Menu class="size-5" />
      </button>

      <div class="lg:hidden">
        <AppLogo :collapsed="false" />
      </div>

      <!-- Desktop Sidebar Toggle -->
      <button
        aria-label="Toggle sidebar"
        class="hidden lg:inline-flex items-center justify-center size-9 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        @click="collapse()"
      >
        <PanelLeftClose v-if="!isCollapsed" class="size-[18px]" />
        <PanelLeftOpen v-else class="size-[18px]" />
      </button>

      <!-- Breadcrumbs -->
      <Separator orientation="vertical" class="hidden md:block h-6 mx-2" />
      <nav
        class="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-500"
      >
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
          <ChevronRight v-if="index > 0" class="size-4" />
          <NuxtLink
            :to="crumb.path"
            class="capitalize transition-colors"
            :class="
              crumb.isLast
                ? 'text-slate-900 dark:text-white font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white'
            "
          >
            {{ crumb.name }}
          </NuxtLink>
        </template>
      </nav>
    </div>

    <!-- CENTER -->
    <div class="hidden md:block relative w-64">
      <Search
        class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 dark:text-slate-500"
      />
      <Input
        placeholder="Search  ⌘ + F"
        class="pl-9 h-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus-visible:ring-primary"
      />
    </div>

    <!-- RIGHT (Hidden on small mobile, items moved to sidebar) -->
    <div class="flex items-center gap-1">
      <div class="hidden sm:flex items-center gap-1">
        <!-- Relevant to Dashboard (Premium/Credits) -->
        <div
          class="hidden xl:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700 mr-2"
        >
          <div
            class="px-3 py-1 flex items-center gap-1.5 border-r border-slate-200 dark:border-slate-700"
          >
            <div class="size-2 rounded-full bg-primary animate-pulse"></div>
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300"
              >150 Credits</span
            >
          </div>
          <Button
            variant="ghost"
            size="sm"
            class="h-6 px-2 ml-1 text-xs font-bold text-primary hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Crown class="size-3 mr-1" /> Upgrade
          </Button>
        </div>

        <LanguageSwitcher />
        <ThemeToggle />
        <NotificationBell />
        <Separator orientation="vertical" class="h-6 mx-1" />
      </div>
      <UserMenu />
    </div>
  </header>
</template>
