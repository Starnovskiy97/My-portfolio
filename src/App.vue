<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'app',
	metaInfo() {
		return {
			title: this.$t('meta.title')
		}
	}
}
</script>
<style lang="scss">
* {
	padding: 0;
	margin: 0;
	border: 0;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {
	outline: none;
}

a:focus,
a:active {
	outline: none;
}

nav,
footer,
header,
aside {
	display: block;
}

html,
body {
	height: 100%;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: inherit;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
	cursor: pointer;
}

a:hover {
	text-decoration: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}

body {
	font-family: Fira Code;
	font-size: 1.125rem;
	line-height: calc(21/18*100%);
	color: #FFFFFF;
	font-weight: 300;
	margin: 0;
}

#app {
	min-height: 100%;
	overflow: hidden;
}

@media (max-width: 50em) {
	html {
		font-size: 0.875rem;
	}
}

@media (max-width: 31.25em) {

	html,
	body {
		font-size: 0.75rem;
	}
}

@media (max-width: 22em) {

	html,
	body {
		font-size: 0.625rem;
	}
}
</style>
