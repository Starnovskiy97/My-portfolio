<template>
	<div class="home">
		<header-page id="home" />

		<div class="container">
			<div class="home__wrapper">

				<div class="home__body">
					<div class="home__column-info">
						<h2 class="home__title">
							{{ $t('home.hello') }}
						</h2>
						<h1 class="home__subtitle">
							{{ $t('home.name') }}<br>{{ $t('home.surname') }}
						</h1>
						<p class="home__text">
							{{ $t('home.who') }}
						</p>
					</div>
				</div>

				<div class="home__main-img">
					<img src="@/assets/main-image.svg" alt="main">
				</div>

			</div>
		</div>

		<skills-page id="skills" />
		<portfolio-page id="portfolio" />
		<footer-page id="contacts" />

	</div>
</template>

<script>
import headerPage from '@/components/headerPage.vue'
import skillsPage from '@/components/skillsPage.vue'
import portfolioPage from '@/components/portfolioPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
	name: 'homePage',
	components: {
		headerPage,
		skillsPage,
		portfolioPage,
		footerPage,
	}
}
</script>

<style lang="scss">
.home {
	background-color: #2c2c2c;
	border-bottom: 1px inset rgba(20, 20, 20, 0.47);
	min-height: 100vh;

	.container {
		max-width: 73.125rem;
		margin: 0 auto;
		padding: 0 15px;
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__body {
		display: flex;
	}

	&__column-info {
		margin: 195px 0 150px 0;
	}

	&__title {
		font-weight: 600;
		font-size: 3rem;
		letter-spacing: 2px;
		color: #e4e4e4;
	}

	&__subtitle {
		font-weight: 700;
		font-size: 4rem;
		letter-spacing: 2px;
		line-height: 72/64*100%;
		margin: 20px 0;
		color: #e4e4e4;
	}

	&__text {
		color: #e4e4e4;
		letter-spacing: 2px;
	}

	&__main-img {
		img {
			width: 500px;
		}
	}

	@media (max-width: 63em) {
		.home {
			&__column-info {
				margin: 150px 0 30px 0;
			}

			&__title {
				font-size: 2.5rem;
			}

			&__subtitle {
				font-size: 3.5rem;
			}

			&__wrapper {
				flex-direction: column;
			}
		}
	}

	@media (max-width: 50em) {
		.home {
			&__column-info {
				margin: 100px 0 20px 0;
			}

			&__title {
				font-size: 2rem;
			}

			&__subtitle {
				font-size: 3rem;
			}
		}
	}

	@media (max-width: 42.5em) {
		.home {
			&__column-info {
				margin: 60px 0 20px 0;
			}

			&__title {
				font-size: 1.5rem;
			}

			&__subtitle {
				font-size: 2.5rem;
			}
		}
	}

	@media (max-width: 31.25em) {
		.home__main-img {
			img {
				width: 300px;
			}
		}
	}
}
</style>