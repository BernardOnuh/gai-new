import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AdminRaffleStyles from '../assets/styles/AdminRaffleStyles';
import NavbarNftConnected from '../components/Navbar/NavbarNftConnected';
import raffleData from '../assets/inAppData/Raffle';
import Doodle from '../assets/images/doodle.png';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { createRaffle } from '../../contract/config';

const RafflePage = () => {
	const [nftCA, setNftCA] = useState('');
	const [tokenID, setTokenID] = useState('');
	const [itemName, setItemName] = useState('');
	const [description, setDescription] = useState('');
	const [availableTickets, setAvailableTickets] = useState('');
	const [ticketPrice, setTicketPrice] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createRaffle(nftCA, tokenID, ticketPrice, availableTickets);
			alert('Raffle created successfully');
		} catch (error) {
			console.error('Failed to create raffle', error);
			alert('Failed to create raffle');
		}
	};

	return (
		<AdminRaffleStyles>
			<NavbarNftConnected />
			<div className='raffle-list'>
				<Swiper spaceBetween={20} slidesPerView={'auto'} className='swiper-grid'>
					{raffleData.map((dataItem) => {
						const { id, name, image } = dataItem;
						return (
							<SwiperSlide key={id} className='image-card'>
								<div className='card-item'>
									<p>Tickets 1/50</p>
									<img src={image} alt={name} />
									<Link to={`/raffle/${id}`}>
										<span>{name}</span>
										<i className='fa-solid fa-circle-chevron-down'></i>
									</Link>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>

			<div className='raffle-form'>
				<form>
					<h4>Create Profile</h4>
					<div className='row-1'>
						<label htmlFor='contract'>Contract Address</label>
						<input
							type='text'
							placeholder='Contract Address'
							id='contract'
							value={nftCA}
							onChange={(e) => setNftCA(e.target.value)}
						/>
					</div>
					<div className='row-2'>
						<label htmlFor='token'>Token ID</label>
						<input
							type='text'
							placeholder='e.g. 5'
							id='token'
							value={tokenID}
							onChange={(e) => setTokenID(e.target.value)}
						/>
					</div>
					<div className='row-3'>
						<label htmlFor='item'>Item Name</label>
						<input
							type='text'
							placeholder='e.g. Ax0l on Cronos'
							id='item'
							value={itemName}
							onChange={(e) => setItemName(e.target.value)}
						/>
					</div>
					<div className='row-4'>
						<label htmlFor='desc'>Description</label>
						<input
							type='text'
							placeholder='e.g. Rank 5'
							id='desc'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className='row-5'>
						<label htmlFor='tickets'>Available Tickets</label>
						<input
							type='text'
							placeholder='Available Tickets'
							id='tickets'
							value={availableTickets}
							onChange={(e) => setAvailableTickets(e.target.value)}
						/>
					</div>
					<div className='row-6'>
						<label htmlFor='price'>Ticket Price</label>
						<input
							type='text'
							placeholder='e.g. 100'
							id='price'
							value={ticketPrice}
							onChange={(e) => setTicketPrice(e.target.value)}
						/>
					</div>

					<button onClick={handleSubmit}>Create Raffle</button>
				</form>

				<img src={Doodle} alt='doodle' className='doodle' />
			</div>
		</AdminRaffleStyles>
	);
};

export default RafflePage;
