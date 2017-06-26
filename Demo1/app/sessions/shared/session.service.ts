import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BaseService } from "../../core/base.service";
import { Session } from "./session.model";

@Injectable()
export class SessionService extends BaseService<Session>{

    constructor(
        http: Http
    ) { super("sessions", http); }

    public deserialize(obj: any): Session {
        return Session.deserialize(obj);
    }
}