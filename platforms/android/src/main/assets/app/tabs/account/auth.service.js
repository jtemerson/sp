"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.registerUser = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXlDO0FBQ3pDLHlCQUF1QjtBQUN2Qiw2QkFBMkI7QUFFM0I7SUFBQTtJQU9BLENBQUM7SUFOQyxrQ0FBWSxHQUFaLFVBQWEsS0FBYSxFQUFFLFFBQWdCO1FBQzFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQzlELEtBQUssQ0FDSixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUE7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHJlZ2lzdGVyVXNlcihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgLmNhdGNoKFxyXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIClcclxuICB9XHJcbn1cclxuIl19