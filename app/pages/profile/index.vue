<!-- app/pages/profile/index.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
  User,
  Camera,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Settings,
  Pencil,
  CheckCircle2,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

definePageMeta({ layout: "dashboard" });

const isEditing = ref(false);
const completion = ref(85);

const profileInfo = {
  name: "Rina Khatun",
  role: "Premium Member",
  city: "Dhaka, Bangladesh",
  age: 26,
  profession: "UI/UX Designer",
  education: "BSc in Computer Science",
  joined: "October 2023",
};
</script>

<template>
  <div class="space-y-6 pb-12">
    <!-- Profile Header Card -->
    <div
      class="relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
    >
      <!-- Cover Image -->
      <div class="h-48 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 relative group">
        <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" size="sm" class="rounded-full">
            <Camera class="size-4 mr-2" />
            Change Cover
          </Button>
        </div>
      </div>

      <!-- Profile Basic Info Row -->
      <div class="px-6 pb-6 relative">
        <div class="flex flex-col md:flex-row md:items-end gap-6 -mt-12">
          <!-- Floating Avatar -->
          <div class="relative group">
            <Avatar class="size-32 border-4 border-white dark:border-slate-900 shadow-lg">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rina" />
              <AvatarFallback class="bg-slate-100 text-2xl font-bold text-slate-400">RK</AvatarFallback>
            </Avatar>
            <button class="absolute bottom-1 right-1 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera class="size-4 text-slate-600 dark:text-slate-300" />
            </button>
          </div>

          <!-- Name and Status -->
          <div class="flex-1 space-y-1 pb-2">
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-slate-900 dark:text-white">{{ profileInfo.name }}</h1>
              <Badge class="bg-primary hover:bg-primary/90 rounded-full font-medium">
                <CheckCircle2 class="size-3 mr-1" />
                {{ profileInfo.role }}
              </Badge>
            </div>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <div class="flex items-center gap-1.5">
                <MapPin class="size-4 text-secondary" />
                {{ profileInfo.city }}
              </div>
              <div class="flex items-center gap-1.5">
                <Calendar class="size-4 text-accent" />
                Joined {{ profileInfo.joined }}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2 pb-2">
            <Button
              variant="outline"
              size="sm"
              class="rounded-xl border-slate-200 dark:border-slate-700"
              @click="isEditing = !isEditing"
            >
              <Pencil class="size-4 mr-2" />
              {{ isEditing ? 'Cancel' : 'Edit Profile' }}
            </Button>
            <Button variant="outline" size="sm" class="rounded-xl border-slate-200 dark:border-slate-700 h-9 w-9 p-0">
              <Settings class="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Card -->
    <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <CardContent class="p-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-1 flex-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Profile Completion</h3>
              <span class="text-sm font-bold text-secondary">{{ completion }}%</span>
            </div>
            <div class="[--progress-indicator-color:theme(colors.secondary.DEFAULT)] [&_[data-slot=progress-indicator]]:bg-[--progress-indicator-color]">
              <Progress :model-value="completion" class="h-2 bg-secondary-100 dark:bg-secondary-900/30" />
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">Complete your family details to reach 100% and get 2x more matches!</p>
          </div>
          <Button variant="secondary" size="sm" class="rounded-xl font-medium">
            Complete Now
          </Button>
        </div>
      </CardContent>
    </Card>

    <!-- Main Content Tabs -->
    <Tabs defaultValue="about" class="w-full">
      <div class="flex items-center justify-between mb-4">
        <TabsList class="bg-slate-100/50 dark:bg-slate-900/50 p-1 rounded-xl border border-slate-100 dark:border-slate-800 h-auto">
          <TabsTrigger value="about" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">About</TabsTrigger>
          <TabsTrigger value="family" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">Family</TabsTrigger>
          <TabsTrigger value="lifestyle" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">Lifestyle</TabsTrigger>
          <TabsTrigger value="preferences" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">Preferences</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="about" class="space-y-6 focus-visible:outline-none">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card class="md:col-span-2 border-slate-100 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle class="text-lg font-bold flex items-center gap-2">
                <User class="size-5 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a passionate UI/UX Designer who loves creating beautiful and functional interfaces. In my free time, I enjoy reading, traveling, and exploring new cuisines. I'm looking for a partner who is kind, ambitious, and shares similar values.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="space-y-1">
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Age</span>
                  <p class="font-medium text-slate-900 dark:text-white">{{ profileInfo.age }} Years</p>
                </div>
                <div class="space-y-1">
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Profession</span>
                  <p class="font-medium text-slate-900 dark:text-white">{{ profileInfo.profession }}</p>
                </div>
                <div class="space-y-1">
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Education</span>
                  <p class="font-medium text-slate-900 dark:text-white">{{ profileInfo.education }}</p>
                </div>
                <div class="space-y-1">
                  <span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Height</span>
                  <p class="font-medium text-slate-900 dark:text-white">5' 4"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card class="border-slate-100 dark:border-slate-800 shadow-sm h-fit">
            <CardHeader>
              <CardTitle class="text-lg font-bold flex items-center gap-2">
                <Heart class="size-5 text-secondary" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge variant="outline" class="rounded-lg px-3 py-1 bg-slate-50 dark:bg-slate-800 border-none">Designing</Badge>
                <Badge variant="outline" class="rounded-lg px-3 py-1 bg-slate-50 dark:bg-slate-800 border-none">Photography</Badge>
                <Badge variant="outline" class="rounded-lg px-3 py-1 bg-slate-50 dark:bg-slate-800 border-none">Traveling</Badge>
                <Badge variant="outline" class="rounded-lg px-3 py-1 bg-slate-50 dark:bg-slate-800 border-none">Music</Badge>
                <Badge variant="outline" class="rounded-lg px-3 py-1 bg-slate-50 dark:bg-slate-800 border-none">Reading</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="family" class="focus-visible:outline-none">
        <Card class="border-slate-100 dark:border-slate-800 shadow-sm">
          <CardContent class="p-12 flex flex-col items-center justify-center text-center space-y-4">
            <div class="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Users class="size-8 text-slate-400" />
            </div>
            <div class="space-y-1">
              <h3 class="font-bold text-slate-900 dark:text-white">Family Details Missing</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">Complete your family background to improve match compatibility.</p>
            </div>
            <Button variant="secondary" class="rounded-xl">Add Family Details</Button>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="lifestyle" class="focus-visible:outline-none">
        <div class="p-12 text-center text-slate-500">Lifestyle details coming soon.</div>
      </TabsContent>
      
      <TabsContent value="preferences" class="focus-visible:outline-none">
        <div class="p-12 text-center text-slate-500">Partner preferences coming soon.</div>
      </TabsContent>
    </Tabs>
  </div>
</template>
