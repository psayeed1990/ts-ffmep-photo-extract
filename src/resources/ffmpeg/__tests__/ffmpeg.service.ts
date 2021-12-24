// Language: typescript
// Path: src/resources/ffmpeg/__tests__/ffmpeg.service.test.ts
// Compare this snippet from src/resources/ffmpeg/ffmpeg.service.test.ts:
// import { expect } from 'chai';
import FFMPEGService from '@/resources/ffmpeg/ffmpeg.service';
import Photo from '@/resources/ffmpeg/ffmpeg.interface';

//call the service in a function
const photoExtractTestFunction = async () => {
    const ffmpegService = new FFMPEGService();
    const timestamp = 0;
    const url =
        'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
    const photo: Photo = await ffmpegService.extractPhotoFromVideo(
        timestamp,
        url
    );
    return photo;
};

describe('FFMPEGService', () => {
    //test photo data to be string

    it('Extracted photo should be a string', async () => {
        photoExtractTestFunction().then((photo) => {
            expect(typeof photo.data).toEqual('string');
        });
    });

    //test photo data to be string instance and not empty string or null or undefined
    // it('Extracted photo should not be a empty string ', async () => {
    //     //test photo data to be a string instance
    //     //pexpect(photo.data).toBeInstanceOf(String);
    //     //test photo data to be a string instance and not empty string or null or undefined
    //     expect(photo.data).not.toEqual('');
    //     expect(photo.data).not.toEqual(' ');
    // });
});

export default FFMPEGService;
