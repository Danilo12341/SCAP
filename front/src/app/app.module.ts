import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { Interceptor } from './shared/services/interceptor.service';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ShowhomeComponent,
    SecretarioComponent,
    ProfessorComponent,
    MandatoComponent,
    ParecerComponent,
    ParentescoComponent,
    AfastamentoComponent,
    DocumentoComponent,
    ListafastamentoComponent,
    VerafastamentoComponent,
    EditarAfastamentoComponent,
    ListaprofessorComponent,
    VerprofessorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
