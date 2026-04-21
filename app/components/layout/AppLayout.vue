<!-- app/components/layout/AppLayout.vue -->
<script setup lang="ts">
import AppNavbar from "./AppNavbar.vue";
import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <div class="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
    <AppSidebar />
    <div class="flex flex-1 flex-col overflow-hidden min-w-0">
      <AppNavbar />
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
