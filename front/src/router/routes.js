
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect:'/quotidien' ,  component: () => import('pages/IndexPage.vue') },
      { path: '/index',  component: () => import('pages/IndexPage.vue') },
      { path: '/quotidien',  component: () => import('pages/PageCalendrierQuotidien.vue') },
      { path: '/mensuel',  component: () => import('pages/CalendrierMensuel.vue') },
      { path: '/statistiques',  component: () => import('pages/Statistiques.vue') },
      { path: '/configuration',  component: () => import('pages/Configuration.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

