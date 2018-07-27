import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  savedUser: any;

  constructor(
    public http: HttpClient
  ) {}

  //Get users when downloading the page
  getUsers(){
    return this.http.get('https://api.github.com/users');
  }

  //Searching user
  searchUser(userName){
    return this.http.get(`https://api.github.com/search/users?q=${userName}`);
  }

  //Save user for repos
  saveUser(user){
    this.savedUser = user;
  }

  //Return saved user
  getUser(){
    return this.savedUser;
  }

  //Get the repositories of the saved user
  getRepos(url){
    return this.http.get(`${url}`);
  }

}
