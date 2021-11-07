import Modal from "../../smallComponents/Modal";

export default function CodePen() {

  function dribbbleShot ({title, url, img_name, description, id}) { return <>
    <div className="modal-header">
      <a href="https://dribbble.com/Ashleysw" className="modal-icon-link">
        <img className="modal-icon" src='static/mainpage/dribbble/dribbble_icon.png' alt='dribbble' defer/>
        <span>DRIBBBLE</span>
      </a>

      <a href={url}>
        <h4 className="modal-title">{title}</h4>
      </a>

      <label htmlFor={id+"-check"}><a className="close-modal">x</a></label>
    </div>

    <div className="dribbble-main">
      <img src={'static/mainpage/dribbble/'+img_name+'.png'} alt={title} defer/>
      <div className="modal-desc">{description}</div>
    </div>
  </>
  }

  function modalTrigger ({img_name, id, title}) { return <div
      className={id+"-card modal-card hover-grow"}
      title={title}
      style={{backgroundImage: `url(static/mainpage/dribbble/${img_name}_thumb.png)`}}
    ></div>
  }

  const modalList = [
    {id:"dribbble1",title:"Social dog walking app",img_name:"daily_ui_20",url:"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. 🐶 @Daily UI`},
    {id:"dribbble2",title:"ECommerce dashboard",img_name:"daily_ui_18",url:"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. 🙂`},
    {id:"dribbble3",title:"Social app settings page",img_name:"daily_ui_07",url:"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`Daily UI #007 - design a settings page!`},
    {id:"dribbble4",title:"Home monitoring app dashboard",img_name:"daily_ui_21",url:"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. ❄️🔥 @Daily UI`}
  ]

  return <div id="dribbbles" className="center-text">
    <h3 className="center works-subtitle">Dribbbles</h3>
    <div className="flex-gallery row">
      {modalList.map((item,index) => 
        <div key={index}>
          <Modal info={item} content={dribbbleShot} trigger={modalTrigger}/>
        </div>)
      }
    </div>

    <a className="button black-button" href="https://codepen.io/ash_s_west">See more on Dribbble</a>
  </div>
} 