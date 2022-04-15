import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DptComponent } from './dpt/dpt.component';
import { LibComponent } from './lib/lib.component';
import { SptComponent } from './spt/spt.component';

const routes: Routes = [
  { path: "dpt", component: DptComponent },
  { path: 'library', component: LibComponent },
  { path: 'sport', component: SptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
