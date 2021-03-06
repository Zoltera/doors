import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App routes
const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'doors', loadChildren: './doors/doors.module#DoorsPageModule' },
  { path: 'end', loadChildren: './end/end.module#EndPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
