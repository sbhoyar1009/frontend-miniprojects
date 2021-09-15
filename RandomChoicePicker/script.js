const TagsElement = document.getElementById("tags")
const TextArea = document.getElementById("textarea")

TextArea.focus();

TextArea.addEventListener("keyup",(e)=>{
    createTags(e.target.value);
    
    if(e.key=='Enter'){
        setTimeout(()=>{
            e.target.value = ""
        },10)

        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(",").filter((tag)=>tag.trim()!="").map((tag)=>tag.trim());
    TagsElement.innerHTML ="";

    tags.forEach(tag => {
        const TagElement = document.createElement('span')
        TagElement.classList.add("tags")
        TagElement.innerText = tag
        TagsElement.appendChild(TagElement)
    });
}

function randomSelect(){
    let times=30;

    const interval = setInterval(()=>{
        const RandomTag = pickRandomTag()
        HighlightTag(RandomTag)
        setTimeout(()=>{
            unHighlightTag(RandomTag)
        },100)
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const RandomTag = pickRandomTag()
            HighlightTag(RandomTag)
        },100)

    },times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tags")
    return tags[Math.floor(Math.random()*tags.length)]
}

function HighlightTag(tag){
    tag.classList.add("highlight")
}

;
function unHighlightTag(tag){
    tag.classList.remove("highlight")
}