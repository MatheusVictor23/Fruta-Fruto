import { Response, Request, NextFunction } from "express";
import ErrorExtension from "../utils/ErrorExtension";

const httpErrorMiddleware = (
    err:Error,
    req:Request,
    res:Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next:NextFunction
) => {
    const {status, message} = err as ErrorExtension;
    res.status(status || 500).json({message});
};

export default httpErrorMiddleware;