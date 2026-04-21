// app/composables/useSidebar.ts
const isCollapsed = ref(false)

export const useSidebar = () => {
  const route = useRoute()

  const activeRoute = computed(() => route.path)

  const toggle = () => {
    isCollapsed.value = !isCollapsed.value
  }

  const collapse = () => {
    isCollapsed.value = !isCollapsed.value
  }

  return {
    isCollapsed,
    activeRoute,
    toggle,
    collapse,
  }
}
