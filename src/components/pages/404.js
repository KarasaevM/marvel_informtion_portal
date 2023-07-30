import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './styles.scss';

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p className='warning_page-404'>Page doesn't exist</p>
			<Link className='btn_back' to='/'>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
