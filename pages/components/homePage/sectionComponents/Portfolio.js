import Modal from "../../smallComponents/Modal";

export default function Portfolio() {

  function behanceShot ({title, url, img_name, description, id}) { return <>
    <div className="modal-header">
      <a href="https://behance.com/Ashleysw" className="modal-icon-link">
        <img className="modal-icon" src='static/mainpage/behance/behance_icon.svg'/>
        <span>behance</span>
      </a>

      <a href={url}>
        <h4 className="modal-title">{title}</h4>
      </a>

      <label htmlFor={id+"-check"}><a className="close-modal">x</a></label>
    </div>

    <div className="dribbble-main">
      <img src={'static/mainpage/behance/'+img_name+'.webp'}/>
      <div className="modal-desc">{description}</div>
    </div>
  </>
  }

  function modalTrigger ({img_name, id, title}) { return <div
      className={id+"-card modal-card hover-grow"}
      title={title}
      style={{backgroundImage: `url(static/mainpage/behance/${img_name}.webp)`}}
    ></div>
  }

  const modalList = [
    {id:"behance1",title:"E-Service website design",img_name:"behance1",url:"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. 🐶 @Daily UI`},
    {id:"behance2",title:"UI Design collection",img_name:"behance2",url:"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. 🙂`},
    {id:"behance3",title:"Big data collection app des",img_name:"behance3",url:"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`Daily UI #007 - design a settings page!`},
    {id:"behance4",title:"Home monitoring app dashboard",img_name:"behance4",url:"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",description:`An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. ❄️🔥 @Daily UI`}
  ]

  return <div id="behances" className="center-text">
    <div className="flex-gallery">
      {modalList.map((item,index) => 
        <div key={index}>
          <Modal info={item} content={behanceShot} trigger={modalTrigger}/>
        </div>)
      }
    </div>

    <a className="button black-button" href="https://www.behance.net/ashsaleemwest">See more on Behance</a>
  </div>
} 