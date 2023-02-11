import "../styles/Categories.css";

function Categories({ setActiveCategories, categories, activeCategories }) {
  function handleCategory(options) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        if (options[i].value === "") {
          setActiveCategories(categories);
        } else if (!activeCategories.includes(options[i].value)) {
          setActiveCategories([...activeCategories, options[i].value]);
        } else {
          setActiveCategories(
            [...activeCategories].filter((cat) => options[i].value !== cat)
          );
        }
      }
    }
  }
  return (
    <div className="lmj-categories">
      <select
        multiple
        value={activeCategories}
        onChange={(e) => handleCategory(e.target.options)}
        className="lmj-categories-select"
      >
        <option value="">Toutes</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategories([])}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
