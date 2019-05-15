import Vue from 'vue';
import router from 'vue-router';

// import img_dig from "@/component/image_dialog";
// import calendar from "@/component/calendar";
// import tcSwitch from "@/component/switch";

const img_dig = () => import('@/component/image_dialog');
const calendar = () => import('@/component/calendar');
const tcSwitch = () => import('@/component/switch');
const rate = () => import('@/component/rate');

// Vue.use(router)
if (!window.router) Vue.use(router);

export default new router({
	routes: [
		{
			path: '/',
			component: img_dig,
		},
		{
			path: '/a',
			component: calendar,
		},
		{
			path: '/switch',
			component: tcSwitch,
		},
		{
			path: '/rate',
			component: rate,
		},
	],
});
