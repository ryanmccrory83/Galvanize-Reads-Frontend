<template>
    <div>
        <router-view></router-view>
        <Header />
        <main class='authors-main'>
            <aside> <SideNav /> </aside>
            
        </main>
    </div>
    
</template>

<script>
import Header from '../components/Header'
import SideNav from '../components/SideNav'

export default {
    name: 'Authors',
    components: {
        Header,
        SideNav,
    
    }
    
}
</script>

<style>
.authors-main {

}

</style>
