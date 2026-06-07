import TweetService from '../services/tweet-service.js';
import Upload from '../config/file-upload-s3-config.js';

const singleUploader = Upload.single('image');
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    singleUploader(req, res, async function (err) {
        if (err) {
            return res.status(400).json({
                message: 'Error uploading image',
                success: false,
                data: null,
                error: err
            });
        }
        try {
            const tweet = await tweetService.create({
                content: req.body.content,
                image: req.file ? req.file.location : null
            });
            return res.status(201).json({
                message: 'Tweet created successfully',
                success: true,
                data: tweet,
                error: null
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error creating tweet',
                success: false,
                data: null,
                error: error
            });
        }
    });
};

export const getTweet = async (req, res) => {
    try {
        const tweet = await tweetService.get(req.params.id);
        return res.status(200).json({
            message: 'Tweet fetched successfully',
            success: true,
            data: tweet,
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching tweet',
            success: false,
            data: null,
            error: error
        });
    }
};