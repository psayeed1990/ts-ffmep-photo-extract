import Photo from '@/resources/ffmpeg/ffmpeg.interface';
import util from 'util';
import { exec } from 'child_process';
const cmd = util.promisify(exec);

class FFMPEGService {
    /**
     * Extracts a photo from a video
     */
    public async extractPhotoFromVideo(
        timestamp: number,
        url: string
    ): Promise<Photo> {
        //extract photo from video at 'timestamp' as png base64 from 'url' using cmd
        const { stdout, stderr } = await cmd(
            //ffmpeg command for base64 png
            `ffmpeg -ss ${timestamp} -i ${url} -vframes 1 -f image2 -y -vcodec png - | base64 -w 0`
        );

        //hide standard error if any for just now
        // if (stderr) {
        //     console.log('stderr:-', stderr);
        // }

        //send the image to the client
        return {
            data: stdout,
        };
    }
}

export default FFMPEGService;
