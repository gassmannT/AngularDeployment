import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Session } from "../shared/session.model";
import { SessionService } from "../shared/session.service";

@Component({
    templateUrl: "session-detail.component.html",
})
export class SessionDetailComponent implements OnInit, OnDestroy {
    session: Session;
    private sub: Subscription;

    constructor(
        private sessionService: SessionService,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
        private meta: Meta,
    ) { }

    ngOnInit() {
        // new in Angular 4 for SEO
        this.title.setTitle(`TechEvent - Details`);
        this.meta.addTag({
            name: "Description",
            content: `Rate this session`,
        });

        this.sub = this.route.params.subscribe((params) => {
            const id = +params.id;
            this.sessionService.getById(id).subscribe((s) => this.session = s);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSave({ valid }: { valid: boolean } ) { // Example of object destructuring
        if (valid) {
            this.sessionService.update(this.session).subscribe(() => {
                this.router.navigate(["/"]);
            });
        }
    }

    onBack() {
        this.router.navigate(["/"]);
    }
}
