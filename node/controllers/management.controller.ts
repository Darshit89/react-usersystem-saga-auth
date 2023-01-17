import { Request, Response } from 'express';
import { response, errorHandle } from '../common/response';
import { Duration, Organization, Environment } from '../models/management.model';

exports.getDurations = async (req: Request, res: Response) => {
  try {
    const durations = await Duration.find();
    res.status(200).send({
      data: { durations },
      message: "Durations fetched successfully",
      error: false
    });
  }
  catch (err: any) {
    let msg: any = errorHandle(err);
    if (err.errors && err.name == "ValidationError") {
      response(res, msg, err, 422);
    }
    else {
      response(res, 'Something went wrong', err, 500);
    }
  }
}

exports.getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await Organization.find();
    res.status(200).send({
      data: { organizations },
      message: "Organizations fetched successfully",
      error: false
    })
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

exports.getEnvironments = async (req: Request, res: Response) => {
  try {
    const environments = await Environment.find();
    res.status(200).send({
      data: { environments },
      message: "Environments fetched successfully",
      error: false
    })
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

