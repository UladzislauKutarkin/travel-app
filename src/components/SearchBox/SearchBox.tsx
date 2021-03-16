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
        <label  onClick={onClickSearchHandler} className='header-search-title' htmlFor='search'>{props.props[0].search}</label>
        <input   autoFocus={true} autoComplete="off" type = "search" id='search' placeholder={props.props[0].searchPlaceholder} value = {input} onChange = {changeHandler} onKeyDown = {handleKeyPress}></input>
    </div>
    )
}
export default SearchBox;