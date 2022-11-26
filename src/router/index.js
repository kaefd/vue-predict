import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ForecastVue from "../views/Forecast.vue";
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
