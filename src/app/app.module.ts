import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { IntegrationComponent } from './integration/integration.component';
import { PreProductionComponent } from './pre-production/pre-production.component';
import { ProductionComponent } from './production/production.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		AppComponent,
		IntegrationComponent,
		PreProductionComponent,
		ProductionComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
