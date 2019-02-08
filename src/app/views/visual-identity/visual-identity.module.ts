import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualIdentityComponent } from './visual-identity.component';
import { VisualIdentityRoutingModule } from './visual-identity-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { FontsComponent } from './fonts/fonts.component';

@NgModule({
  imports: [
    CommonModule,
    VisualIdentityRoutingModule
  ],
  declarations: [
    VisualIdentityComponent,
    ColorsComponent,
    FontsComponent,
  ],
})
export class VisualIdentityModule { }
