import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const HomePage = lazy(async () => import('pages/IndexPage'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
