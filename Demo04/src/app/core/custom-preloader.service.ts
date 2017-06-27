import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomPreloader implements PreloadingStrategy {
    preload(route: Route, fn: Function): Observable<any> {
        if (route.data && route.data["preload"]) {
            return fn();
        }

        return Observable.of(null);
    }
}
