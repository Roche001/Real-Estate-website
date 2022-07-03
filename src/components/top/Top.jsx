import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#Home">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Agents">
                  Agents
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Top;
