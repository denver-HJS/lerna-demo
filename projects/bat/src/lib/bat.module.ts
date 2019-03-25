import { NgModule } from '@angular/core';
import { BatComponent } from './bat.component';
import { DenverhjsCoreModule } from '@denverhjs/core';

@NgModule({
  declarations: [BatComponent],
  imports: [
    DenverhjsCoreModule
  ],
  exports: [BatComponent]
})
export class BatModule { }
