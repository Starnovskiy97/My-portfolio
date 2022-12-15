<template>
	<div>
		<header-comp id="home" />

		<div class="err__container">
			<h1 class="err__title">{{ $t('error.title') }}</h1>
			<h2 class="err__subtitle">{{ $t('error.subtitle') }}</h2>
			<router-link class="err__link" to="/#home">{{ $t('error.link') }}</router-link>
		</div>

		<footer-comp id="contacts" />
	</div>
</template>

<script>
import headerComp from '@/components/headerComp.vue'
import footerComp from '@/components/footerComp.vue'


export default {
	name: 'errorPage',
	components: {
		headerComp,
		footerComp,
	}
}
</script>

<style>
.err__container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #2c2c2c;
	min-height: 100vh;
}

.err__title {
	font-size: 5rem;
	font-weight: 700;
	letter-spacing: 2px;
	line-height: 5rem;
	color: #e4e4e4;
}

.err__subtitle {
	font-size: 3rem;
	line-height: 3rem;
	color: #e4e4e4;
}

.err__link {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8rem;
	font-size: 1.1rem;
	height: 3rem;
	border-radius: 30px;
	background-color: #FF7600;
	margin-top: 1.5rem;
	color: #fff;
}

.err__link:hover {
	background-color: #FF8D2B;
	box-shadow: 0px 0px 15px #FF8D2B;
	transition: all 0.3s;
}
</style>