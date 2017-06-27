import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ParticipantListComponent } from './participant-list/participant-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ParticipantListComponent }
    ])
  ],
  declarations: [ParticipantListComponent]
})
export class ParticipantModule { }
