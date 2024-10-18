import { useRouter } from "next/router";

function Student() {
  const router = useRouter();
  const { studentId } = router.query;

  return <div>student {studentId}</div>;
}

export default Student;
