import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdSnackBarModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,  
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
