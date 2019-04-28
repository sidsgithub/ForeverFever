import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // users: Array<any>;
  // user: any = {};
  sub : Subscription;
  user:any={
    email:"",
    password:""
  }

  constructor(private userService : UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.get(id).subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.user.href = user._links.self.href;
          } else {
            console.log(`user with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
    // this.userService.getAll().subscribe(data => {
    //   this.users = data;
    // });
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }

  save(form: NgForm) {
    this.userService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href: string) {
    this.userService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}