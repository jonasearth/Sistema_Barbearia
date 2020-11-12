import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardListComponent } from './service-card-list.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { CashCardComponent } from './cash-card/cash-card.component';
import { RequestServiceCardComponent } from './request-service-card/request-service-card.component';



@NgModule({
  declarations: [ServiceCardListComponent, ServiceCardComponent, CashCardComponent, RequestServiceCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ServiceCardListComponent
  ]
})
export class ServiceCardListModule { }