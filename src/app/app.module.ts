import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { SaluteComponent } from './salute/salute.component';
import { DataGetterService } from "./data-getter.service";


@NgModule({
  declarations: [
    AppComponent,
    SaluteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
