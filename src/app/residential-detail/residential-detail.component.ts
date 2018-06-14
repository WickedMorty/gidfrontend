import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-residential-detail',
  templateUrl: './residential-detail.component.html',
  styles: []
})
export class ResidentialDetailComponent implements OnInit {

  public residentialId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.residentialId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.residentialId = id;
    })
  }

}
