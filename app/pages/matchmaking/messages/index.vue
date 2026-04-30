<script setup lang="ts">
import { ref, computed, nextTick, watch } from "vue";
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
  ChevronLeft,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

definePageMeta({ layout: "dashboard" });

const activeChatId = ref(1);
const messageInput = ref("");
const searchQuery = ref("");
const showChatMobile = ref(false);
const isTyping = ref(true); // Mock: User B is typing
const messagesEndRef = ref<HTMLElement | null>(null);

const chats = ref([
  {
    id: 1,
    name: "Fatema Begum",
    lastMsg: "How about 4 PM?",
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
]);

const messagesMap = ref<Record<number, { id: number; text: string; sender: string; time: string }[]>>({
  1: [
    { id: 1, text: "Hi! How are you?", sender: "them", time: "10:28 AM" },
    { id: 2, text: "Hello! I'm doing great, thank you. How about you?", sender: "me", time: "10:29 AM" },
    { id: 3, text: "I'm good too! I was looking at your profile and think we have a lot in common.", sender: "them", time: "10:30 AM" },
    { id: 4, text: "I liked your profile too! Would love to chat more.", sender: "them", time: "10:31 AM" },
    { id: 5, text: "That's wonderful to hear! What specifically caught your eye?", sender: "me", time: "10:33 AM" },
    { id: 6, text: "I noticed we both love traveling and traditional music. I've been to Sylhet last year, it was amazing!", sender: "them", time: "10:35 AM" },
    { id: 7, text: "Sylhet is beautiful indeed. I have family there. We should definitely talk more about our travels.", sender: "me", time: "10:37 AM" },
    { id: 8, text: "Absolutely! Are you free this weekend for a quick call?", sender: "them", time: "10:39 AM" },
    { id: 9, text: "Yes, Saturday afternoon works for me. What time are you thinking?", sender: "me", time: "10:41 AM" },
    { id: 10, text: "How about 4 PM?", sender: "them", time: "10:43 AM" },
    { id: 11, text: "4 PM sounds perfect! Looking forward to it 😊", sender: "me", time: "10:44 AM" },
    { id: 12, text: "Great! I'll call you then. Have a wonderful day!", sender: "them", time: "10:45 AM" },
  ],
  2: [
    { id: 1, text: "Hello Nasrin, I saw your interest in my profile.", sender: "me", time: "Yesterday" },
    { id: 2, text: "Thank you for the interest.", sender: "them", time: "Yesterday" },
  ],
  3: [
    { id: 1, text: "Hey! How's it going?", sender: "them", time: "3h ago" },
    { id: 2, text: "Let's meet up soon?", sender: "them", time: "2h ago" },
  ],
});

const filteredChats = computed(() => {
  if (!searchQuery.value) return chats.value;
  const q = searchQuery.value.toLowerCase();
  return chats.value.filter(chat =>
    chat.name.toLowerCase().includes(q) ||
    chat.lastMsg.toLowerCase().includes(q)
  );
});

const activeChat = computed(() => chats.value.find(c => c.id === activeChatId.value));
const currentMessages = computed(() => messagesMap.value[activeChatId.value] || []);

const scrollToBottom = async () => {
  await nextTick();
  if (messagesEndRef.value) {
    messagesEndRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

watch(currentMessages, () => {
  scrollToBottom();
}, { flush: "post" });

watch(isTyping, () => {
  scrollToBottom();
}, { flush: "post" });

const selectChat = (id: number) => {
  activeChatId.value = id;
  showChatMobile.value = true;
  scrollToBottom();
};

const sendMessage = () => {
  if (!messageInput.value.trim()) return;

  const newMessage = {
    id: Date.now(),
    text: messageInput.value,
    sender: "me",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  if (!messagesMap.value[activeChatId.value]) {
    messagesMap.value[activeChatId.value] = [];
  }
  messagesMap.value[activeChatId.value].push(newMessage);
  messageInput.value = "";
  scrollToBottom();

  // Simulate User B typing after a short delay
  isTyping.value = false;
  setTimeout(() => {
    isTyping.value = true;
    setTimeout(() => {
      isTyping.value = false;
    }, 3000);
  }, 1200);
};
</script>

<template>
  <!-- Outer wrapper: fixed height, flex row, no overflow on itself -->
  <div
    class="flex border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 md:rounded-2xl overflow-hidden shadow-sm"
    style="height: calc(100vh - 140px);"
  >
    <!-- ═══════════════════════════════════════════════════ -->
    <!-- LEFT: Conversation List                            -->
    <!-- ═══════════════════════════════════════════════════ -->
    <div
      class="border-r border-slate-100 dark:border-slate-800 flex flex-col min-h-0"
      :class="showChatMobile ? 'hidden md:flex md:w-80' : 'flex w-full md:w-80'"
    >
      <!-- Header + Search -->
      <div class="shrink-0 p-4 border-b border-slate-100 dark:border-slate-800">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Messages</h2>
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input
            v-model="searchQuery"
            placeholder="Search messages..."
            class="pl-9 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border-none"
          />
        </div>
      </div>

      <!-- Scrollable chat list -->
      <div class="flex-1 overflow-y-auto min-h-0">
        <div class="divide-y divide-slate-50 dark:divide-slate-800/50">
          <div
            v-for="chat in filteredChats"
            :key="chat.id"
            class="p-4 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 relative"
            :class="{ 'bg-slate-50 dark:bg-slate-800/50': activeChatId === chat.id }"
            @click="selectChat(chat.id)"
          >
            <div class="flex gap-3">
              <div class="relative shrink-0">
                <Avatar class="size-12 rounded-xl">
                  <AvatarImage :src="chat.image" />
                  <AvatarFallback>{{ chat.name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <div
                  v-if="chat.online"
                  class="absolute -bottom-0.5 -right-0.5 size-3.5 border-2 border-white dark:border-slate-900 bg-green-500 rounded-full"
                ></div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-0.5">
                  <span
                    class="text-sm font-bold truncate"
                    :class="chat.unread ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'"
                  >{{ chat.name }}</span>
                  <span class="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">{{ chat.time }}</span>
                </div>
                <p
                  class="text-xs truncate"
                  :class="chat.unread ? 'font-semibold text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500'"
                >{{ chat.lastMsg }}</p>
              </div>
              <div v-if="chat.unread" class="shrink-0 self-center ml-1">
                <div class="size-2 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- RIGHT: Chat Window                                 -->
    <!-- ═══════════════════════════════════════════════════ -->
    <div
      class="flex-1 flex flex-col min-h-0 min-w-0 bg-white dark:bg-slate-900"
      :class="showChatMobile ? 'flex' : 'hidden md:flex'"
    >
      <!-- Chat Header -->
      <div class="shrink-0 h-16 px-4 md:px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <!-- Mobile back button -->
          <Button
            variant="ghost"
            size="icon"
            class="md:hidden rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 -ml-1"
            @click="showChatMobile = false"
          >
            <ChevronLeft class="size-5" />
          </Button>

          <!-- Avatar -->
          <div class="relative shrink-0">
            <Avatar class="size-10 rounded-xl">
              <AvatarImage :src="activeChat?.image" />
              <AvatarFallback>{{ activeChat?.name?.charAt(0) }}</AvatarFallback>
            </Avatar>
            <div
              v-if="activeChat?.online"
              class="absolute -bottom-0.5 -right-0.5 size-3 border-2 border-white dark:border-slate-900 bg-green-500 rounded-full"
            ></div>
          </div>

          <!-- Name + Status -->
          <div class="leading-tight">
            <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">{{ activeChat?.name }}</h3>
            <p
              class="text-[11px] font-medium leading-snug"
              :class="activeChat?.online ? 'text-green-500' : 'text-slate-400'"
            >
              {{ activeChat?.online ? 'Active now' : 'Offline' }}
            </p>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex items-center gap-0.5">
          <Button variant="ghost" size="icon" class="rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <Phone class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="hidden sm:flex rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
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

      <!-- Messages (scrollable) -->
      <div class="flex-1 overflow-y-auto min-h-0 px-4 md:px-6 py-5">
        <div class="flex flex-col gap-5">
          <div
            v-for="msg in currentMessages"
            :key="msg.id"
            class="flex"
            :class="msg.sender === 'me' ? 'justify-end' : 'justify-start'"
          >
            <!-- Them: show avatar -->
            <div v-if="msg.sender === 'them'" class="flex items-end gap-2 max-w-[85%] md:max-w-[70%]">
              <Avatar class="size-7 rounded-lg shrink-0 mb-1">
                <AvatarImage :src="activeChat?.image" />
                <AvatarFallback>{{ activeChat?.name?.charAt(0) }}</AvatarFallback>
              </Avatar>
              <div class="flex flex-col items-start gap-0.5">
                <div class="px-4 py-2.5 text-sm rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/50">
                  {{ msg.text }}
                </div>
                <span class="text-[10px] text-slate-400 px-1">{{ msg.time }}</span>
              </div>
            </div>

            <!-- Me -->
            <div v-else class="flex flex-col items-end gap-0.5 max-w-[85%] md:max-w-[70%]">
              <div class="px-4 py-2.5 text-sm rounded-2xl rounded-tr-none bg-primary text-white shadow-sm shadow-primary/20">
                {{ msg.text }}
              </div>
              <span class="text-[10px] text-slate-400 px-1">{{ msg.time }}</span>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="flex items-end gap-2">
              <Avatar class="size-7 rounded-lg shrink-0 mb-1">
                <AvatarImage :src="activeChat?.image" />
                <AvatarFallback>{{ activeChat?.name?.charAt(0) }}</AvatarFallback>
              </Avatar>
              <div class="flex items-center gap-2 px-4 py-3 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50">
                <span class="size-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="size-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="size-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
              </div>
            </div>
          </div>

          <!-- Scroll anchor -->
          <div ref="messagesEndRef"></div>
        </div>
      </div>

      <!-- Message Input (always pinned to bottom) -->
      <div class="shrink-0 p-3 md:p-4 border-t border-slate-100 dark:border-slate-800">
        <div class="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center gap-1 px-2 py-1.5">
          <Button variant="ghost" size="icon" class="size-8 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
            <Paperclip class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="hidden sm:flex size-8 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
            <ImageIcon class="size-4" />
          </Button>
          <Button variant="ghost" size="icon" class="size-8 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
            <Smile class="size-4" />
          </Button>
          <Input
            v-model="messageInput"
            placeholder="Type your message..."
            class="flex-1 bg-transparent border-none focus-visible:ring-0 h-9 text-sm"
            @keyup.enter="sendMessage"
          />
          <Button
            size="icon"
            class="size-9 rounded-xl bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 shrink-0"
            @click="sendMessage"
          >
            <Send class="size-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
