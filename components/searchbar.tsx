/*
  Props for SearchBar component
*/
type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;

  resultCount: number;
  setResultCount: (value: number) => void;

  onSearch: () => void;
};

/*
  Reusable Search Bar Component
*/
export default function SearchBar({
  search,
  setSearch,
  resultCount,
  setResultCount,
  onSearch,
}: SearchBarProps) {

  return (

    <div className="flex gap-4 mb-10">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Start searching here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-3 rounded-lg text-white"
      />

      {/* Result Count Input */}
      <input
        type="number"
        min="0"
        value={resultCount}
        onChange={(e) =>
          setResultCount(Number(e.target.value))
        }
        className="w-24 p-3 rounded-lg text-white"
      />

      {/* Search Button */}
      <button
        onClick={onSearch}
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Search
      </button>

    </div>

  );
}