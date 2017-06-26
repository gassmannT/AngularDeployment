import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tt-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number;

    starWidth: number;

    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        // Convert x out of 5 starts to y out of 86px width
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
