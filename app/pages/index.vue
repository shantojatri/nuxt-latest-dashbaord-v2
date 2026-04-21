<!-- app/pages/index.vue -->
<script setup lang="ts">
import { 
  Heart, 
  Search, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Star,
  MessageSquare,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";

// Default layout is used automatically in Nuxt if it's named default.vue
// But we can explicitly set it to be sure
definePageMeta({ layout: "default" });

const features = [
  {
    title: "100% Verified Profiles",
    description: "Every profile on our platform is manually verified to ensure safety and authenticity.",
    icon: ShieldCheck,
    color: "text-primary bg-primary/10",
  },
  {
    title: "Personalized Matches",
    description: "Our advanced algorithm suggests partners based on your values and lifestyle.",
    icon: Heart,
    color: "text-secondary bg-secondary/10",
  },
  {
    title: "Privacy Protected",
    description: "Control who sees your profile and photos with our granular privacy settings.",
    icon: Users,
    color: "text-accent bg-accent/10",
  },
];

const successStories = [
  {
    couple: "Arif & Sumaiya",
    story: "We met through Shuvo Bibaho and instantly clicked. The platform made it so easy to understand our compatibility.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arif",
  },
  {
    couple: "Tanvir & Fatema",
    story: "The verification process gave our families peace of mind. We are happily married for 1 year now!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
  },
];
</script>

<template>
  <div class="overflow-hidden">
    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Heart class="size-4 text-primary fill-primary" />
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Over 5,000+ Happy Couples Matched</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Find Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Perfect Life Partner</span> Today
          </h1>
          
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The most trusted and secure matrimony platform in Bangladesh. Start your journey towards a beautiful future together.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" class="w-full sm:w-auto h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98]">
              Join For Free
              <ArrowRight class="size-5 ml-2" />
            </Button>
            <NuxtLink to="/search" class="w-full sm:w-auto">
              <Button variant="outline" size="lg" class="w-full h-14 px-8 rounded-2xl border-slate-200 dark:border-slate-700 font-bold text-lg hover:bg-white dark:hover:bg-slate-800 transition-all">
                Search Profiles
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section class="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center space-y-1">
            <p class="text-3xl font-black text-slate-900 dark:text-white">12K+</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Members</p>
          </div>
          <div class="text-center space-y-1">
            <p class="text-3xl font-black text-slate-900 dark:text-white">5K+</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Success Stories</p>
          </div>
          <div class="text-center space-y-1">
            <p class="text-3xl font-black text-slate-900 dark:text-white">100%</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Verified Profiles</p>
          </div>
          <div class="text-center space-y-1">
            <p class="text-3xl font-black text-slate-900 dark:text-white">24/7</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Team</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose Shuvo Bibaho?</h2>
          <p class="text-slate-500 dark:text-slate-400 font-medium">We combine traditional values with modern technology to help you find your soulmate safely and efficiently.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div :class="['size-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform', feature.color]">
              <component :is="feature.icon" class="size-7" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ feature.title }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SUCCESS STORIES SECTION -->
    <section id="stories" class="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div class="max-w-xl space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Real Stories, Real Couples</h2>
            <p class="text-slate-500 dark:text-slate-400 font-medium">Thousands of people have found their perfect match here. You could be next!</p>
          </div>
          <Button variant="outline" class="rounded-xl border-slate-200 dark:border-slate-700 font-bold h-12">View All Stories</Button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="story in successStories" :key="story.couple" class="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all group">
            <div class="size-32 rounded-2xl overflow-hidden shrink-0">
              <img :src="story.image" :alt="story.couple" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-1 text-primary">
                <Star v-for="i in 5" :key="i" class="size-4 fill-primary" />
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-300 font-medium italic">"{{ story.story }}"</p>
              <h4 class="font-bold text-slate-900 dark:text-white">— {{ story.couple }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="relative p-8 md:p-16 rounded-[40px] bg-slate-900 dark:bg-slate-800 overflow-hidden text-center text-white">
          <!-- Background Decoration -->
          <div class="absolute top-0 right-0 size-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div class="absolute bottom-0 left-0 size-64 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

          <div class="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold leading-tight">Ready to Write Your Own Success Story?</h2>
            <p class="text-slate-400 text-lg">Join thousands of others who are looking for their life partner. It only takes 2 minutes to get started.</p>
            <div class="pt-4">
              <Button size="lg" class="h-14 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg shadow-xl shadow-white/5 transition-all active:scale-[0.98]">
                Get Started Now
              </Button>
            </div>
            <div class="flex items-center justify-center gap-8 pt-4">
              <div class="flex items-center gap-2">
                <CheckCircle2 class="size-5 text-green-400" />
                <span class="text-sm font-medium text-slate-400">Free Registration</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="size-5 text-green-400" />
                <span class="text-sm font-medium text-slate-400">Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
