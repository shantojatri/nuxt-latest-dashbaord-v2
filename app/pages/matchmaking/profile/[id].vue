<script setup lang="ts">
import {
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Home,
  Coffee,
  Globe,
  Star,
  ShieldCheck,
  ArrowLeft,
  Send,
  BookmarkPlus,
  Ban,
  CheckCircle2,
  User,
  Camera,
  Plane,
  Music,
  Book,
  MessageSquare,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

definePageMeta({ layout: "dashboard" });

const route = useRoute();
const router = useRouter();

// Profile data keyed by id (demo data)
const profiles: Record<string, any> = {
  "1": {
    name: "Fatema Begum",
    age: 24,
    city: "Dhaka",
    profession: "Software Engineer",
    religion: "Muslim",
    match: 95,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
    education: "BSc Computer Science",
    height: "5' 4\"",
    joined: "January 2024",
    bio: "I am a passionate software engineer who loves building elegant solutions. In my spare time I enjoy reading, cooking, and exploring new places. Looking for a kind and ambitious life partner.",
  },
  "2": {
    name: "Nasrin Akter",
    age: 27,
    city: "Chittagong",
    profession: "Doctor",
    religion: "Muslim",
    match: 88,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin",
    education: "MBBS, Chittagong Medical",
    height: "5' 3\"",
    joined: "March 2023",
    bio: "A dedicated doctor who values family and relationships deeply. I love music, traveling, and spending quality time with loved ones.",
  },
  "3": {
    name: "Sumaiya Islam",
    age: 22,
    city: "Sylhet",
    profession: "Student",
    religion: "Muslim",
    match: 91,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya",
    education: "BSc Pharmacy (ongoing)",
    height: "5' 2\"",
    joined: "August 2024",
    bio: "Currently completing my degree. I am sincere, family-oriented and love nature, books, and long walks.",
  },
  "4": {
    name: "Ruksana Khanam",
    age: 29,
    city: "Rajshahi",
    profession: "Teacher",
    religion: "Muslim",
    match: 82,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruksana",
    education: "MA in English Literature",
    height: "5' 5\"",
    joined: "June 2023",
    bio: "An English teacher passionate about literature and education. I value honesty, respect, and a good sense of humor in a partner.",
  },
  "5": {
    name: "Maliha Chowdhury",
    age: 25,
    city: "Dhaka",
    profession: "Architect",
    religion: "Muslim",
    match: 87,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maliha",
    education: "B.Arch, BUET",
    height: "5' 4\"",
    joined: "November 2023",
    bio: "Architect by profession, creative at heart. I love design, art, and coffee. Looking for someone who appreciates both beauty and intellect.",
  },
  "6": {
    name: "Jannatul Ferdous",
    age: 23,
    city: "Comilla",
    profession: "Graphic Designer",
    religion: "Muslim",
    match: 84,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jannatul",
    education: "BFA Graphic Design",
    height: "5' 3\"",
    joined: "February 2024",
    bio: "Creative soul who loves colors, design, and storytelling. Family means everything to me.",
  },
  "7": {
    name: "Ayesha Siddiqua",
    age: 26,
    city: "Dhaka",
    profession: "Doctor",
    religion: "Muslim",
    match: 93,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
    education: "MBBS, DMCH",
    height: "5' 5\"",
    joined: "October 2023",
    bio: "A doctor with a big heart. I believe in kindness, patience, and building a home full of love and laughter.",
  },
  "8": {
    name: "Sabina Yasmin",
    age: 28,
    city: "Khulna",
    profession: "Business",
    religion: "Muslim",
    match: 85,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sabina",
    education: "BBA, Finance",
    height: "5' 4\"",
    joined: "May 2023",
    bio: "Running my family business with passion. I love traveling, cooking, and discovering new cuisines. Looking for a supportive partner.",
  },
  "9": {
    name: "Tania Sultana",
    age: 24,
    city: "Dhaka",
    profession: "Engineer",
    religion: "Muslim",
    match: 89,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tania",
    education: "BSc EEE, BUET",
    height: "5' 3\"",
    joined: "April 2024",
    bio: "Engineer who loves solving problems and exploring technology. I am family-oriented and love home-cooked meals.",
  },
  "10": {
    name: "Liza Akter",
    age: 21,
    city: "Sylhet",
    profession: "Student",
    religion: "Muslim",
    match: 90,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liza",
    education: "BSc Biology (ongoing)",
    height: "5' 2\"",
    joined: "September 2024",
    bio: "Young and ambitious student who values education and family. Looking for someone who is kind-hearted and goal-oriented.",
  },
  "11": {
    name: "Priya Das",
    age: 25,
    city: "Chittagong",
    profession: "Banker",
    religion: "Hindu",
    match: 86,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    education: "MBA Finance",
    height: "5' 4\"",
    joined: "July 2023",
    bio: "Banker by profession, dreamer at heart. I love music, art, and exploring new places with good company.",
  },
  "12": {
    name: "Meherun Nesa",
    age: 30,
    city: "Dhaka",
    profession: "Teacher",
    religion: "Muslim",
    match: 80,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meherun",
    education: "MA Education",
    height: "5' 5\"",
    joined: "January 2023",
    bio: "Dedicated teacher who finds joy in learning and sharing knowledge. I value family, faith, and friendship.",
  },
};

const profile = computed(() => profiles[route.params.id as string] ?? null);

const familyInfo = [
  {
    label: "Father's Occupation",
    value: "Retired Govt. Officer",
    icon: Briefcase,
  },
  { label: "Mother's Occupation", value: "Housewife", icon: Home },
  { label: "Siblings", value: "1 Brother, 1 Sister", icon: Users },
  { label: "Family Type", value: "Nuclear Family", icon: Heart },
  { label: "Family Values", value: "Moderate / Religious", icon: ShieldCheck },
  { label: "Native Place", value: "Comilla, Bangladesh", icon: MapPin },
];

const lifestyleInfo = [
  { label: "Dietary Habits", value: "Non-Vegetarian", icon: Coffee },
  { label: "Smoking", value: "Never", icon: ShieldCheck },
  { label: "Drinking", value: "Never", icon: ShieldCheck },
  { label: "Languages", value: "Bangla, English", icon: Globe },
  { label: "Hobbies", value: "Cooking, Reading, Traveling", icon: Star },
];

const preferenceInfo = [
  { label: "Partner Age", value: "25 - 32 Years", icon: Calendar },
  { label: "Partner Height", value: "5' 6\" - 6' 0\"", icon: User },
  { label: "Education", value: "Graduate or above", icon: GraduationCap },
  { label: "Profession", value: "Any Decent Profession", icon: Briefcase },
  { label: "Location", value: "Dhaka or Anywhere", icon: MapPin },
  { label: "Marital Status", value: "Never Married", icon: Heart },
];

const passions = [
  { label: "Traveling", icon: Plane },
  { label: "Music", icon: Music },
  { label: "Reading", icon: Book },
  { label: "Photography", icon: Camera },
  { label: "Cooking", icon: Coffee },
];
</script>

<template>
  <div class="space-y-6 pb-12">
    <!-- Back button -->
    <div class="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        class="rounded-xl text-slate-500 hover:text-primary gap-2"
        @click="router.back()"
      >
        <ArrowLeft class="size-4" />
        Back to Search
      </Button>
    </div>

    <!-- 404 state -->
    <div
      v-if="!profile"
      class="py-24 flex flex-col items-center gap-4 text-center"
    >
      <div
        class="size-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
      >
        <User class="size-10 text-slate-300" />
      </div>
      <h2 class="text-lg font-bold text-slate-900 dark:text-white">
        Profile not found
      </h2>
      <p class="text-sm text-slate-500">
        This profile does not exist or has been removed.
      </p>
      <Button
        class="rounded-xl bg-primary"
        @click="router.push('/matchmaking/search')"
        >Browse Profiles</Button
      >
    </div>

    <template v-else>
      <!-- Profile Header Card -->
      <div
        class="relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
      >
        <!-- Cover -->
        <div
          class="h-36 md:h-52 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
        />

        <!-- Info Row -->
        <div class="px-4 md:px-8 pb-6 relative">
          <div
            class="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 -mt-12 md:-mt-16"
          >
            <!-- Avatar -->
            <Avatar
              class="size-24 md:size-32 border-4 border-white dark:border-slate-900 shadow-lg self-center md:self-auto shrink-0"
            >
              <AvatarImage :src="profile.image" />
              <AvatarFallback
                class="bg-slate-100 text-2xl font-bold text-slate-400"
              >
                {{ profile.name.slice(0, 2).toUpperCase() }}
              </AvatarFallback>
            </Avatar>

            <!-- Name & meta -->
            <div class="flex-1 pb-2 text-center md:text-left space-y-1">
              <div class="flex flex-col md:flex-row items-center gap-2">
                <h1
                  class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {{ profile.name }}, {{ profile.age }}
                </h1>
                <Badge
                  class="bg-primary hover:bg-primary/90 rounded-full font-bold text-[10px] uppercase tracking-wider py-1"
                >
                  <CheckCircle2 class="size-3 mr-1" /> Verified
                </Badge>
                <Badge
                  class="bg-secondary/10 text-secondary border-secondary/20 rounded-full font-bold text-[10px] uppercase tracking-wider py-1"
                >
                  <Heart class="size-3 mr-1 fill-secondary" />
                  {{ profile.match }}% Match
                </Badge>
              </div>
              <div
                class="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400"
              >
                <div class="flex items-center gap-1.5">
                  <MapPin class="size-4 text-secondary" /> {{ profile.city }},
                  Bangladesh
                </div>
                <div class="flex items-center gap-1.5">
                  <Briefcase class="size-4 text-primary" />
                  {{ profile.profession }}
                </div>
                <div class="flex items-center gap-1.5">
                  <Calendar class="size-4 text-accent" /> Joined
                  {{ profile.joined }}
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div
              class="flex items-center justify-center md:justify-end gap-2 pb-2 flex-wrap"
            >
              <Button
                size="sm"
                class="rounded-xl bg-primary hover:bg-primary/90 font-bold shadow-md shadow-primary/20"
              >
                <Send class="size-4 mr-2" /> Send Interest
              </Button>
              <Button
                variant="outline"
                size="sm"
                class="rounded-xl border-slate-200 dark:border-slate-700 font-bold"
              >
                <MessageSquare class="size-4 mr-2" /> Message
              </Button>
              <Button
                variant="outline"
                size="sm"
                class="rounded-xl border-slate-200 dark:border-slate-700 h-9 w-9 p-0"
                title="Shortlist"
              >
                <BookmarkPlus class="size-4 text-secondary" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                class="rounded-xl border-slate-200 dark:border-slate-700 h-9 w-9 p-0"
                title="Block"
              >
                <Ban class="size-4 text-rose-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <Tabs default-value="about" class="w-full">
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

        <!-- About Tab -->
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
                <CardTitle class="text-base font-bold flex items-center gap-2">
                  <div
                    class="size-8 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <User class="size-4 text-primary" />
                  </div>
                  Personal Overview
                </CardTitle>
              </CardHeader>
              <CardContent class="p-6 space-y-6">
                <p
                  class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic"
                >
                  "{{ profile.bio }}"
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    class="space-y-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                  >
                    <span
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                      >Age</span
                    >
                    <p class="font-bold text-slate-900 dark:text-white">
                      {{ profile.age }} Years
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
                      {{ profile.profession }}
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
                      {{ profile.education }}
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
                      {{ profile.height }}
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
                <CardTitle class="text-base font-bold flex items-center gap-2">
                  <div
                    class="size-8 rounded-lg bg-secondary/10 flex items-center justify-center"
                  >
                    <Heart class="size-4 text-secondary" />
                  </div>
                  Passions
                </CardTitle>
              </CardHeader>
              <CardContent class="p-6">
                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="p in passions"
                    :key="p.label"
                    variant="outline"
                    class="rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300"
                  >
                    <component :is="p.icon" class="size-3 mr-1.5" />
                    {{ p.label }}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <!-- Family Tab -->
        <TabsContent value="family" class="focus-visible:outline-none mt-6">
          <Card
            class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
          >
            <CardHeader
              class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
            >
              <CardTitle class="text-base font-bold flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Users class="size-4 text-primary" />
                </div>
                Family Background
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

        <!-- Lifestyle Tab -->
        <TabsContent value="lifestyle" class="focus-visible:outline-none mt-6">
          <Card
            class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
          >
            <CardHeader
              class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
            >
              <CardTitle class="text-base font-bold flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-accent/10 flex items-center justify-center"
                >
                  <Coffee class="size-4 text-accent" />
                </div>
                Lifestyle &amp; Habits
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

        <!-- Preferences Tab -->
        <TabsContent
          value="preferences"
          class="focus-visible:outline-none mt-6"
        >
          <Card
            class="border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden"
          >
            <CardHeader
              class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-800/20"
            >
              <CardTitle class="text-base font-bold flex items-center gap-2">
                <div
                  class="size-8 rounded-lg bg-secondary/10 flex items-center justify-center"
                >
                  <Star class="size-4 text-secondary" />
                </div>
                Partner Preferences
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
    </template>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
