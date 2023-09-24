import {host} from './host.js'

export const VenueManagement = {
    namespaced: true,
    state:{
      venue:{}
    },
    getters:{
      getVenue(state){
        return state.venue
      }
    },
    mutations:{
      setVenue(state, payload){
        state.venue[payload.id] = payload
    }
  
    },
    actions:{
      async addVenue(context,payload){
        console.log(payload);
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
        
      },
      async getSpecVenue(context, payload){
      try{
        const token = localStorage.getItem('token')
        const response = await fetch(host + '/venue/' + payload,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-tok':token
          }
        })
        const data = await response.json()
        context.commit('setVenue', data)
        return data
  
      }
      catch(error){
        console.log(error);
      }
      },
      deleteVenue(context, payload){
        try{
          const token = localStorage.getItem('token')
          fetch(host + '/venue/delete/' + payload,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-tok':token
            }
          })
        }
        catch(error){
          console.log(error);
        }
      },
      async getTodaySlots(context, payload){
        try{
            const token = localStorage.getItem('token')
            const response = await fetch(host + '/get_today_slots?venue_id='+payload.venue_id+'&date='+ payload.date ,{
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
        }
      },
      async csvJobs(context, payload){
        try{
          const token = localStorage.getItem('token')
          const response = await fetch(host + '/venue/start_async_job/' + payload,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-tok':token
            },
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

