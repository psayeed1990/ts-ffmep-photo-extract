// Language: typescript
// Path: src/resources/ffmpeg/__tests__/ffmpeg.service.test.ts
// Compare this snippet from src/resources/ffmpeg/ffmpeg.service.test.ts:
// import { expect } from 'chai';
import FFMPEGService from '@/resources/ffmpeg/ffmpeg.service';
import Photo from '@/resources/ffmpeg/ffmpeg.interface';
import Jimp from 'jimp';

//define photo
let photo: Photo;
//call the service in a function
const photoExtractTestFunction = async () => {
    const ffmpegService = new FFMPEGService();
    const timestamp = 0;
    const url =
        'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
    photo = await ffmpegService.extractPhotoFromVideo(timestamp, url);
    return photo;
};

beforeAll(async () => {
    await photoExtractTestFunction();
});

describe('FFMPEGService', () => {
    //test photo data to be string

    it('Extracted photo should be a string', async () => {
        expect(typeof photo.data).toEqual('string');
    });

    //test photo should not be empty
    it('Extracted photo should not be a empty string ', async () => {
        expect(photo.data).not.toEqual('');
        expect(photo.data).not.toEqual(' ');
    });

    //test photo data to be base64
    it('Extracted photo should be a base64 string', async () => {
        expect(photo.data).toMatch(
            /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
        );
    });

    //test photo data string to be png type
    it('Extracted photo should be a valid PNG image', async () => {
        const buffer = Buffer.from(photo.data, 'base64');

        const image = await Jimp.read(buffer);
        expect(image.getExtension()).toEqual('png');

        //test image with puppeteer
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto(`data:image/png;base64, ` + photo.data);
        // await page.screenshot({ path: './test.png' });
        // await browser.close();
    });
});

export default FFMPEGService;
