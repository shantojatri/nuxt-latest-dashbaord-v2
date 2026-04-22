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
  Users,
  Home,
  Coffee,
  Globe,
  Music,
  Plane,
  Book,
  Smartphone,
  ShieldCheck,
  Star,
  X,
  Save,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const isEditing = ref(false);
const completion = ref(85);

// Modal state
const activeModal = ref<string | null>(null);

function openModal(section: string) {
  activeModal.value = section;
}
function closeModal() {
  activeModal.value = null;
}

const modalConfig: Record<string, { title: string; icon: any; color: string; fields: { label: string; value: string; type?: string }[] }> = {
  about: {
    title: "Edit Personal Overview",
    icon: User,
    color: "primary",
    fields: [
      { label: "Bio", value: "I am a passionate UI/UX Designer…", type: "textarea" },
      { label: "Age", value: "26" },
      { label: "Profession", value: "UI/UX Designer" },
      { label: "Education", value: "BSc in Computer Science" },
      { label: "Height", value: "5' 4\" (162 cm)" },
    ],
  },
  passions: {
    title: "Edit Passions",
    icon: Heart,
    color: "secondary",
    fields: [
      { label: "Passion 1", value: "Designing" },
      { label: "Passion 2", value: "Photography" },
      { label: "Passion 3", value: "Traveling" },
      { label: "Passion 4", value: "Music" },
      { label: "Passion 5", value: "Reading" },
    ],
  },
  family: {
    title: "Edit Family Background",
    icon: Users,
    color: "primary",
    fields: [
      { label: "Father's Occupation", value: "Retired Govt. Officer" },
      { label: "Mother's Occupation", value: "Housewife" },
      { label: "Siblings", value: "1 Brother, 2 Sisters" },
      { label: "Family Type", value: "Nuclear Family" },
      { label: "Family Values", value: "Moderate / Religious" },
      { label: "Native Place", value: "Comilla, Bangladesh" },
    ],
  },
  lifestyle: {
    title: "Edit Lifestyle & Habits",
    icon: Coffee,
    color: "accent",
    fields: [
      { label: "Dietary Habits", value: "Non-Vegetarian" },
      { label: "Smoking", value: "Never" },
      { label: "Drinking", value: "Never" },
      { label: "Languages", value: "Bangla, English" },
      { label: "Hobbies", value: "Cooking, Blogging, Gardening" },
    ],
  },
  preferences: {
    title: "Edit Partner Preferences",
    icon: Star,
    color: "secondary",
    fields: [
      { label: "Partner Age", value: "27 - 32 Years" },
      { label: "Partner Height", value: "5' 6\" - 6' 0\"" },
      { label: "Education", value: "Masters / Engineer" },
      { label: "Profession", value: "Engineer / Doctor / Business" },
      { label: "Location", value: "Dhaka or Chittagong" },
      { label: "Marital Status", value: "Never Married" },
    ],
  },
};

const profileInfo = {
  name: "Rina Khatun",
  role: "Premium Member",
  city: "Dhaka, Bangladesh",
  age: 26,
  profession: "UI/UX Designer",
  education: "BSc in Computer Science",
  joined: "October 2023",
  bio: "I am a passionate UI/UX Designer who loves creating beautiful and functional interfaces. In my free time, I enjoy reading, traveling, and exploring new cuisines. I'm looking for a partner who is kind, ambitious, and shares similar values.",
};

const familyInfo = [
  {
    label: "Father's Occupation",
    value: "Retired Govt. Officer",
    icon: Briefcase,
  },
  { label: "Mother's Occupation", value: "Housewife", icon: Home },
  { label: "Siblings", value: "1 Brother, 2 Sisters", icon: Users },
  { label: "Family Type", value: "Nuclear Family", icon: Heart },
  { label: "Family Values", value: "Moderate / Religious", icon: ShieldCheck },
  { label: "Native Place", value: "Comilla, Bangladesh", icon: MapPin },
];

const lifestyleInfo = [
  { label: "Dietary Habits", value: "Non-Vegetarian", icon: Coffee },
  { label: "Smoking", value: "Never", icon: X },
  { label: "Drinking", value: "Never", icon: X },
  { label: "Languages", value: "Bangla, English", icon: Globe },
  { label: "Hobbies", value: "Cooking, Blogging, Gardening", icon: Star },
];

const preferenceInfo = [
  { label: "Partner Age", value: "27 - 32 Years", icon: Calendar },
  { label: "Partner Height", value: "5' 6\" - 6' 0\"", icon: User },
  { label: "Education", value: "Masters / Engineer", icon: GraduationCap },
  {
    label: "Profession",
    value: "Engineer / Doctor / Business",
    icon: Briefcase,
  },
  { label: "Location", value: "Dhaka or Chittagong", icon: MapPin },
  { label: "Marital Status", value: "Never Married", icon: Heart },
];
</script>

<template>
  <div class="space-y-6 pb-12">
    <!-- Profile Header Card -->
    <div
      class="relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
    >
      <!-- Cover Image -->
      <div
        class="h-32 md:h-48 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 relative group"
      >
        <div
          class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <Button variant="secondary" size="sm" class="rounded-full">
            <Camera class="size-4 mr-2" />
            Change Cover
          </Button>
        </div>
      </div>

      <!-- Profile Basic Info Row -->
      <div class="px-4 md:px-6 pb-6 relative">
        <div
          class="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 -mt-10 md:-mt-12"
        >
          <!-- Floating Avatar -->
          <div class="relative group self-center md:self-auto">
            <Avatar
              class="size-24 md:size-32 border-4 border-white dark:border-slate-900 shadow-lg"
            >
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rina"
              />
              <AvatarFallback
                class="bg-slate-100 text-2xl font-bold text-slate-400"
                >RK</AvatarFallback
              >
            </Avatar>
            <button
              class="absolute bottom-1 right-1 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Camera class="size-4 text-slate-600 dark:text-slate-300" />
            </button>
          </div>

          <!-- Name and Status -->
          <div class="flex-1 text-center md:text-left space-y-1 pb-2">
            <div class="flex flex-col md:flex-row items-center gap-2">
              <h1
                class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
              >
                {{ profileInfo.name }}
              </h1>
              <Badge
                class="bg-primary hover:bg-primary/90 rounded-full font-bold text-[10px] uppercase tracking-wider py-1"
              >
                <CheckCircle2 class="size-3 mr-1" />
                {{ profileInfo.role }}
              </Badge>
            </div>
            <div
              class="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400"
            >
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
          <div
            class="flex items-center justify-center md:justify-end gap-2 pb-2"
          >
            <Button
              variant="outline"
              size="sm"
              class="rounded-xl border-slate-200 dark:border-slate-700 font-bold"
              @click="isEditing = !isEditing"
            >
              <Pencil class="size-4 mr-2" />
              {{ isEditing ? "Cancel" : "Edit" }}
            </Button>
            <Button
              variant="outline"
              size="sm"
              class="rounded-xl border-slate-200 dark:border-slate-700 h-9 w-9 p-0"
            >
              <Settings class="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Card -->
    <Card
      class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
    >
      <CardContent class="p-4 md:p-6">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6"
        >
          <div class="space-y-2 flex-1">
            <div class="flex items-center justify-between">
              <h3
                class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]"
              >
                Profile Completion
              </h3>
              <span class="text-sm font-black text-secondary"
                >{{ completion }}%</span
              >
            </div>
            <div
              class="[--progress-indicator-color:theme(colors.secondary.DEFAULT)] [&_[data-slot=progress-indicator]]:bg-[--progress-indicator-color]"
            >
              <Progress
                :model-value="completion"
                class="h-2 bg-secondary/10 dark:bg-secondary/5 rounded-full"
              />
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Complete your family details to reach 100% and get 2x more
              matches!
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            class="rounded-xl font-bold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20"
          >
            Complete Now
          </Button>
        </div>
      </CardContent>
    </Card>

    <!-- Main Content Tabs -->
    <Tabs defaultValue="about" class="w-full">
      <div
        class="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none"
      >
        <TabsList
          class="inline-flex w-full md:w-auto bg-slate-100/50 dark:bg-slate-900/50 p-1 rounded-xl border border-slate-100 dark:border-slate-800 h-auto"
        >
          <TabsTrigger
            value="about"
            class="rounded-lg px-4 md:px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
            >About</TabsTrigger
          >
          <TabsTrigger
            value="family"
            class="rounded-lg px-4 md:px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
            >Family</TabsTrigger
          >
          <TabsTrigger
            value="lifestyle"
            class="rounded-lg px-4 md:px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
            >Lifestyle</TabsTrigger
          >
          <TabsTrigger
            value="preferences"
            class="rounded-lg px-4 md:px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
            >Preferences</TabsTrigger
          >
        </TabsList>
      </div>

      <!-- About Tab Content -->
      <TabsContent
        value="about"
        class="space-y-6 focus-visible:outline-none mt-6"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            class="lg:col-span-2 border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
          >
            <CardHeader
              class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
            >
              <CardTitle class="text-base font-bold flex items-center gap-2 justify-between">
                <div class="flex items-center gap-2">
                  <div
                    class="size-8 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <User class="size-4 text-primary" />
                  </div>
                  Personal Overview
                </div>
                <button
                  @click="openModal('about')"
                  class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 group"
                  title="Edit Personal Overview"
                >
                  <Pencil class="size-4 transition-transform duration-200 group-hover:scale-110" />
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent class="p-6 space-y-6">
              <p
                class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic"
              >
                "{{ profileInfo.bio }}"
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                <div
                  class="space-y-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <span
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                    >Age</span
                  >
                  <p class="font-bold text-slate-900 dark:text-white">
                    {{ profileInfo.age }} Years
                  </p>
                </div>
                <div
                  class="space-y-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <span
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                    >Profession</span
                  >
                  <p class="font-bold text-slate-900 dark:text-white">
                    {{ profileInfo.profession }}
                  </p>
                </div>
                <div
                  class="space-y-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <span
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                    >Education</span
                  >
                  <p
                    class="font-bold text-slate-900 dark:text-white leading-tight"
                  >
                    {{ profileInfo.education }}
                  </p>
                </div>
                <div
                  class="space-y-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <span
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                    >Height</span
                  >
                  <p class="font-bold text-slate-900 dark:text-white">
                    5' 4" (162 cm)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl h-fit"
          >
            <CardHeader
              class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
            >
              <CardTitle class="text-base font-bold flex items-center gap-2 justify-between">
                <div class="flex items-center gap-2">
                  <div
                    class="size-8 rounded-lg bg-secondary/10 flex items-center justify-center"
                  >
                    <Heart class="size-4 text-secondary" />
                  </div>
                  Passions
                </div>
                <button
                  @click="openModal('passions')"
                  class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-all duration-200 group"
                  title="Edit Passions"
                >
                  <Pencil class="size-4 transition-transform duration-200 group-hover:scale-110" />
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent class="p-6">
              <div class="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                >
                  <Pencil class="size-3 mr-1.5" /> Designing
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                >
                  <Camera class="size-3 mr-1.5" /> Photography
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                >
                  <Plane class="size-3 mr-1.5" /> Traveling
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                >
                  <Music class="size-3 mr-1.5" /> Music
                </Badge>
                <Badge
                  variant="outline"
                  class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                >
                  <Book class="size-3 mr-1.5" /> Reading
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <!-- Family Tab Content -->
      <TabsContent
        value="family"
        class="space-y-6 focus-visible:outline-none mt-6"
      >
        <Card
          class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
        >
          <CardHeader
            class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
          >
            <CardTitle class="text-base font-bold flex items-center gap-2 justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Users class="size-4 text-primary" />
                </div>
                Family Background
              </div>
              <button
                @click="openModal('family')"
                class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 group"
                title="Edit Family Background"
              >
                <Pencil class="size-4 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="info in familyInfo"
                :key="info.label"
                class="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-colors"
              >
                <div
                  class="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700"
                >
                  <component :is="info.icon" class="size-5 text-secondary" />
                </div>
                <div>
                  <p
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                  >
                    {{ info.label }}
                  </p>
                  <p
                    class="text-sm font-bold text-slate-900 dark:text-white mt-0.5"
                  >
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Lifestyle Tab Content -->
      <TabsContent
        value="lifestyle"
        class="space-y-6 focus-visible:outline-none mt-6"
      >
        <Card
          class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
        >
          <CardHeader
            class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
          >
            <CardTitle class="text-base font-bold flex items-center gap-2 justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-accent/10 flex items-center justify-center"
                >
                  <Coffee class="size-4 text-accent" />
                </div>
                Lifestyle & Habits
              </div>
              <button
                @click="openModal('lifestyle')"
                class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200 group"
                title="Edit Lifestyle & Habits"
              >
                <Pencil class="size-4 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="info in lifestyleInfo"
                :key="info.label"
                class="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-accent/20 transition-colors"
              >
                <div
                  class="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700"
                >
                  <component :is="info.icon" class="size-5 text-accent" />
                </div>
                <div>
                  <p
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                  >
                    {{ info.label }}
                  </p>
                  <p
                    class="text-sm font-bold text-slate-900 dark:text-white mt-0.5"
                  >
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Preferences Tab Content -->
      <TabsContent
        value="preferences"
        class="space-y-6 focus-visible:outline-none mt-6"
      >
        <Card
          class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
        >
          <CardHeader
            class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
          >
            <CardTitle class="text-base font-bold flex items-center gap-2 justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-secondary/10 flex items-center justify-center"
                >
                  <Star class="size-4 text-secondary" />
                </div>
                Partner Preferences
              </div>
              <button
                @click="openModal('preferences')"
                class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-all duration-200 group"
                title="Edit Partner Preferences"
              >
                <Pencil class="size-4 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="info in preferenceInfo"
                :key="info.label"
                class="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-secondary/20 transition-colors"
              >
                <div
                  class="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700"
                >
                  <component :is="info.icon" class="size-5 text-secondary" />
                </div>
                <div>
                  <p
                    class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                  >
                    {{ info.label }}
                  </p>
                  <p
                    class="text-sm font-bold text-slate-900 dark:text-white mt-0.5"
                  >
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <!-- Edit Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            @click="closeModal"
          />

          <!-- Modal Panel -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div
              v-if="activeModal && modalConfig[activeModal]"
              class="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <!-- Modal Header -->
              <div
                class="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="size-9 rounded-xl flex items-center justify-center"
                    :class="{
                      'bg-primary/10': modalConfig[activeModal].color === 'primary',
                      'bg-secondary/10': modalConfig[activeModal].color === 'secondary',
                      'bg-accent/10': modalConfig[activeModal].color === 'accent',
                    }"
                  >
                    <component
                      :is="modalConfig[activeModal].icon"
                      class="size-5"
                      :class="{
                        'text-primary': modalConfig[activeModal].color === 'primary',
                        'text-secondary': modalConfig[activeModal].color === 'secondary',
                        'text-accent': modalConfig[activeModal].color === 'accent',
                      }"
                    />
                  </div>
                  <div>
                    <h2 class="text-base font-bold text-slate-900 dark:text-white">
                      {{ modalConfig[activeModal].title }}
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                      Update your information below
                    </p>
                  </div>
                </div>
                <button
                  @click="closeModal"
                  class="size-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  <X class="size-4" />
                </button>
              </div>

              <!-- Modal Body -->
              <div class="px-6 py-5 max-h-[60vh] overflow-y-auto space-y-4 scrollbar-none">
                <div
                  v-for="(field, i) in modalConfig[activeModal].fields"
                  :key="i"
                  class="space-y-1.5"
                >
                  <label
                    class="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                  >
                    {{ field.label }}
                  </label>
                  <textarea
                    v-if="field.type === 'textarea'"
                    class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    rows="3"
                    :value="field.value"
                  />
                  <input
                    v-else
                    type="text"
                    class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    :value="field.value"
                  />
                </div>
              </div>

              <!-- Modal Footer -->
              <div
                class="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20"
              >
                <Button
                  variant="outline"
                  size="sm"
                  class="rounded-xl border-slate-200 dark:border-slate-700 font-bold"
                  @click="closeModal"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  class="rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
                  @click="closeModal"
                >
                  <Save class="size-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-none {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
