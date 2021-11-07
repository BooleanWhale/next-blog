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
    {id:"behance1",title:"E-Service website design",img_name:"behance1",url:"https://www.behance.net/gallery/112726487/E-Service-Website-Design",description:`A complete website redesign for E-Service (Europe) Ltd. From research to prototyping in Figma and finally building the website with HTML, CSS and minimal pure JavaScript for their Wordpress backend. This redesign was made using careful consideration of user behaviour from Google Analytics.`},
    {id:"behance2",title:"Big data collection app",img_name:"behance3",url:"https://www.behance.net/gallery/62765593/UXUI-Design-Big-Data-Collection-App",description:`Design and prototype for an in-house web app that would make the collection big data an easier task that could be performed using a simple front-end and reduce the workload of the data management team.`},
    {id:"behance3",title:"UI Design collection",img_name:"behance2",url:"https://www.behance.net/gallery/70806135/Daily-UI-Challenge",description:`A collection of concept UI designs for the Daily UI challange. The collection includes mobile UI deesign and Web IU design.`},
    {id:"behance4",title:"Home monitoring app dashboard",img_name:"behance4",url:"https://www.behance.net/gallery/61874165/Product-Label-Tagger-Shopify-app-UI-design",description:`Product design for a Shopify app that allows users to easily place, rotate and scale custom labels over product images using an intuative GUI. This Shopify app was developed in collaboration with an independant back-end developer.`}
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