import './style.css'

const data = state({output:'',confidence:0,input:''})


function send()
{
  fetch('/api/command',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: data.input})
    })
    .then(response => response.json())
    .then(result => {
      data.output = result.label
      data.confidence = result.confidence
    })
}

const main = 
<div class="chat-container">
  {data.output} {data.confidence}
  <div class="command">
    <input type="text" model={data.input}/>
    <button on:click={send}>Send</button>
  </div>
</div>


main.$parent(document.body)