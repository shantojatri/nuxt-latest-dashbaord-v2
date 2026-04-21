<!-- app/components/dashboard/MatchOverviewChart.vue -->
<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip as ChartTooltip,
} from 'chart.js'
import { BarChart3, Filter, ArrowUpDown, MoreHorizontal, TrendingUp } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTooltip)

const chartData = {
  labels: ['Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Dhaka',
      data: [180, 220, 310],
      backgroundColor: '#FF2400',
      borderRadius: 4,
      barThickness: 14,
    },
    {
      label: 'Chittagong',
      data: [140, 170, 280],
      backgroundColor: '#4F46E5',
      borderRadius: 4,
      barThickness: 14,
    },
    {
      label: 'Sylhet',
      data: [120, 150, 240],
      backgroundColor: '#D97706',
      borderRadius: 4,
      barThickness: 14,
    },
    {
      label: 'Rajshahi',
      data: [100, 130, 200],
      backgroundColor: '#14B8A6',
      borderRadius: 4,
      barThickness: 14,
    },
    {
      label: 'Other',
      data: [80, 110, 160],
      backgroundColor: '#94A3B8',
      borderRadius: 4,
      barThickness: 14,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#94A3B8',
        font: { family: 'Inter', size: 12 },
      },
      border: { display: false },
    },
    y: {
      grid: {
        color: '#F1F5F9',
      },
      ticks: {
        color: '#94A3B8',
        font: { family: 'Inter', size: 11 },
      },
      border: { display: false },
    },
  },
}

const legendItems = [
  { label: 'Dhaka', color: 'bg-primary' },
  { label: 'Chittagong', color: 'bg-secondary' },
  { label: 'Sylhet', color: 'bg-accent' },
  { label: 'Rajshahi', color: 'bg-teal-500' },
  { label: 'Other', color: 'bg-slate-400' },
]
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-2">
        <BarChart3 class="size-5 text-slate-500 dark:text-slate-400" />
        <span class="text-base font-semibold text-slate-900 dark:text-white">Match Overview</span>
      </div>
      <div class="flex items-center gap-1">
        <Button variant="ghost" size="sm" class="h-8 px-2 text-slate-500 dark:text-slate-400">
          <Filter class="size-4" />
        </Button>
        <Button variant="ghost" size="sm" class="h-8 px-2 text-slate-500 dark:text-slate-400">
          <ArrowUpDown class="size-4" />
        </Button>
        <Button variant="ghost" size="sm" class="h-8 px-2 text-slate-500 dark:text-slate-400">
          <MoreHorizontal class="size-4" />
        </Button>
      </div>
    </div>

    <!-- Sub-header -->
    <div class="mt-3 flex items-center gap-2">
      <span class="text-2xl font-bold text-slate-900 dark:text-white">1,257</span>
      <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400">
        <TrendingUp class="size-3" />
        15.8% ↗
      </span>
      <span class="text-sm text-slate-500 dark:text-slate-400">+ 143 increased</span>
    </div>

    <!-- Chart -->
    <div class="mt-4 h-52">
      <ClientOnly>
        <Bar :data="chartData" :options="chartOptions" />
      </ClientOnly>
    </div>

    <!-- Legend -->
    <div class="mt-3 flex items-center gap-4 flex-wrap">
      <div
        v-for="item in legendItems"
        :key="item.label"
        class="flex items-center gap-1.5"
      >
        <span class="w-2 h-2 rounded-full" :class="item.color" />
        <span class="text-xs text-slate-500 dark:text-slate-400">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
