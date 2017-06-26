import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

import { Session } from "../shared/session.model";
import { SessionService } from "../shared/session.service";


@Component({
    moduleId: module.id,
    templateUrl: 'session-detail.component.html'
})
export class SessionDetailComponent implements OnInit, OnDestroy {
    session: Session;
    private sub: Subscription;

    constructor(
        private sessionService: SessionService,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
        private meta: Meta
    ) { }

    ngOnInit() {
        //new in Angular 4 for SEO
        this.title.setTitle(`TechEvent - Details`);
        this.meta.addTag({
            name: "Description",
            content: `Rate this session`
        });

        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.sessionService.getById(id).subscribe(s => this.session = s);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSave({ valid }: { valid: boolean }, ) { //Example of object destructuring
        if (valid) {
            this.sessionService.update(this.session).subscribe(() => {
                this.router.navigate(['/'])
            });
        }
    }

    onBack() {
        this.router.navigate(['/'])
    }
}