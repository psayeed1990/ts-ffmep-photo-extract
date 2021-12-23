// Language: typescript
// Path: src/resources/ffmpeg/__tests__/ffmpeg.service.test.ts
// Compare this snippet from src/resources/ffmpeg/ffmpeg.service.test.ts:
// import { expect } from 'chai';
import FFMPEGService from '@/resources/ffmpeg/ffmpeg.service';
import Photo from '@/resources/ffmpeg/ffmpeg.interface';

const ffmpegService = new FFMPEGService();

describe('FFMPEGService', () => {
    it('should extract a photo from a video', async () => {
        const timestamp = 0;
        const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        const photo: Photo = await ffmpegService.extractPhotoFromVideo(
            timestamp,
            url
        );
        expect(photo.data).toBe('string');
    });
});

export default FFMPEGService;
