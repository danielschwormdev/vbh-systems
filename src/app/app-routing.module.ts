import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationComponent } from './integration/integration.component';
import { PreProductionComponent } from './pre-production/pre-production.component';
import { ProductionComponent } from './production/production.component';

const routes: Routes = [
	{ path: '', redirectTo: '/integration', pathMatch: 'full' },
	{ path: 'integration', component: IntegrationComponent },
	{ path: 'pre-production', component: PreProductionComponent },
	{ path: 'production', component: ProductionComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
