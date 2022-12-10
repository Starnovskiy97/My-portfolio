<template>
	<div class="skills">
		<div class="container">
			<div class="skills__title">
				{{ $t('skills.title') }}
			</div>

			<div class="skills__items">
				<div
					v-for="(item, index) in items"
					:key="index"
					class="skills__item">
					<img :src="item.img" alt="img">
					<p class="skills__text">
						{{ item.text }}
					</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'skillsPage',
	data() {
		return {
			items: [
				{ img: require('@/assets/html.svg'), text: 'HTML' },
				{ img: require('@/assets/css.svg'), text: 'CSS' },
				{ img: require('@/assets/js.svg'), text: 'JavaScript' },
				{ img: require('@/assets/vuejs.svg'), text: 'Vue.js' },
			]
		}
	}
}
</script>

<style lang="scss">
.skills {
	background-color: #414141;

	.container {
		max-width: 73.125rem;
		margin: 0 auto;
		padding: 0 15px;
	}

	&__title {
		font-size: 3rem;
		font-weight: 400;
		line-height: 54/48*100%;
		text-align: center;
		padding: 100px 0 50px 0;
	}

	&__items {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 0 6.875rem 0;
	}

	&__item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		width: 250px;
		height: 250px;
		border-radius: 30px;
		background-color: #2c2c2c;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.47);
		color: #e4e4e4;
		margin: 10px;
	}

	&__text {
		font-size: 1.3rem;
		line-height: 29/24*100%;
		font-weight: 300;
		margin-top: 15px;
	}

	@media (max-width: 64em) {
		.skills__title {
			font-size: 2.5rem;
			padding: 50px 0 30px 0;
		}

		.portfolio__body {
			margin: 0 0 90px 0
		}
	}

	@media (max-width: 53em) {
		.skills {
			&__items {
				padding: 0 0 4.5rem 0;
			}

			&__item {
				width: 220px;
				height: 220px;
			}
		}
	}

	@media (max-width:48em) {
		.skills__title {
			font-size: 2.5rem;
			padding: 50px 0 25px 0;
		}
	}

	@media (max-width: 31.25em) {
		.skills {
			&__items {
				padding: 0 0 2rem 0;

				img {
					max-width: 60px;
				}
			}

			&__item {
				width: 150px;
				height: 150px;
			}
		}

		.skills__title {
			padding: 30px 0 15px 0;
		}
	}

	@media (max-width: 25em) {
		.skills__title {
			font-size: 2rem;
			padding: 30px 0 15px 0;
		}
	}
}
</style>