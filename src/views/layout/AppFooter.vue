<template>
    <footer class="footer">
        <div class="container">
            <span class="text-muted">My Chat App @{{ chatYear }}.</span>
        </div>
    </footer>
</template>
<script>
import moment from 'moment';
export default {
    name: "AppFooter",
    data() {
        return {
            chatYear : moment().year()
        }
    }
}
</script>
<style>
    .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f5f5f5;
    }
</style>
