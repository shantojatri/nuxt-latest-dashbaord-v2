<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ChevronRight, Search, Settings, Home } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathParts = route.path.split('/').filter(p => p);
  return pathParts.map((part, index) => {
    return {
      name: part.replace(/-/g, ' '),
      path: '/' + pathParts.slice(0, index + 1).join('/'),
      isLast: index === pathParts.length - 1
    };
  });
});
</script>

<template>
  <div class="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-16 z-40">
    <!-- Left Side: Breadcrumbs -->
    <nav class="flex items-center gap-1.5 text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 sm:pb-0">
      <NuxtLink to="/" class="flex items-center gap-1.5 hover:text-primary transition-colors">
        <Home class="size-4" />
      </NuxtLink>
      <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <ChevronRight class="size-4 text-slate-300 dark:text-slate-600" />
        <NuxtLink 
          :to="crumb.path"
          class="capitalize transition-colors"
          :class="crumb.isLast ? 'text-slate-900 dark:text-white font-bold' : 'hover:text-primary'"
        >
          {{ crumb.name }}
        </NuxtLink>
      </template>
    </nav>

    <!-- Right Side: Quick Search & Settings -->
    <div class="flex items-center gap-3">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <Input 
          placeholder="Quick search..." 
          class="pl-9 h-9 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium focus-visible:ring-primary shadow-sm w-full transition-all focus:w-full sm:focus:w-72"
        />
      </div>
      <Button variant="outline" size="icon" class="h-9 w-9 shrink-0 rounded-xl border-slate-200 dark:border-slate-800 text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm">
        <Settings class="size-4" />
      </Button>
    </div>
  </div>
</template>
