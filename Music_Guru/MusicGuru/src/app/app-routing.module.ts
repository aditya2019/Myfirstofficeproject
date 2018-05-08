import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { RouterModule, Routes} from '@angular/router';
import { WeeklyTopComponent } from './components/weekly-top/weekly-top.component';
import { MostViewComponent } from './components/most-view/most-view.component';
import { LoginComponent } from './components/form/login/login.component';
import { RegistrationComponent } from './components/form/registration/registration.component';
import { MymusicComponent } from './components/mymusic/mymusic.component';
import { AdminComponent } from './components/admin/admin.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CommingsoonComponent } from './components/shared/commingsoon/commingsoon.component';
import { RoleGuard } from './services/role.guard';
import { AuthenticateUserService} from './services/authenticate-user.service';

const routes :Routes = [
{path: '', redirectTo:'/toprated',pathMatch:'full'},
{path: 'toprated', component:TopRatedComponent},
{path: 'Weeklytop', component:WeeklyTopComponent },
{path: 'mostview', component:MostViewComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegistrationComponent},
{path: 'mymusic', component:MymusicComponent,  canActivate:[AuthenticateUserService]},
// {path: 'admin', component:AdminComponent },
{path: 'admin', component:AdminComponent, canActivate:[RoleGuard], data: {
  LoginRole: 'admin'}},
  
{path: 'feedback', component:FeedbackComponent },
{path: 'contact', component:ContactusComponent },
{path: 'commingsoon', component:CommingsoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
