<template>
    <div class="container createMessage">
        <span class="newMessageText">New Message (Press Enter to send)</span>
        <form @submit.prevent="sendMessage">
            <div class="form-group">
                <input
                type="text"
                name="message"
                class="form-control input-form"
                v-model="newMessage"
                autocomplete="off"/>
                <p class="text-danger" v-if="error">{{ error }}</p>
            </div>
        </form>
    </div>
</template>
<script>
import fb from '@/config/firebaseInit';

export default {
    name: "CreateMessage",
    props: ["name"],
    data() {
        return {
            newMessage: null,
            error: null
        }
    },
    methods: {
        sendMessage(){
            if(this.newMessage){
                fb.collection('messages').add({
                    message: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                });
                this.newMessage = null;
                this.error = null;
            }else{
                this.error = "Please enter message first"
            }
        }
    },
}
</script>
<style>
    .input-form{
        border: unset;
        border-bottom: 2px solid #ced4da;
        border-radius: unset;
    }
    .input-form:focus{
        border-color: #17a2b8;
        box-shadow: unset;
    }
    .newMessageText{
        text-align: left;
        font-size: 10px !important;
        color:#6c757d;
    }
    .createMessage{
        margin-bottom:30px;
        padding-top:30px;
        border-top:1px solid #ced4da;
    }
</style>