import { Component } from '@angular/core';
import { User } from './model/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message ;
  user: User = new User();
constructor(private userService : UserService){

}
add()
{

  this.userService.addUser(this.user).subscribe(data=>{this.message = "user ajouter avec succes"});
}
}
