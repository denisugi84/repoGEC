<script>
export default {
    methods: {
        $can(slug) {
            let user = JSON.parse(localStorage.user)

            if(!user.member) {
                return false;
            }

            if(!user.member.title) {
                return false;
            }


            let permissions = user.member.title.permission
            

            for (var i=0; i < permissions.length; i++) {
                if (permissions[i].slug === slug) {
                    return true
                }
            }
        },

        $bulkCan(...slugs) {
            for (let slug of slugs) {
                if(this.$can(slug)) {
                    return true;
                }
            }
        },
    },
}
</script>