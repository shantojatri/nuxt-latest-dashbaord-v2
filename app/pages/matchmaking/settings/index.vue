<!-- app/pages/settings/index.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
  User,
  Lock,
  Bell,
  CreditCard,
  AlertTriangle,
  Mail,
  Shield,
  Smartphone,
  Globe,
  Eye,
  Sparkles,
  Heart,
  BookOpen,
  Settings,
  ShieldCheck,
} from "lucide-vue-next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

definePageMeta({ layout: "dashboard" });

const activeTab = ref("account");
</script>

<template>
  <div class="space-y-6 pb-12">
    <!-- Header -->
    <div class="flex flex-col gap-1">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
      <p class="text-sm text-slate-500 dark:text-slate-400">Manage your account preferences, privacy, and notifications.</p>
    </div>

    <Tabs v-model="activeTab" class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- Sidebar Style Tabs with Card Background -->
      <div class="w-full lg:w-72 shrink-0">
        <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-2 shadow-sm">
          <TabsList class="flex lg:flex-col h-auto w-full bg-transparent dark:bg-transparent p-0 gap-1 overflow-x-auto lg:overflow-visible shrink-0">
            <TabsTrigger 
              value="account" 
              class="justify-start rounded-xl px-4 py-3 h-auto data-[state=active]:bg-slate-50 dark:data-[state=active]:bg-slate-800/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-slate-100/50 dark:data-[state=active]:border-slate-700 transition-all text-slate-500 dark:text-slate-400 group"
            >
              <User class="size-4 mr-3 group-data-[state=active]:text-primary transition-colors" />
              <div class="text-left">
                <p class="text-sm font-bold">Account</p>
                <p class="text-[10px] opacity-70 font-medium hidden lg:block">Personal details</p>
              </div>
            </TabsTrigger>
            
            <TabsTrigger 
              value="privacy" 
              class="justify-start rounded-xl px-4 py-3 h-auto data-[state=active]:bg-slate-50 dark:data-[state=active]:bg-slate-800/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-slate-100/50 dark:data-[state=active]:border-slate-700 transition-all text-slate-500 dark:text-slate-400 group"
            >
              <Shield class="size-4 mr-3 group-data-[state=active]:text-primary transition-colors" />
              <div class="text-left">
                <p class="text-sm font-bold">Privacy</p>
                <p class="text-[10px] opacity-70 font-medium hidden lg:block">Profile security</p>
              </div>
            </TabsTrigger>

            <TabsTrigger 
              value="notifications" 
              class="justify-start rounded-xl px-4 py-3 h-auto data-[state=active]:bg-slate-50 dark:data-[state=active]:bg-slate-800/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-slate-100/50 dark:data-[state=active]:border-slate-700 transition-all text-slate-500 dark:text-slate-400 group"
            >
              <Bell class="size-4 mr-3 group-data-[state=active]:text-primary transition-colors" />
              <div class="text-left">
                <p class="text-sm font-bold">Notifications</p>
                <p class="text-[10px] opacity-70 font-medium hidden lg:block">Alerts & Emails</p>
              </div>
            </TabsTrigger>

            <TabsTrigger 
              value="subscription" 
              class="justify-start rounded-xl px-4 py-3 h-auto data-[state=active]:bg-slate-50 dark:data-[state=active]:bg-slate-800/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-slate-100/50 dark:data-[state=active]:border-slate-700 transition-all text-slate-500 dark:text-slate-400 group"
            >
              <CreditCard class="size-4 mr-3 group-data-[state=active]:text-primary transition-colors" />
              <div class="text-left">
                <p class="text-sm font-bold">Subscription</p>
                <p class="text-[10px] opacity-70 font-medium hidden lg:block">Plans & Billing</p>
              </div>
            </TabsTrigger>

            <div class="py-2 lg:block hidden px-4">
              <Separator class="bg-slate-100/80 dark:bg-slate-800/80" />
            </div>

            <TabsTrigger 
              value="danger" 
              class="justify-start rounded-xl px-4 py-3 h-auto data-[state=active]:bg-red-50 dark:data-[state=active]:bg-red-950/20 data-[state=active]:text-red-500 border border-transparent data-[state=active]:border-red-100 dark:data-[state=active]:border-red-900/30 transition-all text-slate-500 dark:text-slate-400"
            >
              <AlertTriangle class="size-4 mr-3 text-red-400" />
              <div class="text-left">
                <p class="text-sm font-bold">Danger Zone</p>
                <p class="text-[10px] opacity-70 font-medium hidden lg:block">Delete account</p>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      <!-- Right Side Content -->
      <div class="flex-1 w-full max-w-4xl">
        <!-- Account Settings -->
        <TabsContent value="account" class="m-0 space-y-6 outline-none animate-in fade-in slide-in-from-right-4 duration-300">
          <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <CardHeader class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30">
              <CardTitle class="text-lg">Personal Information</CardTitle>
              <CardDescription>Update your basic identity and contact details.</CardDescription>
            </CardHeader>
            <CardContent class="p-6 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <Label for="firstName" class="text-xs font-bold uppercase tracking-wider text-slate-400">First Name</Label>
                  <Input id="firstName" placeholder="Rina" class="h-11 rounded-xl" />
                </div>
                <div class="space-y-2">
                  <Label for="lastName" class="text-xs font-bold uppercase tracking-wider text-slate-400">Last Name</Label>
                  <Input id="lastName" placeholder="Khatun" class="h-11 rounded-xl" />
                </div>
              </div>
              <div class="space-y-2">
                <Label for="email" class="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</Label>
                <div class="relative">
                  <Mail class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input id="email" type="email" placeholder="rina@example.com" class="pl-10 h-11 rounded-xl" />
                </div>
              </div>
              <div class="space-y-2">
                <Label for="phone" class="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</Label>
                <div class="relative">
                  <Smartphone class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input id="phone" placeholder="+880 1XXX XXXXXX" class="pl-10 h-11 rounded-xl" />
                </div>
              </div>
              <div class="space-y-2">
                <Label for="language" class="text-xs font-bold uppercase tracking-wider text-slate-400">Preferred Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" class="h-11 rounded-xl">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English (UK)</SelectItem>
                    <SelectItem value="bn">বাংলা (Bangla)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter class="border-t border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-6 flex justify-end">
              <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 h-11 font-bold shadow-lg shadow-primary/20">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <!-- Privacy Settings -->
        <TabsContent value="privacy" class="m-0 space-y-6 outline-none animate-in fade-in slide-in-from-right-4 duration-300">
          <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <CardHeader class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30">
              <CardTitle class="text-lg">Privacy & Visibility</CardTitle>
              <CardDescription>Configure your profile discoverability and interaction limits.</CardDescription>
            </CardHeader>
            <CardContent class="p-6 space-y-4">
              <div class="space-y-1">
                <div v-for="(item, index) in [
                  { label: 'Show Profile to Public', desc: 'Allow non-members to view your basic profile information.' },
                  { label: 'Show Phone Number', desc: 'Only verified members will be able to see your phone number.', checked: true },
                  { label: 'Online Status', desc: 'Show when you are active on the platform.', checked: true },
                  { label: 'Show Last Seen', desc: 'Display the last time you were active.', checked: true },
                  { label: 'Profile Discovery', desc: 'Allow your profile to appear in smart match recommendations.', checked: true },
                  { label: 'Read Receipts', desc: 'Let others see when you\'ve read their messages.', checked: true },
                  { label: 'Show Match Percentage', desc: 'Display compatibility scores on your profile.', checked: true }
                ]" :key="index" class="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div class="space-y-0.5">
                    <Label class="text-sm font-bold text-slate-900 dark:text-white">{{ item.label }}</Label>
                    <p class="text-xs text-slate-500">{{ item.desc }}</p>
                  </div>
                  <Switch :default-checked="item.checked" />
                </div>
                
                <div class="flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <div class="space-y-0.5">
                    <Label class="text-sm font-bold flex items-center gap-2 text-primary">
                      Private Mode
                      <Badge class="bg-primary h-4 px-1.5 text-[10px]">PREMIUM</Badge>
                    </Label>
                    <p class="text-xs text-slate-500">Only people you've expressed interest in can see your full profile.</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter class="border-t border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-6 flex justify-end">
              <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 h-11 font-bold shadow-lg shadow-primary/20">Update Privacy</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <!-- Notifications Settings -->
        <TabsContent value="notifications" class="m-0 space-y-6 outline-none animate-in fade-in slide-in-from-right-4 duration-300">
          <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <CardHeader class="border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30">
              <CardTitle class="text-lg">Notification Preferences</CardTitle>
              <CardDescription>Fine-tune how and when you want to be reached.</CardDescription>
            </CardHeader>
            <CardContent class="p-6 space-y-8">
              <!-- Email Notifications -->
              <div class="space-y-4">
                <h4 class="text-xs font-bold text-secondary flex items-center gap-2 uppercase tracking-widest">
                  <Mail class="size-3.5" /> Email Notifications
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  <div v-for="(item, index) in [
                    { label: 'New Match Requests', checked: true },
                    { label: 'New Messages', checked: true },
                    { label: 'Weekly Progress Report', checked: false },
                    { label: 'Marketing & Promotional', checked: false },
                    { label: 'Interest Accepted', checked: true },
                    { label: 'Success Stories', checked: true }
                  ]" :key="index" class="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                    <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">{{ item.label }}</span>
                    <Switch :default-checked="item.checked" />
                  </div>
                </div>
              </div>

              <!-- Push & App Notifications -->
              <div class="space-y-4">
                <h4 class="text-xs font-bold text-primary flex items-center gap-2 uppercase tracking-widest">
                  <Smartphone class="size-3.5" /> Push & In-App Alerts
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  <div v-for="(item, index) in [
                    { label: 'Browser Push Notifications', checked: true },
                    { label: 'Daily Match Digest', checked: true },
                    { label: 'Profile Viewed', checked: true },
                    { label: 'Compatibility Updates', checked: false },
                    { label: 'Nearby Members', checked: true }
                  ]" :key="index" class="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                    <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">{{ item.label }}</span>
                    <Switch :default-checked="item.checked" />
                  </div>
                  
                  <!-- Premium SMS -->
                  <div class="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                    <div class="space-y-0.5">
                      <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">SMS Notifications</span>
                      <p class="text-[9px] text-primary font-bold uppercase tracking-tight">Premium Only</p>
                    </div>
                    <Switch disabled />
                  </div>
                </div>
              </div>

              <!-- Security & System -->
              <div class="space-y-4">
                <h4 class="text-xs font-bold text-accent flex items-center gap-2 uppercase tracking-widest">
                  <ShieldCheck class="size-3.5" /> Security & System
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  <div v-for="(item, index) in [
                    { label: 'New Login Alerts', checked: true },
                    { label: 'System Maintenance', checked: true },
                    { label: 'Security Tips', checked: false }
                  ]" :key="index" class="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                    <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">{{ item.label }}</span>
                    <Switch :default-checked="item.checked" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter class="border-t border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-6 flex justify-end">
              <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 h-11 font-bold shadow-lg shadow-primary/20">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <!-- Subscription Settings -->
        <TabsContent value="subscription" class="m-0 space-y-6 outline-none animate-in fade-in slide-in-from-right-4 duration-300">
          <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div class="p-8 bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white relative">
              <div class="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles class="size-32" />
              </div>
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div class="space-y-2">
                  <Badge class="bg-white/20 text-white border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Current Plan</Badge>
                  <h3 class="text-3xl font-black tracking-tight">Premium Elite</h3>
                  <div class="flex items-center gap-2 text-white/80">
                    <Calendar class="size-4" />
                    <p class="text-sm font-medium">Renews on October 25, 2024</p>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-1">
                  <p class="text-sm font-bold opacity-80">Monthly Billing</p>
                  <p class="text-4xl font-black">$19<span class="text-sm opacity-60">/mo</span></p>
                </div>
              </div>
            </div>
            
            <CardContent class="p-8 space-y-8">
              <div class="space-y-4">
                <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Active Benefits</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div v-for="benefit in ['Unlimited Messaging', 'Profile Boost Weekly', 'Advanced Search Filters', 'Verified Badge', 'Priority Support', 'No Ads']" :key="benefit" class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50">
                    <div class="size-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Sparkles class="size-3 text-green-500" />
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">{{ benefit }}</span>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Payment Method</h4>
                <div class="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 group transition-all hover:border-primary/30">
                  <div class="flex items-center gap-4">
                    <div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                      <CreditCard class="size-6 text-slate-400" />
                    </div>
                    <div>
                      <p class="text-sm font-bold text-slate-900 dark:text-white">Visa ending in 4242</p>
                      <p class="text-xs text-slate-500">Expires 12/26</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" class="rounded-lg h-9 font-bold">Update</Button>
                </div>
              </div>
            </CardContent>
            
            <CardFooter class="border-t border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p class="text-xs text-slate-500 text-center sm:text-left">Need to change your billing cycle or payment gateway? <a href="#" class="text-primary font-bold hover:underline">Manage Stripe Billing</a></p>
              <div class="flex gap-3 w-full sm:w-auto">
                <Button variant="ghost" class="flex-1 sm:flex-none text-red-500 hover:text-red-600 hover:bg-red-50 font-bold rounded-xl h-11">Cancel</Button>
                <Button class="flex-1 sm:flex-none bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 font-bold rounded-xl h-11 px-8">Upgrade Plan</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <!-- Danger Zone -->
        <TabsContent value="danger" class="m-0 space-y-6 outline-none animate-in fade-in slide-in-from-right-4 duration-300">
          <Card class="border-red-100 dark:border-red-900/30 shadow-sm overflow-hidden">
            <CardHeader class="border-b border-red-50 dark:border-red-950/20 bg-red-50/30 dark:bg-red-950/10">
              <div class="flex items-center gap-3">
                <div class="size-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle class="size-5 text-red-500" />
                </div>
                <div>
                  <CardTitle class="text-lg text-red-600">Delete Account</CardTitle>
                  <CardDescription class="text-red-500/70">This action is permanent and irreversible.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent class="p-8 space-y-6">
              <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                <h4 class="text-sm font-bold text-red-600 mb-2 flex items-center gap-2">
                  <Info class="size-4" /> What happens when you delete?
                </h4>
                <ul class="text-xs text-red-500/80 space-y-2 list-disc pl-4">
                  <li>Your profile will be removed from all search results.</li>
                  <li>All your matches, messages, and interests will be permanently lost.</li>
                  <li>Your premium subscription will be cancelled immediately without refund.</li>
                  <li>You cannot reactivate this account once it's deleted.</li>
                </ul>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <Checkbox id="confirm-delete" class="border-red-200 dark:border-red-900 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500" />
                  <Label for="confirm-delete" class="text-xs font-medium text-slate-600 dark:text-slate-400">I understand that this action cannot be undone.</Label>
                </div>
                <div class="space-y-2">
                  <Label class="text-xs font-bold uppercase tracking-wider text-slate-400">Type "DELETE" to confirm</Label>
                  <Input placeholder="DELETE" class="h-11 rounded-xl border-red-100 dark:border-red-900/50" />
                </div>
              </div>
            </CardContent>
            <CardFooter class="border-t border-red-50 dark:border-red-950/20 bg-red-50/30 dark:bg-red-950/10 p-8">
              <Button variant="destructive" class="w-full sm:w-auto rounded-xl px-12 h-11 font-bold shadow-lg shadow-red-500/20">Permanently Delete Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  </div>
</template>
