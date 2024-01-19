import conf from '../conf/Conf.js'
import { Client,Account,ID } from 'appwrite'


export class AuthServise{
  client = new Client();
  account;

  constructor() {
    this.client
         .setEndpoint(conf.appwriteURL)
         .setProject(conf.appwriteProjectID);
      this.account = new Account(this.client);
  }

  // create methide 
  async createAccount({email,password,name}) {
     try{
        const userAccount = await this.account.create(ID.unique(),email,password,name);
        if (userAccount) {
            // call another methode
            return this.login({email,password});
        }else{
            return userAccount;
        }
     }catch(error){
        throw error;
     }
  }

  async login({email,password}) {
    try{
       return await this.account.createEmailSession(email,password);
       
    }catch(error){
       throw error;
    }
 }

 async getCurrentUser() {
    try{
         return await this.account.get();
       }catch(error){
         return null
       console.log("apprite me getCurrent servise me errer hai");
      }

    return null;
 }

 async logout() {
    try{
       await this.account.deleteSessions();
       
    }catch(error){
       throw error;
    }
 }




}

const authServise = new AuthServise();

export default authServise