import path  from 'path'
import { sOptions } from '../ts/interfaces/ioptionsSwagger';
// import {} from '../routes/'
 
export const swaggerOptions: sOptions = {
    definition:{
     openapi:"3.0.0",
     info:{
        title: "Portfolio API",
        version: "1.0.0",
        description:"This is an api where hostes could show their listings",
        contact:{
            name:"David C",
            url:"https://davidcst-dev.vercel.app/",
            email:"davcastellanoslarios@gmail.com"
        }
     },
     servers: [
         {
             url:"http://localhost:8042"
         }
     ]
    },
    apis:  [`${path.join(__dirname, "../routes/*.ts")}`] || ["./routes/*.ts"] 
 }