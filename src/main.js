import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
// import './assets/css/responsive.css'
// import "./assets/css/style (Mohammad Rocky's conflicted copy 2018-05-08).css"
// import './assets/css/style.css'
// import './assets/css/_variables.css'
// import './assets/css/bootstrap.css'
// // import './assets/css/font-awesome.min.css'
// import './assets/css/_testimonial.css'
// // import './assets/css/style.css.map'
// import './assets/scss/style.scss';
// import './assets/scss/_banner.scss'
// import './assets/css/_footer.css'
// import './assets/js/contact.js'



const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')