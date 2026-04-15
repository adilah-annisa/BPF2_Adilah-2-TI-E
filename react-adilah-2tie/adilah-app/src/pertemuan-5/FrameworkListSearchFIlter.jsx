import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag;

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Framework Explorer 🚀
        </h1>
        <p className="text-gray-600 mb-8">
          Cari framework favoritmu, karena manusia suka membandingkan teknologi.
        </p>

        {/* Search + Filter */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 border border-white/50">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-3 rounded-xl border border-gray-200 focue:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>

              <p className="text-gray-600 mb-3">
                {item.description}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                Developed by{" "}
                <span className="font-semibold text-gray-700">
                  {item.details.developer}
                </span>{" "}
                ({item.details.releaseYear})
              </p>

              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-blue-600 font-medium hover:text-blue-800 mb-4"
              >
                Visit Website →
              </a>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-3 py-1 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}