import PropTypes from 'prop-types'

const DeleteButton = ({text, color, onClick}) => { 
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

DeleteButton.defaultProps = {
    color: 'red'
}

DeleteButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default DeleteButton