import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { VisualIdentityComponent } from './visual-identity.component';
import { ColorsComponent } from './colors/colors.component';
import { FontsComponent } from './fonts/fonts.component';

const visualRoute: Route[] = [
  {
    path:       'visual',
    component:  VisualIdentityComponent,
    children:   [
      { path: 'colors', component: ColorsComponent },
      { path: 'fonts',  component: FontsComponent },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(visualRoute)]
})
export class VisualIdentityRoutingModule { }
