import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validate.env';
import App from './app';
import FFMPEGController from '@/resources/ffmpeg/ffmpeg.controller';

validateEnv();

const app = new App([new FFMPEGController()], Number(process.env.PORT));

app.listen();
