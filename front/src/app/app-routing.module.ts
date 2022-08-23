import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowhomeComponent } from './pages/showhome/showhome.component';
import { SecretarioComponent } from './pages/secretario/secretario.component';
import { ProfessorComponent } from './pages/professor/professor.component';
import { MandatoComponent } from './pages/mandato/mandato.component';
import { ParecerComponent } from './pages/parecer/parecer.component';
import { ParentescoComponent } from './pages/parentesco/parentesco.component';
import { AfastamentoComponent } from './pages/afastamento/afastamento.component';
import { DocumentoComponent } from './pages/documento/documento.component';
import { ListafastamentoComponent } from './pages/listafastamento/listafastamento.component';
import { VerafastamentoComponent } from './pages/verafastamento/verafastamento.component';
import { EditarAfastamentoComponent } from './pages/editar-afastamento/editar-afastamento.component';
import { ListaprofessorComponent } from './pages/listaprofessor/listaprofessor.component';
import { VerprofessorComponent } from './pages/verprofessor/verprofessor.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},

  { path: 'home', component: HomeComponent,
  children: [
    { path: 'professor', component: ProfessorComponent},
    { path: 'listaprofessor', component: ListaprofessorComponent},
    { path: 'verprofessor', component: VerprofessorComponent},
    { path: 'verprofessor/:id', component: VerprofessorComponent},
    { path: 'secretario', component: SecretarioComponent},
    { path: 'documento', component: DocumentoComponent},
    { path: 'mandato', component: MandatoComponent},
    { path: 'parentesco', component: ParentescoComponent},
    { path: 'parecer', component: ParecerComponent},
    { path: 'afastamento', component: AfastamentoComponent},
    { path: 'editarasfamento', component: EditarAfastamentoComponent},
    { path: 'editarasfamento/:id', component: EditarAfastamentoComponent},
    { path: 'secretario', component: SecretarioComponent},
    { path: 'showhome', component:ShowhomeComponent},
    { path: 'listafastamento',component:ListafastamentoComponent},
    { path: 'verafastamento',component:VerafastamentoComponent},
    { path: 'verafastamento/:id',component:VerafastamentoComponent},
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
