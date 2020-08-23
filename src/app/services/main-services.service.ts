import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Socket } from "ngx-socket-io";
import { HttpClient } from "@angular/common/http";
import {
  AdminGuard,
  RegisterGuard,
  SchoolGuard,
  HumanResorcesGuard,
  SupervisionGuard,
  TeachersGuard,
} from "./Main.guard";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root",
})
export class MainServicesService {
  socketStatus;
  url = environment.wsUrl;
  oks: boolean;
  roonAndName: any = {};
  constructor(
    private socket: Socket,
    private http: HttpClient,
    private adminGard: AdminGuard,
    private schoolG: SchoolGuard,
    private hresurces: HumanResorcesGuard,
    private sVisionG: SupervisionGuard,
    private teacherG: TeachersGuard,
    private router: Router
  ) {
    this.checkStatus();
  }

  // tslint:disable-next-line: typedef
  checkStatus() {
    this.socket.on("connect", () => {
      console.log("Conectado al servidor");
      this.socketStatus = true;
    });
    this.socket.on("disconnect", () => {
      console.log("Desconectado del servidor");
      this.socketStatus = false;
    });
  }

  postLogin(email: string, password: string) {
    try {
      return this.http.post<any>(
        `${this.url}/login?email=${email}&password=${password}`,
        { email, password },
        {
          params: {
            email,
            password,
          },
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
  getTokenRoleRoom(TaRR: object) {
    console.log("TaRR", TaRR);
    this.oks = TaRR["ok"];
    switch (TaRR["role"]) {
      case "ADMIN_ROLE":
        this.adminGard.Auth(this.oks);
        return this.router.navigateByUrl("/admin");
        break;

      case "HHRR_ROLE":
        this.hresurces.Auth(this.oks);
        return this.router.navigateByUrl("/hhrr");
        break;

      case "SVISION_ROLE":
        this.sVisionG.Auth(this.oks);
        return this.router.navigateByUrl("/svision");
        break;

      case "TEACHER_ROLE":
        this.teacherG.Auth(this.oks);
        this.getNameAndRoom(TaRR["name"], TaRR["room"]);
        return this.router.navigateByUrl("/teacher");
        break;

      case "USER_ROLE":
        this.schoolG.Auth(this.oks);
        this.getNameAndRoom(TaRR["name"], TaRR["room"]);
        return this.router.navigateByUrl("/school");
        break;

      default:
        return this.router.navigateByUrl("/home");
    }
  }
  getNameAndRoom(name: string, room: string) {
    Object.defineProperties(this.roonAndName, {
      name: {
        value: name,
        writable: false,
        enumerable: true,
      },
      room: {
        value: room,
        writable: false,
        enumerable: true,
      },
    });
  }
  logOut() {
    this.oks;
    this.roonAndName = {};
    this.adminGard.Auth(false);
    this.hresurces.Auth(false);
    this.sVisionG.Auth(false);
    this.teacherG.Auth(false);
    this.schoolG.Auth(false);
  }
}