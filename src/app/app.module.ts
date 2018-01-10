import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TripsAppComponent } from './trips-app.component';
import { TripsListComponent } from './trips/trips-list.component';
import { TripThumbnailComponent } from './trips/trip-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    TripsAppComponent,
    TripsListComponent,
    TripThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [TripsAppComponent]
})
export class AppModule { }
