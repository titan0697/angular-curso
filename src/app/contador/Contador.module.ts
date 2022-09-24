import {NgModule} from '@angular/core';
import {  CommonModule } from '@angular/common';
import { ContadorComponen } from './contador/contador.component';

@NgModule({
    declarations: [
       ContadorComponen
    ],
    exports:[
        ContadorComponen
    ],
})
export class ContadorModule {}