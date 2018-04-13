import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

//config api url
import { API_URL } from './config.opaque';

// components
import { AppComponent } from './app.component';
import { PhoneDetailComponent } from './shared/phone/phoneDetail.component';
import { PhoneListContainer } from './pages/phoneListContainer/phoneListContainer.component';

//Services
import { RestPhoneService } from './services/restPhone.service';

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatProgressSpinnerModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    {provide: API_URL, useValue: 'http://localhost:8080'},
    RestPhoneService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
