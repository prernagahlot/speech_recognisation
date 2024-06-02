const textarea= document.querySelector("textarea");
function texttospeech(text)
{
    let speech= new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}




document.querySelector(".button2").addEventListener("click", e =>
{   
    e.preventDefault();
if(textarea.value !== "")
   
texttospeech(textarea.value);

}
);
