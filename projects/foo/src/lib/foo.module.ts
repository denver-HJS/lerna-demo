import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import { DenverhjsCoreModule } from '@denverhjs/core';

@NgModule({
  declarations: [FooComponent],
  imports: [
    DenverhjsCoreModule
  ],
  exports: [FooComponent]
})
export class FooModule { }
