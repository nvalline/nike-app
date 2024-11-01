/* eslint-disable react/prop-types */
const Button = ({
	label,
	iconUrl,
	altText,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
				backgroundColor
					? `${backgroundColor} ${borderColor} ${textColor}`
					: 'bg-coral-red border-coral-red text-white'
			} rounded-full ${fullWidth && 'w-full'}`}
		>
			{label}{' '}
			{iconUrl && (
				<img
					src={iconUrl}
					alt={`${altText} icon`}
					className='ml-2 rounded-full w-5 h-5'
				/>
			)}
		</button>
	);
};

export default Button;
