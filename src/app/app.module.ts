import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {DiSampleAppComponent} from './di-sample-app/di-sample-app.component';
import 'hammerjs';
import {DiValueAppComponent} from './di-value-app/di-value-app.component';
import {ApiService} from "./api.service";

const isProduction: boolean = true;

@NgModule({
    declarations: [
        AppComponent,
        DiSampleAppComponent,
        DiValueAppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [
        {provide: ApiService, useClass: ApiService},
        {
            provide: 'API_URL',
            useValue: isProduction ?
                'https://production-api.sample.com' :
                'http://dev-api.sample.com'
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
