import { NgModule } from '@angular/core';
import { BazComponent } from './baz.component';
import { DenverhjsCoreModule } from '@denverhjs/core';

@NgModule({
  declarations: [BazComponent],
  imports: [
    DenverhjsCoreModule
  ],
  exports: [BazComponent]
})
export class BazModule { }
