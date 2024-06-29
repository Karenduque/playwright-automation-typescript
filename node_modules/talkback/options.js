"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptions = exports.FallbackMode = exports.RecordMode = void 0;
exports.RecordMode = {
    NEW: "NEW",
    OVERWRITE: "OVERWRITE",
    DISABLED: "DISABLED",
    ALL: []
};
exports.RecordMode.ALL = [exports.RecordMode.NEW, exports.RecordMode.OVERWRITE, exports.RecordMode.DISABLED];
exports.FallbackMode = {
    NOT_FOUND: "NOT_FOUND",
    PROXY: "PROXY",
    ALL: []
};
exports.FallbackMode.ALL = [exports.FallbackMode.NOT_FOUND, exports.FallbackMode.PROXY];
exports.DefaultOptions = {
    host: "",
    port: 8080,
    path: "./tapes/",
    record: exports.RecordMode.NEW,
    fallbackMode: exports.FallbackMode.NOT_FOUND,
    name: "unnamed server",
    tapeNameGenerator: undefined,
    https: {
        enabled: false,
        keyPath: undefined,
        certPath: undefined
    },
    allowHeaders: undefined,
    ignoreHeaders: ["content-length", "host"],
    ignoreQueryParams: [],
    ignoreBody: false,
    bodyMatcher: undefined,
    urlMatcher: undefined,
    requestDecorator: undefined,
    responseDecorator: undefined,
    tapeDecorator: undefined,
    latency: 0,
    errorRate: 0,
    silent: false,
    summary: true,
    debug: false,
};
var OptionsFactory = /** @class */ (function () {
    function OptionsFactory() {
    }
    OptionsFactory.prepare = function (usrOpts) {
        if (usrOpts === void 0) { usrOpts = {}; }
        var opts = __assign(__assign(__assign(__assign({}, exports.DefaultOptions), { name: usrOpts.host || exports.DefaultOptions.name }), usrOpts), { ignoreHeaders: __spreadArray(__spreadArray([], exports.DefaultOptions.ignoreHeaders, true), (usrOpts.ignoreHeaders || []), true) });
        this.validateOptions(opts);
        return opts;
    };
    OptionsFactory.validateOptions = function (opts) {
        this.validateRecord(opts.record);
        this.validateFallbackMode(opts.fallbackMode);
        this.validateLatency(opts.latency);
        this.validateErrorRate(opts.errorRate);
    };
    OptionsFactory.validateRecord = function (record) {
        if (typeof (record) === "string" && !exports.RecordMode.ALL.includes(record)) {
            throw "INVALID OPTION: record has an invalid value of '".concat(record, "'");
        }
    };
    OptionsFactory.validateFallbackMode = function (fallbackMode) {
        if (typeof (fallbackMode) === "string" && !exports.FallbackMode.ALL.includes(fallbackMode)) {
            throw "INVALID OPTION: fallbackMode has an invalid value of '".concat(fallbackMode, "'");
        }
    };
    OptionsFactory.validateLatency = function (latency) {
        if (Array.isArray(latency) && latency.length !== 2) {
            throw "Invalid LATENCY option. If using a range, the array should only have 2 values [min, max]. Current=[".concat(latency, "]");
        }
    };
    OptionsFactory.validateErrorRate = function (errorRate) {
        if (typeof (errorRate) !== "function" && (errorRate < 0 || errorRate > 100)) {
            throw "Invalid ERRORRATE option. Value should be between 0 and 100. Current=[".concat(errorRate, "]");
        }
    };
    return OptionsFactory;
}());
exports.default = OptionsFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2EsUUFBQSxVQUFVLEdBQUc7SUFDeEIsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsVUFBVTtJQUNwQixHQUFHLEVBQUUsRUFBYztDQUNwQixDQUFBO0FBQ0Qsa0JBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxrQkFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBVSxDQUFDLFNBQVMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBRS9ELFFBQUEsWUFBWSxHQUFHO0lBQzFCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsR0FBRyxFQUFFLEVBQWM7Q0FDcEIsQ0FBQTtBQUNELG9CQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsb0JBQVksQ0FBQyxTQUFTLEVBQUUsb0JBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQW1DbEQsUUFBQSxjQUFjLEdBQVk7SUFDckMsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxrQkFBVSxDQUFDLEdBQUc7SUFDdEIsWUFBWSxFQUFFLG9CQUFZLENBQUMsU0FBUztJQUNwQyxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLGlCQUFpQixFQUFFLFNBQVM7SUFFNUIsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUVELFlBQVksRUFBRSxTQUFTO0lBQ3ZCLGFBQWEsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztJQUN6QyxpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLFVBQVUsRUFBRSxLQUFLO0lBRWpCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFVBQVUsRUFBRSxTQUFTO0lBRXJCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixhQUFhLEVBQUUsU0FBUztJQUV4QixPQUFPLEVBQUUsQ0FBQztJQUNWLFNBQVMsRUFBRSxDQUFDO0lBRVosTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSxLQUFLO0NBQ2IsQ0FBQTtBQUVEO0lBQUE7SUErQ0EsQ0FBQztJQTlDUSxzQkFBTyxHQUFkLFVBQWUsT0FBOEI7UUFBOUIsd0JBQUEsRUFBQSxZQUE4QjtRQUMzQyxJQUFNLElBQUksMkNBQ0wsc0JBQWMsS0FDakIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFLLElBQUksc0JBQWMsQ0FBQyxJQUFJLEtBQ3ZDLE9BQU8sS0FDVixhQUFhLGtDQUNSLHNCQUFjLENBQUMsYUFBYSxTQUM1QixDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLFVBRW5DLENBQUE7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTFCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVNLDhCQUFlLEdBQXRCLFVBQXVCLElBQWE7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFTSw2QkFBYyxHQUFyQixVQUFzQixNQUFXO1FBQy9CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLGtCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwRSxNQUFNLDBEQUFtRCxNQUFNLE1BQUcsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFFTSxtQ0FBb0IsR0FBM0IsVUFBNEIsWUFBaUI7UUFDM0MsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsb0JBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2xGLE1BQU0sZ0VBQXlELFlBQVksTUFBRyxDQUFBO1NBQy9FO0lBQ0gsQ0FBQztJQUVNLDhCQUFlLEdBQXRCLFVBQXVCLE9BQVk7UUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE1BQU0sNkdBQXNHLE9BQU8sTUFBRyxDQUFBO1NBQ3ZIO0lBQ0gsQ0FBQztJQUVNLGdDQUFpQixHQUF4QixVQUF5QixTQUFjO1FBQ3JDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzNFLE1BQU0sZ0ZBQXlFLFNBQVMsTUFBRyxDQUFBO1NBQzVGO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQyJ9