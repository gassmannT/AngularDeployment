import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "participants", loadChildren: "app/participant/participant.module#ParticipantModule" },
  { path: "sessions", loadChildren: "app/session/session.module#SessionModule" },

  { path: "", redirectTo: "/sessions", pathMatch: "full" }, // default
  { path: "**", redirectTo: "/sessions", pathMatch: "full" }, // not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
