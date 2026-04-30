<!-- app/pages/matchmaking/todays-match/index.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Flame,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Send,
  Crown,
  BookOpen,
  Sparkles,
  Clock,
  CheckCircle2
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

// Curated Profiles Data for Today's Match
const todaysMatches = [
  { id: 1, name: "Ayesha Siddiqua", age: 26, city: "Dhaka", profession: "Doctor", religion: "Muslim", match: 98, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha", userType: "platinum", degree: "MBBS, MD", reason: "Highly compatible based on your education preferences." },
  { id: 2, name: "Nasrin Akter", age: 27, city: "Chittagong", profession: "Software Engineer", religion: "Muslim", match: 95, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin", userType: "gold", degree: "B.Sc in CSE", reason: "Matches your location and age preferences perfectly." },
  { id: 3, name: "Tania Sultana", age: 24, city: "Dhaka", profession: "Architect", religion: "Muslim", match: 92, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tania", userType: "free", degree: "B.Arch", reason: "Similar hobbies and lifestyle choices." },
  { id: 4, name: "Priya Das", age: 25, city: "Sylhet", profession: "Banker", religion: "Hindu", match: 89, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", userType: "gold", degree: "BBA, MBA", reason: "Strong mutual interests in traveling and reading." },
];

const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
</script>

<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 md:p-10 border border-white/50 dark:border-slate-800/50 shadow-sm">
      <div class="absolute -right-10 -top-10 size-40 bg-primary/20 rounded-full blur-3xl"></div>
      <div class="absolute -left-10 -bottom-10 size-40 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="size-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
              <Flame class="size-4 text-primary" />
            </div>
            <span class="text-sm font-bold text-primary uppercase tracking-widest">Daily Picks</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Today's <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Top Matches</span>
          </h1>
          <p class="text-slate-600 dark:text-slate-400 max-w-xl text-sm md:text-base font-medium">
            We've handpicked these profiles just for you based on your recent activity and partner preferences. These recommendations refresh every 24 hours.
          </p>
        </div>
        
        <div class="flex flex-col items-start md:items-end gap-2 shrink-0">
          <div class="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/50 dark:border-slate-700/50 shadow-sm">
            <Clock class="size-4 text-slate-500" />
            <span class="text-sm font-bold text-slate-700 dark:text-slate-300">Updated at {{ currentTime }}</span>
          </div>
          <Badge variant="secondary" class="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-primary font-bold border-none px-4 py-1.5 rounded-xl shadow-sm">
            <Sparkles class="size-3.5 mr-1.5" /> {{ todaysMatches.length }} New Matches
          </Badge>
        </div>
      </div>
    </div>

    <!-- Profiles Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div
        v-for="(profile, index) in todaysMatches"
        :key="profile.id"
        class="group relative rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row"
      >
        <!-- Profile Image (Left Side) -->
        <div class="sm:w-2/5 aspect-[4/5] sm:aspect-auto sm:h-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative shrink-0">
          <img
            :src="profile.image"
            :alt="profile.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <!-- User Type Badge -->
          <div class="absolute top-4 left-4">
            <div
              v-if="profile.userType !== 'free'"
              :class="[
                'backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-white/20',
                profile.userType === 'platinum' ? 'bg-slate-900/80 text-white' : 'bg-orange-500/80 text-white'
              ]"
            >
              <Crown class="size-4" :class="profile.userType === 'platinum' ? 'text-accent fill-accent' : 'text-white fill-white'" />
              <span class="text-[10px] font-black uppercase tracking-widest">{{ profile.userType }}</span>
            </div>
          </div>
          <!-- Match Badge -->
          <div class="absolute bottom-4 right-4">
            <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/20">
              <div class="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart class="size-3.5 text-primary fill-primary animate-pulse" />
              </div>
              <span class="text-sm font-black text-slate-900 dark:text-white tracking-tighter">{{ profile.match }}% Match</span>
            </div>
          </div>
        </div>

        <!-- Profile Info (Right Side) -->
        <div class="p-6 sm:w-3/5 flex flex-col">
          <div class="flex-1 space-y-4">
            <!-- Header -->
            <div>
              <div class="flex items-center justify-between mb-1">
                <Badge v-if="index === 0" variant="secondary" class="bg-secondary/10 text-secondary hover:bg-secondary/20 border-none text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-lg mb-2">
                  Top Pick
                </Badge>
                <div v-else class="h-6 mb-2"></div> <!-- Spacer for alignment -->
              </div>
              <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                {{ profile.name }}, {{ profile.age }}
                <CheckCircle2 class="size-4 text-blue-500" />
              </h3>
              <div class="flex items-center gap-1.5 mt-1.5 text-slate-500 dark:text-slate-400">
                <MapPin class="size-4 text-secondary" />
                <span class="text-sm font-medium">{{ profile.city }}, Bangladesh</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 pt-1">
              <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <Briefcase class="size-3.5 text-secondary" />
                {{ profile.profession }}
              </div>
              <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <GraduationCap class="size-3.5 text-accent" />
                {{ profile.religion }}
              </div>
              <div v-if="profile.degree" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <BookOpen class="size-3.5 text-primary" />
                {{ profile.degree }}
              </div>
            </div>

            <!-- Reason -->
            <div class="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 border border-primary/10">
              <p class="text-sm font-medium text-slate-700 dark:text-slate-300 italic flex items-start gap-2">
                <Sparkles class="size-4 text-primary shrink-0 mt-0.5" />
                "{{ profile.reason }}"
              </p>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-6 flex gap-3 mt-auto">
            <NuxtLink :to="`/matchmaking/profile/${profile.id}`" class="flex-1">
              <Button variant="outline" class="w-full h-12 text-sm font-bold rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors shadow-sm">
                View Profile
              </Button>
            </NuxtLink>
            <Button class="flex-1 h-12 text-sm font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group/btn overflow-hidden relative">
              <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span class="relative flex items-center justify-center">
                <Send class="size-4 mr-2" />
                Connect
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
