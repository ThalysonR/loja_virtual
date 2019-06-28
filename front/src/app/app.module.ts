import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ApiModule, Configuration } from '../swagger';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ApiModule.forRoot(() => new Configuration())
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "pt-BR"
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
