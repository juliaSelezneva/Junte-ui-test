import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TESTS_ROUTES } from 'components/tests.routes';
import { InputTestComponent } from './input/input-test.component';
import { TestsComponent } from 'components/tests.component';
import { ButtonsTestComponent } from 'components/buttons/buttons-test.component';
import { GridTestComponent } from 'components/grid/grid-test.component';
import { StackTestComponent } from 'components/stack/stack-test.component';
import { BlocksTestComponent } from 'components/blocks/blocks-test.component';
import { SpinnerTestComponent } from 'components/spinner/spinner-test.component';
import { PagerTestComponent } from 'components/pager/pager-test.component';
import { CheckboxTestComponent } from 'components/checkbox/checkbox-test.component';
import { SwitchTestComponent } from 'components/switch/switch-test.component';
import { RadioTestComponent } from 'components/radio/radio-test.component';
import { SelectTestComponent } from 'components/select/select-test.component';
import { FormTestComponent } from './form/form-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { AppLayoutTestComponent } from './app-layout/app-layout-test.component';
import { TableTestComponent } from './table/table-test.component';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { LinkTestComponent } from './link/link-test.component';
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { LabelTestComponent } from './label/label-test.component';
import { SkeletonTestComponent } from './skeleton/skeleton-test.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TESTS_ROUTES),
    JunteUiModule,
    PrismModule
  ],
  declarations: [
    TestsComponent,
    PagerTestComponent,
    ButtonsTestComponent,
    GridTestComponent,
    StackTestComponent,
    InputTestComponent,
    BlocksTestComponent,
    SpinnerTestComponent,
    CheckboxTestComponent,
    RadioTestComponent,
    SwitchTestComponent,
    FormTestComponent,
    IconTestComponent,
    SwitchTestComponent,
    SelectTestComponent,
    BadgeTestComponent,
    AppLayoutTestComponent,
    TableTestComponent,
    AvatarTestComponent,
    TableTestComponent,
    TableTestComponent,
    LinkTestComponent,
    CalendarTestComponent,
    LabelTestComponent,
    SkeletonTestComponent
  ]
})
export class TestsModule {
}
