const box1Ref = document.querySelector("#box1")
const box2Ref = document.querySelector("#box2")
const box3Ref = document.querySelector("#box3")
const box4Ref = document.querySelector("#box4")

document.addEventListener("mouseover", (e)=>{
    if(e.target.nodeName === "ARTICLE"){

        switch (e.target.nodeName === "ARTICLE") {
            case e.target.dataset.type === "box1":
                document.body.style.backgroundColor = "#c32aa3";
                break;
            case e.target.dataset.type === "box2":
                document.body.style.backgroundColor = "#1877f2";
                break;
            case e.target.dataset.type === "box3":
                document.body.style.backgroundColor = "#18d1f2";
                break;
            case e.target.dataset.type === "box4":
                document.body.style.backgroundColor = "#25d366";
                break;   
        }
    }
})