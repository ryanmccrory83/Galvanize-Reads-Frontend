<template>
    <div class="Header">    
        <a href="/"><img src="../assets/galvanize-logo.png" class="header-img"></a>
        <h1 class="header-h1">Ryan's Reads</h1>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.Header {
background-color: goldenrod;
border: 2px solid black;
width: 100vw;
display: flex;
flex-flow: row nowrap;
align-items: center;
margin-left: -8px;
margin-bottom: 20px;
}
.header-img {
    border: 4px solid black;
    height: 100px;
    width: 150px;
    margin-right: 20px;
}
.header-h1 {
    text-shadow: 2px 2px grey;
    font-size: 40px;
    font-family: 'PT Sans', sans-serif;
}

</style>
