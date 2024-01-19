import conf from '../conf/Conf.js'
import { Client,ID,Databases,Storage,Query } from 'appwrite'


export class Servise{
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
         .setEndpoint(conf.appwriteURL)
         .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    
}

  // create methide 
  async createPost({title,slug,content,featureimage,status,userID}) {
     try{
         return await this.databases.createDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug,
            {
                title,
                content,
                featureimage,
                status,
                userID,
            }
            );
        
     }catch(error){
        throw error;
     }
    }

// update post
async updatePost(slug,{title,content,featureimage,status}) {
    try{
        return await this.databases.updateDocument(
           conf.appwriteDatabaseID,
           conf.appwriteCollectionID,
           slug,
           {
               title,
               content,
               featureimage,
               status,
           }
           );
       
    }catch(error){
       throw error;
    }
   }

   // delete methide
   async deletePost(slug) {
    try{
        await this.databases.deleteDocument(
           conf.appwriteDatabaseID,
           conf.appwriteCollectionID,
           slug
           );
           return true;
       
    }catch(error){
       throw error;
       return false;
    }
   }

   // one post ke liye
   async getPost(slug) {
    try{
        return await this.databases.getDocumentDocument(
           conf.appwriteDatabaseID,
           conf.appwriteCollectionID,
           slug,
           );
       
    }catch(error){
       throw error;
       return false;
    }
   }

   // all post jo active hai
   async getPosts(querys = [Query.equal("status","active")] ) {
    try{
        return await this.databases.listDocuments(
           conf.appwriteDatabaseID,
           conf.appwriteCollectionID,
           querys,
           );
       
    }catch(error){
       throw error;
    }
   }
   
   // file upload file
   async uploadFile(file) {
    try{
        return await this.bucket.createFile(
           conf.appwriteBucketID,
           ID.unique(),
           file
           );
       
    }catch(error){
       console.log("appwrite servise :: upload file me ja ")
       return false;
    }
   }

   // delete file
   async deleteFile(fileID) {
    try{
        return await this.bucket.deleteFile(
           conf.appwriteBucketID,
           fileID
           )
        return true
       
    }catch(error){
       console.log("appwrite servise :: upload file me ja ")
       return false;
    }
   } 

   getFilePreview(fileID){
    return this.bucket.getFilePreview(
        conf.appwriteBucketID,
        fileID
    )
   }
}


const servise = new Servise();

export default servise;
