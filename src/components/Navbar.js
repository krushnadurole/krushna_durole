import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

    return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropend
                </button>
                <ul class="dropdown-menu">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><Link class="nav-link" to='/General'>Home             </Link></li>
                    <li class="nav-item active"><Link class="nav-link" to='/Hello'>Home             </Link></li>
                    <li class="nav-item active"><Link class="nav-link" to='/Home'>Home             </Link></li>
                    <li class="nav-item active"><Link class="nav-link" to='/General'>Home             </Link></li>
                    
                </ul>
                </ul>
                </div>



                </nav>
                </div>
    );
  }





























