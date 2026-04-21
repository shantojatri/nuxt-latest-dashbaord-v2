<!-- app/components/dashboard/NewMembersChart.vue -->
<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip as ChartTooltip,
} from 'chart.js'
import { Users, ChevronDown, TrendingUp } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTooltip)

const barColors = [
  '#E2E8F0', // Sun
  '#E2E8F0', // Mon
  '#4F46E5', // Tue (active)
  '#E2E8F0', // Wed
  '#E2E8F0', // Thu
  '#E2E8F0', // Fri
  '#E2E8F0', // Sat
]

const chartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [320, 890, 3874, 650, 980, 720, 1100],
      backgroundColor: barColors,
      borderRadius: 6,
      barThickness: 28,
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
        color: (context: any) => {
          return context.index === 2 ? '#1E293B' : '#94A3B8'
        },
        font: (context: any) => {
          return {
            family: 'Inter',
            size: 12,
            weight: context.index === 2 ? 'bold' : 'normal',
          }
        },
      },
      border: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
    },
  },
}
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-2">
        <Users class="size-5 text-slate-500 dark:text-slate-400" />
        <span class="text-base font-semibold text-slate-900 dark:text-white">New Members</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="sm" class="h-8 text-xs text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700">
            Weekly
            <ChevronDown class="size-3 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem class="cursor-pointer">Daily</DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer">Weekly</DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer">Monthly</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <!-- Sub-header -->
    <div class="mt-3 flex items-center gap-2">
      <span class="text-2xl font-bold text-slate-900 dark:text-white">24,473</span>
      <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400">
        <TrendingUp class="size-3" />
        8.3% ↗
      </span>
      <span class="text-sm text-slate-500 dark:text-slate-400">+ 749 registered</span>
    </div>

    <!-- Chart -->
    <div class="mt-4 h-40">
      <ClientOnly>
        <Bar :data="chartData" :options="chartOptions" />
      </ClientOnly>
    </div>
  </div>
</template>
