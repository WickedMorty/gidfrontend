import {Component, OnInit, ViewChild} from '@angular/core';
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
  public quickSearchParam = [];

  @ViewChild('phone') inputText;
  private oldInput = "";

  constructor(private _residentialService: ResidentialService,
              private sanitizer: DomSanitizer,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    $('.multipleInputDynamicWithInitialValue').fastselect();
    this._residentialService.getResidential()
      .subscribe(
        data => this.residentials = data,
        err => console.log(err)
      );
    setInterval(()=>{this.onChangeSearch();}, 3000);
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

  onChangeSearch() {
    let data = this.inputText.nativeElement;
    if(this.oldInput !== data.value) {
      this.oldInput = data.value;

      this.quickSearchParam.splice(0, this.quickSearchParam.length);

      for(let item of data.value.split(",")) {
        let jitem = {};
        jitem["value"] = item;
        this.quickSearchParam.push(jitem);
      }

      this._residentialService.getResidentialBySearch(this.quickSearchParam)
        .subscribe(
          data => this.residentials = data,
          err => console.log(err)
        );

    }
  }


}
