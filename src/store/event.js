import {host} from './host.js'

export const EventManagement = {
    namespaced: true,
    state:{
        events:{},
        venue_events:{}
    },
    getters:{
        getEvents(state){
            return state.events
        },
        getVenueEvents(state){
            return state.venue_events
        }
    },
    mutations:{
        setEvents(state,payload){
            state.events[payload.id] = payload
        },
        setVenueEvents(state,payload){
            state.venue_events[payload.id] = payload
        }
    },
    actions:{
        async getEvents(context){
            try{
                const token = localStorage.getItem('token')
                const response = await fetch(host + '/event/get_events',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-tok':token
                    }
                })
                const data = await response.json()
                context.commit('setEvents',data)
                return data

            }
            catch(error){
                console.log(error);
            }
        },
        async addEvent(context,payload){
            try{
                const token = localStorage.getItem('token')
                const response = await fetch(host + '/event/add_event',{
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
        async getEventsonVenue(context,payload){
            try{
                const token = localStorage.getItem('token')
                const response = await fetch(host + '/venue/events/'+payload,{
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
        },
        async addEventtoVenue(context,payload){
            try{
                const token = localStorage.getItem('token')
                const response = await fetch(host + '/venue/add_venue_event',{
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
        async getVenueEvents(){
            try{
                const token = localStorage.getItem('token')
                const response = await fetch(host + '/venue/venueevents',{
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