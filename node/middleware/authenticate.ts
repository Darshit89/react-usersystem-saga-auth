import jwt from "jsonwebtoken";
import { Response, NextFunction } from 'express';

import { User } from '../models/user.model';
import endpoint from '../config/config';

const authenticate = async (req: any, res: Response, next: NextFunction) => {
  try {
    var token = req.header("authorization");
    if (!token) {
      throw new Error("Unatuhorized user");
    }
    var decoded: any = jwt.verify(token, String(endpoint.JWTKEY));
    const user = await User.findOne({ _id: decoded._id, token: token });

    if (!user) {
      throw new Error("Unauthorized user");
    }
    next();
  } catch (err) {
    console.log(err);

    res.status(401).send({ message: "Please authenticate" });
  }
};

export { authenticate };
