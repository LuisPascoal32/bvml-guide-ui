import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.html',
  styleUrls: ['./plate.scss']
})
export class PlateComponent {
  @Input() topValue: string = "129";
  @Input() bottomValue: string = "1203";
}
