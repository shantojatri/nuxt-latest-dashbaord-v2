<!-- app/pages/search/index.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
  Search,
  Filter,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Send,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

definePageMeta({ layout: "dashboard" });

const searchFocus = ref(false);

const profiles = [
  {
    id: 1,
    name: "Fatema Begum",
    age: 24,
    city: "Dhaka",
    profession: "Software Engineer",
    religion: "Muslim",
    match: 95,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
  },
  {
    id: 2,
    name: "Nasrin Akter",
    age: 27,
    city: "Chittagong",
    profession: "Doctor",
    religion: "Muslim",
    match: 88,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin",
  },
  {
    id: 3,
    name: "Sumaiya Islam",
    age: 22,
    city: "Sylhet",
    profession: "Student",
    religion: "Muslim",
    match: 91,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya",
  },
  {
    id: 4,
    name: "Ruksana Khanam",
    age: 29,
    city: "Rajshahi",
    profession: "Teacher",
    religion: "Muslim",
    match: 82,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruksana",
  },
  {
    id: 5,
    name: "Maliha Chowdhury",
    age: 25,
    city: "Dhaka",
    profession: "Architect",
    religion: "Muslim",
    match: 87,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maliha",
  },
  {
    id: 6,
    name: "Jannatul Ferdous",
    age: 23,
    city: "Comilla",
    profession: "Graphic Designer",
    religion: "Muslim",
    match: 84,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jannatul",
  },
];
</script>

<template>
  <div class="space-y-6">
    <!-- Search and Filter Header -->
    <div class="flex flex-col gap-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-white">
          Find Your Match
        </h1>
        <div class="flex items-center gap-2">
          <Badge variant="secondary" class="rounded-full px-3 py-1">
            {{ profiles.length }} Profiles Found
          </Badge>
        </div>
      </div>

      <!-- Filter Bar -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
      >
        <div class="space-y-2">
          <label class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Age Range</label>
          <div class="flex items-center gap-2">
            <Input placeholder="Min" class="h-9" />
            <span class="text-slate-400">-</span>
            <Input placeholder="Max" class="h-9" />
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</label>
          <Select>
            <SelectTrigger class="h-9">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dhaka">Dhaka</SelectItem>
              <SelectItem value="chittagong">Chittagong</SelectItem>
              <SelectItem value="sylhet">Sylhet</SelectItem>
              <SelectItem value="rajshahi">Rajshahi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Profession</label>
          <Select>
            <SelectTrigger class="h-9">
              <SelectValue placeholder="Any Profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineer">Engineer</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Religion</label>
          <Select>
            <SelectTrigger class="h-9">
              <SelectValue placeholder="Any Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="muslim">Muslim</SelectItem>
              <SelectItem value="hindu">Hindu</SelectItem>
              <SelectItem value="christian">Christian</SelectItem>
              <SelectItem value="buddhist">Buddhist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="flex items-end">
          <Button class="w-full bg-primary hover:bg-primary/90 h-9">
            <Search class="size-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>

    <!-- Profiles Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="profile in profiles"
        :key="profile.id"
        class="group relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-md transition-all duration-300"
      >
        <!-- Profile Image -->
        <div class="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
          <img
            :src="profile.image"
            :alt="profile.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <!-- Match Badge -->
          <div class="absolute top-3 right-3">
            <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-sm border border-slate-100 dark:border-slate-800">
              <Heart class="size-3.5 text-primary fill-primary" />
              <span class="text-xs font-bold text-slate-900 dark:text-white">{{ profile.match }}% Match</span>
            </div>
          </div>
        </div>

        <!-- Profile Info -->
        <div class="p-4 space-y-3">
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {{ profile.name }}, {{ profile.age }}
            </h3>
            <div class="flex items-center gap-1.5 mt-1 text-slate-500 dark:text-slate-400">
              <MapPin class="size-3.5" />
              <span class="text-xs">{{ profile.city }}</span>
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Briefcase class="size-3.5 text-secondary" />
              <span>{{ profile.profession }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <GraduationCap class="size-3.5 text-accent" />
              <span>{{ profile.religion }}</span>
            </div>
          </div>

          <div class="pt-2 flex gap-2">
            <Button variant="outline" class="flex-1 h-9 text-xs rounded-xl">
              View Profile
            </Button>
            <Button class="flex-1 h-9 text-xs rounded-xl bg-primary hover:bg-primary/90">
              <Send class="size-3.5 mr-1.5" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center pt-8">
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>Previous</Button>
        <Button variant="outline" size="sm" class="bg-primary text-white border-primary">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <span class="text-slate-400 px-2">...</span>
        <Button variant="outline" size="sm">12</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  </div>
</template>
