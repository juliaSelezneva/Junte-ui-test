import { NgModule } from '@angular/core';
import { BreadCrumbTest1Component } from './tests/test.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsTestComponent } from './breadcrumbs-test.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';
import { JunteUiModule } from 'junte-ui';
import { BreadcrumbResolver } from './resolver';
import { BreadCrumbTest2Component } from './tests/test2.component';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import { PrismModule } from '@sgbj/angular-prism';


@NgModule({
  declarations: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JunteUiModule,
    BreadcrumbsRoutingModule,
    PrismModule
  ],
  exports: [
    BreadcrumbsTestComponent,
    BreadCrumbTest1Component,
    BreadCrumbTest2Component
  ],
  providers: [
    BreadcrumbResolver
  ]
})
export class BreadcrumbsModule {
}
