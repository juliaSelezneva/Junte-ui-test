import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JunteUiModule } from 'junte-ui';
import { HomeRoutingModule } from './home-routing.module';
import { AppFooterModule } from '../app-footer/app-footer.module';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import { PrismModule } from '@sgbj/angular-prism';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    HomeRoutingModule,
    AppFooterModule,
    PrismModule
  ]
})
export class HomeModule { }
