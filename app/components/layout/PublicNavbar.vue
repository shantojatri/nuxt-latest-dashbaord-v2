<!-- app/components/layout/PublicNavbar.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X, User } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import AppLogo from "../shared/AppLogo.vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Pricing", href: "/pricing" },
  { label: "Success Stories", href: "#stories" },
];
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>

      <!-- Desktop Menus -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/matchmaking/dashboard">
          <Button
            variant="ghost"
            size="icon"
            class="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:text-primary"
          >
            <User class="size-5" />
          </Button>
        </NuxtLink>

        <!-- Mobile Toggle -->
        <button
          class="md:hidden p-2 text-slate-600 dark:text-slate-300"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" class="size-6" />
          <X v-else class="size-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 space-y-4 md:hidden shadow-xl"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          class="block text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
          <Button
            class="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl h-11 shadow-lg shadow-primary/20"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
