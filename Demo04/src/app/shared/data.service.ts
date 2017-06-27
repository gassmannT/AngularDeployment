import { InMemoryDbService } from "angular-in-memory-web-api";
import { Session } from "../session/shared/session.model";

export class DataService implements InMemoryDbService {
    createDb() {
        const sessions: Session[] = [
            new Session(1, "Testing mit Angular", "Frankfurt", 4),
            new Session(2, "The ultimate Angular workshop", "Regensdorf", 5),
            new Session(3, "Deployment von Angular Applikationen", "Nürnberg", 4),
            new Session(4, "Basics in Xamarin", "Glattbrugg", 3, "too easy"),
        ];
        return { sessions };
    }
}
