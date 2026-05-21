"use client";

// Import React hook
import { useState } from "react";

// Import reusable components
import NewsCard from "@/components/newscard";
import SearchBar from "@/components/searchbar";

// Import shared type
import { NewsItem } from "@/types/news";

/*
  Main Homepage Component
*/
export default function Home() {

  /*
    State for search input
  */
  const [search, setSearch] = useState("");

  /*
    State for result count input
  */
  const [resultCount, setResultCount] = useState(10);

  /*
    State for submitted result count
  */
  const [submittedResultCount, setSubmittedResultCount] = useState(10);

  /*
    State for fetched news data
  */
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  /*
    Loading state
  */
  const [loading, setLoading] = useState(false);

  /*
    Error state
  */
  const [error, setError] = useState("");

  /*
    Fetch news from backend API
  */
  const fetchNews = async () => {

    try {

      // Start loading
      setLoading(true);

      // Clear previous errors
      setError("");

      // Fetch from backend
      const response = await fetch(
        `https://hackernews-clone-backend-y6x2.onrender.com/search?q=${search}`
      );

      // Convert response to JSON
      const data = await response.json();

      // Store backend results
      setNewsData(data.results);

    } catch (err) {

      // Set error message
      setError("Failed to fetch news");

    } finally {

      // Stop loading
      setLoading(false);

    }

  };

  return (

    <main className="min-h-screen bg-black text-white p-10">

      {/* Website Title */}
      <h1 className="text-4xl font-bold mb-10">
        TechPulse
      </h1>

      {/* Search Section */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        resultCount={resultCount}
        setResultCount={setResultCount}
        onSearch={() => {

          setSubmittedResultCount(resultCount);

          fetchNews();

        }}
      />

      {/* Loading State */}
      {loading && (
        <p className="text-blue-400 mb-6">
          Loading news...
        </p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-red-400 mb-6">
          {error}
        </p>
      )}

      {/* Empty State */}
      {!loading && newsData.length === 0 && (
        <p className="text-gray-400">
          Search for a topic to view news
        </p>
      )}

      {/* News Cards */}
      <div className="space-y-6">

        {newsData
          .slice(0, submittedResultCount)
          .map((news) => (

            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              by={news.by}
              score={news.score}
              url={news.url}
            />

          ))}

      </div>

    </main>

  );
}