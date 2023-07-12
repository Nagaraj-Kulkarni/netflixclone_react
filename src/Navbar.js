import React from 'react'
import "./Movies.css"

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAB8CAMAAADXRDUkAAAAb1BMVEUAAADjCRTmCRTRCBLfCRPpCRTtCRUuAQTwCRW3CBCgBg4tAgReAwgQAQFcBAhDAwXWCBJvBAqpBw9nBAmWBg2PBg0gAQLHCBEyAgS8BxA7AgV1BAqxBxBNAweIBQwJAAAnAQN8BQsbAQNTAwf5Chbd5grsAAAE30lEQVR4nO2Z25aiOhBAISQYaLFBQOQiis7/f+OQKsK9z6Cdbtc6q/aLCQbilqRSAcsiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOIrTruW81XXzqp6g3IA5RE31Wp+sD353p84btwevMLBj+usS2waqOJ9VFYM55rADx3H4VFXq1UtPEL5wJ0pnurTWcDj9nAaTg+G1cmyPuAKWTHtMcCmD1WOoRzuu68eeG5tyO3oMsZE1tVSVXM9KO8lmyCyj/aoYHOk+mN8d9Y4b912cIXwc+YGl7APqvzpqIpb6R8DX/0JLDMchd0iCu2mKp2bKo9g4MbsOS64ielB4an7JlVx4QaX4ODWnSdx2D5C9ZWoLEOgG0vf5PaAisRRmOJvORh2y+7vcbMcBpdWxSveNjWaTbrZfP+VG9fY4KYrw3dicOND43yjWwRtbHWNEoulKTXtJpJ1N+aUseag5jgWEwH/dqTK0Vm7ieO+b/wItrmdsHu/LWbwRXg37cbCYN0NbtaCCNy8IaCBm5tMW21xwzNZWFgxjvDUkJjVu9kS1psVt/PaWeA2nhmvu8UwvmVpVRixDXkptBtG3qfcmPcdN71en2AoiuwMkcQ9GvJSaDebqx/6i259pMfIL7pIa2wBsEZudmO9x+2EywoaevPk8zv0bkwNyne4Wd6wNrLGjBUyuIWXVbfb2lkG51ubm8heLTQj1TGMSbdZXd+aCCgn2fy6G8t84OgX/3Yb7tst08mONLUDmLupzcDXeYkdjc9ad7OZQNjlGTcr6bI7Zt9+wA26+3P7r3xykgqh23x96+HPuV3C7t+djWkjbgwyVtd/zm2xdr/qZuU4KLnJBUC7CZ+D4bvcYuiKeWbV0M314YPH9dJN76S3jEnhIuLxnFuNE8PYpnTilpRwI5KlW//QZEMsYXmdAvXuKbc7BkpYhcy7+YWacSxLVtbuAJkkDOtu81iw1a3p1gDX7BKg3TALZ7lYuq2dZTQvCXRiwhxTT4EQ7dYMweC33Yq+azlr+k20m2W/za0a0gez0aR3G/Xwy/uA0fLBjT0HUvRuB/kmtwQXAAyVRqNJ7/bhsCfdzDxTOHdP8TCM5eaeBI3chtRi833b6Da7wmyPU0LVjUpMFYzvu8Et4utuwf2++3yUdZLeXnKzeZhleeUndfkYuXUS1xwT2vMnPnk1mS4Pbne9jZrlJW0mJaV0Xenspm4bxyRMJqHSMcmDhdsF2ohUZ+32j7j1g3KeT+ofOHpU+aSbJrwu3HDdVsl1BE1k/CNuhVxz61m4Lcbkes41usLSrcAeYV0bvRow7maFbLubfsem3WS73ZbPu/n4HgdCaYqT4PEjbnjxNTe1yXGdkZvLOOfV4NZ4VVXls9cUO6lmKkzWdt/T/h0LtzPM8XbjCM2hQ4PRZOx2mY5JqX6OCnNh6KhIl76SNFxPxWUft1HWr/Ish1ii/ilhwxoAWyvb7eYY5uvrq84rjN1ObTxuu5U51C750U/rJtpfCpMLanvTmzr1fdirhVLdUG0TsbHp9xm7WYl0eVb5ePHArNEqh32TVJl+dVM4oy2WAY4w8roxbvKB9SskIbeFMPYuP/H8tImLfzf8De6XfZn6nqk3p6dfGHlPEhjd6BAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDE/4y/31FZd+0oHp8AAAAASUVORK5CYII=" id="myimage"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="myNavbar">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavbar">TV Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavbar">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavbar">News and Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavbar">My Lists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="myNavbar">Browse by Language</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" id="myNavbar">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

// Boostrap -->Readymade CSS(Readymade Navbar Code)