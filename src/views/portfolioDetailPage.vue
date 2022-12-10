<template>
	<div class="portfolio-detail">
		<header-page id="home" />

		<div class="container">
			<div class="portfolio-detail__title">
				{{ $t(title) }}
			</div>

			<div class="portfolio-detail__body">

				<div class="portfolio-detail__item">
					<img
						class="portfolio-detail__image"
						:src="img" alt="preview">
					<div class="portfolio-detail__info">
						{{ $t(text) }}
					</div>
				</div>

				<div class="buttons-group">
					<button class="item__btn mrg-btn" @click="goToBack">
						{{ $t('portfolioItem.back') }}
					</button>

					<a class="item__btn mrg-btn" :href="link" target="_blank">
						{{ $t('portfolioItem.open') }}
					</a>
				</div>

			</div>
		</div>

		<footer-page id="contacts" />
	</div>
</template>

<script>
import headerPage from '@/components/headerPage.vue'
import footerPage from '@/components/footerPage.vue'

export default {
	name: 'portfolioDetailPage',
	components: {
		headerPage,
		footerPage,
	},
	computed: {
		title() {
			return this.$route.query.info.title
		},
		img() {
			return this.$route.query.info.img
		},
		text() {
			return this.$route.query.info.text
		},
		link() {
			return this.$route.query.info.link
		}
	},
	methods: {
		goToBack() {
			this.$router.push('/#portfolio')
		}
	}
}
</script>

<style lang="scss">
.portfolio-detail {
	background-color: #2c2c2c;
	border-bottom: 1px inset rgba(20, 20, 20, 0.47);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;

	.container {
		max-width: 73.125rem;
		margin: 0 auto;
		padding: 0 15px;
	}

	.portfolio-detail__title {
		text-align: center;
		font-size: 3rem;
		margin: 70px 0 50px 0
	}

	.portfolio-detail__item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.portfolio-detail__image {
		border-radius: 30px;
		width: 56.25rem;
	}

	.portfolio-detail__info {
		text-indent: 0.5rem;
		word-break: break-word;
		font-size: 1.3rem;
		max-width: 700px;
		margin: 30px 0 30px 0;
		line-height: 1.2;
	}

	.buttons-group {
		display: flex;
		justify-content: center;
	}

	.mrg-btn {
		margin: 0 10px 50px 10px;
	}
}

@media (max-width: 60em) {
	.portfolio-detail {

		.portfolio-detail__title {
			font-size: 2.5rem;
			margin: 50px 0 50px 0
		}

		.portfolio-detail__image {
			max-width: 48rem;
		}

		.portfolio-detail__info {
			max-width: 600px;
			margin: 30px 0 30px 0;
		}

		.mrg-btn {
			position: static;
			margin: 0 10px 30px 10px;
		}
	}
}

@media (max-width: 43.75em) {
	.portfolio-detail {

		.portfolio-detail__title {
			font-size: 2.5rem;
			margin: 30px 0 30px 0
		}

		.portfolio-detail__image {
			max-width: 37rem;
		}

		.portfolio-detail__info {
			font-size: 1.3rem;
			max-width: 470px;
			margin: 20px 0 20px 0;
		}

		.mrg-btn {
			margin: 0 10px 30px 10px;
		}
	}
}

@media (max-width: 35.6em) {
	.portfolio-detail {

		.portfolio-detail__title {
			font-size: 2rem;
			margin: 20px 0 20px 0
		}

		.portfolio-detail__image {
			max-width: 32rem;
		}

		.portfolio-detail__info {
			font-size: 1.2rem;
			max-width: 350px;
			margin: 15px 0 20px 0;
		}

		.mrg-btn {
			margin: 0 10px 20px 10px;
		}
	}
}

@media (max-width: 28em) {
	.portfolio-detail {

		.portfolio-detail__body {
			margin: 0 0 0px 0;
		}

		.portfolio-detail__title {
			font-size: 1.6rem;
			margin: 10px 0 15px 0
		}

		.portfolio-detail__image {
			max-width: 28rem;
			border-radius: 20px;
		}

		.portfolio-detail__info {
			font-size: 0.9rem;
			max-width: 280px;
			margin: 10px 0 10px 0;
		}

		.mrg-btn {
			margin: 0 5px 15px 5px;
		}
	}
}

@media (max-width: 22em) {
	.portfolio-detail {

		.portfolio-detail__body {
			margin: 0 0 70px 0;
		}
	}
}
</style>