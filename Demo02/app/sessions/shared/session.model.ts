import { Identifiable } from "../../core/identifiable";
import { Serializable } from "../../core/serializable";

export class Session implements Serializable, Identifiable {

    constructor(
        public id: number,
        public title: string,
        public city: string,
        public rating?: number,
        public reason?: string,
    ) { }

    public serialize(): object {
        return {
            id: this.id,
            title: this.title,
            city: this.city,
            rating: this.rating,
            reason: this.reason,
        };
    }

    public static deserialize(obj: any): Session {
        return new Session(obj.id,
            obj.title,
            obj.city,
            obj.rating,
            obj.reason);
    }
}
