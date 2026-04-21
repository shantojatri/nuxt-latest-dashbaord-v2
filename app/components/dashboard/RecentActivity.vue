<!-- app/components/dashboard/RecentActivity.vue -->
<script setup lang="ts">
import { MessageSquare, Heart, UserPlus, Star } from "lucide-vue-next";

const activities = [
  {
    id: 1,
    type: "message",
    user: "Fatema Begum",
    action: "sent you a message",
    time: "2 minutes ago",
    icon: MessageSquare,
    iconClass: "text-secondary bg-secondary/10",
  },
  {
    id: 2,
    type: "match",
    user: "Nasrin Akter",
    action: "expressed interest in your profile",
    time: "1 hour ago",
    icon: Heart,
    iconClass: "text-primary bg-primary/10",
  },
  {
    id: 3,
    type: "new_member",
    user: "Sumaiya Islam",
    action: "just joined the platform",
    time: "3 hours ago",
    icon: UserPlus,
    iconClass: "text-accent bg-accent/10",
  },
  {
    id: 4,
    type: "shortlist",
    user: "System",
    action: "added 5 new matches to your shortlist",
    time: "5 hours ago",
    icon: Star,
    iconClass: "text-yellow-500 bg-yellow-500/10",
  },
];
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm h-full">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-base font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
      <button class="text-xs font-medium text-secondary hover:underline">View All</button>
    </div>

    <div class="space-y-6">
      <div v-for="activity in activities" :key="activity.id" class="flex gap-4">
        <div class="shrink-0 size-9 rounded-lg flex items-center justify-center" :class="activity.iconClass">
          <component :is="activity.icon" class="size-4" />
        </div>
        <div class="flex-1 space-y-1">
          <p class="text-sm text-slate-600 dark:text-slate-300">
            <span class="font-bold text-slate-900 dark:text-white">{{ activity.user }}</span>
            {{ activity.action }}
          </p>
          <p class="text-xs text-slate-400 dark:text-slate-500">{{ activity.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
