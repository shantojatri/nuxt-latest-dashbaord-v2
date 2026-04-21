<!-- app/components/dashboard/StatsCard.vue -->
<script setup lang="ts">
import { TrendingUp, TrendingDown, Info } from 'lucide-vue-next'
import type { Component } from 'vue'

defineProps<{
  title: string
  value: string
  trend: number
  trendType: 'up' | 'down'
  icon: Component
  iconClass?: string
}>()
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
    <!-- Top row -->
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-2">
        <component :is="icon" class="size-5" :class="iconClass || 'text-secondary'" />
        <span class="text-sm text-slate-500 dark:text-slate-400">{{ title }}</span>
      </div>
      <Info class="size-4 text-slate-300 dark:text-slate-600 cursor-pointer" />
    </div>

    <!-- Value row -->
    <div class="mt-3 flex items-center gap-3">
      <span class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {{ value }}
      </span>
      <!-- Trend Badge -->
      <span
        v-if="trendType === 'up'"
        class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400"
      >
        <TrendingUp class="size-3" />
        {{ trend }}% ↗
      </span>
      <span
        v-else
        class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-red-50 text-red-500 dark:bg-red-950/50 dark:text-red-400"
      >
        <TrendingDown class="size-3" />
        {{ trend }}% ↘
      </span>
    </div>
  </div>
</template>
