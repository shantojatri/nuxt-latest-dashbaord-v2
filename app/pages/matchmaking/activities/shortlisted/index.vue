<!-- app/pages/activities/shortlisted/index.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Star,
  Search,
  MapPin,
  Calendar,
  Heart,
  ChevronDown,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Briefcase,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const searchQuery = ref("");
const selectedLocation = ref("All");
const selectedAge = ref("All");
const showFilters = ref(false);

const locations = ["All", "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"];
const ageRanges = ["All", "18-22", "23-27", "28-32", "33+"];

const shortlisted = [
  {
    id: 1,
    name: "Fatema Begum",
    age: 24,
    location: "Dhaka",
    date: "Oct 18, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
    profession: "Software Engineer",
    education: "BSc Computer Science",
    verified: true,
  },
  {
    id: 2,
    name: "Nasrin Akter",
    age: 27,
    location: "Chittagong",
    date: "Oct 15, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin",
    profession: "Doctor",
    education: "MBBS",
    verified: true,
  },
  {
    id: 3,
    name: "Sumaiya Islam",
    age: 22,
    location: "Sylhet",
    date: "Oct 12, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya",
    profession: "Teacher",
    education: "BA Honours",
    verified: false,
  },
  {
    id: 4,
    name: "Tasnim Hossain",
    age: 26,
    location: "Rajshahi",
    date: "Oct 10, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tasnim",
    profession: "Banker",
    education: "MBA Finance",
    verified: true,
  },
  {
    id: 5,
    name: "Rumana Parvin",
    age: 25,
    location: "Dhaka",
    date: "Oct 08, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rumana",
    profession: "Architect",
    education: "B.Arch",
    verified: false,
  },
  {
    id: 6,
    name: "Sadia Rahman",
    age: 29,
    location: "Chittagong",
    date: "Oct 05, 2023",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia",
    profession: "Pharmacist",
    education: "B.Pharm",
    verified: true,
  },
];

const filteredList = computed(() => {
  return shortlisted.filter((p) => {
    const matchesSearch =
      !searchQuery.value ||
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesLocation =
      selectedLocation.value === "All" || p.location === selectedLocation.value;
    const matchesAge = (() => {
      if (selectedAge.value === "All") return true;
      const [min, max] = selectedAge.value.split("-").map(Number);
      if (selectedAge.value === "33+") return p.age >= 33;
      return p.age >= min && p.age <= max;
    })();
    return matchesSearch && matchesLocation && matchesAge;
  });
});

function clearFilters() {
  searchQuery.value = "";
  selectedLocation.value = "All";
  selectedAge.value = "All";
}

const hasActiveFilters = computed(
  () =>
    searchQuery.value || selectedLocation.value !== "All" || selectedAge.value !== "All"
);
</script>

<template>
  <div class="space-y-6">
    <!-- Breadcrumb + Filter Row -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <!-- Breadcrumb & Title -->
      <div class="space-y-1">
        <div class="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <span>Activities</span>
          <span class="text-slate-300">/</span>
          <span class="text-secondary">Short Listed</span>
        </div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
          Short Listed
          <span class="text-sm font-medium text-slate-400 ml-2">({{ filteredList.length }})</span>
        </h1>
      </div>

      <!-- Inline filter controls -->
      <div class="flex flex-wrap items-center gap-2">
        <!-- Search -->
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
          <Input
            v-model="searchQuery"
            placeholder="Search..."
            class="pl-8 h-9 w-44 rounded-lg text-sm border-slate-200 dark:border-slate-700"
          />
        </div>

        <!-- Location filter -->
        <div class="relative">
          <select
            v-model="selectedLocation"
            class="h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30"
          >
            <option v-for="loc in locations" :key="loc" :value="loc">
              {{ loc === "All" ? "All Locations" : loc }}
            </option>
          </select>
          <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400 pointer-events-none" />
        </div>

        <!-- Age filter -->
        <div class="relative">
          <select
            v-model="selectedAge"
            class="h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30"
          >
            <option v-for="range in ageRanges" :key="range" :value="range">
              {{ range === "All" ? "All Ages" : `Age ${range}` }}
            </option>
          </select>
          <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400 pointer-events-none" />
        </div>

        <!-- Clear filters -->
        <Button
          v-if="hasActiveFilters"
          variant="ghost"
          size="sm"
          class="h-9 text-xs text-slate-500 hover:text-red-500 rounded-lg"
          @click="clearFilters"
        >
          <X class="size-3.5 mr-1" />
          Clear
        </Button>

        <!-- Send interest to all -->
        <Button size="sm" class="h-9 bg-secondary hover:bg-secondary/90 rounded-lg text-xs font-bold">
          <Heart class="size-3.5 mr-1.5" />
          Send Interest to All
        </Button>
      </div>
    </div>

    <!-- User Cards Grid -->
    <div v-if="filteredList.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div
        v-for="person in filteredList"
        :key="person.id"
        class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-secondary/30 dark:hover:border-secondary/30 transition-all duration-300 overflow-hidden"
      >
        <!-- Card Top accent -->
        <div class="h-1.5 w-full bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />

        <div class="p-5 space-y-4">
          <!-- Avatar + Name -->
          <div class="flex items-center gap-3">
            <div class="relative shrink-0">
              <Avatar class="size-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow">
                <AvatarImage :src="person.image" />
                <AvatarFallback class="rounded-2xl bg-secondary/10 text-secondary font-bold text-lg">
                  {{ person.name.charAt(0) }}
                </AvatarFallback>
              </Avatar>
              <span
                v-if="person.verified"
                class="absolute -bottom-1 -right-1 size-5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow"
              >
                <CheckCircle2 class="size-4 text-secondary" />
              </span>
            </div>
            <div class="min-w-0">
              <p class="font-bold text-slate-900 dark:text-white text-sm leading-tight truncate group-hover:text-secondary transition-colors">
                {{ person.name }}
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Age {{ person.age }}</p>
              <Badge
                v-if="person.verified"
                class="mt-1 text-[9px] px-1.5 h-4 font-bold bg-secondary/10 text-secondary border-none rounded-full"
              >
                Verified
              </Badge>
            </div>
          </div>

          <!-- Details -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <MapPin class="size-3.5 shrink-0 text-slate-400" />
              <span class="truncate">{{ person.location }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Briefcase class="size-3.5 shrink-0 text-slate-400" />
              <span class="truncate">{{ person.profession }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Calendar class="size-3.5 shrink-0 text-slate-400" />
              <span>{{ person.date }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 pt-1 border-t border-slate-50 dark:border-slate-800">
            <Button
              size="sm"
              variant="outline"
              class="flex-1 h-8 text-xs rounded-xl border-slate-200 dark:border-slate-700 font-bold hover:border-secondary/50 hover:text-secondary"
            >
              View
            </Button>
            <Button
              size="sm"
              class="flex-1 h-8 text-xs rounded-xl bg-secondary hover:bg-secondary/90 font-bold"
            >
              <Heart class="size-3 mr-1" />
              Interest
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <div class="size-20 rounded-full bg-secondary/10 flex items-center justify-center">
        <Star class="size-9 text-secondary/50" />
      </div>
      <div class="space-y-1.5">
        <h3 class="font-bold text-slate-900 dark:text-white">No Profiles Found</h3>
        <p class="text-sm text-slate-500 max-w-xs mx-auto">
          {{ hasActiveFilters ? "Try adjusting your filters." : "Your shortlist is empty. Start adding profiles!" }}
        </p>
      </div>
      <Button v-if="hasActiveFilters" variant="outline" size="sm" class="rounded-xl" @click="clearFilters">
        Clear Filters
      </Button>
    </div>
  </div>
</template>
