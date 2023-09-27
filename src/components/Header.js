import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    // const onClick = () => {
    //     console.log('Click component')
    // }
    return(
        <header className="header">
            <h1>{props.title}</h1>
            <Button text={props.showAdd ? 'Fermer' : 'Ajouter' } color={props.showAdd ? 'red' : 'rgb(8, 141, 79)' } onClick={props.onAddBtn}/>
            
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Product Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
/*
const headingStyle = {

    color: 'red', 
    backgroundColor: 'black'
}*/
export default Header