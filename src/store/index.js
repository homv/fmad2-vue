import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {VenueManagement} from './venue.js'
import {loginRegister} from './loginr.js'
import {EventManagement} from './event.js'
import {TicketManagement} from './book.js'

export default new Vuex.Store({
  modules: {
    loginRegister : loginRegister,
    venueManagement : VenueManagement,
    eventManagement : EventManagement,
    ticketManagement : TicketManagement
  }
})
