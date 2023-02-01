import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: '',
        data: {
          title: 'Overview pets',
          desscription: 'Overview of pets',
        },
        loadChildren: () =>
          import('./overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'add-pet',
        data: {
          title: 'Add pet',
          desscription: 'Adding pet to petStore',
        },
        loadChildren: () =>
          import('./add-pet/add-pet.module').then((m) => m.AddPetModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
