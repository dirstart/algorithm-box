type MenuKey = 'home' | 'house' | 'news'

interface Menu {
  label?: string
  hidden?: boolean
}

const wtf: Record<MenuKey, Menu> = {
  home: {},
  house: {},
  news: {},
}
