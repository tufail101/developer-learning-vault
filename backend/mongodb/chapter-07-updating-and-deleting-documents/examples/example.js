// This example updates one document and deletes another.
await Course.findByIdAndUpdate(courseId, { published: false });
await Course.findByIdAndDelete(oldCourseId);
