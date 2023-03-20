<div class="wrapper">
  	<div class="grid">
    	<div class="nest">I have</div>
    	<div class="nest">three</div>
    	<div class="nest">boxes</div>
 	</div>
</div>

<style>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-auto-rows: 200px;
}
  
.grid {
    display: grid;
    /* position: relative; */
    grid-template-columns: repeat(3, 1fr);
    grid-column: 2/3;
}
  
.nest {
    display: flex;
    justify-content: center;
    height: 100px;
}
  
/* .wrapper > div, .nest {
    border-style: solid;
} */
</style>