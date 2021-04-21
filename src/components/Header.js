import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {
   
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
        </div>
    )
}

export default Header
