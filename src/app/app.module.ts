import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ColorDirective } from './color.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChildroutingComponent } from './childrouting/childrouting.component';
import { PrimaryComponent } from './childrouting/primary/primary.component';
import { SocialComponent } from './childrouting/social/social.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { SqrtPipe } from './sqrt.pipe';
import { CommService } from './comm.service';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SendMessageComponent } from './subject-example/send-message/send-message.component';
import { ReceiveMessageComponent } from './subject-example/receive-message/receive-message.component';
import { ApiConsumeComponent } from './api-consume/api-consume.component';
import { ApiService } from './api-consume/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// root module => decorator
@NgModule({
  // components, pipe, directives
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    ColorDirective,
    ParentComponent,
    ChildComponent,
    SidebarComponent,
    ChildroutingComponent,
    PrimaryComponent,
    SocialComponent,
    AngularPipesComponent,
    SqrtPipe,
    RxjsComponent,
    SubjectExampleComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    ApiConsumeComponent,
    FormsComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  //services
  providers: [ CommService, ApiService ],
  // entry point
  bootstrap: [AppComponent]
})
export class AppModule { }
