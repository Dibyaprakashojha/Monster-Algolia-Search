import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mars-modal',
  templateUrl: './mars-modal.component.html',
  styleUrls: ['./mars-modal.component.scss'],
})
export class MarsModalComponent {
  hitData: any;
  imageLink!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(`data`, this.data);
    this.hitData = this.data.hit;
    console.log(`hit data`, this.hitData);
    console.log('image data', this.data.image);
    this.imageLink = this.data.image;
  }
}
