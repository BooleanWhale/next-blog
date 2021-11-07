export default function Modal({info={}, content={}, trigger={}}) {

    // id, title, content, trigger
    // const { id } = info;

    if ( info.id ) {

        const { id } = info;

        return <>

            <input type="checkbox" id={id+"-check"} style={{display:'none'}} className="modal-checkbox"/>
            <div id="modal-name" className="modal modal-iframe">
                <label htmlFor={id+"-check"} className="modal-behind"></label>

                <div className="modal-inner dark-mode-off-bg ">
                    {content(info)}
                    { id.includes('behance') && <a class="button black-button" title={info.title} href={info.url} target="_blank" ref="noopener">See the full project on Behance</a> }
                </div>
            </div>

            <label htmlFor={id+"-check"}>
                {trigger(info)}
            </label>

        </>
    } else {
        return <>ERROR</>;
    }
  }