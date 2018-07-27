import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.css']
})
export class RotesComponent implements OnInit {

  infoUser: any;
  repos: any;
  modalRepos: any;

  constructor(
    public gitHub: GithubService
  ) { }

  ngOnInit() {
    //Getting the saved user
    this.infoUser = this.gitHub.getUser();
    //We get the repositories of this user
    this.gitHub.getRepos(this.infoUser.repos_url).subscribe( repos=>{
      this.repos = repos;
    });
  };

  modalSave(repos){
    this.modalRepos = repos;
  }

}
