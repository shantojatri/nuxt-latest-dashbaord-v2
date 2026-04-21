<!-- app/layouts/default.vue -->
<script setup lang="ts">
import PublicNavbar from '../components/layout/PublicNavbar.vue';
import PublicFooter from '../components/layout/PublicFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 font-sans selection:bg-primary/20 selection:text-primary">
    <PublicNavbar />
    <main>
      <slot />
    </main>
    <PublicFooter />
  </div>
</template>
