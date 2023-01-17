import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { response, errorHandle } from "../common/response";

exports.login = async (req: Request, res: Response) => {
  try {
    const userexits = await User.find({ email: req.body.email });
    if (userexits.length > 0) {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken(user);
      return res.send({
        data: { user, token },
        message: "user loggedIn successFully",
        error: false
      });
    }
    var user = new User(req.body);
    const token = await user.generateAuthToken(user);
    await user.save();
    res.status(200).send({
      data: { user, token },
      message: "user created successfully",
      error: false
    });
  }
  catch (err: any) {
    let msg: any = errorHandle(err);
    if (err && err.name == 'Error') {
      response(res, err.message, err, 400);
    }
    else if (err.errors && err.name == "ValidationError") {
      response(res, msg, err, 422);
    }
    else {
      response(res, 'Something went wrong', err, 500);
    }
  }
};