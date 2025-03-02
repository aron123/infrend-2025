import { Component, Input } from '@angular/core';
import { ChangelogEntry } from '../models';

@Component({
  selector: 'app-changelog',
  imports: [],
  templateUrl: './changelog.component.html',
  styleUrl: './changelog.component.css'
})
export class ChangelogComponent {

  @Input()
  changes: ChangelogEntry[] = [];

}
