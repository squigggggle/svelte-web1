<style>
    button {
        background-color: aquamarine;
        border: none;
        margin: 2vw;
        padding: 3vw;
    }
</style>

<script>
    let count = 0;
    let count2 = 1;
    let count3 = 1;
    function incrementCount(){
        count++;
    }
    function incrementPadding(){
        let pad = document.getElementById("paddings");
        count2++;
        count3 += 0.1;
        pad.style.padding = (count2)+"vw";
        pad.style.fontSize = (count3)+"em";
    }
</script>

<button on:click={incrementCount} id="paddings" on:click={incrementPadding}>
    Clicked {count} {count === 1 ? 'time' : "times"}
</button>