import { Request, Response } from "express";
import { errorHandle, response } from "../common/response";
import { LivingEnvironment } from "../models/livingEnvironment.model";

exports.create = async (req: Request, res: Response) => {
  try {
    const livingEnvironment = new LivingEnvironment(req.body);
    await livingEnvironment.save()
    return res.status(200).send({
      data: { livingEnvironment },
      message: "Living Environment report created successfully",
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

exports.getLivingEnvironment = async (req: Request, res: Response) => {
  try {
    const livingEnvironment = await LivingEnvironment.find();
    console.log(livingEnvironment, "livingEnvironment")
    livingEnvironment.map((item) => {
      item.totalMembers = item.members.length + item.nonMembers.length
    })
    res.status(200).send({
      data: { livingEnvironment },
      message: "Living Environments report fetched successfully",
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

exports.getLivingEnvironmentById = async (req: Request, res: Response) => {
  try {
    const livingEnvironment = await LivingEnvironment.findById({ _id: req.params.id });
    res.status(200).send({
      data: { livingEnvironment },
      message: "Living Environments report fetched successfully",
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