<template>
	<div class="container chat">
		<h2 class="text-primary text-center">
			Chat Window
		</h2>
		<div class="card" style="-webkit-box-shadow: 3px 10px 21px -9px rgba(0,0,0,0.75);-moz-box-shadow: 3px 10px 21px -9px rgba(0,0,0,0.75);box-shadow: 3px 10px 21px -9px rgba(0,0,0,0.75);">
			<div class="card-body">
				<p class="text-secondary nomessages" v-if="messages.length < 0">[No messages yet!]</p>
				<div class="messages" v-chat-scroll="{always:false,smooth:true}">
					<div v-for="message in messages" :key="message.id">
						<div class="col-md-12">
							<span class="text-info">{{ message.name | capitalize }}: </span>
							<span>{{ message.message }}</span>
							<span class="text-secondary time">{{ message.timestamp }}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="card-action">
				<div class="col-md-12">
					<CreateMessage :name="name" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import fb from '@/config/firebaseInit';
import moment from 'moment';

import CreateMessage from '@/views/CreateMessage';

export default {
	name: "Chat",
	components: {
		CreateMessage
	},
	data(){
		return {
			name : this.$route.params.name,
			messages : []
		}
	},
	filters:{
		capitalize(value){
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
	},
	created() {
		let ref = fb.collection('messages').orderBy('timestamp');
				ref.onSnapshot(snapshot => {
				snapshot.docChanges().forEach( change => {
					if(change.type == "added"){
					let doc = change.doc;
					this.messages.push({
						id: doc.id,
						name: doc.data().name,
						message: doc.data().message,
						timestamp: moment(doc.data().timestamp).format('lll')
					});
				}
			})
		})
	}
}
</script>
<style>
    .card-body{
        text-align: left;
    }
    .chat h2{
        font-size: 40px;
        margin-bottom: 0px;
    }
    .chat h5{
        margin-top: 0;
        margin-bottom: 25px;
    }
    .chat span{
        font-size: 18px;
    }
    .chat .time{
        display: block;
        font-size: 10px;
    }
    .messages{
        max-height: 300px;
        overflow: auto;
    }
</style>