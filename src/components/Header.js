import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <nav className="container-fluid fixed-top Headasder">
      <div className="d-flex flex-row justify-content-between headerc1">
      <div className="">
        <h3 className="navbar-brand headerText" href="#banner">
          BookUsNow
        </h3>
      </div>
      <div className="c1">
        <button className="category-button ">
          <span className="hamburger-icon">&#9776; </span>
          Categories
        </button>
        <div className="input">
          <input
            type="text"
            class="form-control"
            placeholder="DJ Phantomon"
            value=""
          />
        </div>
        <p className="p-0 m-0 fav">Favorites</p>
        <button class="sigin-button">
          Sign In
        </button>
      </div>
      <div className="c2">
        <div class="icon-row">
  <div class="icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 1 0 1.415-1.413l-3.848-3.848z"/>
      <path d="M10.5 6.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
    </svg>
  </div>
  <div class="icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person icon" viewBox="0 0 16 16">
      <path d="M8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 2a5 5 0 0 1 5 5H3a5 5 0 0 1 5-5z"/>
      <path fill-rule="evenodd" d="M8 0a8 8 0 0 1 5.657 13.657l-1.414-1.414A6 6 0 1 0 8 2a6 6 0 0 0-4.243 10.243L2.343 13.9l-.707.707-.707-.707A8 8 0 0 1 8 0zM3 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    </svg>
  </div>
  <div class="icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart icon" viewBox="0 0 16 16">
      <path d="M11.5 2C9.905 2 8.499 3.118 8 4.5 7.501 3.118 6.095 2 4.5 2 2.843 2 1 3.914 1 6.5c0 3.285 3.373 5.088 7.89 9.1a.658.658 0 0 0 .22.15.7.7 0 0 0 .22-.15C12.627 11.688 16 9.885 16 6.5 16 3.914 14.157 2 11.5 2zm-3 11l-.45.44a23.74 23.74 0 0 1-1.55-1.34C3.627 9.164 1 7.25 1 6.5 1 4.47 2.705 3 4.5 3c1.54 0 3.077 1.346 3.5 2.5C8.423 4.346 9.96 3 11.5 3 13.295 3 15 4.47 15 6.5c0 .75-2.628 3.964-5.5 6.6z"/>
    </svg>
  </div>
</div>
      </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <p>Mumnbai, India</p>
        </div>
        <div>
          <ul>
            <li>Live shows</li>
            <li>Streams</li>
            <li>Movies</li>
            <li>Plays</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Activities</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
