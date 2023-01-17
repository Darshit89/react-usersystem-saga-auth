import { Request, Response } from "express";
import { errorHandle, response } from "../common/response";
import { SubMember, SubNonMember } from "../models/subMember.model";

exports.createMember = async (req: Request, res: Response) => {
    try {
        const subMember = new SubMember(req.body);
        await subMember.save()
        return res.status(200).send({
            data: { subMember },
            message: "Member created successfully",
            error: false
        })
    } catch (err: any) {
        let msg: any = errorHandle(err);
        if (err.errors && err.name == "ValidationError") {
            response(res, msg, err, 422);
        }
        else {
            response(res, "Something went wrong", err, 500);
        }
    }
}

exports.createNonMember = async (req: Request, res: Response) => {
    try {
        const subNonMember = new SubNonMember(req.body);
        await subNonMember.save()
        return res.status(200).send({
            data: { subNonMember },
            message: "NonMember created successfully",
            error: false
        })
    } catch (err: any) {
        let msg: any = errorHandle(err);
        if (err.errors && err.name == "ValidationError") {
            response(res, msg, err, 422);
        }
        else {
            response(res, "Something went wrong", err, 500);
        }
    }
}