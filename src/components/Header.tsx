import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [logoUrl, setLogoUrl] = useState<string | null>(null);

	const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setLogoUrl(imageUrl);
		}
	};

	return (
		<div className='header'>
			<div className='container'>
				<div className='header__content'>
					<label className='header__logo' htmlFor='logo-upload'>
						{logoUrl ? (
							<img
								className='header__logo-img'
								src={logoUrl}
								alt='Логотип'
							></img>
						) : (
							<span className='header__logo-text'>Добавить логотип</span>
						)}
						<input
							className='header__logo-file'
							type='file'
							id='logo-upload'
							accept='image/*'
							onChange={handleLogoChange}
						></input>
					</label>
					<ul className='header__list'>
						<li className='header__item'>
							<Link className='header__item-link' to={'/'}>Главная</Link>
						</li>
						<li className='header__item'>
							<Link className='header__item-link' to={'/news'}>Новости</Link>
						</li>
						<li className='header__item'>
							<Link className='header__item-link' to={'/services'}>Услуги</Link>
						</li>
						<li className='header__item'>
							<Link className='header__item-link' to={'/gallery'}>Галерея</Link>
						</li>
					</ul>
					<button className='header__button'>Личный кабинет</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
