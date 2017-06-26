import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SessionDetailComponent } from "./sessions/session-detail/session-detail.component";
import { SessionListComponent } from "./sessions/session-list/session-list.component";

const routes: Routes = [
  { path: "", component: SessionListComponent }, // default
  { path: "edit/:id", component: SessionDetailComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }, // not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
