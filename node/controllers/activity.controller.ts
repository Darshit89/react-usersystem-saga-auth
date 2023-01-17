import { Request, Response } from "express";
import { errorHandle, response } from "../common/response";
import { Activity } from "../models/activity.model";

exports.createActivityReport = async (req: Request, res: Response) => {
    try {
        const activity = new Activity(req.body);
        await activity.save()
        return res.status(200).send({
            data: { activity },
            message: "Activity created successfully",
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

exports.getActivity = async (req: Request, res: Response) => {
    try {
        const activity = await Activity.find();
        res.status(200).send({
            data: { activity },
            message: "Activity report fetched successfully",
            error: false
        });
    } catch (err: any) {
        let msg: any = errorHandle(err);
        if (err.errors && err.name == "ValidationError") {
            response(res, msg, err, 422);
        }
        else {
            response(res, 'Something went wrong', err, 500);
        }
    }
}

exports.getActivityById = async (req: Request, res: Response) => {
    try {
        const activity = await Activity.findById({ _id: req.params.id });
        res.status(200).send({
            data: { activity },
            message: "Activity report fetched successfully",
            error: false
        });
    } catch (err: any) {
        let msg: any = errorHandle(err);
        if (err.errors && err.name == "ValidationError") {
            response(res, msg, err, 422);
        }
        else {
            response(res, 'Something went wrong', err, 500);
        }
    }
}