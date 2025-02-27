import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Master from "@/components/layouts/Master.vue";
import Guest from "@/components/layouts/Guest.vue";
import LoginView from "@/views/auth/LoginView.vue";
import Admin from "@/components/layouts/Admin.vue";
import NotFound from "@/views/admin/NotFound.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ProfileView from "@/views/profile/ProfileView.vue";
import MyImage from "@/views/MyImage.vue";
import UploadImageView from "@/views/UploadImageView.vue";
import ProductView from "@/views/ProductView.vue";
import { useAuthUserStore } from "@/stores/useAuthUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // GuestLayout
    {
      path: "/guest",
      component: Guest,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
        },
        {
          path: "register",
          name: "register",
          component: RegisterView,
        },
      ],
      beforeEnter: (to, from, next) => {
        const authUserStore = useAuthUserStore();
        authUserStore.errors = "";
        next();
      },
    },

    // MasterLayout
    {
      path: "/",
      component: Master,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: ProfileView,
        },
        {
          path: "/myImage",
          name: "my_image",
          component: MyImage,
        },
        {
          path: "/uploadImage",
          name: "uploadImage",
          component: UploadImageView,
        },
        {
          path: "/products",
          name: "products",
          component: ProductView,
        },
        {
          path: "/customers",
          name: "customers",
          component: () => import("@/views/customers/CustomerView.vue"),
        },
      ],
      beforeEnter: async (to, from, next) => {
        try {
          const authUserStore = useAuthUserStore();
          await authUserStore.fetchUserInfo();
          next();
        } catch (error) {
          // console.log(error);
          next({ name: "login" });
        }
      },
    },

    // adminLayout
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/admin/DashboardView.vue"),
        },
      ],
    },

    // 404
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
