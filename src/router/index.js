import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: {
      title: 'Portofolio'
    }
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: () => import('../views/CertificateView.vue'),
    meta: {
      title: 'Certificate'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - najmikhaeri'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router