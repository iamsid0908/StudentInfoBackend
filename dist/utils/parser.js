"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWrapper = exports.errorResponse = void 0;
const errorResponse = function (err) {
    return {
        success: false,
        error: {
            type: err.type,
            message: err.message,
            status: err.status,
            code: err.code
        }
    };
};
exports.errorResponse = errorResponse;
function successWrapper(res, data, status = 200) {
    return res.status(status).json({
        success: true,
        data: data
    });
}
function errorWrapper(res, err, status = 500) {
    return res.status(status).json((0, exports.errorResponse)(err));
}
exports.ResponseWrapper = {
    success: successWrapper,
    error: errorWrapper
};
