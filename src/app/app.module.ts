import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {DiSampleAppComponent} from './di-sample-app/di-sample-app.component';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        DiSampleAppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
