<!-- app/components/shared/NotificationBell.vue -->
<script setup lang="ts">
import { Bell, Heart, Eye, Mail, CreditCard } from 'lucide-vue-next'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const { notifications, unreadCount, markAllRead } = useNotifications()

const notificationIcons = [Heart, Eye, Mail, CreditCard]
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <button
        aria-label="Notifications"
        class="relative inline-flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
      >
        <Bell class="size-[18px]" />
        <span
          v-if="unreadCount > 0"
          class="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"
        />
      </button>
    </PopoverTrigger>
    <PopoverContent align="end" class="w-80 p-0">
      <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
        <h4 class="text-sm font-semibold text-slate-900 dark:text-white">Notifications</h4>
        <button
          class="text-xs text-primary hover:underline cursor-pointer"
          @click="markAllRead"
        >
          Mark all read
        </button>
      </div>
      <div class="max-h-72 overflow-y-auto">
        <div
          v-for="(notification, index) in notifications"
          :key="notification.id"
          class="flex items-start gap-3 px-4 py-3 transition-colors"
          :class="[
            !notification.read
              ? 'bg-primary-50 dark:bg-primary-950/20'
              : 'hover:bg-slate-50 dark:hover:bg-slate-800/50',
          ]"
        >
          <div class="flex items-center justify-center size-8 rounded-full bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
            <component
              :is="notificationIcons[index % notificationIcons.length]"
              class="size-4 text-slate-500 dark:text-slate-400"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-900 dark:text-white">
              {{ notification.title }}
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {{ notification.message }}
            </p>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
              {{ notification.time }}
            </p>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
