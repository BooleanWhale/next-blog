import CodePen from "./sectionComponents/CodePen"
import Dribbble from "./sectionComponents/Dribbble"

export default function WorksSection() {

    return <section id="works">
        <div id="works-about" className="container">
            <h2>My works</h2>          
        </div>
        <CodePen/>
        <Dribbble/>
    </section>
}