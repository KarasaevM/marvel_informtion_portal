import { useState } from 'react';
import decoration from '../../resources/img/vision.png';
import AppBanner from '../appBanner/AppBanner';
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
const App = () => {
	const [selectedChar, setChar] = useState(null);

	const onCharSelected = (id) => {
		setChar(id);
	};

	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar />
				<div className='char__content'>
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
				</div>
				<img className='bg-decoration' src={decoration} alt='vision' />
				<AppBanner />
				<ComicsList />
			</main>
		</div>
	);
};

export default App;
