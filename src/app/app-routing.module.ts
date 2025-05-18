import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationListComponent } from './components/communication-list/communication-list.component';
import { CoproprietaireListComponent } from './components/coproprietaire-list/coproprietaire-list.component';
import { CoproprietaireFormComponent } from './components/coproprietaire-form/coproprietaire-form.component';
import { CoproprietaireEditComponent } from './components/coproprietaire-edit/coproprietaire-edit.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
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

const routes: Routes = [
  { path: 'communications', component: CommunicationListComponent },
  { path: 'coproprietaires', component: CoproprietaireListComponent },
  { path: 'coproprietaires/nouveau', component: CoproprietaireFormComponent },
  { path: 'coproprietaires/edit/:id', component: CoproprietaireEditComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents/ajouter', component: AjouterDocumentComponent },
  { path: 'documents/:id', component: DocumentDetailsComponent },
  { path: 'ajouter-incident', component: AjouterIncidentComponent },
  { path: 'incidents', component: IncidentListComponent },
  { path: 'incidents/edit/:id', component: EditIncidentComponent },
  { path: 'prestataires', component: PrestataireComponent },
  { path: 'prestatairesl', component: PrestataireListComponent },
  { path: 'prestataires/edit/:id', component: PrestataireEditComponent },
  { path: 'documents/edit/:id', component: DocumentEditComponent },
  { path: 'syndics', component: SyndicListComponent },
{ path: 'syndics/edit/:id', component: SyndicFormComponent },
{ path: 'syndics/new', component: SyndicFormComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
