import { NgModule } from '@angular/core';
import { JunteUiComponent } from './junte-ui.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from './components/app-layout/app-layout.module';
import { AvatarModule } from './components/avatar/avatar.module';
import { BadgeModule } from './components/badge/badge.module';
import { BlockModule } from './components/block/block.module';
import { CircleBarModule } from './components/circle-bar/circle-bar.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { ButtonModule } from './components/button/button.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { CardModule } from './components/card/card.module';
import { FormModule } from './components/form/form.module';
import { GridModule } from './components/grid/grid.module';
import { IconModule } from './components/icon/icon.module';
import { MenuModule } from './components/menu/menu.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { StackModule } from './components/stack/stack.module';
import { TableModule } from './components/table/table.module';
import { TabsModule } from './components/tabs/tabs.module';
import { DatePipeModule } from './pipes/date-pipe.module';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { JunteDirectiveModule } from './directives/junte-directive.module';
import { InputModule } from './components/input/input.module';
import { SelectModule } from './components/select/select.module';
import { CheckboxModule } from './components/form/checkbox/checkbox.module';
import { LabelModule } from './components/label/label.module';
import { LinkModule } from './components/link/link.module';
import { RadioModule } from './components/form/radio/radio.module';
import { SwitchModule } from './components/form/switch/switch.module';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { PopoverModule } from './components/popover/popover.module';

@NgModule({
  declarations: [
    JunteUiComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppLayoutModule,
    AnimationPipeModule,
    AvatarModule,
    BadgeModule,
    BlockModule,
    BreadcrumbsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    CircleBarModule,
    DropdownModule,
    DatePipeModule,
    FormModule,
    GridModule,
    JunteDirectiveModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    MenuModule,
    PaginationModule,
    RadioModule,
    SelectModule,
    SkeletonModule,
    SpinnerModule,
    StackModule,
    SwitchModule,
    TableModule,
    TabsModule,
    PopoverModule
  ]
})
export class JunteUiModule {
}
