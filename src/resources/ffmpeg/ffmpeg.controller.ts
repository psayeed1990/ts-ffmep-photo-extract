import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import FFMPEGService from '@/resources/ffmpeg/ffmpeg.service';

class FFMPEGController implements Controller {
    public path = '/ffmpeg/image';
    public router = Router();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(
            `${this.path}`,
            //validationMiddleware(validate.create),
            this.extractPhoto
        );
    }

    private extractPhoto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const timestamp = Number(req.query.timestamp);
            const url = String(req.query.url);

            const photo = await new FFMPEGService().extractPhotoFromVideo(
                timestamp,
                url
            );

            res.status(201).json({ photo });
        } catch (error) {
            next(new HttpException(400, 'Cannot take screenshot'));
        }
    };
}

export default FFMPEGController;
