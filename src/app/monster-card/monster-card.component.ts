import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  skittles,
  pedigree,
  rc,
  maltesers,
  cesar,
  twix,
  mars,
} from 'src/assets/imageUrl';
import { MonsterModalComponent } from '../monster-modal/monster-modal.component';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
})
export class MonsterCardComponent implements OnInit {
  @Input() hit: any;
  imageLink: string = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.imageLink = this.hit['Delivery Service Url'];
    // this.brandFilter(this.hit['Brand'], this.hit['Asset Name']);
  }

  openDialog() {
    this.dialog.open(MonsterModalComponent, {
      width: '700px',
      height: 'auto',
      data: {
        hit: this.hit,
        image: this.hit['Delivery Service Url'],
      },
    });
    ('Delivery Service Url');
  }

  // brandFilter = (brandName: string, assetName: string) => {
  // if (brandName.toLocaleLowerCase() === 'skittles') {
  //   this.imageLink = skittles[Math.floor(Math.random() * skittles.length)];
  // } else if (
  //   brandName.toLocaleLowerCase() === 'twix' &&
  //   assetName.toLocaleLowerCase().includes('twix2')
  // ) {
  //   this.imageLink = 'assets/mars-hd-images/twix2.jpeg';
  // } else if (
  //   brandName.toLocaleLowerCase() === 'pedigree' &&
  //   assetName.toLocaleLowerCase().includes('pedigree')
  // ) {
  //   this.imageLink = 'assets/mars-hd-images/pedigree-logo.png';
  // } else if (brandName.toLocaleLowerCase() === 'pedigree') {
  //   this.imageLink = pedigree[Math.floor(Math.random() * pedigree.length)];
  // } else if (brandName.toLocaleLowerCase() === 'royal canin') {
  //   this.imageLink = rc[Math.floor(Math.random() * rc.length)];
  // } else if (brandName.toLocaleLowerCase() === 'maltesers') {
  //   this.imageLink = maltesers[Math.floor(Math.random() * maltesers.length)];
  // } else if (brandName.toLocaleLowerCase() === 'cesar') {
  //   this.imageLink = cesar[Math.floor(Math.random() * cesar.length)];
  // } else if (brandName.toLocaleLowerCase() === 'twix') {
  //   this.imageLink = twix[Math.floor(Math.random() * twix.length)];
  // } else {
  //   this.imageLink = mars;
  // }
  // };
}
