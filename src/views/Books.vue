<template>
    <div>
        <router-view></router-view>
        <Header />
        <main>
            <section class='books-section-nav'>
                <div class='books-section-div'>
                    <img src="https://blog.softheme.com/wp-content/uploads/2017/03/library-books.jpg" alt="Book" class='books-img'>
                    <router-link to='/authors' class='books-router-link'>Authors</router-link>
                </div>
                <div class='books-section-div'>
                    <img src="http://medievaljourney.com/wp-content/uploads/2014/12/pene-blog1.jpg" alt="Person" class='books-img'>
                    <router-link to='/books' class='books-router-link'>Books</router-link>
                </div>
            </section> 
            <section class='booklist-section'>
                <BookList />
            </section> 
            
        </main>      
    </div>
</template>

<script>
import Header from '../components/Header'
import BookList from '../components/BookList'

export default {
    name: 'Books',
    components: {
        Header,
        BookList
    },
    data(){
        return {
            books: null,
            apiURL: 'https://galvanize-reads-backend.herokuapp.com/books'
        }
    },
    mounted(){
        fetch(this.apiURL)
            .then(response => response.json())
            .then(response => {
                this.books = response;
                console.log(this.books);
            });
        }
}


</script>

<style scoped>
main {
    background-color: silver;
}

.books-section-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.books-section-div {
    width: 250px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: goldenrod;
}
.books-router-link {
    padding-left: 5px;
    text-decoration: none;
    color: black;
    font-size: 20px;
}
.booklist-section {
    align-content: flex-end;
}
.books-img {
    height: 100px;
    width: 100px;
    margin-left: -5vw;
}
</style>
