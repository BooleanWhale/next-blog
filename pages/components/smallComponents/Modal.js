export default function Modal({info, content, trigger}) {

    // id, title, content, trigger
    const { id } = info;

    return <>

        <input type="checkbox" id={id+"-check"} style={{display:'none'}} class="modal-checkbox"/>
        <div id="modal-name" className="modal modal-iframe">
            <label for={id+"-check"} className="modal-behind"></label>

            <div class="modal-inner dark-mode-off-bg ">
                {content(info)}
            </div>
        </div>

        <label for={id+"-check"}>
            {trigger(info)}
        </label>

    </>
  }