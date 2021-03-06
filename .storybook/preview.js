import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/fadeInUp.css'
import '@quasar/extras/animate/fadeOutDown.css'
import '@quasar/extras/animate/fadeInRight.css'
import '@quasar/extras/animate/fadeOutRight.css'

import 'quasar/dist/quasar.css'
import '../src/css/app.styl'
import { app } from '@storybook/vue3'
import { Quasar } from 'quasar'
import Vuex from 'vuex'
import { createI18n } from 'vue-i18n'
import messages from '../src/i18n'
// import myStore from '../src/store'
// import messages from '../src/i18n'
import { createStore } from 'vuex'
import polkadotWallet from '../src/store/polkadotWallet'
import notifications from '~/mixins/notifications'
import { Notify, Loading } from 'quasar'

const store = createStore({
  modules: {
    polkadotWallet
  },
})

app.use(Quasar, {
  plugins: {
    Notify,
    Loading
  },
  config: {
    notify: {},
    loading: {}
  }
})
app.use(Vuex)

const i18n = createI18n({
  locale: 'en-US',
  messages
})
app.use(i18n)

app.use(store)
console.log('store on storybook', store)

// API INSTANCES
import PolkadotApi from '~/services/polkadotApi.js'
import { NbvStorageApi } from '~/services/polkadot-pallets'
const api = new PolkadotApi('wss://n1.hashed.systems')
api.connect().then(() => {
  const nbvStorageApi = new NbvStorageApi(api)
  store['$polkadotApi'] = api
  store['$nbvStorageApi'] = nbvStorageApi
})


app.mixin(notifications)

// const i18n = new VueI18n({
//   locale: 'en-us',
//   fallbackLocale: 'en-us',
//   messages
// })
// export const decorators = [
//   (story) => ({
//     components: { story },
//     template: `<div class="bg-green q-pa-md"><story /></div>`,
//     // i18n,
//     // store
//   })
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
}
