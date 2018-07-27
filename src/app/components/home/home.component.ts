import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  renderUsers;
  nickname: string; /*name that entered in the form*/
  foundUser: any;
  //status variables
  status: boolean = false;
  statusFound: boolean = false;

  constructor(
    public gitHub: GithubService
  ) { }

  ngOnInit() {

    this.gitHub.getUsers().subscribe(users => {
      this.renderUsers = users;
    }, error => {
      console.log(error);
    });

  }

  //User search form
  onSearch(form){
    this.gitHub.searchUser(this.nickname).subscribe(user=>{
      this.foundUser = user;
      /*error check*/
      if(this.foundUser.items.length === 0){
        this.status = true;
        setTimeout( ()=>{
          this.status = false;
        }, 3000 );
        form.resetForm();
      } else {
        this.status = false;
        this.statusFound = true;

        setTimeout( ()=>{
          this.statusFound = false;
        }, 3000 );

        this.foundUser = user;
        this.renderUsers.unshift(this.foundUser.items[0]);
        form.resetForm();
      }

    }, error =>{
      console.log(error);
    })
  };

  // Save the user for transfer to rotes
  getInfo(user){
    this.gitHub.saveUser(user);
  }

}
