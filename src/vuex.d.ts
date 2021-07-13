import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    interface User {
        "login": string,
        "id": number,
        "avatar_url": string,
        "updated_at": string,
    }
    interface Crypto {
        "id": string,
        "name": string,
        "market_data": string,
        "current_price": string,
        "usd": string,
    }
    interface State {
      count: number,
      tasks: string[],
      cryptoList: string[],
      user: User,
      error: boolean,
      cryptos: Crypto,
    }
  
    // provide typings for `this.$store`
    interface ComponentCustomProperties {
      $store: Store<State>
    }
  }