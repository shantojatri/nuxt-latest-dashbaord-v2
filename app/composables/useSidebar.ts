// app/composables/useSidebar.ts
import { ref, computed } from 'vue'

const isCollapsed = ref(false)
const isMobileOpen = ref(false)

export const useSidebar = () => {
  const route = useRoute()

  const activeRoute = computed(() => route.path)

  const toggle = () => {
    isCollapsed.value = !isCollapsed.value
  }

  const collapse = () => {
    isCollapsed.value = !isCollapsed.value
  }

  const toggleMobile = () => {
    isMobileOpen.value = !isMobileOpen.value
  }

  const closeMobile = () => {
    isMobileOpen.value = false
  }

  return {
    isCollapsed,
    isMobileOpen,
    activeRoute,
    toggle,
    collapse,
    toggleMobile,
    closeMobile,
  }
}
