import {Component, OnInit} from '@angular/core';
import {ResidentialService} from "../residential.service";
import {IResidential} from "../residential";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-residential-list',
  templateUrl: './residential-list.component.html',
  styles: []
})
export class ResidentialListComponent implements OnInit {

  public residentials: IResidential[];

  constructor(private _residentialService: ResidentialService,
              private sanitizer: DomSanitizer,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._residentialService.getResidential()
      .subscribe(
        data => this.residentials = data,
        err => console.log(err)
      );
  }

  photoSecurity(url: string) {
    // console.log(url);
    // console.log(this.sanitizer.bypassSecurityTrustStyle(`url(http://bgnsk.ru/upload/` + url + `)`));
    return this.sanitizer.bypassSecurityTrustStyle(`url(http://bgnsk.ru/upload/` + url + `)`);
  }

  onSelect(residential: IResidential) {
    // this.router.navigate(['/residential', residential.id]);
    this.router.navigate([residential.id], {relativeTo: this.route});
  }
}
