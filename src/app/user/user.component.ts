import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sub: any;
  user;

  constructor(private hackerNewsApiService: HackerNewsApiService,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let userID = params['id'];
        this.hackerNewsApiService.fetchUser(userID).subscribe(data => {
          this.user = data;
        }, error => console.log('could not load user'));
    });
  }
  goBack(){
    this.location.back();
  }

}
