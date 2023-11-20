import { Secret, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

if( !process.env.SECRETORPRIVATEKEY ){
    throw new Error('SECRETPRIVATEKEY environment variable is not defined');
    // return;
}


export const generateJwt = ( uid: string ) => {
    return new Promise( (resolve: Function, reject: Function) => {

        const payload = { uid };

        
        const secretPrivateKey = process.env.SECRETORPRIVATEKEY as Secret || '';

        // jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
        sign( payload, secretPrivateKey , {
            expiresIn:'4h'
        }, (err: Error | any, token?: string) => {
            
            if( err ){
                console.log(err);
                reject('Cannot create token')
            }else{
                resolve(token)
            }
        })
    })
}