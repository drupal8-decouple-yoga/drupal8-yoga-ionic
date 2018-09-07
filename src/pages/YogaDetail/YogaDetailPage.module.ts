import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { filter } from 'rxjs/operators';
import { YogaDetailPage } from './YogaDetailPage';
import { MapToIterable } from './map-to-iterable';
import  _ from 'underscore';
@NgModule({
  declarations: [
    YogaDetailPage,
    MapToIterable
  ],
  imports: [
    IonicPageModule.forChild(YogaDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    YogaDetailPage
  ]
})
export class YogaDetailPageModule { }
