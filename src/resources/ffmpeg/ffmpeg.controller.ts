import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import FFMPEGService from '@/resources/ffmpeg/ffmpeg.service';
import getErrorMessage from '@/utils/exceptions/message.exception';
import joi from 'joi';
import VframeSchema from '@/utils/definitions/joi/vframes.definitions';

class FFMPEGController implements Controller {
    public path = '/ffmpeg/image';
    public router = Router();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.extractPhoto);
    }

    private extractPhoto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const timestamp = Number(req.query.timestamp);
            const url = String(req.query.url);

            //validate input with joi
            await VframeSchema.validateAsync({
                timestamp,
                url,
            });

            //extract photo function call
            const photo = await new FFMPEGService().extractPhotoFromVideo(
                timestamp,
                url
            );

            res.status(201).json({ photo });
        } catch (error) {
            next(new HttpException(400, getErrorMessage(error)));
        }
    };
}

export default FFMPEGController;
