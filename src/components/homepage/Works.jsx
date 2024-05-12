import wisespend from "/src/assets/images/wisespend.svg";
import indieclimb from "/src/assets/images/indieclimb-square.svg";
import study from "/src/assets/images/studyapp.png";
import ticked from "/src/assets/images/ticked-desktop.svg";
import connectify from "/src/assets/images/connectify-desktop.svg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://wisespend.me"
            img={wisespend}
            alt="WiseSpend website mockup"
            name="WiseSpend Website | Expenses Tracking SaaS"
            type="Web App Design • SaaS Development"
            year="2024"
            tools="NextJS • TailwindCSS • Stripe • MongoDB"

          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://indieclimb.vercel.app"
            img={indieclimb}
            alt="indieclimb landing page"
            name="Indie Climb | Idea's Leaderboard"
            type="Frontend Development"
            year="2024"
            tools="NextJS • TailwindCSS • JavaScript"
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/gursewaktrash/AGM_Learning"
            img={study}
            alt="quick study app project"
            name="Quick Study | Freelance Project"
            type="IOS App"
            year="2024"
            tools="XCode • Swift • Firebase"
          />
        </div>

        {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://www.figma.com/design/ZaFXqIQ6hRVlw0tFTFcLzW/Daily-UI-UX?node-id=11-1940"
            img={ticked}
            alt="ticked project ui"
            name="Ticked | Accountability App"
            type="UI/UX Design"
            year="2023"
            tools="Figma"
          />
        </div>

        {/* Project #5 */}
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://github.com/gursewaktrash/ConnectifyFYP/"
            img={connectify}
            alt="connectify project"
            name="Connectify | Dating App "
            type="Andriod APP"
            year="2020"
            tools="Andriod Studio • Java • Firebase"
          />
        </div>
        
      </div>
    </section>
  );
}
