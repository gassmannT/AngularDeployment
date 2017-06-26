import { TruncatePipe } from './shared/truncate.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionService } from './sessions/shared/session.service';
import { DataService } from './shared/data.service';
import { StarComponent } from './shared/star.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService, { delay: 250 })
  ],
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionDetailComponent,
    StarComponent,
    TruncatePipe
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
