import useEvent from '../../utility/utilityKeyPressFunction';
import './SearchBox.scss'


const SearchBox = (props) => {

//console.log('SearchBox', props );

    const   { changeHandler, search, input, onClickSearchHandler, handleKeyPress} = props;

    // const onClickSearchHandler = () => {
    //     console.log('Search')
    //   }
    
    // const handleKeyPress = (event) => {
    //     if (event.key === "Enter") {
    //         console.log('Search')
    //     }
    //   };
      
    // useEvent("keydown", handleKeyPress);
      

    return (   
        <div>
        <label  onClick={onClickSearchHandler} className='header-search-title' htmlFor='search'>{props.searchline[0]}</label>
        <input   autoFocus={true} autoComplete="off" type = "search" id='search' placeholder={props.placeHolder[0]} value = {input} onChange = {changeHandler} onKeyDown = {handleKeyPress}></input>
    </div>
    )
}
export default SearchBox;