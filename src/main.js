import { createApp } from 'vue'
import App from '@/components/App.vue'
import organisms from './components/organisms'
import atoms from './components/atoms'
import './main.css'

const app = createApp(App)
organisms.map((component) => {
    app.component(component?.name, component)
})
atoms.map((component) => {
    app.component(component?.name, component)
})

app.mount('#app')
