import { Injectable } from '@angular/core';

@Injectable();
export class DataService{
   users:string[];
   constructor(){
     this.users = ['米斯特务','Ac总有一天']
   }

   getUser(){
     return this.users;
   }
}