import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  providers: [],
})
export class SharedModule {}
