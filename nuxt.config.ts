import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["shadcn-nuxt", "@nuxtjs/color-mode", "@vueuse/nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "class-variance-authority",
        "reka-ui",
        "clsx",
        "tailwind-merge",
      ],
    },
  },
});
