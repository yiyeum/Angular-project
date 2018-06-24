import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { Route }          from './app.routing';
import { AppComponent }   from './app.component';
import { Home }           from './home/home';
import { About }          from './about/about';
import { Details }        from './details/details';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    Details
  ],
  imports: [
    BrowserModule,
    Route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
