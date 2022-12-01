
    
   import "./styles.css"
export default function Ticket(){
    function myFunction() {
        // check if circle element exists, and delete it if it does
            // prevent duplicate lotto number circles from popping up
            if (document.getElementsByClassName('circle').length) {
                const removeElements = (elms) => elms.forEach(el => el.remove());
                removeElements( document.querySelectorAll(".circle") );
            }
        let arr = [];
            while(arr.length < 6){
                let r = Math.floor(Math.random() * 45) + 1;
                if(arr.indexOf(r) === -1) arr.push(r);
                let add = true;
       
                for(let y = 0; y < 45; y++) {
                    if(arr[y] == arr) {
                        add = false;
                    }
                }
        }
        //sorts array by ascending order and adds it into new array
            const sorted = [...arr].sort((a,b)=>a-b);
        // for each element of array it adds it creates an element
            // and adds the class circle to each each
            // and then appends it to the lotto element
        sorted.forEach(function (content) {
                let lotto = document.getElementById("lotto");
                let circle = document.createElement('span');
                circle.setAttribute('class', 'circle m-3');
                circle.textContent = content;
                lotto.append(circle);
            });
        }
    return<>
    <div class="container align-middle">
    
    <h1 class="mb-2 light text-center">Lottery Number Generator</h1>
    
    <p> Click the button to generate 6 random numbers between 1 and 45.</p>
    
    <div class="row justify-content-center mt-4 mb-4">
        <button type="button" class="btn btn-info btn-lg" onClick={myFunction}>Generate Lotto Numbers</button>
    </div>
    
    <div class="row justify-content-center" id="lotto">
</div>
    
</div>

    </>

}