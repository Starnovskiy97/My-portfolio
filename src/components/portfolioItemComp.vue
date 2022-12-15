<template>
	<transition :name="direction">

		<div
			class="portfolio__item item"
			v-if="currentSlide === index">

			<div class="item__content">
				<img
					class="item__image"
					:src="itemAlbum.img" alt="preview">
				<div class="item__info">
					<div class="item__title">
						{{ $t(itemAlbum.title) }}
					</div>
					<p class="item__text">
						{{ $t(itemAlbum.text) }}
					</p>
					<router-link
						class="item__btn"
						:to="{ name: 'detailPage', params: { id: itemAlbum.name }, query: { info: itemAlbum }, hash: '#home' }">
						{{ $t('portfolio.btn') }}
					</router-link>
				</div>
			</div>

		</div>

	</transition>
</template>

<script>
export default {
	name: 'portfolioItemComp',
	props: {
		itemAlbum: {
			type: Object,
			required: true
		},
		currentSlide: {
			type: Number,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		direction: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss">
.item {
	min-width: 55rem;
	padding: 55px 0 0 55px;
	background-color: #414141;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	&__content {
		display: flex;
	}

	&__image {
		width: 30rem;
		height: 30rem;
		border-radius: 30px;
	}

	&__info {
		max-width: 300px;
		margin: 0 0 0 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__title {
		font-size: 1.3rem;
		line-height: calc(29/24*100%);
	}

	&__text {
		text-indent: 0.5rem;
		word-break: break-word;
		text-align: left;
		margin: 10px 0 30px 0;
	}

	&__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 8rem;
		font-size: 1.1rem;
		height: 3rem;
		border-radius: 30px;
		background-color: #FF7600;
		color: #fff;

		&:hover {
			background-color: #FF8D2B;
			box-shadow: 0px 0px 15px #FF8D2B;
			transition: all 0.3s;
		}

	}
}

.left-enter-active {
	animation: leftInAnimation 0.5s ease-in-out;
}

.left-leave-active {
	animation: leftOutAnimation 0.5s ease-in-out;
}

@keyframes leftInAnimation {
	from {
		transform: translateX(100%);
	}

	to {
		transform: translateX(0);
	}
}

@keyframes leftOutAnimation {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-100%);
	}
}

.right-enter-active {
	animation: rightInAnimation 0.5s ease-in-out;
}

.right-leave-active {
	animation: rightOutAnimation 0.5s ease-in-out;
}

@keyframes rightInAnimation {
	from {
		transform: translateX(-100%);
	}

	to {
		transform: translateX(0%);
	}
}

@keyframes rightOutAnimation {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(100%);
	}
}

@media (max-width: 70em) {
	.item {
		padding: 40px;

		&__image {
			max-width: 25rem;
			max-height: 25rem;
		}

		&__info {
			max-width: 250px;
			margin: 0 0 0 20px;
		}

		&__text {
			margin: 10px 20px 30px 0;
		}
	}
}

@media (max-width: 59em) {
	.item {
		padding: 28px;

		&__content {
			display: flex;
			flex-direction: column;
		}

		&__image {
			max-width: 25rem;
			max-height: 25rem;
			border-radius: 30px;
		}

		&__info {
			max-width: 25rem;
			display: flex;
			align-items: center;
			margin: 0;
		}

		&__title {
			margin: 20px 0 0 20px;
		}

		&__text {
			margin: 5px 0px 0px 0px;
		}

		&__btn {
			position: absolute;
			bottom: 20px;
		}
	}
}

@media (max-width: 35.6em) {
	.item {
		padding: 18px;

		&__content {
			display: flex;
			flex-direction: column;
		}

		&__image {
			max-width: 20rem;
			max-height: 20rem;
			border-radius: 30px;
		}

		&__info {
			max-width: 20rem;
			display: flex;
			align-items: center;
		}

		&__title {
			font-size: 1.1rem;
			margin: 10px 0 0 0;
		}

		&__text {
			margin: 3px 0px 0px 0px;
		}

		&__btn {
			bottom: 15px;
			width: 6rem;
			font-size: 0.9rem;
			height: 2rem;
		}
	}
}

@media(max-width: 25em) {
	.item {
		padding: 17px;
	}
}

@media(max-width: 22em) {
	.item {
		padding: 15px;
	}
}
</style>