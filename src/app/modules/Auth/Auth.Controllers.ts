import { Request, Response } from 'express';
import { catchAsynch } from '../utility/catchAsync';
import sendSuccess from '../utility/send-seccess';
import httpStatus from 'http-status';
import { authServices } from './Auth.Servises';

const createLogin = catchAsynch(async (req: Request, res: Response) => {
  const result = await authServices.loginUser(req.body);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: result,
  });
});

export const authController = {
  createLogin,
};