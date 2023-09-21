import {host} from './host.js'

export const EventManagement = {
    namespaced: true,
    actions:{
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
        }
    }
}