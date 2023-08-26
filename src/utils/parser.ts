import { Response } from "express";

export const errorResponse = function (err: any) {
    return {
        success: false,
        error: {
            type: err.type,
            message: err.message,
            status: err.status,
            code: err.code
        }
    }
}


function successWrapper(res: Response, data: any, status: number = 200) {
    return res.status(status).json({
        success:true,
        data:data
    });
}

function errorWrapper(res: Response, err: any, status: number = 500) {
    return res.status(status).json(errorResponse(err));
}

export const ResponseWrapper = {
    success: successWrapper,
    error: errorWrapper
}