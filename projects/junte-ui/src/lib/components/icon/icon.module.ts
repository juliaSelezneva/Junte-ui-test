import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from 'projects/junte-ui/src/lib/components/icon/svg-icon';
import { AnimatedIconModule } from './animated-icon/animated-icon.module';
import { FontIconModule } from './font-icon/font-icon.module';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [
    CommonModule,
    FontIconModule,
    AnimatedIconModule,
    SvgIconModule
  ],
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}
