import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopHeaderPageRoutingModule } from './top-header-routing.module';

import { TopHeaderPage } from './top-header.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TopHeaderPageRoutingModule
    ],
    exports: [
        TopHeaderPage
    ],
    declarations: [TopHeaderPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopHeaderPageModule {}
