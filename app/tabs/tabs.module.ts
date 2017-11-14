import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AccountComponent } from "./account/account.component";
import { AddComponent } from "./add/add.component";
import { PantryComponent } from "./pantry/pantry.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import { AuthComponent } from "./account/auth/auth.component";
import { AuthService } from "./account/auth/auth.service";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        TabsComponent,
        AccountComponent,
        AddComponent,
        PantryComponent,
        AuthComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
      AuthService
    ]
})
export class TabsModule { }
