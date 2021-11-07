import Modal from "../../smallComponents/Modal";

export default function CodePen() {

  function codePenShot ({title,url,id}) { return <>
    <div className="modal-header">
      <a href="https://codepen.io/ash_s_west" className="modal-icon-link">
        <img className="modal-icon" src='/static/mainpage/codepen/codepen_icon.svg' alt='codepen' defer/>
        <span>CODEPEN</span>
      </a>

      <a href={"https://codepen.io/ash_s_west/pen/"+url}>
        <h4 className="modal-title">{title}</h4>
      </a>

      <label htmlFor={id+"-check"}><a className="close-modal">x</a></label>
    </div>

    <iframe style={{width: '70vw', maxWidth: '1000px', minHeight: '70vh'}} scrolling="no" title="Button click pulsing effect - Pure CSS" 
        src={"https://codepen.io/ash_s_west/embed/"+url+"?height=265&theme-id=dark&default-tab=css,result"} 
        loading="lazy" allowtransparency="true" allowFullScreen={true} height={265} frameBorder="no">
        See the Pen &lt;a href={"https://codepen.io/ash_s_west/pen/"+url}&gt;{title}&lt;/a&gt; by Ashley Saleem-West
        (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.
    </iframe>
  </>
}

  function modalTrigger ({img, id, title}) { return <div
      className={id+"-card modal-card hover-grow"}
      title={title}
      style={{backgroundImage: `url(${img})`}}
    ></div>
  }

  const modalList = [
    {id:"codepen1",title:"Dynamically load JS on click",url:"poPOMoV",img:"static/mainpage/codepen/codepen-1.webp"},
    {id:"codepen2",title:"Pure CSS side menus",url:"bGrwVWx",img:"static/mainpage/codepen/codepen-2.webp"},
    {id:"codepen3",title:"Pure CSS infinate slider",url:"ZEJpWoq",img:"static/mainpage/codepen/codepen-3.webp"},
    {id:"codepen4",title:"Pure CSS dark mode switch",url:"RwRejrb",img:"static/mainpage/codepen/codepen-4.webp"},
  ]

  return <div id="codepens" className="center-text">

    <h3 className="center works-subtitle">CodePens</h3>

    <div className="flex-gallery">

      {modalList.map((item,index) => 
        <div key={index}>
          <Modal info={item} content={codePenShot} trigger={modalTrigger}/>
        </div>)
      }

    </div>

    <a className="button black-button" href="https://codepen.io/ash_s_west">See more on CodePen</a>
    {/* <script defer src="static/scripts/modelIframe.js"></script> */}

  </div>
}