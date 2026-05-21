/*
  Import shared NewsItem type
*/
import { NewsItem } from "@/types/news";

/*
  NewsCard component props type
*/
type NewsCardProps = NewsItem;

/*
  Reusable News Card Component
*/
export default function NewsCard({
  title,
 by,
  score,
  url,
}: NewsCardProps) {

  return (

    <div className="bg-gray-900 p-6 rounded-xl">

      {/* News Title */}
      <h2 className="text-2xl font-semibold mb-2">
        {title}
      </h2>

      {/* News Summary */}
      <p className="text-gray-400 mb-4">
        Hacker News discussion related to {title}
      </p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">

        {/* Author and Score */}
        <div>
          <p>Author: {by}</p>
          <p>Score: {score}</p>
        </div>

        {/* External Link */}
        <a
          href={url || "#"}
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Read More
        </a>

      </div>

    </div>

  );
}