import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ForecastVue from "../views/Forecast.vue";
import KomoditasVue from "@/views/Komoditas.vue";
import TestingVue from "@/views/Testing.vue";
import ProfileVue from "../views/ProfileVue.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/forecast",
		name: "ForecastVue",
		component: ForecastVue,
	},
	{
		path: "/komoditas",
		name: "KomoditasVue",
		component: KomoditasVue,
	},
	{
		path: "/testing",
		name: "TestingVue",
		component: TestingVue,
	},
	{
		path: "/profile",
		name: "ProfileVue",
		component: ProfileVue,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
