"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __importDefault(require("../options"));
var Latency = /** @class */ (function () {
    function Latency(options) {
        this.options = options;
    }
    Latency.prototype.simulate = function (req, tape) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved, latencyGenerator, latency, type, high, low;
            return __generator(this, function (_a) {
                resolved = Promise.resolve();
                latencyGenerator = tape && tape.meta.latency !== undefined ? tape.meta.latency : this.options.latency;
                if (!latencyGenerator) {
                    return [2 /*return*/, resolved];
                }
                options_1.default.validateLatency(latencyGenerator);
                latency = 0;
                type = typeof latencyGenerator;
                if (type === "number") {
                    latency = latencyGenerator;
                }
                else if (Array.isArray(latencyGenerator)) {
                    high = latencyGenerator[1];
                    low = latencyGenerator[0];
                    latency = Math.random() * (high - low) + low;
                }
                else {
                    latency = latencyGenerator(req);
                }
                return [2 /*return*/, new Promise(function (r) { return setTimeout(r, latency); })];
            });
        });
    };
    return Latency;
}());
exports.default = Latency;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZWF0dXJlcy9sYXRlbmN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBSWxEO0lBSUUsaUJBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVLLDBCQUFRLEdBQWQsVUFBZSxHQUFRLEVBQUUsSUFBVzs7OztnQkFDNUIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtnQkFFNUIsZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO2dCQUMzRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3JCLHNCQUFPLFFBQVEsRUFBQTtpQkFDaEI7Z0JBRUQsaUJBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtnQkFFNUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFFVCxJQUFJLEdBQUcsT0FBTyxnQkFBZ0IsQ0FBQTtnQkFDcEMsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNyQixPQUFPLEdBQUcsZ0JBQTBCLENBQUE7aUJBQ3JDO3FCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNwQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzFCLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7aUJBQzdDO3FCQUFNO29CQUNMLE9BQU8sR0FBSSxnQkFBdUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDeEQ7Z0JBRUQsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLEVBQUE7OztLQUNoRDtJQUNILGNBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIn0=