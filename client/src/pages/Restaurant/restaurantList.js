
import React,{ useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const RestaurantList= ()=>{
    
        return(
           <div>
      <>
<> <Header/> </>

<section className="group-page-section padding-tb">

    
  <div className="container">
    <ul className="group-search">
      <li className="group-count">
        <p>All Groups</p>
        <p>36</p>
      </li>
      <li className="group-search-btn">
        <form action="/">
          <input type="text" placeholder="Search Group Name..." />
          <div className="input-button">
            <input type="submit" defaultValue="Search Now" />
          </div>
        </form>
      </li>
    </ul>
    <div className="groups-wrapper">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/01.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A01</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/02.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A02</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/03.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A03</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/04.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A04</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/05.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A05</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/06.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A06</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/07.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A07</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/08.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A08</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/09.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A09</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/10.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A10</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/11.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A11</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="group-item lab-item style-1">
            <div className="lab-inner d-flex flex-wrap align-items-center p-4">
              <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                <img src="assets/images/group/12.jpg" alt="img" />
              </div>
              <div className="lab-content">
                <h4>Active Group A12</h4>
                <p>
                  Colabors atively fabcate best breed and apcations through
                  visionary value{" "}
                </p>
                <ul className="img-stack d-flex">
                  <li>
                    <img
                      src="assets/images/group/group-mem/01.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/02.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/03.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/04.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/05.png"
                      alt="member-img"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/group/group-mem/06.png"
                      alt="member-img"
                    />
                  </li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  {" "}
                  <a href="profile.html" className="lab-btn">
                    {" "}
                    <i className="icofont-users-alt-5" />
                    View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paginations">
        <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
          <li>
            <a href="#">
              <i className="icofont-rounded-double-left" />
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="d-none d-sm-block">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li className="d-none d-sm-block">
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">
              <i className="icofont-rounded-double-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<Footer/>

</>
</div>
        );
    }

export default RestaurantList;