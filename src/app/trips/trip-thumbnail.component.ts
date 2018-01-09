import { Component, Input } from '@angular/core'

@Component({
  selector: 'trip-thumbnail',
  templateUrl: './trip-thumbnail.component.html',
  styleUrls: ['./trip-thumbnail.component.css']
})
export class TripThumbnailComponent {
  
  @Input() trip:any;

  handleClickMe() {
    console.log('clicked!');
  }

}