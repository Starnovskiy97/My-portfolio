<template>
	<div class="header">
		<div class="container">

			<router-link class="header__logo" to="/#home">
				<img
					class="header__img"
					src="@/assets/Logo.svg" alt="logo">
				<div class="header__text">Starnovskiy</div>
			</router-link>

			<ul class="header__menu">
				<li
					v-for="(link, index) of menuLinks"
					:key="index"
					@click="scrollLink(link)"
					class="header__link">
					<a>{{ $t(`nav.${link.name}`) }}</a>
				</li>
			</ul>

			<div class="header__burger-wrapper">

				<div class="header__dropbox">
					<button
						class="header__dropbtn"
						@click="openDropdown = !openDropdown">
						{{ this.language.toUpperCase() }}
						<img
							:class="{ active: openDropdown }"
							class=" header__arrow"
							src="@/assets/Arrow-botton.png">
					</button>
					<div
						class=" header__drop-list"
						v-if="openDropdown"
						v-click-outside="onClickOutside">
						<a
							v-for="(lang, index) of langs"
							:key="index"
							@click="chooseLang(lang)">
							{{ lang.name.toUpperCase() }}
						</a>
					</div>
				</div>

				<header-burger
					class="header__menu-burger"
					:menu-links-data="menuLinks" />

			</div>
		</div>
	</div>
</template>

<script>
import headerBurger from '@/components/headerBurgerComp.vue'
import vClickOutside from 'v-click-outside'

export default {
	name: 'headerComp',
	components: { headerBurger },
	data() {
		return {
			openDropdown: false,
			language: 'en',
			langs: [
				{ name: 'en' },
				{ name: 'ru' }
			],
			menuLinks: [
				{ name: 'home' },
				{ name: 'skills' },
				{ name: 'portfolio' },
				{ name: 'contacts' }
			]
		}
	},
	methods: {
		chooseLang(lang) {
			this.language = lang.name

			localStorage.setItem('lang', this.language)

			this.langActive(this.language)

			this.openDropdown = false
		},
		scrollLink(link) {
			this.$router.push(`/#${link.name}`)
		},
		onClickOutside() {
			this.openDropdown = false
		},
		langActive(lang) {
			if (this.$i18n.locale !== lang) {
				this.$i18n.locale = lang
			}
		}
	},
	mounted() {
		if (localStorage.lang) {
			this.language = localStorage.getItem('lang')
		} else {
			this.language
		}

		this.langActive(this.language)
	},
	directives: {
		clickOutside: vClickOutside.directive
	},
}
</script>

<style lang="scss">
.header {
	background-color: #2c2c2c;

	.container {
		max-width: 73.125rem;
		margin: 0 auto;
		padding: 0 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__logo {
		display: flex;
		align-items: center;
	}

	&__img {
		max-width: 3.75rem;
		max-height: 2.5rem;
		margin: 15px 10px 15px 0;
	}

	&__text {
		font-weight: 700;
	}

	&__menu-burger {
		display: none;
	}

	&__menu {
		display: flex;
		flex: 0 1 25%;
	}

	&__link {
		white-space: nowrap;

		&:not(:last-child) {
			margin: 0 4.5rem 0 0;
		}

		a {
			&:hover {
				color: #FF7600;
			}
		}
	}

	a {
		color: #e4e4e4;
	}

	&__burger-wrapper {
		display: flex;
		align-items: center;
	}

	&__dropbtn {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: none;
		color: #e4e4e4;
		font-size: 1.25rem;
		font-weight: 400;

		&:hover {
			color: #FF7600;
		}
	}

	&__arrow {
		width: 0.625rem;
		margin: 0 2rem 0 0.625rem;
		transition: transform 0.2s ease;
	}

	.active {
		transform: rotate(180deg);
	}

	&__drop-list {
		position: absolute;
		background-color: #ffffff;
		text-align: center;
		min-width: 5rem;
		border-radius: 10px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		overflow: hidden;

		a {
			color: black;
			padding: 0.75rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;

			&:hover {
				background-color: rgb(121, 119, 119);
				color: #FF7600;
			}
		}
	}

	@media (max-width: 62.5em) {
		.header {

			&__logo {
				margin-right: 5rem;
			}

			&__link {
				&:not(:last-child) {
					margin: 0 30px 0 0;
				}
			}

			&__menu {
				margin: 0 3rem 0 0;
			}
		}
	}

	@media (max-width: 48em) {
		.header {
			&__menu {
				display: none;
			}

			&__menu-burger {
				display: block;
			}
		}
	}

	@media (max-width: 25em) {
		.header__img {
			max-width: 3rem;
			max-height: 1.5rem;
			margin: 10px 7px 10px 0;
		}
	}
}
</style>