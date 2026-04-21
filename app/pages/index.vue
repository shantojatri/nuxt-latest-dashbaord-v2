<!-- app/pages/dashboard/index.vue -->
<script setup lang="ts">
import {
  Users,
  Heart,
  Link2,
  Calendar,
  ChevronDown,
  SlidersHorizontal,
  Upload,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import StatsCard from "~/components/dashboard/StatsCard.vue";
import MatchOverviewChart from "~/components/dashboard/MatchOverviewChart.vue";
import NewMembersChart from "~/components/dashboard/NewMembersChart.vue";
import MatchDistribution from "~/components/dashboard/MatchDistribution.vue";
import RecentProfilesTable from "~/components/dashboard/RecentProfilesTable.vue";
import RecentActivity from "~/components/dashboard/RecentActivity.vue";

definePageMeta({ layout: "dashboard" });

const stats = [
  {
    title: "Total Members",
    value: "12,450",
    trend: 15.8,
    trendType: "up" as const,
    icon: Users,
    iconClass: "text-secondary",
  },
  {
    title: "New Matches",
    value: "363",
    trend: 34.0,
    trendType: "down" as const,
    icon: Heart,
    iconClass: "text-primary",
  },
  {
    title: "Connection Rate",
    value: "86.5%",
    trend: 24.2,
    trendType: "up" as const,
    icon: Link2,
    iconClass: "text-accent",
  },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <h1 class="text-2xl font-semibold text-slate-900 dark:text-white">
        Dashboard
      </h1>
      <div class="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          class="rounded-lg text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
        >
          <Calendar class="size-4 mr-2" />
          Oct 18 - Nov 18
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="rounded-lg text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
        >
          Monthly
          <ChevronDown class="size-4 ml-1" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="rounded-lg text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
        >
          <SlidersHorizontal class="size-4 mr-2" />
          Filter
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="rounded-lg text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
        >
          <Upload class="size-4 mr-2" />
          Export
        </Button>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <StatsCard
        v-for="stat in stats"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :trend="stat.trend"
        :trend-type="stat.trendType"
        :icon="stat.icon"
        :icon-class="stat.iconClass"
      />
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
      <div class="lg:col-span-3">
        <MatchOverviewChart />
      </div>
      <div class="lg:col-span-2">
        <NewMembersChart />
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <MatchDistribution />
      <RecentProfilesTable />
    </div>

    <!-- Final Row -->
    <div class="mt-4">
      <RecentActivity />
    </div>
  </div>
</template>
