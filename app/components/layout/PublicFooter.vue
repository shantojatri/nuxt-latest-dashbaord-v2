<!-- app/components/layout/PublicFooter.vue -->
<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-vue-next";
import AppLogo from "../shared/AppLogo.vue";
</script>

<template>
  <footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Logo & Bio -->
        <div class="space-y-6">
          <AppLogo />
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
            Connecting hearts and building beautiful futures together. The most trusted matrimony platform in Bangladesh.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="size-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary border border-slate-100 dark:border-slate-800 transition-colors">
              <Facebook class="size-4" />
            </a>
            <a href="#" class="size-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary border border-slate-100 dark:border-slate-800 transition-colors">
              <Twitter class="size-4" />
            </a>
            <a href="#" class="size-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary border border-slate-100 dark:border-slate-800 transition-colors">
              <Instagram class="size-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-widest">Platform</h4>
          <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li><NuxtLink to="/search" class="hover:text-primary">Search Profiles</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-primary">Membership Plans</NuxtLink></li>
            <li><NuxtLink to="/stories" class="hover:text-primary">Success Stories</NuxtLink></li>
            <li><NuxtLink to="/safety" class="hover:text-primary">Safety Tips</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-widest">Company</h4>
          <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li><NuxtLink to="/about" class="hover:text-primary">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary">Contact Support</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-primary">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-primary">Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-widest">Connect</h4>
          <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>support@shuvobibaho.com</li>
            <li>+880 1234 567 890</li>
            <li>Gulshan-2, Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-400 dark:text-slate-500">
          © 2024 Shuvo Bibaho. All rights reserved.
        </p>
        <p class="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
          Made with <Heart class="size-3 text-primary fill-primary" /> in Bangladesh
        </p>
      </div>
    </div>
  </footer>
</template>
