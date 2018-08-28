<template>
    <section class='booklist-list-section'>
        <div v-for='book in books' v-if='book !== null' :key='book.id' class='booklist-li'>
            <div class='booklist-div-1'>
                <img :src= book.book_cover_url class='booklist-img'/>
            </div>
            <div class='booklist-div-2'>
                <h2 class='booklist-h2'>{{book.book_title}}</h2> 
                <h4>{{book.author1FirstName}} {{book.author1LastName}}</h4>
                <h4>{{book.author2FirstName}} {{book.author2LastName}}</h4>
                <h4>{{book.author3FirstName}} {{book.author3LastName}}</h4>
                <h4>{{book.book_genre}}</h4>
                <p>{{book.book_description}}</p>
            </div>  
        </div>
    </section>
</template>


<script>
// import router from '../router'
export default {
    name: 'BookList',
    data(){
        return {
            books: [],
            apiURL: 'https://galvanize-reads-backend.herokuapp.com/books'
        };
    },
    mounted(){
        fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
            this.books = response.books
        });
    }
}
</script>

<style scoped>
    .booklist-list-section {
        list-style: none;
        display: flex;
        flex-direction: column;
        margin-left: 20vh;
        margin-top: 10vh;
        background-color: goldenrod;
        width: 75vw;
    }
    .booklist-li{
        display: flex;
        justify-content: space-between;
        border: 2px solid black;
        padding: 2vh;
    }
    .booklist-div-1 {
        justify-content: flex-start;
        padding-right: 2vh;
    }
    .booklist-div-2 {
        background-color: rgb(218, 209, 197);
        text-align: left; 
        padding: 2vw;
        border: 2px solid black;

    }
    .booklist-h2 {
        font-weight: bold;
    }

    .booklist-img {
        height: 40vh;
        width: 20vw;
        border: 2px solid black;

    }
</style>
