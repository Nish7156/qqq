import Dropdown from "../Dropdown";
type Option = {
  value: string;
  label: string;
};
const options: Option[] = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
];

function Category() {
  return (
    <div className="container">
      <div className="w-44	m-auto">
        <Dropdown options={options} />
      </div>
    </div>
  );
}

export default Category;
