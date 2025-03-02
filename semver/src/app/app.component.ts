import { Component } from '@angular/core';
import { ChangelogEntry, VersionNumber, VersionType } from './models';
import { ControlComponent } from "./control/control.component";
import { ChangelogComponent } from './changelog/changelog.component';

@Component({
  selector: 'app-root',
  imports: [ControlComponent, ChangelogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  version: VersionNumber = {
    major: 0,
    minor: 0,
    patch: 1
  };

  changelog: ChangelogEntry[] = [];

  incrementVersion(versionType: VersionType) {
    if (versionType == 'major') {
      this.version.major++;
      this.version.minor = 0;
      this.version.patch = 0;

      this.changelog.unshift({
        type: versionType,
        oldValue: this.version.major - 1,
        newValue: this.version.major
      });
    } else if (versionType == 'minor') {
      this.version.minor++;
      this.version.patch = 0;

      this.changelog.unshift({
        type: versionType,
        oldValue: this.version.minor - 1,
        newValue: this.version.minor
      });
    } else {
      this.version.patch++;

      this.changelog.unshift({
        type: versionType,
        oldValue: this.version.patch - 1,
        newValue: this.version.patch
      });
    }
  }

}
