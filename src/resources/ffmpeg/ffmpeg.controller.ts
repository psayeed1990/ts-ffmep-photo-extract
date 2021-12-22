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
            const { title, body } = req.body;

            const photo = await new FFMPEGService().extractPhotoFromVideo(
                title,
                body
            );

            res.status(201).json({ photo });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };
}

export default FFMPEGController;
