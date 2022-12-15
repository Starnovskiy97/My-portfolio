<template>

	<div class="burger">

		<button
			class=" sidemenu__btn"
			@click="menuActive"
			:class="{ active: navOpen }">
			<span class="top"></span>
			<span class="mid"></span>
			<span class="bottom"></span>
		</button>

		<transition name="translateX">
			<nav v-if="navOpen">
				<div class="sidemenu__wrapper">
					<ul class="sidemenu__list">
						<li
							v-for="link of menuLinksData"
							:key="link.id"
							@click="scrollLink(link)"
							class=" sidemenu__item">
							<a>{{ $t(`nav.${link.name}`) }}</a>
						</li>
					</ul>
				</div>
			</nav>
		</transition>

	</div>

</template>

<script>
export default {
	name: 'headerBurgerComp',
	props: {
		menuLinksData: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			navOpen: false,
		}
	},
	methods: {
		scrollLink(link) {
			this.navOpen = false
			this.$router.push({ path: '/', hash: `${link.name}` })

			document.body.style.overflow = ''
		},
		menuActive() {
			this.navOpen = !this.navOpen
			document.body.style.overflow = this.navOpen ? 'hidden' : ''
		}
	}
}
</script>

<style lang="scss">
.burger {
	nav {
		width: 100vw;
		height: 100vh;
		background: rgb(121, 119, 119);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.sidemenu {
		&__btn {
			display: block;
			width: 50px;
			height: 50px;
			background: transparent;
			border: none;
			position: relative;
			z-index: 100;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: #ffffff;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all 0.4s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}

			&.active {
				.top {
					transform: rotate(-45deg);
				}

				.mid {
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}

				.bottom {
					transform: rotate(45deg);
				}
			}

		}

		&__wrapper {
			padding-top: 50px;
		}

		&__list {
			padding-top: 50px;
		}

		&__item {
			a {
				line-height: 2.5rem;
				font-size: 2rem;
				padding: 1.2rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #ffffff;

				&:hover {
					color: #FF7600;
				}
			}
		}
	}
}

.translateX-enter {
	transform: translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
	transform-origin: top left 0;
	transition: 0.2s ease;
}

.translateX-leave-to {
	transform: translateX(-200px);
	opacity: 0;
}
</style>