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
  Sparkles,
  ChevronDown,
  User,
  Mars,
  Venus,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Default layout is used automatically
definePageMeta({ layout: "default" });

const lookingFor = ref("bride");
const ageFrom = ref("18");
const ageTo = ref("30");
const religion = ref("muslim");
const caste = ref("any");
const maritalStatus = ref("never-married");

const features = [
  {
    title: "100% Verified Profiles",
    description:
      "Every profile on our platform is manually verified to ensure safety and authenticity.",
    icon: ShieldCheck,
    color: "text-primary bg-primary/10",
  },
  {
    title: "Personalized Matches",
    description:
      "Our advanced algorithm suggests partners based on your values and lifestyle.",
    icon: Heart,
    color: "text-secondary bg-secondary/10",
  },
  {
    title: "Privacy Protected",
    description:
      "Control who sees your profile and photos with our granular privacy settings.",
    icon: Users,
    color: "text-accent bg-accent/10",
  },
];

const successStories = [
  {
    couple: "Arif & Sumaiya",
    story:
      "We met through Shuvo Bibaho and instantly clicked. The platform made it so easy to understand our compatibility.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arif",
  },
  {
    couple: "Tanvir & Fatema",
    story:
      "The verification process gave our families peace of mind. We are happily married for 1 year now!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
  },
];
</script>

<template>
  <div class="overflow-hidden bg-white dark:bg-slate-950">
    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-44 md:pt-48 md:pb-60 overflow-hidden">
      <!-- Animated Background Elements -->
      <div
        class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse duration-[10s]"
      ></div>
      <div
        class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse duration-[8s]"
      ></div>

      <!-- Floating Icons Decorations -->
      <div
        class="absolute top-1/4 left-10 hidden lg:block animate-bounce duration-[3s]"
      >
        <div
          class="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 rotate-12"
        >
          <Heart class="size-6 text-primary fill-primary" />
        </div>
      </div>
      <div
        class="absolute bottom-1/3 right-12 hidden lg:block animate-bounce duration-[4s] delay-700"
      >
        <div
          class="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 -rotate-12"
        >
          <Sparkles class="size-6 text-accent" />
        </div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-5xl mx-auto text-center space-y-10">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 shadow-sm animate-in fade-in slide-in-from-top-4 duration-1000"
          >
            <Sparkles class="size-4 text-primary" />
            <span
              class="text-xs font-black text-primary uppercase tracking-widest"
              >Find Your Forever Love</span
            >
          </div>

          <h1
            class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
          >
            Connecting
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient"
              >Hearts</span
            >
            & <br class="hidden md:block" />
            Building Families
          </h1>

          <p
            class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
          >
            The most trusted matrimony platform in Bangladesh. We help you find
            a partner who shares your values, culture, and dreams.
          </p>

          <!-- QUICK SEARCH CARD -->
          <div
            class="max-w-[1300px] mx-auto mt-20 animate-in fade-in zoom-in duration-1000 delay-500"
          >
            <div class="relative group">
              <!-- Gowing Shadow Effect -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
              ></div>

              <div
                class="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[32px] p-2.5 border border-white dark:border-slate-800 shadow-2xl shadow-primary/10"
              >
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-1"
                >
                  <!-- Looking For -->
                  <div
                    class="lg:col-span-3 p-4 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800"
                  >
                    <label
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5 px-1"
                      >Looking for</label
                    >
                    <div
                      class="flex bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-2xl w-full"
                    >
                      <button
                        @click="lookingFor = 'bride'"
                        :class="[
                          'flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black transition-all duration-300',
                          lookingFor === 'bride'
                            ? 'bg-white dark:bg-slate-700 text-primary shadow-xl ring-1 ring-slate-100 dark:ring-slate-600'
                            : 'text-slate-400 hover:text-slate-600',
                        ]"
                      >
                        <Venus class="size-4" /> Bride
                      </button>
                      <button
                        @click="lookingFor = 'groom'"
                        :class="[
                          'flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black transition-all duration-300',
                          lookingFor === 'groom'
                            ? 'bg-white dark:bg-slate-700 text-secondary shadow-xl ring-1 ring-slate-100 dark:ring-slate-600'
                            : 'text-slate-400 hover:text-slate-600',
                        ]"
                      >
                        <Mars class="size-4" /> Groom
                      </button>
                    </div>
                  </div>

                  <!-- Age From/To -->
                  <div
                    class="lg:col-span-2 p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800"
                  >
                    <label
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1"
                      >Age Range</label
                    >
                    <div class="flex items-center gap-1">
                      <Select v-model="ageFrom">
                        <SelectTrigger
                          class="border-none bg-transparent h-10 shadow-none focus:ring-0 text-sm font-bold p-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                        >
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            v-for="n in 43"
                            :key="n"
                            :value="String(n + 17)"
                            >{{ n + 17 }} Years</SelectItem
                          >
                        </SelectContent>
                      </Select>
                      <span class="text-slate-300 font-bold px-1">to</span>
                      <Select v-model="ageTo">
                        <SelectTrigger
                          class="border-none bg-transparent h-10 shadow-none focus:ring-0 text-sm font-bold p-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                        >
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            v-for="n in 43"
                            :key="n"
                            :value="String(n + 17)"
                            >{{ n + 17 }} Years</SelectItem
                          >
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <!-- Religion -->
                  <div
                    class="lg:col-span-2 p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800"
                  >
                    <label
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1"
                      >Religion</label
                    >
                    <Select v-model="religion">
                      <SelectTrigger
                        class="border-none bg-transparent h-10 shadow-none focus:ring-0 text-sm font-bold p-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                      >
                        <SelectValue placeholder="Religion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="muslim">Muslim</SelectItem>
                        <SelectItem value="hindu">Hindu</SelectItem>
                        <SelectItem value="christian">Christian</SelectItem>
                        <SelectItem value="buddhist">Buddhist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <!-- Caste -->
                  <div
                    class="lg:col-span-1.5 p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800"
                  >
                    <label
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1"
                      >Caste</label
                    >
                    <Select v-model="caste">
                      <SelectTrigger
                        class="border-none bg-transparent h-10 shadow-none focus:ring-0 text-sm font-bold p-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                      >
                        <SelectValue placeholder="Caste" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Caste</SelectItem>
                        <SelectItem value="sunni">Sunni</SelectItem>
                        <SelectItem value="shia">Shia</SelectItem>
                        <SelectItem value="brahmin">Brahmin</SelectItem>
                        <SelectItem value="kshatriya">Kshatriya</SelectItem>
                        <SelectItem value="catholic">Catholic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <!-- Marital Status -->
                  <div
                    class="lg:col-span-1.5 p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800"
                  >
                    <label
                      class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1"
                      >Status</label
                    >
                    <Select v-model="maritalStatus">
                      <SelectTrigger
                        class="border-none bg-transparent h-10 shadow-none focus:ring-0 text-sm font-bold p-1 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                      >
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never-married">Single</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <!-- Search Button -->
                  <div class="lg:col-span-2 p-2 flex items-center">
                    <NuxtLink to="/search" class="w-full">
                      <Button
                        class="w-full h-16 rounded-[24px] bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Search class="size-6 mr-2" />
                        Search
                      </Button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section
      class="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            class="text-center space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <p class="text-3xl font-black text-slate-900 dark:text-white">
              12K+
            </p>
            <p
              class="text-xs font-bold text-slate-400 uppercase tracking-widest"
            >
              Active Members
            </p>
          </div>
          <div
            class="text-center space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
          >
            <p class="text-3xl font-black text-slate-900 dark:text-white">
              5K+
            </p>
            <p
              class="text-xs font-bold text-slate-400 uppercase tracking-widest"
            >
              Success Stories
            </p>
          </div>
          <div
            class="text-center space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
          >
            <p class="text-3xl font-black text-slate-900 dark:text-white">
              100%
            </p>
            <p
              class="text-xs font-bold text-slate-400 uppercase tracking-widest"
            >
              Verified Profiles
            </p>
          </div>
          <div
            class="text-center space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          >
            <p class="text-3xl font-black text-slate-900 dark:text-white">
              24/7
            </p>
            <p
              class="text-xs font-bold text-slate-400 uppercase tracking-widest"
            >
              Support Team
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Why Choose Shuvo Bibaho?
          </h2>
          <p class="text-slate-500 dark:text-slate-400 font-medium">
            We combine traditional values with modern technology to help you
            find your soulmate safely and efficiently.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div
              :class="[
                'size-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500',
                feature.color,
              ]"
            >
              <component :is="feature.icon" class="size-7" />
            </div>
            <h3
              class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
            >
              {{ feature.title }}
            </h3>
            <p
              class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SUCCESS STORIES SECTION -->
    <section
      id="stories"
      class="py-24 bg-white dark:bg-slate-900 overflow-hidden relative"
    >
      <div class="container mx-auto px-4 relative z-10">
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div class="max-w-xl space-y-4">
            <h2
              class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Real Stories, Real Couples
            </h2>
            <p class="text-slate-500 dark:text-slate-400 font-medium">
              Thousands of people have found their perfect match here. You could
              be next!
            </p>
          </div>
          <Button
            variant="outline"
            class="rounded-xl border-slate-200 dark:border-slate-700 font-bold h-12 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >View All Stories</Button
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="story in successStories"
            :key="story.couple"
            class="flex flex-col sm:flex-row gap-6 p-6 rounded-[32px] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 group"
          >
            <div
              class="size-32 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500"
            >
              <img
                :src="story.image"
                :alt="story.couple"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-1 text-primary">
                <Star
                  v-for="i in 5"
                  :key="i"
                  class="size-4 fill-primary animate-pulse"
                  :style="{ animationDelay: `${i * 200}ms` }"
                />
              </div>
              <p
                class="text-sm text-slate-600 dark:text-slate-300 font-medium italic"
              >
                "{{ story.story }}"
              </p>
              <h4 class="font-bold text-slate-900 dark:text-white">
                — {{ story.couple }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div
          class="relative p-8 md:p-16 rounded-[48px] bg-slate-900 dark:bg-slate-800 overflow-hidden text-center text-white border border-white/5 shadow-2xl"
        >
          <!-- Animated Background Decoration -->
          <div
            class="absolute top-0 right-0 size-80 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse"
          ></div>
          <div
            class="absolute bottom-0 left-0 size-80 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-pulse"
          ></div>

          <div class="relative z-10 max-w-2xl mx-auto space-y-8">
            <div class="flex justify-center">
              <div
                class="size-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce duration-[2s]"
              >
                <Heart class="size-8 text-primary fill-primary" />
              </div>
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              Ready to Write Your Own Success Story?
            </h2>
            <p class="text-slate-400 text-lg">
              Join thousands of others who are looking for their life partner.
              It only takes 2 minutes to get started.
            </p>
            <div class="pt-4">
              <Button
                size="lg"
                class="h-16 px-12 rounded-[24px] bg-white text-slate-900 hover:bg-slate-100 font-black text-xl shadow-2xl shadow-white/10 transition-all active:scale-[0.98]"
              >
                Get Started Now
              </Button>
            </div>
            <div
              class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-4"
            >
              <div class="flex items-center gap-2">
                <CheckCircle2 class="size-5 text-green-400" />
                <span class="text-sm font-bold text-slate-300"
                  >Free Registration</span
                >
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="size-5 text-green-400" />
                <span class="text-sm font-bold text-slate-300"
                  >100% Safe & Secure</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}
</style>
