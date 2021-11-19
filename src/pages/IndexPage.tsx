import Head from 'components/Head'
import type { ReactElement } from 'react'

export default function IndexPage(): ReactElement {
	return (
		<>
			<Head title='BytesPunk' />
			<div className='h-screen flex flex-wrap items-center justify-center bg-gradient-to-r from-green-400 to-blue-500'>
				<div className='text-4xl text-white font-sans'>
					We will be back soon...
				</div>
			</div>
		</>
	)
}
