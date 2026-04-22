<!-- app/pages/messages/index.vue -->
<script setup lang="ts">
import { ref } from "vue";
import {
  Search,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Send,
  Smile,
  Paperclip,
  Image as ImageIcon,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const activeChat = ref(1);
const messageInput = ref("");

const chats = [
  {
    id: 1,
    name: "Fatema Begum",
    lastMsg: "I liked your profile! Would love to chat more.",
    time: "2m ago",
    unread: true,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatema",
    online: true,
  },
  {
    id: 2,
    name: "Nasrin Akter",
    lastMsg: "Thank you for the interest.",
    time: "1h ago",
    unread: false,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasrin",
    online: false,
  },
  {
    id: 3,
    name: "Sumaiya Islam",
    lastMsg: "Let's meet up soon?",
    time: "3h ago",
    unread: true,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumaiya",
    online: true,
  },
];

const messages = [
  { id: 1, text: "Hi Rina! How are you?", sender: "them", time: "10:30 AM" },
  { id: 2, text: "Hello! I'm doing great, thank you. How about you?", sender: "me", time: "10:32 AM" },
  { id: 3, text: "I'm good too. I was just looking at your profile and I think we have a lot in common.", sender: "them", time: "10:33 AM" },
  { id: 4, text: "I liked your profile too! Would love to chat more.", sender: "them", time: "10:33 AM" },
];
</script>

<template>
  <div class="h-[calc(100vh-160px)] flex border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm">
    <!-- Left Sidebar: Chat List -->
    <div class="w-80 border-r border-slate-100 dark:border-slate-800 flex flex-col">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Messages</h2>
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input placeholder="Search messages..." class="pl-9 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border-none" />
        </div>
      </div>

      <ScrollArea class="flex-1">
        <div class="divide-y divide-slate-50 dark:divide-slate-800/50">
          <div
            v-for="chat in chats"
            :key="chat.id"
            class="p-4 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 relative"
            :class="{ 'bg-slate-50 dark:bg-slate-800/50': activeChat === chat.id }"
            @click="activeChat = chat.id"
          >
            <div class="flex gap-3">
              <div class="relative">
                <Avatar class="size-12 rounded-xl">
                  <AvatarImage :src="chat.image" />
                  <AvatarFallback>{{ chat.name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <div v-if="chat.online" class="absolute -bottom-0.5 -right-0.5 size-3.5 border-2 border-white dark:border-slate-900 bg-green-500 rounded-full"></div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-0.5">
                  <span class="text-sm font-bold truncate" :class="chat.unread ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'">
                    {{ chat.name }}
                  </span>
                  <span class="text-[10px] text-slate-400 font-medium whitespace-nowrap">{{ chat.time }}</span>
                </div>
                <p class="text-xs truncate" :class="chat.unread ? 'font-bold text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500'">
                  {{ chat.lastMsg }}
                </p>
              </div>
              <div v-if="chat.unread" class="absolute right-4 top-1/2 -translate-y-1/2">
                <div class="size-2 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>

    <!-- Right: Chat Window -->
    <div class="flex-1 flex flex-col bg-white dark:bg-slate-900">
      <!-- Chat Header -->
      <div class="h-16 px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar class="size-10 rounded-lg">
            <AvatarImage :src="chats.find(c => c.id === activeChat)?.image" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-white">{{ chats.find(c => c.id === activeChat)?.name }}</h3>
            <span class="text-[10px] font-medium text-green-500 flex items-center gap-1">
              <span class="size-1.5 bg-green-500 rounded-full"></span>
              Active Now
            </span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <Button variant="ghost" size="icon" class="rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <Phone class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <Video class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <Info class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <MoreHorizontal class="size-4" />
          </Button>
        </div>
      </div>

      <!-- Messages Area -->
      <ScrollArea class="flex-1 p-6">
        <div class="space-y-6">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="flex"
            :class="msg.sender === 'me' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[70%] space-y-1"
              :class="msg.sender === 'me' ? 'items-end' : 'items-start'"
            >
              <div
                class="px-4 py-3 text-sm rounded-2xl"
                :class="msg.sender === 'me'
                  ? 'bg-primary text-white rounded-tr-none shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700/50'"
              >
                {{ msg.text }}
              </div>
              <span class="text-[10px] font-medium text-slate-400 px-1">{{ msg.time }}</span>
            </div>
          </div>
        </div>
      </ScrollArea>

      <!-- Message Input -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800">
        <div class="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-2 rounded-2xl flex items-end gap-2">
          <div class="flex items-center gap-1 pb-1">
            <Button variant="ghost" size="icon" class="size-9 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <Paperclip class="size-4" />
            </Button>
            <Button variant="ghost" size="icon" class="size-9 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <ImageIcon class="size-4" />
            </Button>
            <Button variant="ghost" size="icon" class="size-9 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <Smile class="size-4" />
            </Button>
          </div>
          <Input
            v-model="messageInput"
            placeholder="Type your message..."
            class="flex-1 bg-transparent border-none focus-visible:ring-0 h-10 text-sm"
            @keyup.enter="messageInput = ''"
          />
          <Button size="icon" class="size-10 rounded-xl bg-primary hover:bg-primary/90 shadow-md shadow-primary/20" @click="messageInput = ''">
            <Send class="size-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
