import mongoose , {Schema} from "mongoose";
// import mongoose AggregatePaginate from "mongoose-aggregate-paginate-v2"
import aggregatePaginate from "mongoose-aggregate-paginate-v2";




const videoSchema = new Schema(
    {
        videoFile: {
            type: String ,// cloudinary url
            required: true
        },
        thumbnails: {
            type : String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
         description: {
            type: String,
            required: true
        },
        duration : {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
        
    },
    {
        timestamps: true
    }
)

// videoSchema.plugin(mongooseAggreatePaginate)
videoSchema.plugin(aggregatePaginate);


export const Video = mongoose.model("Video", videoSchema);