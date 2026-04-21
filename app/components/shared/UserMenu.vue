<!-- app/components/shared/UserMenu.vue -->
<script setup lang="ts">
import { ChevronDown, User, Settings, LogOut } from 'lucide-vue-next'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="flex items-center gap-2 cursor-pointer rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        <Avatar class="size-9">
          <AvatarFallback class="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm font-medium">
            RK
          </AvatarFallback>
        </Avatar>
        <div class="hidden sm:flex flex-col items-start">
          <span class="text-sm font-medium text-slate-900 dark:text-white leading-tight">
            Rina Khatun
          </span>
          <Badge
            variant="secondary"
            class="bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 text-[10px] rounded-full px-2 py-0 h-4"
          >
            Premium
          </Badge>
        </div>
        <ChevronDown class="size-4 text-slate-400 hidden sm:block" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-48">
      <DropdownMenuItem class="cursor-pointer" as-child>
        <NuxtLink to="/profile" class="flex items-center gap-2">
          <User class="size-4" />
          <span>My Profile</span>
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer" as-child>
        <NuxtLink to="/settings" class="flex items-center gap-2">
          <Settings class="size-4" />
          <span>Settings</span>
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="cursor-pointer text-red-500 focus:text-red-500">
        <LogOut class="size-4 mr-2" />
        <span>Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
