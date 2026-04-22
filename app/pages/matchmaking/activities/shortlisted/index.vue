<!-- app/pages/activities/shortlisted/index.vue -->
<script setup lang="ts">
import { Star, MoreHorizontal, Filter, Search, MapPin, Calendar } from "lucide-vue-next";
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

const shortlisted = [
  {
    id: 1,
    name: "Fatema Begum",
    age: 24,
    location: "Dhaka",
    date: "Oct 18, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
  },
  {
    id: 2,
    name: "Nasrin Akter",
    age: 27,
    location: "Chittagong",
    date: "Oct 15, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin",
  },
  {
    id: 3,
    name: "Sumaiya Islam",
    age: 22,
    location: "Sylhet",
    date: "Oct 12, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya",
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
        <span class="text-secondary">Short Listed</span>
      </div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Short Listed Profiles</h1>
    </div>

    <!-- Actions Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <Input placeholder="Search shortlisted..." class="pl-9 h-9 rounded-lg border-slate-100 dark:border-slate-800" />
      </div>
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <Button variant="outline" size="sm" class="flex-1 sm:flex-none rounded-lg border-slate-200 dark:border-slate-700 text-xs">
          <Filter class="size-3.5 mr-2" />
          Filter
        </Button>
        <Button size="sm" class="flex-1 sm:flex-none bg-secondary hover:bg-secondary/90 rounded-lg text-xs">
          Send Interest to All
        </Button>
      </div>
    </div>

    <!-- Table -->
    <div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow class="bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 border-slate-100 dark:border-slate-800">
            <TableHead class="w-12 text-center">
              <Checkbox />
            </TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Profile</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Age</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Location</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400">Date Added</TableHead>
            <TableHead class="text-xs font-bold uppercase text-slate-400 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="person in shortlisted" :key="person.id" class="border-slate-100 dark:border-slate-800 group transition-colors">
            <TableCell class="text-center">
              <Checkbox />
            </TableCell>
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar class="size-10 rounded-xl border border-slate-100 dark:border-slate-800">
                  <AvatarImage :src="person.image" />
                  <AvatarFallback>{{ person.name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <div class="space-y-0.5">
                  <p class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">{{ person.name }}</p>
                  <Badge variant="secondary" class="text-[10px] px-1.5 h-4 font-bold bg-secondary-50 text-secondary-600 border-none">Verified</Badge>
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
                <Button variant="outline" size="sm" class="h-8 text-xs rounded-lg border-slate-200 dark:border-slate-700">View</Button>
                <Button variant="ghost" size="icon" class="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg">
                  <MoreHorizontal class="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
