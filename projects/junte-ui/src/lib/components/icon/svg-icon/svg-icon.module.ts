import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconComponent } from 'projects/junte-ui/src/lib/components/icon/svg-icon/svg-icon.component';
import { CacheService } from 'projects/junte-ui/src/lib/services';

@NgModule({
  declarations: [
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent
  ],
  providers: [
    CacheService
  ]
})
export class SvgIconModule {
}
