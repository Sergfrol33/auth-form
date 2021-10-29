import {Request} from "express";
import {IRegister} from "../routes/types";

export type authRequest = Request<{}, {}, IRegister>