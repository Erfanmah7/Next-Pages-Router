import { useRouter } from "next/router";

function Article() {
  const router = useRouter();

  //تا زمانیکه آرایه لود بشه فعلا خالی بفرست که ارور نده
  const slugs = router.query.slugs || [];

  if (slugs.length > 1) {
    //این نوع فایل به این قسمت اشاره دارد
    // [...slugs].js
    return (
      <div>
        Article : {slugs[0]} - {slugs[1]}/{slugs[2]}/{slugs[3]} - {slugs[4]}
      </div>
    );
  }
  //این نوع فایل به این قسمت اشاره دارد
  // [[...slugs]].js
  return <div>Article</div>;
}

export default Article;
