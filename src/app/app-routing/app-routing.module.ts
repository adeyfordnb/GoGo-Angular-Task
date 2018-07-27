import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Component
import { RotesComponent } from "../components/rotes/rotes.component";
import { HomeComponent } from "../components/home/home.component";

const routes: Routes = [
  { path: 'rotes/:login', component: RotesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
