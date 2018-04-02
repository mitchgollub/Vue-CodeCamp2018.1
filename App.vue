<template>
	<div id="app">
		<PageHeader></PageHeader>
    <router-view></router-view>	
		<PageFooter :text='message'></PageFooter>
	</div>
</template>

<script>
	import PageHeader from './components/PageHeader'
	import PageFooter from './components/PageFooter'

	export default {
    name: 'app',
		components: {
			PageHeader,
			PageFooter
		},
		data() {
			return {
				message: 'philly.NET Labs'
			}
		}
  }
</script>

<style>
	#app {
		font-family: 'Arial';
	}
	body {
		margin:0;
		padding:0;
	}
</style>