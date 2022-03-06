/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import IconGoBack from '../../../public/icons/left-arrow.png'
import Icontw from '../../../public/icons/twitter.png'

interface Properties {
	number: number
}

export default function NFT({ number }: Properties): ReactElement {
	return (
		<div className='w-full mt-6 md:mt-0 md:w-6/12 md:h-screen flex flex-wrap items-center justify-center'>
			<div className='px-4 md:px-8'>
				<h1 className='title text-2xl md:text-5xl font-medium leading-normal py-2 mb-4'>
					Punk Oligrach #{number}
				</h1>
				<p className='text-base md:text-lg text-gray-500 mb-4'>
					PunkOligrach launched as a fixed set of 1024 items in 2022 with
					ERC-721 standard. PunkOligrach become a mainstream in recent days. You
					ware watch from fixed supply minted nft and currently is
					<span className='italic font-medium text-gray-600'>
						{' '}
						Punk Oligrach #{number}
					</span>
				</p>
				<a
					href='https://twitter.com/MdMusa091'
					target='_blank'
					rel='noreferrer'
					role='button'
					className='text-xs text-gray-500 flex flex-row mb-8 italic'
				>
					Follow us on <img className='w-6 ml-2' src={Icontw} alt='bytepunk' />
				</a>
				<a
					href='https://bytespunk.com/'
					target='_blank'
					rel='noreferrer'
					role='button'
					className='text-xl'
				>
					<div className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'>
						<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							More Info...
						</span>
					</div>
				</a>
				<div className='absolute md:bottom-4 md:right-4'>
					<Link to='/'>
						<img
							className='w-12 mx-auto'
							src={IconGoBack}
							alt='go back to home page'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
