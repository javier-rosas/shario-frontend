import Layout from './Layout'
import Home from './Home'
import React from 'react'


function Landing () {


  return (
    <div className='App'>
      <div className='top-container'>
       <img className='logo' alt="group" src="/images/shario-logo (2).png"></img>
      </div>
      <div className='side-bar-new'>
       <div class="vertical-menu">
         <a href="#" class="active"># personal</a>
         <a href="#"># business</a>
         <a href="#"># photos</a>
         <a href="#"># videos</a>
         <a href="#"># pdfs</a>
       </div>
      </div>
      {/* <Layout/> */}
      <div className='chat-container'>
      <form className='searchchat'>
        <input className='input-searchchat' type="text" placeholder="  Search chat..."></input>
      </form>
      
      <Home/>

      {/* <div className='chatbar'>
      <table className='chatbox-buttons'>
      <th><input type="image" alt="pencil" src="/images/pencil.png"/></th>
      <th><input type="image" alt="microphone" src="/images/microphone.png"/></th>
      <th><input type="image" alt="docup" src="/images/docup.png"/></th>
      <th><input type="image" alt="photo" src="/images/photo.png"/></th>
      <th>
      <form>
      <input className='inputbox' type="text" placeholder="type..."></input>
      </form>
      </th>
      <th><input type="image" alt="pencil" src="/images/pencil.png"/></th>
      </table>
      </div> */}
      </div>
    </div>
  )}

export default Landing