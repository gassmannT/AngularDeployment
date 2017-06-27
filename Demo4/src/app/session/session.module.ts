import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SessionDetailComponent } from '../session/session-detail/session-detail.component';
import { SessionListComponent } from '../session/session-list/session-list.component';
import { SessionService } from '../session/shared/session.service';
import { DataService } from '../shared/data.service';
import { StarComponent } from '../shared/star.component';
import { TruncatePipe } from '../shared/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: SessionListComponent }, // default
      { path: "edit/:id", component: SessionDetailComponent },
    ]),
    InMemoryWebApiModule.forRoot(DataService, { delay: 250 })
  ],
  declarations: [
    StarComponent,
    SessionListComponent,
    SessionDetailComponent,
    TruncatePipe
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
