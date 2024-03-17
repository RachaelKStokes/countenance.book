// Schema to create reaction model
const reactionSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      default: Date.now,
      get: (time) => format_date(time)
    }
  },
    {
  
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  //schema to create thought model
  const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
      },
      createdDate: {
        type: Date,
        default: Date.now,
        get: (time) => format_date(time)
      },
      username: {
        type: String,
        required: true
      },
      reactions: [reactionSchema]
    },
    {
  
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  )
  
    thoughtSchema.virtual('reactionCount').get(function() {
      return this.reactions.length;
    });
    const Thought = model('Thought', thoughtSchema)
  
  module.exports = Thought;
  