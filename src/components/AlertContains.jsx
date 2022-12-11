import Toast from 'react-bootstrap/Toast';
import useGame from '../hooks/useGame';
import { TfiGame } from 'react-icons/tfi';
import ToastContainer from 'react-bootstrap/ToastContainer';
const AlertContains = () => {
	const { setAlert,alert } = useGame();
	return (
		<ToastContainer className='p-3' position='top-start'>
			<Toast show={alert} onClose={() => setAlert(false)}>
				<Toast.Header>
					<div>
						<TfiGame />
					</div>
					<strong className='me-auto'> Deck Of cards</strong>
					<small>Alert</small>
				</Toast.Header>
				<Toast.Body>You must fill in all player fields</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};

export default AlertContains;
