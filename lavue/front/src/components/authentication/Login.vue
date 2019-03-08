<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input v-model="email" class="form-control" type="email" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password"/>
                    </div>
                    <button @click="login" class="btn btn-success pull-right">Login</button>
                </div>
            </div>
        </div>

        <pre>
            {{ $data }}
        </pre>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login () {

            var data = {
                client_id: 2,
                client_secret: 'N5Vbi4KKB1rK6u9Lxv0IJBnlViZiECAr3AE9IaZD',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }

            this.$http.post("oauth/token", data)
            .then(response => {
                this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

                this.$router.push("/feed")
            })
        }
    }
}
</script>

<style>
    
</style>