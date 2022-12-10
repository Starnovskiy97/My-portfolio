<template>
	<div class="footer">
		<div class="container">

			<div class="footer__contacts">
				<div class="footer__title info">{{ $t('footer.contacts') }}:</div>
				<div class="footer__email info">
					{{ $t('footer.email') }}: Starnovskiy97@gmail.com
				</div>
				<div class="footer__calls info">
					{{ $t('footer.calls') }}: +7 (913) 772-90-88
				</div>
				<div class="footer__media info">
					<a href="https://github.com/Starnovskiy97" class="footer__github icon" target="_blank">
						<img src="@/assets/github.svg" alt="git">
					</a>
					<a href="https://t.me/Starnovskiy97" class="footer__telegram icon" target="_blank">
						<img src="@/assets/telegram.svg" alt="tg">
					</a>
				</div>
			</div>

			<div class="footer__wrapper">
				<div class="footer__logo logo">
					<div class="logo__link">
						<img
							class="logo__img"
							src="@/assets/Logo.svg" alt="logo">
						<div class="logo__text">Starnovskiy</div>
					</div>
					<router-link
						:to="{ hash: 'home' }"
						class="logo__button">
						<img width="24" src="@/assets/Arrow-white-top.png">
					</router-link>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'footerPage'
}
</script>

<style lang="scss">
.footer {
	background-color: #414141;
	color: #E4E4E4;
	font-weight: 300;

	&__wrapper {
		margin: 50px 0;
	}

	.container {
		max-width: 70rem;
		margin: 0 auto;
		padding: 0 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__title {
		font-weight: 600;
		font-size: 1.2rem;
	}

	&__contacts {
		margin: 40px 0px 40px 0;
	}

	.icon {
		margin: 0 1rem 0 0;
	}

	.info {
		&:not(:last-child) {
			margin: 0 0 15px 0;
		}
	}


	.logo {
		display: flex;
		justify-content: center;
		align-items: center;

		&__link {
			display: flex;
			justify-content: center;
		}

		&__img {
			max-width: 3.75rem;
			max-height: 2.5rem;
		}

		&__text {
			font-weight: 700;
			margin: 0 0 0 10px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__button {
			background-color: #FF7600;
			border: none;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			margin: 0 0 0 24px;
			transition: all 0.3s;
			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				background-color: #FF8D2B;
				box-shadow: 0px 0px 15px #FF8D2B;
			}
		}
	}

	@media (max-width: 43.75em) {
		.logo {
			flex-direction: column;
			justify-content: center;

			&__button {
				width: 40px;
				height: 40px;
				margin: 10px 0 0 0px;

				img {
					width: 15px;
				}
			}
		}

		.footer__contacts {
			margin: 30px 0px 30px 0;
		}
	}

	@media (max-width: 31.25em) {
		.footer__wrapper {
			margin: 30px 0;
		}

		.footer__contacts {
			margin: 10px 0px 10px 0;

			img {
				width: 25px;
				height: 25px;
			}
		}

		.logo {
			margin: 0 0 0px 0;

			&__button {
				margin: 10px 0 0px 0px;
			}
		}
	}

	@media (max-width: 25em) {
		.footer__wrapper {
			margin: 20px 0;
		}

		.footer__contacts {
			img {
				width: 20px;
				height: 20px;
			}
		}

		.logo {

			&__img {
				max-width: 3rem;
				max-height: 1.5rem;
			}

			&__link {
				align-items: center;
			}

			&__text {
				margin: 0 0 0 7px;
			}

			&__button {
				margin: 10px 0 0px 0px;
				width: 30px;
				height: 30px;

				img {
					width: 10px;
				}
			}
		}

		.footer__contacts {
			margin: 15px 0px 15px 0;
		}

		.info {
			&:not(:last-child) {
				margin: 0 0 10px 0;
			}
		}
	}
}
</style>