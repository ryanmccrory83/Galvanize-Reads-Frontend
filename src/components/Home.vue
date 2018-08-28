<template>
    <div>
        <Header />
        <main class="home-main">
            <section class="home-authors">
                <img src="https://via.placeholder.com/400x400" alt="Book" class="home-authors-book">
                <ul class="authors">
                    <li>Authors</li>
                </ul>
            </section>
            <section class="home-books">
                <img src="https://via.placeholder.com/400x400" alt="Person" class="home-books-person">
                <ul class="books">
                    <li>Books</li>
                </ul>
            </section>
        </main>
    </div>
    
</template>

<script>
import Header from './Header'
export default {
    name: 'Home',
    components: {
        Header
    }
}
</script>

<style>
.home-main {
display: flex;

}
.home-authors {
display: flex;
flex-flow: column wrap;
height: 75vh;
width: 50vw;
border: 2px solid black;
margin: 2vh 0vh 2vh 2vh;
}
.home-books {
display: flex;
flex-flow: column wrap;
height: 75vh;
width: 50vw;
border: 2px solid black;
margin: 2vh 2vh 2vh 0vh;
}
.home-authors-book {
    padding: 3vh;
}
.home-books-person {
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

</style>
