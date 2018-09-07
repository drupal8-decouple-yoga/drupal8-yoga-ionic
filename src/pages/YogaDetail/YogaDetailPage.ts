import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform, NavParams  } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'Yoga-page-home',
  templateUrl: 'YogaDetailPage.html'
})
export class YogaDetailPage {
objectKeys = Object.keys;
  details: any;
 benifits: any[]= [];
 step: any;
  keys: String[];
  steps: any[] = [];
stepdes: any[] = [];
asna_image: any[] = [];
stepsdata: any;
stepsdata1: any;
stepsdata2: any;
stepsdata3: any;
 result;
 result1;
 result3: any[] = [];
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
 this.result1 = navParams.get('itrediecturlem');
// console.log(this.result1);   
  this.http.get('https://dev-d8one-yoga-hub.pantheonsite.io/jsonapi/node/yoga_asana/'+this.result1+'?include=field_asana_benefits_tags,field_asana_difficulty,field_asana_steps,field_asana_biopic&fields[taxonomy_term--asana_benefits]=uuid,tid,name,path&fields[taxonomy_term--asana_difficulty_level]=uuid,tid,name,path&fields[paragraph--asana_steps]=uuid,id,field_asana_step_number,field_asana_step_instruction,field_asana_image&fields[file--file]=fid,uuid,meta,filename,url').map(res => res.json()).subscribe(data => {
       //this.http.get('https://dev-d8one-yoga-hub.pantheonsite.io/jsonapi/node/yoga_asana/2c00dbe4-c3df-416e-86e0-16010f841621?include=field_asana_benefits_tags,field_asana_difficulty,field_asana_steps,field_asana_biopic&fields[taxonomy_term--asana_benefits]=uuid,tid,name,path&fields[taxonomy_term--asana_difficulty_level]=uuid,tid,name,path&fields[paragraph--asana_steps]=uuid,id,field_asana_step_number,field_asana_step_instruction,field_asana_image&fields[file--file]=fid,uuid,meta,filename,url').map(res => res.json()).subscribe(data => {
        this.details = data.data.attributes;
        let asana_imag = data.data.relationships;
        this.asna_image.push(asana_imag);
        //console.log(this.asna_image);
        this.benifits.push(this.details);
//console.log(this.benifits);
        this.step = data.included;
        // let desc= data.included;
        // this.stepdes.push(desc);
       // this.steps.push(this.step);
      // console.log(this.step);

let steps1 = this.step.filter(function(item){
   return (item.type == "paragraph--asana_steps");
 });
 this.stepsdata= _.pluck(steps1,'attributes');
 //console.log(steps1);
 steps1.forEach(element => {
  console.log(element);
   let asnastep=[];
   asnastep['0'] = element.attributes.field_asana_step_number;
   asnastep['1'] = element.attributes.field_asana_step_instruction.value;
  asnastep['2'] = '';
   //console.log(asnastep['2'].data);
   if(element.relationships.field_asana_image.data!=null){
    this.http.get("https://dev-d8one-yoga-hub.pantheonsite.io/jsonapi/file/file/"+ element.relationships.field_asana_image.data.id +'').map(res => res.json()).subscribe(data => {
  let result =data.data.attributes.url;
  asnastep['2'] = "https://dev-d8one-yoga-hub.pantheonsite.io/"+result;
   });
      }
   this.result3.push(asnastep);
 }); 
 console.log(this.result3);



let steps2 = this.step.filter(function(item){
  return (item.type == "taxonomy_term--asana_benefits");
});
this.stepsdata1= _.pluck(steps2,'attributes');


let steps3 = this.step.filter(function(item){
  return (item.type == "taxonomy_term--asana_difficulty_level");
});
this.stepsdata2= _.pluck(steps3,'attributes');


let steps4 = this.step.filter(function(item){
  return (item.type == "file--file");
});
this.stepsdata3= _.pluck(steps4,'attributes');
console.log(this.stepsdata2);
   });
 
 let av ='25615485-c6e3-48ad-b1fb-d1da787e987a';
 this.http.get("https://dev-d8one-yoga-hub.pantheonsite.io/jsonapi/file/file/"+av+'').map(res => res.json()).subscribe(data => {
let result =data.data.attributes;
//console.log(result);
  });

      }

}
 
  