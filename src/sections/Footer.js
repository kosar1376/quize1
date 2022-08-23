import React from 'react';
import '../styles/Footer.css'
import insta from '../imgs/Insta.svg'
import call from '../imgs/call.svg'
import twitter from '../imgs/twitter.svg'


const Footer = () => {
    return (
       
        <div id='footer' className='section footer-container'>
            <div className='col'>
                <h4>مقالات</h4>
                <ul>
                    <li><a href='#'>رمزارز چیست</a></li>
                    <li><a href='#'>تحلیل تکنیکال</a></li>
                    <li><a href='#'>تحلیل فاندامنتال</a></li>
                    <li><a href='#'>چگونگی ثبت نام در صرافی</a></li>
                </ul>
            </div>

            <div className='col'>
                <h4>اطلاعات تماس</h4>
                <ul>
                    <li><a href='#'>34567486 </a></li>
                    <li><a href='#'>ایمیل :email@gmail.com</a></li>
                    <li><a href='#'>فکس:56475655 </a></li>
                    <li><a href='#'>آدرس:تهران،مطهری</a></li>
                </ul>
                <div className='footer-icon-container'>
                    <img src={insta} alt='insta'/>
                    <img src={call} alt="call"/>
                    <img src={twitter} alt='twitter'/>
                </div>
            </div>
            <div className='matn'>
                <h2>صرافی ارز دیجیتال رمزینکس</h2>
                <p>این روزها ارز دیجیتال و رمز ارزها یا ارز رمزنگاری شده به عنوان مقصدی برای سرمایه گذاری بیش از هر زمان دیگری بر سر زبان‌ها افتاده‌اند. ارزهای رمزنگاری شده یا رمز ارز که خود نوعی ارز دیجیتال هستند، کارکرد مختص به خود را دارند که از بلاکچین قدرت گرفته است.با صرافی آنلاین بهترین و امن ترین خدمات را دریافت کنید. </p>
                <button>ثبت نام</button>
            </div>
          </div>
         
    );
};

export default Footer;