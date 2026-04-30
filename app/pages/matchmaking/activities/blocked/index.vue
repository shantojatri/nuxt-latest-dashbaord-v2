<!-- app/pages/activities/blocked/index.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { Search, ChevronDown, X, MapPin, Calendar, Ban, Unlock, Briefcase } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const searchQuery = ref("");
const selectedLocation = ref("All");
const selectedAge = ref("All");

const locations = ["All", "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"];
const ageRanges = ["All", "18-22", "23-27", "28-32", "33+"];

const blocked = [
  { id: 1, name: "Unknown User", age: 30, location: "Dhaka", date: "Oct 05, 2023", image: "", profession: "Not specified" },
  { id: 2, name: "Rana Hamid", age: 28, location: "Chittagong", date: "Sep 15, 2023", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rana", profession: "Engineer" },
  { id: 3, name: "Sajid Islam", age: 25, location: "Sylhet", date: "Aug 20, 2023", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sajid", profession: "Business" },
];

const filteredList = computed(() =>
  blocked.filter((p) => {
    const matchesSearch = !searchQuery.value || p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesLocation = selectedLocation.value === "All" || p.location === selectedLocation.value;
    const matchesAge = (() => {
      if (selectedAge.value === "All") return true;
      if (selectedAge.value === "33+") return p.age >= 33;
      const [min, max] = selectedAge.value.split("-").map(Number);
      return p.age >= min && p.age <= max;
    })();
    return matchesSearch && matchesLocation && matchesAge;
  })
);

const hasActiveFilters = computed(() => searchQuery.value || selectedLocation.value !== "All" || selectedAge.value !== "All");

function clearFilters() {
  searchQuery.value = "";
  selectedLocation.value = "All";
  selectedAge.value = "All";
}
</script>

<template>
  <div class="space-y-6">
    <!-- Breadcrumb + Filters Row -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <span>Activities</span>
          <span class="text-slate-300">/</span>
          <span class="text-slate-900 dark:text-white">Blocked</span>
        </div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
          Blocked Profiles
          <span class="text-sm font-medium text-slate-400 ml-2">({{ filteredList.length }})</span>
        </h1>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
          <Input v-model="searchQuery" placeholder="Search..." class="pl-8 h-9 w-44 rounded-lg text-sm border-slate-200 dark:border-slate-700" />
        </div>

        <div class="relative">
          <select v-model="selectedLocation" class="h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400/30">
            <option v-for="loc in locations" :key="loc" :value="loc">{{ loc === "All" ? "All Locations" : loc }}</option>
          </select>
          <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400 pointer-events-none" />
        </div>

        <div class="relative">
          <select v-model="selectedAge" class="h-9 pl-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400/30">
            <option v-for="range in ageRanges" :key="range" :value="range">{{ range === "All" ? "All Ages" : `Age ${range}` }}</option>
          </select>
          <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400 pointer-events-none" />
        </div>

        <Button v-if="hasActiveFilters" variant="ghost" size="sm" class="h-9 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-lg" @click="clearFilters">
          <X class="size-3.5 mr-1" /> Clear
        </Button>
      </div>
    </div>

    <!-- Cards Grid -->
    <div v-if="filteredList.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div
        v-for="person in filteredList"
        :key="person.id"
        class="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden"
      >
        <div class="h-1.5 w-full bg-gradient-to-r from-slate-400 via-slate-300 to-transparent" />
        <div class="p-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="relative shrink-0">
              <Avatar class="size-14 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow opacity-75 group-hover:opacity-100 transition-opacity">
                <AvatarImage :src="person.image" />
                <AvatarFallback class="rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-lg">{{ person.name.charAt(0) }}</AvatarFallback>
              </Avatar>
              <span class="absolute -bottom-1 -right-1 size-5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow">
                <Ban class="size-4 text-slate-400" />
              </span>
            </div>
            <div class="min-w-0">
              <p class="font-bold text-slate-900 dark:text-white text-sm leading-tight truncate">{{ person.name }}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Age {{ person.age }}</p>
              <Badge class="mt-1 text-[9px] px-1.5 h-4 font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 border-none rounded-full">Blocked</Badge>
            </div>
          </div>

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

          <div class="flex items-center gap-2 pt-1 border-t border-slate-50 dark:border-slate-800">
            <Button size="sm" variant="outline" class="flex-1 h-8 text-xs rounded-xl border-slate-200 dark:border-slate-700 font-bold">View</Button>
            <Button size="sm" variant="outline" class="flex-1 h-8 text-xs rounded-xl border-slate-200 dark:border-slate-700 font-bold hover:border-slate-300 dark:hover:border-slate-600">
              <Unlock class="size-3 mr-1" /> Unblock
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <div class="size-20 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
        <Ban class="size-9 text-slate-300" />
      </div>
      <div class="space-y-1.5">
        <h3 class="font-bold text-slate-900 dark:text-white">No Blocked Profiles</h3>
        <p class="text-sm text-slate-500 max-w-xs mx-auto">{{ hasActiveFilters ? "Try adjusting your filters." : "Your block list is empty." }}</p>
      </div>
      <Button v-if="hasActiveFilters" variant="outline" size="sm" class="rounded-xl" @click="clearFilters">Clear Filters</Button>
    </div>
  </div>
</template>
