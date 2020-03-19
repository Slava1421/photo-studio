import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/modules/home-page/components/home-page/home-page.component';
import { GalleryPageComponent } from 'src/modules/gallery-page/components/gallery-page/gallery-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
