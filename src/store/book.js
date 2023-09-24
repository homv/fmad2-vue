import { host } from "./host";

export const TicketManagement = {
    namespaced: true,
    actions:{
        async getTickCount(context,payload){
            try{
                const token = localStorage.getItem('token');
                const response = await fetch(host + '/book_ticket?envId='+payload,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-tok':token
                    },
                })
                const data = await response.json();
                return data;

            }
            catch(error){
                console.log(error);
            }
        },
    async bookTicket(context,payload){ 
        try{
            const token = localStorage.getItem('token');
            const response = await fetch(host + '/book_ticket',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-tok':token
                },
                body: JSON.stringify(payload)
            })
            const data = await response.json();
            return data;

        }
        catch(error){
            console.log(error);
        }   
    },
    async getTickets(){
        try{
            const token = localStorage.getItem('token');
            const response = await fetch(host + '/show_ticket',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-tok':token
                },
            })
            const data = await response.json();
            return data;

        }
        catch(error){
            console.log(error);
        }}

    }
};