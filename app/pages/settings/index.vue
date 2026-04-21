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
} from "lucide-vue-next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const activeTab = ref("account");
</script>

<template>
  <div class="space-y-8 pb-12">
    <div>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
      <p class="text-slate-500 dark:text-slate-400">Manage your account preferences and security settings.</p>
    </div>

    <Tabs v-model="activeTab" class="space-y-6">
      <TabsList class="bg-slate-100/50 dark:bg-slate-900/50 p-1 rounded-xl border border-slate-100 dark:border-slate-800 h-auto w-full justify-start overflow-x-auto">
        <TabsTrigger value="account" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
          <User class="size-4 mr-2" />
          Account
        </TabsTrigger>
        <TabsTrigger value="privacy" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
          <Shield class="size-4 mr-2" />
          Privacy
        </TabsTrigger>
        <TabsTrigger value="notifications" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
          <Bell class="size-4 mr-2" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="subscription" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
          <CreditCard class="size-4 mr-2" />
          Subscription
        </TabsTrigger>
        <TabsTrigger value="danger" class="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm text-red-500 data-[state=active]:text-red-500">
          <AlertTriangle class="size-4 mr-2" />
          Danger Zone
        </TabsTrigger>
      </TabsList>

      <!-- Account Settings -->
      <TabsContent value="account" class="space-y-6 outline-none">
        <Card class="border-slate-100 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg">Personal Information</CardTitle>
            <CardDescription>Update your personal details and contact information.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="firstName">First Name</Label>
                <Input id="firstName" placeholder="Rina" />
              </div>
              <div class="space-y-2">
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Khatun" />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="email">Email Address</Label>
              <div class="relative">
                <Mail class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input id="email" type="email" placeholder="rina@example.com" class="pl-10" />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="phone">Phone Number</Label>
              <div class="relative">
                <Smartphone class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input id="phone" placeholder="+880 1XXX XXXXXX" class="pl-10" />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="language">Preferred Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="bn">বাংলা (Bangla)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter class="border-t border-slate-100 dark:border-slate-800 pt-6">
            <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 font-bold">Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Privacy Settings -->
      <TabsContent value="privacy" class="space-y-6 outline-none">
        <Card class="border-slate-100 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg">Privacy & Visibility</CardTitle>
            <CardDescription>Control who can see your profile and contact you.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Show Profile to Public</Label>
                <p class="text-xs text-slate-500">Allow non-members to view your basic profile information.</p>
              </div>
              <Switch />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Show Phone Number</Label>
                <p class="text-xs text-slate-500">Only verified members will be able to see your phone number.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Online Status</Label>
                <p class="text-xs text-slate-500">Show when you are active on the platform.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Show Last Seen</Label>
                <p class="text-xs text-slate-500">Display the last time you were active.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Profile Discovery</Label>
                <p class="text-xs text-slate-500">Allow your profile to appear in smart match recommendations.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Read Receipts</Label>
                <p class="text-xs text-slate-500">Let others see when you've read their messages.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold">Show Match Percentage</Label>
                <p class="text-xs text-slate-500">Display compatibility scores on your profile.</p>
              </div>
              <Switch :default-checked="true" />
            </div>
            <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-primary/20 bg-primary/5">
              <div class="space-y-0.5">
                <Label class="text-sm font-bold flex items-center gap-2">
                  Private Mode
                  <Badge class="bg-primary h-4 px-1.5 text-[10px]">PREMIUM</Badge>
                </Label>
                <p class="text-xs text-slate-500">Only people you've expressed interest in can see your full profile.</p>
              </div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter class="border-t border-slate-100 dark:border-slate-800 pt-6">
            <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 font-bold">Update Privacy</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Notifications Settings -->
      <TabsContent value="notifications" class="space-y-6 outline-none">
        <Card class="border-slate-100 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg">Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to be notified about new matches and messages.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail class="size-4 text-secondary" /> Email Notifications
              </h4>
              <div class="space-y-3 pl-6">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">New Match Requests</span>
                  <Switch :default-checked="true" />
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">New Messages</span>
                  <Switch :default-checked="true" />
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">Weekly Progress Report</span>
                  <Switch />
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">Marketing & Promotional</span>
                  <Switch />
                </div>
              </div>
            </div>

            <Separator class="bg-slate-100 dark:bg-slate-800" />

            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Smartphone class="size-4 text-accent" /> Push & SMS Notifications
              </h4>
              <div class="space-y-3 pl-6">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">Browser Push Notifications</span>
                  <Switch :default-checked="true" />
                </div>
                <div class="flex items-center justify-between">
                  <div class="space-y-0.5">
                    <span class="text-sm text-slate-600 dark:text-slate-400">SMS Alerts</span>
                    <p class="text-[10px] text-primary">Premium only feature</p>
                  </div>
                  <Switch disabled />
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600 dark:text-slate-400">Daily Match Digest</span>
                  <Switch :default-checked="true" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="border-t border-slate-100 dark:border-slate-800 pt-6">
            <Button class="bg-primary hover:bg-primary/90 rounded-xl px-8 font-bold">Save Preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Subscription Settings -->
      <TabsContent value="subscription" class="space-y-6 outline-none">
        <Card class="border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h3 class="text-xl font-bold">Premium Plan</h3>
                <p class="text-primary-50 text-sm opacity-90">Renews on October 25, 2024</p>
              </div>
              <Badge class="bg-white/20 text-white border-none px-3 py-1">Active</Badge>
            </div>
          </div>
          <CardContent class="p-6 space-y-6">
            <div class="space-y-2">
              <h4 class="text-sm font-bold">Payment Method</h4>
              <div class="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl">
                <div class="flex items-center gap-3">
                  <div class="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    <CreditCard class="size-5 text-slate-400" />
                  </div>
                  <div>
                    <p class="text-sm font-bold">Visa ending in 4242</p>
                    <p class="text-xs text-slate-500">Expires 12/26</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" class="text-primary font-bold">Update</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter class="border-t border-slate-100 dark:border-slate-800 pt-6 bg-slate-50/50 dark:bg-slate-900/50">
            <div class="w-full flex items-center justify-between">
              <Button variant="ghost" class="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">Cancel Subscription</Button>
              <Button class="bg-white text-slate-900 border border-slate-200 dark:bg-slate-800 dark:text-white dark:border-slate-700 hover:bg-slate-50 font-bold rounded-xl">Change Plan</Button>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Danger Zone -->
      <TabsContent value="danger" class="space-y-6 outline-none">
        <Card class="border-red-100 dark:border-red-900/30 shadow-sm">
          <CardHeader>
            <CardTitle class="text-lg text-red-500">Delete Account</CardTitle>
            <CardDescription>Once you delete your account, there is no going back. Please be certain.</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              By deleting your account, you will lose all your matches, messages, and profile data. This action is permanent and cannot be undone.
            </p>
          </CardContent>
          <CardFooter class="border-t border-red-50 dark:border-red-950/30 pt-6">
            <Button variant="destructive" class="rounded-xl px-8 font-bold">Delete My Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
