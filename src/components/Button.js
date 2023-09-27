import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => { //db accolades pour déclarer directement une propriété et pas un objet
    /*const onClick = (e) => {
        console.log(e)
    }*/
    return(
        <button style={{backgroundColor: color}}
        className="btn"
        onClick= {onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button