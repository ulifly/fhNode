"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp } = winston_1.default.format;
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp(), winston_1.default.format.json()),
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        new winston_1.default.transports.File({ filename: 'combined.log' }),
    ],
});
exports.logger.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log('info', { message, service });
        },
        error: (message) => {
            exports.logger.error('error', { message, service });
        }
    };
};
exports.buildLogger = buildLogger;
