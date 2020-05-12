import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { CorpoComponent } from './corpo/corpo.component';
import { LayoutComponent } from './layout/layout.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContaComponent } from './conta/conta.component';
import { InputtextoComponent } from './shared/inputtexto/inputtexto.component';
import { SelectComponent } from './shared/select/select.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,      
    CabecalhoComponent,
    BarralateralComponent,
    CorpoComponent,
    LayoutComponent,
    PessoaComponent,
    RodapeComponent,
    ContaComponent,
    InputtextoComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [    
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
