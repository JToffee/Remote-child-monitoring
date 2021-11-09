import SignUp from "./components/pageSections/SignUp.vue";
import About from "./components/pageSections/About.vue";
import Homepage from "./components/pageSections/HomePage.vue";
import LandingPage from "./components/pageSections/LandingPage.vue";
import Device from "./components/pageSections/Device.vue";
import Showmap from "./components/Showmap.vue";

export  default [
    {path: '/',component: Homepage},
    {path: '/about',component: About},
    {path: '/signup',component: SignUp},
    {path: '/landingPage',component: LandingPage},
    {path: '/device',component: Device},
    {path: '/map',component: Showmap}
]