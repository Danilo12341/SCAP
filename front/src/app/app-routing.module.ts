import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateeventComponent } from './pages/createevent/createevent.component';
import { ShoweventComponent } from './pages/showevent/showevent.component';
import { MyeventComponent } from './pages/myevent/myevent.component';
import { ConfigComponent } from './pages/config/config.component';
import { CategoryComponent } from './pages/category/category.component';
import { ShowhomeComponent } from './pages/showhome/showhome.component';
import { SecretarioComponent } from './pages/secretario/secretario.component';
import { ProfessorComponent } from './pages/professor/professor.component';
import { MandatoComponent } from './pages/mandato/mandato.component';
import { ParecerComponent } from './pages/parecer/parecer.component';
import { ParentescoComponent } from './pages/parentesco/parentesco.component';
import { AfastamentoComponent } from './pages/afastamento/afastamento.component';
import { DocumentoComponent } from './pages/documento/documento.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'events', component: EventsComponent,
  children: [
    { path:'', component: ShoweventComponent},
    { path:'showEvent', component: ShoweventComponent},
    { path:'myEvents', component: MyeventComponent},
    { path:'createEvent', component: CreateeventComponent },
    { path: 'config', component: ConfigComponent},
    ],
  },
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'professor', component: ProfessorComponent},
    { path: 'secretario', component: SecretarioComponent},
    { path: 'documento', component: DocumentoComponent},
    { path: 'mandato', component: MandatoComponent},
    { path: 'parentesco', component: ParentescoComponent},
    { path: 'parecer', component: ParecerComponent},
    { path: 'afastamento', component: AfastamentoComponent},
    { path: 'secretario', component: SecretarioComponent},
    {path:'showhome', component:ShowhomeComponent},
    { path:'showEvent', component: ShoweventComponent},
    { path:'myEvents', component: MyeventComponent},
    { path:'createEvent', component: CreateeventComponent },
    { path: 'config', component: ConfigComponent},
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
