<!-- app/components/dashboard/MatchDistribution.vue -->
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
} from 'chart.js'
import { LayoutGrid, ChevronDown } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

ChartJS.register(ArcElement, ChartTooltip)

const chartData = {
  labels: ['Verified', 'Premium', 'Free'],
  datasets: [
    {
      data: [374, 241, 213],
      backgroundColor: ['#4F46E5', '#FF2400', '#D97706'],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '72%',
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#1E293B',
      titleFont: { family: 'Inter' },
      bodyFont: { family: 'Inter' },
      cornerRadius: 8,
      padding: 10,
    },
  },
}

const stats = [
  { label: 'Verified', value: '374', color: 'bg-secondary' },
  { label: 'Premium', value: '241', color: 'bg-primary' },
  { label: 'Free', value: '213', color: 'bg-accent' },
]
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-2">
        <LayoutGrid class="size-5 text-slate-500 dark:text-slate-400" />
        <span class="text-base font-semibold text-slate-900 dark:text-white">Match Distribution</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="sm" class="h-8 text-xs text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700">
            Monthly
            <ChevronDown class="size-3 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem class="cursor-pointer">Weekly</DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer">Monthly</DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer">Yearly</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <!-- 3 Value Columns -->
    <div class="grid grid-cols-3 gap-2 mt-4 mb-4">
      <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="w-2 h-2 rounded-full" :class="stat.color" />
          <span class="text-xs text-slate-500 dark:text-slate-400">{{ stat.label }}</span>
        </div>
        <span class="text-xl font-bold text-slate-900 dark:text-white">{{ stat.value }}</span>
      </div>
    </div>

    <!-- Donut Chart -->
    <div class="h-44">
      <ClientOnly>
        <Doughnut :data="chartData" :options="chartOptions" />
      </ClientOnly>
    </div>
  </div>
</template>
