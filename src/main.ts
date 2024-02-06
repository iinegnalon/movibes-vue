import '@/assets/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#191919',
    surface: '#212121',
    primary: '#3DD2CC',
    secondary: '#666666',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#fb8c00',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
