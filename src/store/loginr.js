import {host} from './host.js'


export const loginRegister = {
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