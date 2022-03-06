/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { ReactElement } from 'react'

interface Properties {
	number: number
}
export default function NFT({ number }: Properties): ReactElement {
	const API_KEY = import.meta.env.VITE_API_KEY
	return (
		<div className='h-auto md:h-screen bg-red-300 w-full md:w-6/12'>
			<img
				src={`https://gateway.pinata.cloud/ipfs/${API_KEY}/${number}.png`}
				alt='d'
				className='md:h-screen w-full'
			/>
		</div>
	)
}
