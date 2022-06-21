import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildroutingComponent } from './childrouting/childrouting.component';
import { PrimaryComponent } from './childrouting/primary/primary.component';
import { SocialComponent } from './childrouting/social/social.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { ApiConsumeComponent } from './api-consume/api-consume.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path: "data-binding", component: DataBindingComponent},
  {path: "directives", component: DirectivesComponent},
  {path: "communication", component: ParentComponent},
  {path: "child-routing", component: ChildroutingComponent, children: [
    {path: "primary", component: PrimaryComponent},
    {path: "social", component: SocialComponent},
    {path: "social/:id", component: SocialComponent},
    {path: "", redirectTo: "primary", pathMatch: "full"}
  ]},
  {path: "", redirectTo: "data-binding", pathMatch: "full"},
  {path: "pipes", component: AngularPipesComponent},
  {path: "rxjs", component: RxjsComponent},
  {path: "subject", component: SubjectExampleComponent},
  {path: "http", component: ApiConsumeComponent},
  {path: "form", component: FormsComponent},
  {path: "animation", component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Routing
 * 1) Path -> app-routing.module.ts 
 * 2) sidebar -> anchor tags routerLink add
 * 3) <router-outlet> </router-outlet> 
 */