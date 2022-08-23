import styles from '../styles/Header.module.css'
import coin from '../imgs/coin.svg'


const Header = () => {

    const links=[{id:1,text:"خانه",url:"#home"},{id:2,text:"لیست ارز ها",url:"#coinlist"},{id:3,text:"تبدیل ارزها",url:"#convertbox"},{id:4,text:"اطلاعات",url:"#footer"}]

   

    
       
    


    return (
       <header className={styles.header}>
           <div className={styles.container}>
               <div className={styles.navcontainer}>
                   <h1>صرافی ارز دیجیتال</h1>

                   <img src={coin}/>

                   <nav>

                       {links.map(link=><a href={link.url} key={link.id}>{link.text}</a>)}


                   </nav>
               </div>

           </div>
           

       </header>
    );
};

export default Header;