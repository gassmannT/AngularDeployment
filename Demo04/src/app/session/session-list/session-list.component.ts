import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Meta, Title } from "@angular/platform-browser";
import { Session } from "../shared/session.model";
import { SessionService } from "../shared/session.service";

@Component({
    styleUrls: ["session-list.component.css"],
    templateUrl: "session-list.component.html",
})
export class SessionListComponent implements OnInit {
    pageTitle: string;
    list: Observable<Session[]>;

    constructor(
        private sessionService: SessionService,
        private router: Router,
        private title: Title,
        private meta: Meta,
    ) { }

    ngOnInit() {
        this.pageTitle = "Sessions";

        // new in Angular 4 for SEO
        this.title.setTitle(`TechEvent - ${this.pageTitle}`);
        this.meta.addTag({
            name: "Description",
            content: `TechEvent - ${this.pageTitle}`,
        });

        // Angular 4 style:
        this.list = this.sessionService.get();
        // Angular 2 style:
        // this.sessionService.get().subscribe(list => {
        //     this.list = list;
        // })
    }

}
