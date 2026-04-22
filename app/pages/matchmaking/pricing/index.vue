<!-- app/pages/pricing/index.vue -->
<script setup lang="ts">
import { Check, Info, Star } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

definePageMeta({ layout: "dashboard" });

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Basic features to get started",
    features: ["Daily 5 Profile Views", "Limited Search Results", "Basic Matching", "Email Notifications"],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Premium",
    price: "19",
    description: "Most popular for finding matches fast",
    features: ["Unlimited Profile Views", "Advanced Search Filters", "Smart Matching AI", "Direct Messaging", "Priority Support", "Profile Boost Weekly"],
    cta: "Upgrade Now",
    variant: "default" as const,
    highlight: true,
  },
  {
    name: "Platinum",
    price: "49",
    description: "Elite features for serious search",
    features: ["Everything in Premium", "Personal Relationship Manager", "Video Calls Enabled", "Background Verification", "Exclusive Events Access"],
    cta: "Contact Us",
    variant: "ghost" as const,
  },
];

const features = [
  { name: "Daily Profile Views", free: "5", premium: "Unlimited", platinum: "Unlimited" },
  { name: "Direct Messaging", free: "No", premium: "Yes", platinum: "Yes" },
  { name: "Search Filters", free: "Basic", premium: "Advanced", platinum: "Elite" },
  { name: "Profile Visibility", free: "Standard", premium: "High", platinum: "Maximum" },
];
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-16 pb-20">
    <!-- Header -->
    <div class="text-center space-y-4 pt-10">
      <h1 class="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Choose Your Plan</h1>
      <p class="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
        Join thousands of happy couples who found their perfect match through our premium services.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card
        v-for="plan in plans"
        :key="plan.name"
        class="relative flex flex-col border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg"
        :class="{ 'ring-2 ring-primary scale-105 z-10': plan.highlight }"
      >
        <div v-if="plan.highlight" class="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge class="bg-primary hover:bg-primary/90 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Most Popular</Badge>
        </div>

        <CardHeader class="space-y-2">
          <CardTitle class="text-xl font-bold text-slate-900 dark:text-white">{{ plan.name }}</CardTitle>
          <div class="flex items-baseline gap-1 pt-2">
            <span class="text-4xl font-black text-slate-900 dark:text-white">${{ plan.price }}</span>
            <span class="text-slate-400 text-sm font-medium">/month</span>
          </div>
          <CardDescription class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2">
            {{ plan.description }}
          </CardDescription>
        </CardHeader>

        <CardContent class="flex-1 space-y-4 pt-4">
          <div v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
            <div class="size-5 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check class="size-3 text-primary font-bold" />
            </div>
            <span class="text-sm text-slate-600 dark:text-slate-300">{{ feature }}</span>
          </div>
        </CardContent>

        <CardFooter class="pt-6">
          <Button
            :variant="plan.variant"
            class="w-full rounded-xl py-6 font-bold transition-all"
            :class="plan.highlight ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20' : 'border-slate-200 dark:border-slate-700'"
          >
            {{ plan.cta }}
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- Comparison Table -->
    <div class="space-y-8">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Compare Features</h2>
      </div>

      <div class="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
        <table class="w-full text-sm text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/50 dark:bg-slate-800/50">
              <th class="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800">Feature</th>
              <th class="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 text-center">Free</th>
              <th class="p-6 font-bold text-primary border-b border-slate-100 dark:border-slate-800 text-center">Premium</th>
              <th class="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 text-center">Platinum</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50 dark:divide-slate-800/50">
            <tr v-for="f in features" :key="f.name" class="group hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
              <td class="p-6 font-medium text-slate-600 dark:text-slate-300">{{ f.name }}</td>
              <td class="p-6 text-center text-slate-500 dark:text-slate-400">{{ f.free }}</td>
              <td class="p-6 text-center font-bold text-slate-900 dark:text-white">{{ f.premium }}</td>
              <td class="p-6 text-center text-slate-500 dark:text-slate-400">{{ f.platinum }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
