<!-- app/components/layout/AppSidebar.vue -->
<script setup lang="ts">
import { X } from "lucide-vue-next";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import AppLogo from "../shared/AppLogo.vue";
import LanguageSwitcher from "../shared/LanguageSwitcher.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";
import NotificationBell from "../shared/NotificationBell.vue";
import SidebarContent from "./SidebarContent.vue";

const { isCollapsed, isMobileOpen, closeMobile } = useSidebar();
</script>

<template>
  <!-- Desktop Sidebar -->
  <aside
    class="hidden lg:flex flex-col h-screen sticky top-0 overflow-hidden bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-all duration-300 ease-in-out"
    :class="isCollapsed ? 'w-[72px]' : 'w-64'"
  >
    <SidebarContent :is-collapsed="isCollapsed" />
  </aside>

  <!-- Mobile Sidebar Drawer -->
  <Sheet :open="isMobileOpen" @update:open="closeMobile">
    <SheetContent
      side="left"
      class="p-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800"
    >
      <div class="flex flex-col h-full">
        <!-- Mobile Header with Close -->
        <div
          class="h-16 flex items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800 shrink-0"
        >
          <AppLogo :collapsed="false" />
          <button
            @click="closeMobile"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X class="size-5" />
          </button>
        </div>

        <!-- Mobile Quick Actions (Moved from Navbar) -->
        <div
          class="px-4 py-4 grid grid-cols-3 gap-2 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800 shrink-0"
        >
          <div class="flex flex-col items-center gap-1">
            <ThemeToggle />
            <span class="text-[10px] font-bold text-slate-400 uppercase"
              >Theme</span
            >
          </div>
          <div class="flex flex-col items-center gap-1">
            <NotificationBell />
            <span class="text-[10px] font-bold text-slate-400 uppercase"
              >Alerts</span
            >
          </div>
          <div class="flex flex-col items-center gap-1">
            <LanguageSwitcher />
            <span class="text-[10px] font-bold text-slate-400 uppercase"
              >Lang</span
            >
          </div>
        </div>

        <!-- Main Navigation -->
        <div class="flex-1 overflow-hidden">
          <SidebarContent :is-collapsed="false" @click="closeMobile" />
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
