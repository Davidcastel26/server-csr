import RedisStore from 'connect-redis';
import { createClient } from 'redis';

export const redisClient = createClient();
redisClient.connect().catch(console.error);
export const sessionStore = new RedisStore({ client: redisClient });

redisClient.on('error', (err: Error)=>{
   console.log("----- REDIS ERROR ----", err);  
})


redisClient.on('connect',(err:Error)=> {
   console.log('----- CONNECTED TO REDIS SUCCESFULLY -----');
})