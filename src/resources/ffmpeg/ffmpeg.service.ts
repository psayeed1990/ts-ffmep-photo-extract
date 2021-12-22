import Photo from '@/resources/ffmpeg/ffmpeg.interface';

class FFMPEGService {
    /**
     * Create a new post
     */
    public async extractPhotoFromVideo(
        title: string,
        body: string
    ): Promise<Photo> {
        try {
            return {
                title,
                body,
            };
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default FFMPEGService;
