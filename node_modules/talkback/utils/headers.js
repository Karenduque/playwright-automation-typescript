"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Headers = /** @class */ (function () {
    function Headers() {
    }
    Headers.read = function (headers, headerName) {
        var value = headers[headerName];
        if (Array.isArray(value)) {
            return value[0];
        }
        else {
            return value;
        }
    };
    Headers.write = function (headers, headerName, value, type) {
        headers[headerName] = type === "req" ? value : [value];
    };
    return Headers;
}());
exports.default = Headers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9oZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWFBLENBQUM7SUFaUSxZQUFJLEdBQVgsVUFBWSxPQUFZLEVBQUUsVUFBa0I7UUFDMUMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNoQjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTSxhQUFLLEdBQVosVUFBYSxPQUFZLEVBQUUsVUFBa0IsRUFBRSxLQUFhLEVBQUUsSUFBaUI7UUFDN0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFiRCxJQWFDIn0=