import { useRouter } from "next/router";

function user() {
  const router = useRouter();

  const { userId } = router.query;

  return <div>user {userId}</div>;
}

export default user;
