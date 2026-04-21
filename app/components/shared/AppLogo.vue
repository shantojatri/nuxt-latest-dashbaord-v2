<!-- app/components/shared/AppLogo.vue -->
<script setup lang="ts">
import { Heart } from 'lucide-vue-next'

defineProps<{
  collapsed?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <Heart
      class="size-6 shrink-0 text-primary fill-primary"
    />
    <span
      v-if="!collapsed"
      class="font-bold text-lg text-slate-900 dark:text-white whitespace-nowrap overflow-hidden"
    >
      Shuvo Bibaho
    </span>
  </div>
</template>
