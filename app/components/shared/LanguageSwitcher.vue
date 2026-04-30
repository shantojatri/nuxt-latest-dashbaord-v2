<!-- app/components/shared/LanguageSwitcher.vue -->
<script setup lang="ts">
import { Globe } from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currentLang = useState("lang", () => "en");

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
];

const currentLabel = computed(() =>
  currentLang.value === "en" ? "EN" : "বাং",
);

const selectLang = (code: string) => {
  currentLang.value = code;
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button
        aria-label="Switch language"
        class="inline-flex items-center gap-1.5 size-9 justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer min-w-[55px]"
      >
        <Globe class="size-[18px]" />
        <span class="sr-only sm:not-sr-only text-xs font-medium">{{
          currentLabel
        }}</span>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-40">
      <DropdownMenuItem
        v-for="lang in languages"
        :key="lang.code"
        class="cursor-pointer"
        @click="selectLang(lang.code)"
      >
        <span class="mr-2">{{ lang.flag }}</span>
        <span>{{ lang.label }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
