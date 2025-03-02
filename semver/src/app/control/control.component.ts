import { Component, EventEmitter, Output } from '@angular/core';
import { VersionType } from '../models';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  
  @Output()
  versionChanged = new EventEmitter<VersionType>();

}
