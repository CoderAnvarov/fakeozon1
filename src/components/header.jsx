import React from 'react'
import '../styles/header.css'

import barsIcon from '../assets/icons/bars-solid-full.svg'
import searchIcon from '../assets/icons/magnifying-glass-solid-full.svg'
import cameraIcon from '../assets/icons/camera-solid-full.svg'
import boxIcon from '../assets/icons/box-solid-full.svg'
import heartIcon from '../assets/icons/heart-regular-full.svg'
import cartIcon from '../assets/icons/cart-shopping-solid-full.svg'
import userIcon from '../assets/icons/user-regular-full.svg'

export default function Header() {
  return (
    <header className="ozon-header">

      <div className="header_block">

        <div className="header_top">
          <div className="logo">OZON</div>

          <button className="catalog_btn">
            <img src={barsIcon} alt="menu" className="icon icon-white" />
            Katalog
          </button>

          <div className="search_box">
            <select className="search_select">
              <option>Hamma joyda</option>
            </select>

            <input type="text" placeholder="Ozonda qidirish" />

            <button className="search_cam_btn">
              <img src={cameraIcon} alt="camera" className="icon" />
            </button>

            <button className="search_btn">
              <img src={searchIcon} alt="search" className="icon icon-white" />
            </button>
          </div>

          <div className="header_actions">
            <div className="action_item" title="Kirish">
              <img src={userIcon} alt="user" className="icon" />
            </div>
            <div className="action_item" title="Buyurtmalar">
              <img src={boxIcon} alt="orders" className="icon" />
            </div>
            <div className="action_item" title="Sevimlilar">
              <img src={heartIcon} alt="favorites" className="icon" />
            </div>
            <div className="action_item" title="Savat">
              <img src={cartIcon} alt="cart" className="icon" />
            </div>
          </div>
        </div>

        <nav className="header_nav">
          <ul>
            <li>Tez yetkazib berish</li>
            <li>Elektronika</li>
            <li>Bolalar tovarlari</li>
            <li>Kitoblar</li>
            <li>Xobbi va ijod</li>
            <li>Uy va bog'</li>
            <li>Sport va hordiq</li>
            <li>Sotuvchi bo'lish</li>
          </ul>

          <div className="header_nav_right">
            <span>Toshkent</span>
            <span className="dot">•</span>
            <a href="#">Manzilni ko'rsating</a>

            <span className="lang">
              <img
                src="https://flagcdn.com/w20/uz.png"
                alt="UZ"
                className="flag_icon"
              />
              UZ
            </span>
          </div>
        </nav>

      </div>

      <div className="corousel_div">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://ir-3.ozone.ru/s3/cms/ef/tbb/wc2900/2832x600-2.jpg"
                className="d-block w-100"
                alt="Ozon banner 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://ir-3.ozone.ru/s3/cms/22/t39/wc2900/2832x600_rus1.jpg"
                className="d-block w-100"
                alt="Ozon banner 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://ir-3.ozone.ru/s3/cms/59/ta2/wc2900/performance_desk_2832x600px_4_1.jpg"
                className="d-block w-100"
                alt="Ozon banner 3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </header>
  )
}