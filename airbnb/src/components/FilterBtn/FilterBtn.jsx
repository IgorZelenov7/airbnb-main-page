import filterIcon from './filters.svg';
import "./style.scss";

const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <img src={filterIcon} alt="filter" />
      Filters
    </button>
  );
}
 
export default FilterBtn;