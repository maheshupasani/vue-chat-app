<template>
	<div>
		<div class="container">
			<div class="card login">
				<div class="card-body">
					<h2 class="card-title text-center">Login</h2>
					<form @submit.prevent="login" class="text-center">
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Please enter your name ..."
								name="name"
								v-model="loggedName"
								autocomplete="off" />
							<p v-if="error" class="text-danger">{{ error }}</p>
						</div>
						<button class="btn btn-primary">Enter Chat</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name: "login",
    data () {
        return {
            loggedName: "",
            error: null
        }
    },
    methods: {
        login() {
            const self = this;
            if (self.loggedName) {
                self.$router.push({name: 'chat', params: { name: self.loggedName }});
            } else {
                self.error = "Please enter a name!";
            }
        }
    }
}
</script>
<style>
    .login{
    max-width: 450px;
    margin-top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
</style>
