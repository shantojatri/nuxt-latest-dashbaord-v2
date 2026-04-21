// app/composables/useNotifications.ts
interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
}

const notifications = ref<Notification[]>([
  {
    id: 1,
    title: 'New Match Found',
    message: 'Fatema Begum matched with your profile preferences.',
    time: '2 min ago',
    read: false,
  },
  {
    id: 2,
    title: 'Profile Viewed',
    message: 'Nasrin Akter viewed your profile.',
    time: '15 min ago',
    read: false,
  },
  {
    id: 3,
    title: 'Interest Received',
    message: 'Sumaiya Islam sent you an interest request.',
    time: '1 hour ago',
    read: true,
  },
  {
    id: 4,
    title: 'Subscription Expiring',
    message: 'Your Premium subscription expires in 3 days.',
    time: '3 hours ago',
    read: true,
  },
])

export const useNotifications = () => {
  const unreadCount = computed(() =>
    notifications.value.filter((n) => !n.read).length,
  )

  const markAllRead = () => {
    notifications.value.forEach((n) => {
      n.read = true
    })
  }

  return {
    notifications,
    unreadCount,
    markAllRead,
  }
}
