"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var account_component_1 = require("./account/account.component");
var add_component_1 = require("./add/add.component");
var pantry_component_1 = require("./pantry/pantry.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var auth_component_1 = require("./account/auth/auth.component");
var auth_service_1 = require("./account/auth.service");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                tabs_routing_module_1.TabsRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
                account_component_1.AccountComponent,
                add_component_1.AddComponent,
                pantry_component_1.PantryComponent,
                auth_component_1.AuthComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                auth_service_1.AuthService
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBRXJFLGlFQUErRDtBQUMvRCxxREFBbUQ7QUFDbkQsOERBQTREO0FBQzVELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsZ0VBQThEO0FBQzlELHVEQUFxRDtBQXNCckQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXBCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsdUNBQWlCO2dCQUNqQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2Isb0NBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsMEJBQVc7YUFDWjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gXCIuL2FjY291bnQvYWNjb3VudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZENvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYW50cnlDb21wb25lbnQgfSBmcm9tIFwiLi9wYW50cnkvcGFudHJ5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFic1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9hY2NvdW50L2F1dGgvYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYWNjb3VudC9hdXRoLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgVGFic1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgQWNjb3VudENvbXBvbmVudCxcbiAgICAgICAgQWRkQ29tcG9uZW50LFxuICAgICAgICBQYW50cnlDb21wb25lbnQsXG4gICAgICAgIEF1dGhDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBdXRoU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cbiJdfQ==