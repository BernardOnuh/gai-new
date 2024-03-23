import {Swiper, SwiperSlide} from "swiper/react"
import AdminRaffleStyles from "../assets/styles/AdminRaffleStyles"
import NavbarNftConnected from "../components/Navbar/NavbarNftConnected"
import raffleData from "../assets/inAppData/Raffle"
import Doodle from "../assets/images/doodle.png"
import 'swiper/css'
import { Link } from "react-router-dom"

const RafflePage = () => {
  return (
		<AdminRaffleStyles>
			<NavbarNftConnected />
			<div className='raffle-list'>
				<Swiper
					spaceBetween={20}
					slidesPerView={'auto'}
					className='swiper-grid'
				>
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
					<h4>create profile</h4>
					<div className='row-1'>
						<label htmlFor='contract'>Contract Address</label>
						<input type='text' placeholder='Contract Address' id='contract' />
					</div>
					<div className='row-2'>
						<label htmlFor='token'>Token ID</label>
						<input type='text' placeholder='e.g. 5' id='token' />
					</div>
					<div className='row-3'>
						<label htmlFor='item'>Item Name</label>
						<input type='text' placeholder='e.g. CroDooNFT' id='item' />
					</div>
					<div className='row-4'>
						<label htmlFor='desc'>Description</label>
						<input type='text' placeholder='e.g. Rank 5' id='desc' />
					</div>
					<div className='row-5'>
						<label htmlFor='tickets'>Available Tickets</label>
						<input
							type='text'
							placeholder='Available Tickets address'
							id='tickets'
						/>
					</div>
					<div className='row-6'>
						<label htmlFor='price'>Ticket Price</label>
						<input type='text' placeholder='e.g. 100' id='price' />
					</div>

					<button>approve</button>
				</form>

				<img src={Doodle} alt='doodle' className="doodle"/>
			</div>
		</AdminRaffleStyles>
	);
}

export default RafflePage