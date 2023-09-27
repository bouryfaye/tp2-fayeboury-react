import PropTypes from 'prop-types'

const EditButton = ({text, color}) => { 
    
    return(
        <>   
        <button style={{backgroundColor: color}}
        className="btn">
            {text}
        </button>
        </>
    )
}

EditButton.defaultProps = {
    color: '#f1af71'
}

EditButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default EditButton