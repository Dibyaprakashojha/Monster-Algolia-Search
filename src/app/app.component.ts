import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GlobalConfig as config } from 'src/config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedInuser = '';
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    // if(environment.environment !== "local" && window) {
    //   config.setConfig(window["envConfig"]);
    // } else {
    //   config.setConfig(environment);
    // }

    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params['userId']);
      this.loggedInuser = params['userId'];
      console.log(`logged`, this.loggedInuser);
    });
    if (this.loggedInuser == 'ben') {
      this.router.navigateByUrl('/?userId=ben');
    } else if (this.loggedInuser == 'juan') {
      this.router.navigateByUrl('/?userId=juan');
    }
  }
}
