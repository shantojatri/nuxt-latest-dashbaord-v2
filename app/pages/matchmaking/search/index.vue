<!-- app/pages/search/index.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Search,
  Filter,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Send,
  Loader2,
  ChevronDown,
  Crown,
  BookOpen
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

// Filters State
const ageMin = ref("");
const ageMax = ref("");
const selectedCity = ref("all");
const selectedProfession = ref("all");
const selectedReligion = ref("all");

// Profiles Data
const allProfiles = [
  { id: 1, name: "Fatema Begum", age: 24, city: "Dhaka", profession: "Software Engineer", religion: "Muslim", match: 95, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema", userType: "platinum", degree: "B.Sc in CSE" },
  { id: 2, name: "Nasrin Akter", age: 27, city: "Chittagong", profession: "Doctor", religion: "Muslim", match: 88, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin", userType: "gold", degree: "MBBS, FCPS" },
  { id: 3, name: "Sumaiya Islam", age: 22, city: "Sylhet", profession: "Student", religion: "Muslim", match: 91, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya", userType: "free", degree: "BBA (Ongoing)" },
  { id: 4, name: "Ruksana Khanam", age: 29, city: "Rajshahi", profession: "Teacher", religion: "Muslim", match: 82, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruksana", userType: "free", degree: "M.A in English" },
  { id: 5, name: "Maliha Chowdhury", age: 25, city: "Dhaka", profession: "Architect", religion: "Muslim", match: 87, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maliha", userType: "gold", degree: "B.Arch" },
  { id: 6, name: "Jannatul Ferdous", age: 23, city: "Comilla", profession: "Graphic Designer", religion: "Muslim", match: 84, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jannatul", userType: "free", degree: "B.F.A" },
  { id: 7, name: "Ayesha Siddiqua", age: 26, city: "Dhaka", profession: "Doctor", religion: "Muslim", match: 93, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha", userType: "platinum", degree: "MBBS" },
  { id: 8, name: "Sabina Yasmin", age: 28, city: "Khulna", profession: "Business", religion: "Muslim", match: 85, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sabina", userType: "gold", degree: "MBA" },
  { id: 9, name: "Tania Sultana", age: 24, city: "Dhaka", profession: "Engineer", religion: "Muslim", match: 89, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tania", userType: "free", degree: "B.Sc in EEE" },
  { id: 10, name: "Liza Akter", age: 21, city: "Sylhet", profession: "Student", religion: "Muslim", match: 90, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liza", userType: "free", degree: "B.Sc in Economics" },
  { id: 11, name: "Priya Das", age: 25, city: "Chittagong", profession: "Banker", religion: "Hindu", match: 86, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", userType: "gold", degree: "BBA, MBA" },
  { id: 12, name: "Meherun Nesa", age: 30, city: "Dhaka", profession: "Teacher", religion: "Muslim", match: 80, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meherun", userType: "free", degree: "M.Sc in Physics" },
];

// Reactive Filtering Logic
const filteredProfiles = computed(() => {
  return allProfiles.filter(profile => {
    const matchesAgeMin = !ageMin.value || profile.age >= parseInt(ageMin.value);
    const matchesAgeMax = !ageMax.value || profile.age <= parseInt(ageMax.value);
    const matchesCity = selectedCity.value === "all" || profile.city.toLowerCase() === selectedCity.value;
    const matchesProfession = selectedProfession.value === "all" || profile.profession.toLowerCase().includes(selectedProfession.value);
    const matchesReligion = selectedReligion.value === "all" || profile.religion.toLowerCase() === selectedReligion.value;
    
    return matchesAgeMin && matchesAgeMax && matchesCity && matchesProfession && matchesReligion;
  });
});

// Load More Logic
const itemsPerPage = 8;
const visibleCount = ref(itemsPerPage);
const isLoadingMore = ref(false);

const displayedProfiles = computed(() => {
  return filteredProfiles.value.slice(0, visibleCount.value);
});

const hasMore = computed(() => {
  return visibleCount.value < filteredProfiles.value.length;
});

const loadMore = () => {
  isLoadingMore.value = true;
  // Simulate network delay
  setTimeout(() => {
    visibleCount.value += 4;
    isLoadingMore.value = false;
  }, 600);
};

const handleSearch = () => {
  visibleCount.value = itemsPerPage;
};

const resetFilters = () => {
  ageMin.value = "";
  ageMax.value = "";
  selectedCity.value = "all";
  selectedProfession.value = "all";
  selectedReligion.value = "all";
  visibleCount.value = itemsPerPage;
};
</script>

<template>
  <div class="space-y-6">
    <!-- Search and Filter Header -->
    <div class="flex flex-col gap-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
            Find Your Match
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Discover compatible partners based on your preferences.</p>
        </div>
        <div class="flex items-center gap-2">
          <Badge variant="secondary" class="rounded-full px-3 py-1 bg-primary/10 text-primary border-none font-bold">
            {{ filteredProfiles.length }} Profiles Found
          </Badge>
          <Button variant="ghost" size="sm" class="text-xs text-slate-500 hover:text-primary" @click="resetFilters">
            Reset All
          </Button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
      >
        <div class="space-y-2">
          <label class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Age Range</label>
          <div class="flex items-center gap-2">
            <Input v-model="ageMin" placeholder="Min" class="h-10 rounded-xl" type="number" />
            <span class="text-slate-400 font-bold">-</span>
            <Input v-model="ageMax" placeholder="Max" class="h-10 rounded-xl" type="number" />
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Location</label>
          <Select v-model="selectedCity">
            <SelectTrigger class="h-10 rounded-xl">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="dhaka">Dhaka</SelectItem>
              <SelectItem value="chittagong">Chittagong</SelectItem>
              <SelectItem value="sylhet">Sylhet</SelectItem>
              <SelectItem value="rajshahi">Rajshahi</SelectItem>
              <SelectItem value="khulna">Khulna</SelectItem>
              <SelectItem value="comilla">Comilla</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Profession</label>
          <Select v-model="selectedProfession">
            <SelectTrigger class="h-10 rounded-xl">
              <SelectValue placeholder="Any Profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Profession</SelectItem>
              <SelectItem value="engineer">Engineer</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="banker">Banker</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Religion</label>
          <Select v-model="selectedReligion">
            <SelectTrigger class="h-10 rounded-xl">
              <SelectValue placeholder="Any Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Religion</SelectItem>
              <SelectItem value="muslim">Muslim</SelectItem>
              <SelectItem value="hindu">Hindu</SelectItem>
              <SelectItem value="christian">Christian</SelectItem>
              <SelectItem value="buddhist">Buddhist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="flex items-end">
          <Button 
            class="w-full bg-primary hover:bg-primary/90 h-10 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            @click="handleSearch"
          >
            <Search class="size-4 mr-2" />
            Apply Filters
          </Button>
        </div>
      </div>
    </div>

    <!-- Profiles Grid -->
    <div v-if="displayedProfiles.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
      <div
        v-for="profile in displayedProfiles"
        :key="profile.id"
        class="group relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500"
      >
        <!-- Profile Image -->
        <div class="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
          <img
            :src="profile.image"
            :alt="profile.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <!-- User Type Badge -->
          <div class="absolute top-3 left-3">
            <div
              v-if="profile.userType !== 'free'"
              :class="[
                'backdrop-blur-sm px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-white/20',
                profile.userType === 'platinum' ? 'bg-gradient-to-r from-slate-900/90 to-slate-800/90 text-white' : 'bg-gradient-to-r from-amber-400/90 to-orange-500/90 text-white'
              ]"
            >
              <Crown class="size-3.5" :class="profile.userType === 'platinum' ? 'text-accent fill-accent' : 'text-white fill-white'" />
              <span class="text-[10px] font-black uppercase tracking-tighter">{{ profile.userType }}</span>
            </div>
          </div>
          <!-- Match Badge -->
          <div class="absolute top-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-white/20">
              <Heart class="size-3.5 text-primary fill-primary animate-pulse" />
              <span class="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tighter">{{ profile.match }}% Match</span>
            </div>
          </div>
          
          <!-- Overlay Info on Hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p class="text-[10px] text-white/80 font-medium line-clamp-2">Active {{ Math.floor(Math.random() * 60) }}m ago • Verified Profile</p>
          </div>
        </div>

        <!-- Profile Info -->
        <div class="p-4 space-y-4">
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>{{ profile.name }}, {{ profile.age }}</span>
              <div class="size-2 rounded-full bg-green-500 animate-pulse"></div>
            </h3>
            <div class="flex items-center gap-1.5 mt-1 text-slate-500 dark:text-slate-400">
              <MapPin class="size-3 text-secondary" />
              <span class="text-[11px] font-medium">{{ profile.city }}, Bangladesh</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <div class="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
              <Briefcase class="size-3 text-secondary" />
              {{ profile.profession }}
            </div>
            <div class="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
              <GraduationCap class="size-3 text-accent" />
              {{ profile.religion }}
            </div>
            <div v-if="profile.degree" class="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
              <BookOpen class="size-3 text-primary" />
              {{ profile.degree }}
            </div>
          </div>

          <div class="pt-2 flex gap-2">
            <NuxtLink :to="`/matchmaking/profile/${profile.id}`" class="flex-1">
              <Button variant="outline" class="w-full h-10 text-xs font-bold rounded-xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary hover:border-primary/30 transition-colors">
                View Profile
              </Button>
            </NuxtLink>
            <Button class="flex-1 h-10 text-xs font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-md shadow-primary/10">
              <Send class="size-3.5 mr-1.5" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="py-20 flex flex-col items-center justify-center text-center space-y-4">
      <div class="size-20 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
        <Search class="size-10 text-slate-300" />
      </div>
      <div class="space-y-1">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">No matches found</h3>
        <p class="text-sm text-slate-500 max-w-xs">Try adjusting your filters to find more potential matches.</p>
      </div>
      <Button variant="outline" class="rounded-xl" @click="resetFilters">Clear All Filters</Button>
    </div>

    <!-- Load More -->
    <div v-if="filteredProfiles.length > 0" class="flex flex-col items-center justify-center pt-12 pb-8 space-y-4">
      <p class="text-xs font-medium text-slate-500">
        Showing {{ displayedProfiles.length }} of {{ filteredProfiles.length }} profiles
      </p>
      
      <div v-if="hasMore" class="w-full max-w-xs">
        <Button 
          variant="outline" 
          class="w-full h-11 rounded-xl border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
          :disabled="isLoadingMore"
          @click="loadMore"
        >
          <template v-if="isLoadingMore">
            <Loader2 class="size-4 animate-spin" />
            Loading...
          </template>
          <template v-else>
            Load More Profiles
            <ChevronDown class="size-4" />
          </template>
        </Button>
      </div>
      
      <div v-else class="text-sm font-bold text-slate-400 py-4">
        You've reached the end of the results
      </div>
    </div>
  </div>
</template>
