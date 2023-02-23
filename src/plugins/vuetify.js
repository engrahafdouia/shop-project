/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import  {VDataTable} from 'vuetify/labs/VDataTable'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {VDataTable},

  theme: {
    defaultTheme:'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          purpleme:'#2333B0',
          mov:'#2B176F',
          greenlight:'#03F1DE',
          greyme:'#f4f4f4',
          purpleblue:'#2333B0',
          bluelight:'#6870CB',
          darkme:'#222222',
          herocolor:'#D6DBDE',
          movlight:'#9fa8da',
          bluedark:"#5671897c"
        },
      },
      dark: {
        colors: {
          // primary: '#ff00ff',
          greenlight:'#eee',
          myblue:'#fff',
          grey:'#888',
          purpleblue:'#2333B0',
          purpleme:'#2333B0',
          bluedark:"#5671891f"


        }
    },
    },
  },
})
