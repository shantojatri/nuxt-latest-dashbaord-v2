<!-- app/components/dashboard/RecentProfilesTable.vue -->
<script setup lang="ts">
import { Users } from 'lucide-vue-next'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Profile {
  id: number
  name: string
  age: number
  city: string
  status: 'Active' | 'Pending' | 'Rejected'
  match: number
}

const profiles: Profile[] = [
  { id: 1, name: 'Fatema Begum', age: 24, city: 'Dhaka', status: 'Active', match: 87 },
  { id: 2, name: 'Nasrin Akter', age: 27, city: 'Chittagong', status: 'Pending', match: 72 },
  { id: 3, name: 'Sumaiya Islam', age: 22, city: 'Sylhet', status: 'Active', match: 91 },
  { id: 4, name: 'Ruksana Khanam', age: 29, city: 'Rajshahi', status: 'Rejected', match: 45 },
  { id: 5, name: 'Maliha Chowdhury', age: 25, city: 'Dhaka', status: 'Active', match: 83 },
]

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()
}

const statusClasses: Record<string, string> = {
  Active: 'bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400',
  Pending: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400',
  Rejected: 'bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400',
}
</script>

<template>
  <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <Users class="size-5 text-slate-500 dark:text-slate-400" />
        <span class="text-base font-semibold text-slate-900 dark:text-white">Recent Profiles</span>
      </div>
      <NuxtLink
        to="/search"
        class="text-sm text-primary hover:underline font-medium"
      >
        See All →
      </NuxtLink>
    </div>

    <!-- Table -->
    <Table class="mt-4">
      <TableHeader>
        <TableRow class="border-slate-100 dark:border-slate-800">
          <TableHead class="w-10">
            <Checkbox />
          </TableHead>
          <TableHead class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Name
          </TableHead>
          <TableHead class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Status
          </TableHead>
          <TableHead class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Match %
          </TableHead>
          <TableHead class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="profile in profiles"
          :key="profile.id"
          class="border-slate-100 dark:border-slate-800"
        >
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>
            <div class="flex items-center gap-3">
              <Avatar class="size-8">
                <AvatarFallback class="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-xs font-medium">
                  {{ getInitials(profile.name) }}
                </AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium text-slate-900 dark:text-white">
                  {{ profile.name }}
                </p>
                <p class="text-xs text-slate-400 dark:text-slate-500">
                  {{ profile.age }} · {{ profile.city }}
                </p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span
              class="rounded-full px-2.5 py-0.5 text-xs font-medium"
              :class="statusClasses[profile.status]"
            >
              {{ profile.status }}
            </span>
          </TableCell>
          <TableCell>
            <div class="flex items-center gap-2">
              <Progress
                :model-value="profile.match"
                class="h-1.5 w-20"
              />
              <span class="text-xs text-slate-500 dark:text-slate-400">{{ profile.match }}%</span>
            </div>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="sm" class="text-xs h-7">
              View
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
