import { Component, OnInit, NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { User } from "./user.model"

@Component({
    selector: "auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    username;
    password;
    isLoggingIn = true;

    constructor(private authService: AuthService) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        console.log(this.username + this.password);
    }

    register() {
      const user = new User(this.username, this.password);
      this.authService.register(user)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }
}
