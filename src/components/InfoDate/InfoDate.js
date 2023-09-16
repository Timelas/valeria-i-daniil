import React from "react";
import { useParams } from 'react-router-dom';
import {guests} from '../../vendor/const';
import names from "../../images/names.svg";
import flower from "../../images/flower2.svg";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import flowermap from "../../images/flower.svg";
import flowermapWhite from "../../images/flowerw.svg";
import "./InfoDate.css";

function InfoDate() {
  let { id } = useParams();

  const guest = guests.find(f => f.id === id);
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">{guest.appeal} {guest.name}</p>
        <p className="info-date__text">Мы рады пригласить {guest.pronoun} на день рождение нашей семьи! В этот день мы собираемся сказать друг другу "ДА". В окружении самых близких и родных людей мы решили объединить наши сердца и судьбы!</p>
        <div className="info-date__info">
          <p className="info-date__text info-date__text_position_right">26 СЕНТЯБРЯ<br /> 2023 ГОДА</p>
          <img className="info-date__flower" alt="цветок" src={flower}></img>
          <p className="info-date__text info-date__text_position_left">ВТОРНИК <br />14 ЧАСОВ 30 МИНУТ</p>
        </div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in info-date__check-in_color_white">
          <div className="info-date__block-text">
            <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
            <p className="info-date__text info-date__text_position_right">Дворец бракосочетаяния №4<br />Москва,Бутырская улица 17<br />Сбор гостей в 14:30<br />Начало в 15:15</p>
          </div>
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4578837439d4ae51d4aee281b7bb329dd6a92e7325b723445e561d5d6960a409&amp;source=constructor"
              frameBorder="0" title="ЗАГС" className="info-date__map"></iframe>
            <img className="info-date__flower-map" alt="цветок" src={flowermap}></img>
          </div>
        </div>
        <div className="info-date__check-in info-date__check-in_color_grey">
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade6d973f39c8f5397102564dec99a9e1e2d15bea3c177e61ecd82ea17823d44e&amp;source=constructor" 
              frameBorder="0" title="ресторан" className="info-date__map info-date__map-left"></iframe>
            <img className="info-date__flower-map-white" alt="цветок" src={flowermapWhite}></img>
          </div>
          <div className="info-date__block-text">
            <img className="info-date__where info-date__where_position_left" alt="праздничный банкет" src={banquet}></img>
            <p className="info-date__text info-date__text_position_left">Банкетный зал "Плакучая Ива"<br />Московская область, Мякининское шоссе, 3<br />Начало в 17:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;