<template>
	<div class="portfolio">

		<div class="portfolio__title">
			{{ $t('portfolio.title') }}
		</div>

		<div class="container">
			<div class="portfolio__body">
				<button
					@click="slidePrev"
					class="portfolio__button left">
					<img width="24" src="@/assets/Arrow-white-left.png">
				</button>

				<div class="portfolio__album">

					<portfolio-item
						v-for="(item, index) of portfolioAlbum"
						:key="index"
						:itemAlbum="item"
						:index="index"
						:direction="direction"
						:currentSlide="currentSlide" />

				</div>

				<button
					@click="slideNext"
					class="portfolio__button rigth">
					<img width="24" src="@/assets/Arrow-white-right.png">
				</button>
			</div>
		</div>

	</div>
</template>

<script>
import portfolioItem from '@/components/portfolioItem.vue'

export default {
	name: 'portfolioPage',
	components: {
		portfolioItem,
	},
	data() {
		return {
			currentSlide: 0,
			direction: 'left',
			portfolioAlbum: [
				{ img: require('@/assets/app_auth.png'), title: 'portfolioTitle.titleOne', text: 'portfolioText.textOne', link: 'https://starnovskiy97.github.io/Registration-page/', name: 'auth&reg-page' },
				{ img: require('@/assets/app_ping-pong.png'), title: 'portfolioTitle.titleTwo', text: 'portfolioText.textTwo', link: 'https://starnovskiy97.github.io/ping-pong/', name: 'ping-pong' },
				{ img: require('@/assets/app_vr.png'), title: 'portfolioTitle.titleThree', text: 'portfolioText.textThree', link: 'https://starnovskiy97.github.io/VR-traveling/', name: 'vr-traveling' },
			]

		}
	},
	methods: {
		slideNext() {
			if (this.currentSlide >= this.portfolioAlbum.length - 1) {
				this.currentSlide = 0
			} else {
				this.currentSlide++
				this.direction = 'left'
			}
		},
		slidePrev() {
			if (this.currentSlide <= 0) {
				this.currentSlide = this.portfolioAlbum.length - 1
			} else {
				this.currentSlide--
				this.direction = 'right'
			}
		}
	}
}
</script>

<style lang="scss">
.portfolio {
	background-color: #2c2c2c;
	border-top: 1px inset rgba(20, 20, 20, 0.47);
	border-bottom: 1px inset rgba(20, 20, 20, 0.47);

	.container {
		max-width: 73.125rem;
		margin: 0 auto;
		padding: 0 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__body {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 0px 9.375rem 0px;
	}

	&__title {
		font-size: 3rem;
		font-weight: 400;
		line-height: 54/48*100%;
		text-align: center;
		padding: 100px 0 50px 0;
	}

	&__album {
		background-color: #414141;
		position: relative;
		margin: 0 auto;
		border-radius: 30px;
		width: 55rem;
		height: 37rem;
		overflow: hidden;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.47);
	}

	&__button {
		background-color: #FF7600;
		border: none;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin: 0 20px;

		&:hover {
			background-color: #FF8D2B;
			box-shadow: 0px 0px 15px #FF8D2B;
			transition: all 0.3s;
		}
	}
}

@media (max-width: 70rem) {
	.portfolio {
		&__body {
			padding: 0 0px 9rem 0px;
		}

		&__title {
			padding: 80px 0 40px 0;
		}

		&__album {
			width: 46rem;
			height: 30rem;
		}
	}
}

@media (max-width: 64rem) {
	.portfolio {
		&__title {
			font-size: 2.5rem;
		}
	}
}

@media (max-width: 59rem) {
	.portfolio {
		&__title {
			padding: 60px 0 30px 0;
		}

		&__album {
			width: 29rem;
			height: 38.5rem;
		}
	}
}

@media (max-width: 53rem) {
	.portfolio {
		&__body {
			padding: 0 0px 4.5rem 0px;
		}
	}
}

@media (max-width: 43.75em) {
	.portfolio {
		&__button {
			width: 40px;
			height: 40px;

			img {
				width: 15px;
			}
		}
	}
}

@media (max-width: 35.6rem) {
	.portfolio {
		&__body {
			padding: 0 0px 3rem 0px;
		}

		&__title {
			padding: 30px 0 15px 0;
		}

		&__album {
			width: 22.5rem;
			height: 31.5rem;
		}
	}
}

@media (max-width: 31rem) {
	.portfolio {
		&__album {

			width: 23rem;
			height: 30rem;
		}
	}
}

@media (max-width: 25em) {
	.portfolio {
		&__album {
			width: 23rem;
			height: 30rem;
		}

		&__title {
			font-size: 2rem;
		}

		&__button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			margin: 0 10px;

			img {
				width: 10px;
			}
		}
	}
}

@media (max-width: 23rem) {
	.portfolio {
		&__album {
			width: 23rem;
			height: 30rem;
		}
	}
}
</style>