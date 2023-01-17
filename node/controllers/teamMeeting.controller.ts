import { Request, Response } from 'express';
import { TeamMeeting } from '../models/teamMeeting.model';
import { response, errorHandle } from "../common/response";

exports.create = async (req: Request, res: Response) => {
  try {
    var teamMeeting = new TeamMeeting(req.body)
    await teamMeeting.save()
    return res.status(200).send({
      data: { teamMeeting },
      message: "TeamMeeting report created successfully",
      error: false
    })
  }
  catch (err: any) {
    let msg: any = errorHandle(err);
    if (err.errors && err.name == "ValidationError") {
      response(res, msg, err, 422);
    }
    else {
      response(res, "Something went wrong", err, 500);
    }
  }
}

exports.getTeamMeeting = async (req: Request, res: Response) => {
  try {
    const teamMeeting = await TeamMeeting.find();
    res.status(200).send({
      data: { teamMeeting },
      message: "TeamMeeting report fetched successfully",
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

exports.getTeamMeetingById = async (req: Request, res: Response) => {
  try {
    const teamMeeting = await TeamMeeting.findById({ _id: req.params.id });
    res.status(200).send({
      data: { teamMeeting },
      message: "TeamMeeting fetched successfully",
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

