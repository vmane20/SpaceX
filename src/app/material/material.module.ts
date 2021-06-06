import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const MaterialComponents = [
  MatProgressBarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
