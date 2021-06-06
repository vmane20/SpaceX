import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent {
  @Input("launch") data:any;
  constructor() { }

}
