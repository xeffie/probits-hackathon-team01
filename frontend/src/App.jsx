import { Link, Outlet, useLocation } from 'react-router-dom';

function App() {
	const { pathname } = useLocation();
	const isCoachPage = pathname === '/coach';
	const showViewSwitch = pathname === '/' || isCoachPage;

	return (
		<>
			{showViewSwitch && (
				<div className='view-switch'>
					<Link to={isCoachPage ? '/' : '/coach'}>
						{isCoachPage ? 'Till användarvyn' : 'Till coachvyn'}
					</Link>
				</div>
			)}

			<Outlet />
		</>
	);
}

export default App;
