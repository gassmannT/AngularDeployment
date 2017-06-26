import { Session } from './session.model';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from "@angular/http";

import { SessionService } from './session.service';

describe("SessionService", () => {
    let sessionService: SessionService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [SessionService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    beforeEach(() => {
        sessionService = TestBed.get(SessionService);
        mockBackend = TestBed.get(XHRBackend);
    });

    it("getById should return an instance of Session", async(() => {
        mockBackend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toMatch(/\/api\/sessions\/42$/);

            c.mockRespond(new Response(new ResponseOptions({
                body: {
                    data: { id: 42, title: "SessionTitle", room: "Zürich", rating: 4 }
                }
            })));
        });

        sessionService.getById(42).subscribe(session => {
            mockBackend.verifyNoPendingRequests();
            expect(session instanceof Session).toBeTruthy();
            expect(session.title).toBe("SessionTitle");
        });
    }));

    it("get should return instances of Session", async(() => {
        mockBackend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toMatch(/\/api\/sessions$/);

            c.mockRespond(new Response(new ResponseOptions({
                body: {
                    data: [
                        { id: 42, title: "SessionTitle", room: "Zürich", rating: 4 }
                    ]
                }
            })));
        });

        sessionService.get().subscribe(sessions => {
            mockBackend.verifyNoPendingRequests();
            expect(sessions[0] instanceof Session).toBeTruthy();
            expect(sessions[0].title).toBe("SessionTitle");
        });
    }));

});