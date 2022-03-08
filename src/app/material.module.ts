// Modulos importados que son requeridos en la App
import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatRadioModule} from "@angular/material/radio"
import {MatSelectModule} from "@angular/material/select"
import {MatInputModule} from "@angular/material/input"

@NgModule({
    //Los módulos que se requieren en la App se exportan aquí
    exports: [MatToolbarModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatRadioModule,
                MatSelectModule,
                MatInputModule]
})

export class MaterialModule {}