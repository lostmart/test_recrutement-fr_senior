import PropTypes from 'prop-types'
import styles from './index.module.scss'

const Alert = ({ text }) => {
	return <div className={styles.container} >{text}</div>
}

Alert.propTypes = {
	text: PropTypes.string.isRequired
}

export default Alert
