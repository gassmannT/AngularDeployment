import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Identifiable } from "./identifiable";
import { Serializable } from "./serializable";

export abstract class BaseService<TModel extends Serializable & Identifiable> {
    constructor(
        protected endpointName: string,
        protected http: Http,
    ) { }

    public get(): Observable<TModel[]> {
        return this.http.get(this.getEndpoint(this.endpointName))
            .flatMap((response) => Observable.from(response.json().data || []))
            .map((json) => this.deserialize(json))
            .toArray();
    }

    public getById(id: number): Observable<TModel> {
        return this.http.get(this.getEndpoint(`${this.endpointName}/${id}`))
            .map((response) => response.json().data || {})
            .map((json) => this.deserialize(json));
    }

    public create(model: TModel): Observable<any> {
        return this.http.post(this.getEndpoint(this.endpointName), model.serialize());
    }

    public update(model: TModel): Observable<any> {
        return this.http.put(this.getEndpoint(`${this.endpointName}/${model.id}`), model.serialize());
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(this.getEndpoint(`${this.endpointName}/${id}`));
    }

    public abstract deserialize(obj: any): TModel;

    private getEndpoint(action: string): string {
        if (!action) {
            throw new Error("Parameter action is invalid.");
        }

        return "/api/" + (action[0] === "/" && action.substr(1) || "") + action;
    }
}
