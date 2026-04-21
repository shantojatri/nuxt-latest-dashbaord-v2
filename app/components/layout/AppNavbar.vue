<!-- app/components/layout/AppNavbar.vue -->
<script setup lang="ts">
import { Search, PanelLeftClose, PanelLeftOpen, Menu } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AppLogo from "../shared/AppLogo.vue";
import LanguageSwitcher from "../shared/LanguageSwitcher.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";
import NotificationBell from "../shared/NotificationBell.vue";
import UserMenu from "../shared/UserMenu.vue";

const { isCollapsed, collapse, toggleMobile } = useSidebar();
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
        <LanguageSwitcher />
        <ThemeToggle />
        <NotificationBell />
        <Separator orientation="vertical" class="h-6 mx-1" />
      </div>
      <UserMenu />
    </div>
  </header>
</template>
