import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommunicationListComponent } from './components/communication-list/communication-list.component';
import { CoproprietaireListComponent } from './components/coproprietaire-list/coproprietaire-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { CoproprietaireFormComponent } from './components/coproprietaire-form/coproprietaire-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CoproprietaireEditComponent } from './components/coproprietaire-edit/coproprietaire-edit.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AjouterDocumentComponent } from './ajouter-document/ajouter-document.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { AjouterIncidentComponent } from './components/ajouter-incident/ajouter-incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { EditIncidentComponent } from './incidents/edit-incident/edit-incident.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';
import { PrestataireListComponent } from './components/prestataire-list/prestataire-list.component';
import { PrestataireEditComponent } from './components/prestataire-edit/prestataire-edit.component';
import { DocumentEditComponent } from './components/document-edit/document-edit.component';
import { SyndicListComponent } from './components/syndic-list/syndic-list.component';
import { SyndicFormComponent } from './components/syndic-form/syndic-form.component';

@NgModule({
  declarations: [
    AppComponent,CommunicationListComponent, CoproprietaireListComponent, CoproprietaireFormComponent, CoproprietaireEditComponent, DocumentListComponent,AjouterDocumentComponent, DocumentDetailsComponent, AjouterIncidentComponent, IncidentListComponent, EditIncidentComponent, PrestataireComponent, PrestataireListComponent, PrestataireEditComponent, DocumentEditComponent, SyndicListComponent, SyndicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
   
   
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
