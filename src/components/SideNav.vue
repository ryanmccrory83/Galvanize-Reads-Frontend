<template>
    <section class='sidenav-section-nav'>
        <div class='sidenav-section-div'>
            <img src="https://blog.softheme.com/wp-content/uploads/2017/03/library-books.jpg" alt="Book" class='sidenav-img'>
            <router-link to='/authors' class='sidenav-router-link'>Authors</router-link>
        </div>
        <div class='sidenav-section-div'>
            <img src="http://medievaljourney.com/wp-content/uploads/2014/12/pene-blog1.jpg" alt="Person" class='sidenav-img'>
            <router-link to='/books' class='sidenav-router-link'>Books</router-link>
        </div>
    </section> 
    
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style scoped>

.sidenav-section-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sidenav-section-div {
    width: 100px;
    height: 250px;
    padding-bottom: 4vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    /* align-items: center; */
    border: 1px solid black;
}
.sidenav-router-link {
    display:block;
    align-items: center;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    text-decoration: none;
    margin-top: -2vh;
    padding-right: 10vh;
    color: black;
    font-size: 20px;
}
.sidenav-img {
    height: 100px;
    width: 100px;
    padding-bottom: 5vh;
    margin-top: -12vh;
}


</style>
