import { Component, OnInit, NgModule } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: "auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    email;
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
        console.log(this.email + this.password);
    }

    register() {
        this.authService.registerUser(this.email, this.password)
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
