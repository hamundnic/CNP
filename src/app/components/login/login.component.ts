import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MainServicesService } from "../../services/main-services.service";
import { Login } from "../register/register.inteface";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: Login = {
    email: "",
    password: "",
  };
  constructor(
    public mainService: MainServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
  }
  login(forma: NgForm) {
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAllAsTouched();
      });
      return;
    } else {
      let login = forma.value;
      let email = login['email'].replace(/(^"|"$)/g, "");
      let password = login['password'].replace(/(^"|"$)/g, "");
      const postLogin = this.mainService.postLogin(email, password).pipe(
        map((x) => {
          // Map operator tranforming the data into a object
          const logIn = {};
          Object.defineProperties(logIn, {
            token: {
              value: x["token"],
              writable: false,
            },
            role: {
              value: x["user"]["role"],
              writable: false,
            },
            ok: {
              value: x["ok"],
              writable: false,
            },
            date: {
              value: new Date().getTime(),
              writable: false,
            },
            name: {
              value: x["user"]["firstname"] + " " + x["user"]["lastname"],
              writable: false,
            },
          });

          if (
            logIn["role"] === "USER_ROLE" ||
            logIn["role"] === "TEACHER_ROLE"
          ) {
            Object.defineProperty(logIn, "room", {
              value: x["user"]["grade"] + "-" + x["user"]["roomLetter"],
              writable: false,
              enumerable: true,
              configurable: false,
            });
          }
          return logIn;
        })
      );

      postLogin.subscribe((user) => this.mainService.getTokenRoleRoom(user));
    }
  }
  
}
