import { AdressKladrComponent } from './../../components/adress-kladr/adress-kladr.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistryComponent } from './registry/registry.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {
  MatToolbarModule, MatSidenavModule, MatButtonModule, MatCardModule,
  MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatStepperModule, MatCheckboxModule
} from '@angular/material';
import { RegistryStepperComponent } from 'src/app/components/registy-stepper/registry-stepper.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistryComponent,
    RegistryStepperComponent,
    AdressKladrComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,

    // Material
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule
  ],
  exports: [LoginComponent, RegistryComponent],
  providers: []
})
export class AuthModule {
}
