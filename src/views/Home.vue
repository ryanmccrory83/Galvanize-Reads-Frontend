<template>
    <div>
        <router-view></router-view>
        <Header />
        <main class="home-main">
            <section class="home-authors">
                <img src="https://blog.softheme.com/wp-content/uploads/2017/03/library-books.jpg" alt="Book" class="home-authors-book">
                <router-link to='/authors' class='home-router-link'>Authors</router-link>
            </section>
            <section class="home-books">
                <img src="http://medievaljourney.com/wp-content/uploads/2014/12/pene-blog1.jpg" alt="Person" class="home-books-person">
                <router-link to='/books' class='home-router-link'>Books</router-link>
            </section>
        </main>
    </div>
    
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'Home',
    components: {
        Header
    }
}
</script>

<style scoped>
.home-main {
display: flex;

}
.home-authors {
display: flex;
flex-flow: column wrap;
align-items: center;
height: 75vh;
width: 50vw;
border: 2px solid black;
margin: 2vh 0vh 2vh 2vh;
}
.home-books {
display: flex;
flex-flow: column wrap;
align-items: center;
height: 75vh;
width: 50vw;
border: 2px solid black;
margin: 2vh 2vh 2vh 0vh;
}
.home-authors-book {
    height: 400px;
    width: 450px;
    padding: 3vh;
}
.home-books-person {
    height: 400px;
    width: 450px;
    padding: 3vh;
}
.authors {
display: flex;
justify-content: center;
list-style: none;
}
.books {
justify-content: center;
list-style: none;
}
.home-router-link {
    text-decoration: none;
    color: black;
    font-size: 20px;
}

</style>
