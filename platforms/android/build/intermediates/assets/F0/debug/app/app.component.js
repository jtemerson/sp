"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("firebase/app");
require("firebase/auth");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.initializeApp({
            apiKey: "AIzaSyCMns2aSZEKhtDlqInhAXTuhuY7LN_kLPc",
            authDomain: "smart-pantry-7cd8a.firebaseapp.com"
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdUNBQXlDO0FBQ3pDLHlCQUF1QjtBQU12QjtJQUFBO0lBUUEsQ0FBQztJQU5DLCtCQUFRLEdBQVI7UUFDRSxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsVUFBVSxFQUFFLG9DQUFvQztTQUNqRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBUFUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO09BQ1csWUFBWSxDQVF4QjtJQUFELG1CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZ09uSW5pdCgpe1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgICAgYXBpS2V5OiBcIkFJemFTeUNNbnMyYVNaRUtodERscUluaEFYVHVodVk3TE5fa0xQY1wiLFxuICAgICAgYXV0aERvbWFpbjogXCJzbWFydC1wYW50cnktN2NkOGEuZmlyZWJhc2VhcHAuY29tXCJcbiAgICB9KVxuICB9XG59XG4iXX0=