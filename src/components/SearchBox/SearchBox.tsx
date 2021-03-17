import "./SearchBox.scss";

const SearchBox = (props) => {
  const {
    changeHandler,
    input,
    onClickSearchHandler,
    handleKeyPress,
  } = props;

  return (
    <div>
      <label
        onClick={onClickSearchHandler}
        className="header-search-title"
        htmlFor="search"
      >
        {props.props[0].search}
      </label>
      <input
        autoFocus={true}
        autoComplete="off"
        type="search"
        id="search"
        placeholder={props.props[0].searchPlaceholder}
        value={input}
        onChange={changeHandler}
        onKeyDown={handleKeyPress}
      ></input>
    </div>
  );
};
export default SearchBox;
