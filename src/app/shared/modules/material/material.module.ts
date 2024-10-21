import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
