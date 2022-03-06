import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const HomePage = lazy(async () => import('pages/IndexPage'))
const PunkOligrachPage = lazy(async () => import('pages/PunkOligrachPage'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/punk-oligrach' component={PunkOligrachPage} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
