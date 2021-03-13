import useEvent from '../../utility/utilityKeyPressFunction';
import './SearchBox.scss'


const SearchBox = (props) => {

    const   {placeholder, changeHandler,search } = props;

    const onClickSearchHandler = () => {
        console.log('Search')
      }
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log('Search')
        }
      };
      
    useEvent("keydown", handleKeyPress);
      

    return (   
        <div>
        <label onClick={onClickSearchHandler} className='header-search-title' htmlFor='search'>Search</label>
        <input  autoFocus={true} autoComplete="off" type = "search" id='search' placeholder={placeholder} value = {search} onChange = {changeHandler}></input>
    </div>
    )
}
export default SearchBox;