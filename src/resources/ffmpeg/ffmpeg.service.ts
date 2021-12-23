import Photo from '@/resources/ffmpeg/ffmpeg.interface';
import HttpException from '@/utils/exceptions/http.exception';
import ffmpeg from 'ffmpeg';

class FFMPEGService {
    /**
     * Create a new post
     */
    public async extractPhotoFromVideo(
        timestamp: number,
        url: string
    ): Promise<Photo> {
        // Create a new ffmpeg instance
        console.log('hi');
        new ffmpeg(url, (err, video) => {
            if (err) {
                console.log('hi');

                throw new Error(err.message);
            }
            // Get the duration of the video
            console.log('hi');

            console.log(video);
        });

        //extract photo from video at timestamp

        return {
            timestamp,
            url,
        };
    }
}

export default FFMPEGService;
