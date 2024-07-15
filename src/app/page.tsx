import { getArticles } from "@/app/articles/getArticles";
import { LIMIT } from "@/app/constants";
export default async function Page() {

  const allArticles =  await getArticles({
      limit: LIMIT
  })
    console.log(allArticles)
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {allArticles.contents.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}