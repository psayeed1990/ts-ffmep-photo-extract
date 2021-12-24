import request from 'supertest';
import app from '@/app';
import FFMPEGController from '@/resources/ffmpeg/ffmpeg.controller';

//test GET /ffmpeg/image endpoint
describe('GET /ffmpeg/image', () => {
    // it('should return a photo', async () => {
    //     const timestamp = 1;
    //     const url =
    //         'https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4';
    //     const response = await request(app).get(
    //         `/ffmpeg/image?timestamp=${timestamp}&url=${url}`
    //     );
    //     expect(response.status).toBe(201);
    //     expect(response.body).toHaveProperty('photo');
    // });
});
