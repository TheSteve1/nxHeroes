import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '..';


@NgModule({
  declarations: [HeroDetailComponent],
  imports: [BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
