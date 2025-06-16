interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const categories = ["All", "Java", "Python"];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selected,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Filter by Category:
      </label>
      <select
        className="w-full border border-gray-300 rounded px-3 py-2"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
