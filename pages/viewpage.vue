<template>
    <div class="_w-100pct">
        <ul class="collection with-header">
            <li class="collection-header"><h4>
                {{title_project}}
            </h4>

            </li>
        </ul>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    data () {
        return {
            project_id: null,
            title_project: null,
            des_pro: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('project').where('project_id', '==', to.params.project_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.project_id = doc.data().project_id
                    vm.title_project = doc.data().title_project
                    vm.des_pro = doc.data().des_pro
                })
            })
        })
    },
    watch: {
        '$route' : 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection('project').where
            ('project_id', '==', this.$route.params.project_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.project_id = doc.data().project_id
                    this.title_project = doc.data().title_project
                    this.des_pro = doc.data().des_pro
                })
            })
        }
    }
}
</script>
