import './SearchBox.scss'
const SearchBox = (props) => {
    const   {placeholder, changeHandler,search } = props;
    return (
        <div>
        <label className='header-search-title' htmlFor='search'>Search</label>
        <input  type = "search" id='search' placeholder={placeholder} value = {search} onChange = {changeHandler}></input>
    </div>

    )
}
export default SearchBox;