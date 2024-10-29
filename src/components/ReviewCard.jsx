/* eslint-disable react/prop-types */

import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={imgURL}
				alt={customerName}
				height={120}
				width={120}
				className='rounded-full object-cover'
			/>
			<p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
			<div className='mt-3 flex justify-center items-center gap-2.5'>
				<img
					src={star}
					alt='rating'
					height={24}
					width={24}
					className='object-contain m-0'
				/>
				<p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
			</div>
			<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
