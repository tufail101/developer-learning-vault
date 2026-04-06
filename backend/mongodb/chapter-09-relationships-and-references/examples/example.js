// This example shows one document referencing another by ObjectId.
const lessonSchema = new mongoose.Schema({
  title: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});
