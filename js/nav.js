
        let background = document.querySelector("#container");
        let previousButton = document.querySelector(".previous");
        let nextButton = document.querySelector(".next");

        previousButton.addEventListener("click",()=>{
            move('prev')
        })
        nextButton.addEventListener("click",()=>{
            move('next')
        })

        let backgroundImage=["man1.png","man2.png","man3.png","man4.png","man5.png"];
        
        let cnt=0;
        function move(m){
            
            switch(m){
                case "prev": cnt = cnt-1 ; break;
                case "next" : cnt = cnt+1; break;
                default : cnt =0;
            }
                if(cnt <0) cnt=4;
                if(cnt>4) cnt=0;

            let imageUrl ="../images/"+ backgroundImage[cnt];
            let asd = `url(${imageUrl}) no-repeat`;
            
            background.style.background =`url(${imageUrl}) no-repeat`;
            background.style.backgroundSize ="cover";

        }
  