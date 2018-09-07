import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
 benifits: any;
 uuid: any;
  constructor(public navCtrl: NavController, public http: Http) {
  this.http.get('https://dev-d8one-yoga-hub.pantheonsite.io/jsonapi/node/yoga_asana/?fields[node--yoga_asana]=nid,uuid,langcode,title,path,field_asana_name,field_asana_sanskrit_name,field_asana_meaning,field_asana_biopic&include=field_asana_biopic&fields[file--file]=fid,uuid,meta,filename,url').map(res => res.json()).subscribe(data => {
        this.posts = data.data;
  //console.log(this.posts);
   });
      }
gotoDetail(event) {
  this.uuid = event.currentTarget.id; 
  console.log(this.uuid );
  // $('.card-content').click(function(){
  //   uuid = $(this).children('.uui.hidden').text();
  //   alert(uuid);
  // });
  this.navCtrl.push('YogaDetailPage', {itrediecturlem: this.uuid}, {
       animate: true,
     direction: 'forward'
   });
  }

}
 
  