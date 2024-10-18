import { useRouter } from "next/router";

function course() {
  const router = useRouter();

  const { studentId, courseId } = router.query;

  return (
    <div>
      student {studentId} and course {courseId}
    </div>
  );
}

export default course;
