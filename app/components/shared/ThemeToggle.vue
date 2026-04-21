<!-- app/components/shared/ThemeToggle.vue -->
<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <button
          aria-label="Toggle theme"
          class="inline-flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          @click="toggleTheme"
        >
          <Sun v-if="colorMode.value === 'dark'" class="size-[18px]" />
          <Moon v-else class="size-[18px]" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
