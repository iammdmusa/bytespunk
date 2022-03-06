/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Head from 'components/Head'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import NFT from '../components/punkOligrach/nft'
import NFTDetials from '../components/punkOligrach/nftDetails'

export default function IndexPage(): ReactElement {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const range = { min: 1, max: 1024 }
	const delta = range.max - range.min
	const rand = Math.round(range.min + Math.random() * delta)
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const [numb, setNumb] = useState<number>(10)
	useEffect(() => {
		const intervalId = setInterval(() => {
			setNumb(rand)
			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		}, 5000)
		return () => clearInterval(intervalId)
	}, [rand, setNumb])
	return (
		<>
			<Head title='Welcome to Punk Oligrach NFT' />
			<div className='md:h-screen flex flex-wrap md:items-center md:justify-center'>
				<NFT number={numb} />
				<NFTDetials number={numb} />
			</div>
		</>
	)
}
