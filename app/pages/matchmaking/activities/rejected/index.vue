<!-- app/pages/activities/rejected/index.vue -->
<script setup lang="ts">
import { XCircle, MoreHorizontal, Filter, Search, MapPin, Calendar, RefreshCcw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const rejected = [
  {
    id: 1,
    name: "Ruksana Khanam",
    age: 29,
    location: "Rajshahi",
    date: "Oct 10, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruksana",
  },
];
</script>

<template>
  <div class="space-y-6">
    <!-- Breadcrumb and Header -->
    <div class="space-y-1">
      <div class="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
        <span>Activities</span>
        <span class="text-slate-300">/</span>
        <span class="text-primary">Rejected</span>
      </div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rejected Profiles</h1>
    </div>

    <!-- Actions Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <Input placeholder="Search rejected..." class="pl-9 h-9 rounded-lg border-slate-100 dark:border-slate-800" />
      </div>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" class="rounded-lg border-slate-200 dark:border-slate-700 text-xs">
          <Filter class="size-3.5 mr-2" />
          Filter
        </Button>
      </div>
    </div>

    <!-- Table -->
    <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      <Table v-if="rejected.length > 0">
        <TableHeader>
          <TableRow class="bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 border-slate-100 dark:border-slate-800">
            <TableHead class="w-12 text-center">
              <Checkbox />
            </TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Profile</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Age</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Location</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Date Rejected</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="person in rejected" :key="person.id" class="border-slate-100 dark:border-slate-800 group transition-colors">
            <TableCell class="text-center">
              <Checkbox />
            </TableCell>
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar class="size-10 rounded-xl border border-slate-100 dark:border-slate-800">
                  <AvatarImage :src="person.image" />
                  <AvatarFallback>{{ person.name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">{{ person.name }}</p>
                </div>
              </div>
            </TableCell>
            <TableCell class="text-sm text-slate-600 dark:text-slate-400 font-medium">{{ person.age }}</TableCell>
            <TableCell>
              <div class="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <MapPin class="size-3.5 text-slate-400" />
                {{ person.location }}
              </div>
            </TableCell>
            <TableCell>
              <div class="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <Calendar class="size-3.5 text-slate-400" />
                {{ person.date }}
              </div>
            </TableCell>
            <TableCell class="text-right">
              <div class="flex items-center justify-end gap-2">
                <Button variant="outline" size="sm" class="h-8 text-xs rounded-lg border-slate-200 dark:border-slate-700">
                  <RefreshCcw class="size-3.5 mr-1.5" />
                  Reconsider
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg">
                  <MoreHorizontal class="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <!-- Empty State -->
      <div v-else class="p-20 flex flex-col items-center justify-center text-center space-y-4">
        <div class="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
          <XCircle class="size-8 text-slate-300" />
        </div>
        <div class="space-y-1">
          <h3 class="font-bold text-slate-900 dark:text-white">No Rejected Profiles</h3>
          <p class="text-sm text-slate-500 max-w-xs mx-auto">You haven't rejected any profiles yet. All potential matches are still in your list.</p>
        </div>
      </div>
    </div>
  </div>
</template>
