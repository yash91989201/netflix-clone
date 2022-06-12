import { NextComponentType } from "next"

const Footer: NextComponentType = () => {
  return (
    <footer className="
    pt-20 pb-4
    bg-black text-footer-text-col  border-border-col  border-t-8 "
    >
      <div className="
        px-8
        max-w-5xl mx-auto space-y-8 
      ">
        <p>Questions? Call 000-800-040-1843</p>
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            sm:gap-12
            space-y-8  sm:space-y-0 
          ">
          <div className="space-y-2">
            <p>FAQ</p>
            <p>Investor Relation  </p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="space-y-2">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Prefrences</p>
            <p>Legal Notices</p>
          </div>
          <div className="space-y-2" >
            <p>Account</p>
            <p>Ways to watch</p>
            <p>Cooperate information</p>
            <p>Only on Netflix</p>
          </div>
          <div className="space-y-2">
            <p>Media Centre</p>
            <p>Terms Of Use </p>
            <p>Contact Us</p>
          </div>
        </div>
        <select name="select-language" className=" px-5 py-2   bg-[rgba(0,0,0,0.4)] border">
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
        </select>
        <p>Netflix India</p>
      </div>
    </footer>
  )
}

export default Footer