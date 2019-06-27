import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ApiModule, Configuration } from '../swagger';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";

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
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
