import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const host = 'http://127.0.0.1:5000'

const VenueManagement = {
  namespaced: true,
  actions:{
    async addVenue(payload){
      try{
        const token = localStorage.getItem('token')
        const response = await fetch(host + '/venue/add_venue',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-tok':token
          },
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data

      }
      catch(error){
        console.log(error);
      }
    },
    async getVenues(){
      try{
        const token = localStorage.getItem('token')
        const response = await fetch(host + '/venue/get_venues',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-tok':token
          }
        })
        const data = await response.json()
        return data

      }
      catch(error){
        console.log(error);
        return error
      }
      
    }
  }
}

const loginRegister = {
  namespaced: true,
  actions:{
    async register(context, payload){
      try{
        const response = await fetch(host + '/register_user',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data

      }
      catch(error){
        console.log(error);
      }
    },
    async login(context, payload){
      try{
        const response = await fetch(host + '/login_user',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data

      }
      catch(error){
        console.log(error);
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    loginRegister : loginRegister,
    venueManagement : VenueManagement
  }
})
