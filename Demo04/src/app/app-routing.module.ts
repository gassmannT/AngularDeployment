import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CustomPreloader } from './core/custom-preloader.service';

const routes: Routes = [
  { path: "participants", data: { preload: true }, loadChildren: "app/participant/participant.module#ParticipantModule" },
  { path: "sessions", loadChildren: "app/session/session.module#SessionModule" },

  { path: "", redirectTo: "/sessions", pathMatch: "full" }, // default
  { path: "**", redirectTo: "/sessions", pathMatch: "full" }, // not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloader })],
  exports: [RouterModule],
  providers: [CustomPreloader]
})
export class AppRoutingModule { }
