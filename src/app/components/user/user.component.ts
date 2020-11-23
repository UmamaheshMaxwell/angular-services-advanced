import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUsers(){
    console.log(this)
    this.userService.getUsers().subscribe(response =>{
      console.log(this)
        this.users = response
    })
  }

  // getUsers(){
  //   var self = this;
  //   this.userService.getUsers().subscribe(function(response) {
  //       console.log(self)
  //       console.log(response)
  //       self.users = response
  //   })
  // }
}
