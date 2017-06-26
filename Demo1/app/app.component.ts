import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public pageTitle: string;

    constructor() { }

    ngOnInit() {
        this.pageTitle = "Session rating app";
        
    }
}
