import { Component, NgZone } from '@angular/core';
import { MdRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'ng-zone-demo',
  templateUrl: 'ng-zone-demo.component.html'
})
export class NgZoneDemoComponent {
  progress: number = 0;
  textColor: string = '#fff';
  lowColor: string = '#FFFF00';
  midColor: string = '#00FF00';
  highColor: string = '#FF0000';
  pointerPath: string = 'm100,96 4,-7 4,-7 4,7 4,7z';
  strkWidth: number = 5;
  border: string = "true";

  constructor(private _ngZone: NgZone) { }

  changeBorder(border) {
    if (this.border === 'false') {
      this.strkWidth = 0;
    } else {
      this.strkWidth = 5;
    }
  }

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress = Math.round(Math.random() * 100);
    console.log(`Current progress: ${this.progress}%`);

    this.pointerPath = this.pointerPath.substring(0, this.pointerPath.indexOf('m') + 1) + this.progress * 1.9 + this.pointerPath.substring(this.pointerPath.indexOf(','), this.pointerPath.length);

    if (this.border === 'false') {
      this.strkWidth = 0;
    } else {
      this.strkWidth = 5;
    }

    if (this.progress < 30) {
      this.textColor = this.lowColor;
    } else if (this.progress > 70) {
      this.textColor = this.highColor;
    } else {
      this.textColor = this.midColor;
    }

    if (this.progress < 101) {
      setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 1000);
    } else {
      doneCallback();
    }
  }

}
