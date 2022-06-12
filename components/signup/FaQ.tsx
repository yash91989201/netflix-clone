import { useState } from "react"
import { NextComponentType } from "next"
// import react icons
import { AiOutlinePlus } from "react-icons/ai"
import { SignUpForm } from "./Banner"

const FaQ: NextComponentType = () => {
  return (
    <div className=" py-16 bg-black border-border-col  border-t-8  text-white space-y-16">
      <h2 className="text-center text-[clamp(16px,4vw,48px)] font-semibold">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {
          FaqData.map(faq =>
            <CollapsibleCard
              key={Math.random()}
              questionText={faq.questionText}
              answerText={faq.answerText}
            />)
        }
      </div>
      <div className="max-w-2xl mx-auto">
        <SignUpForm />
      </div>
    </div>
  )
}

export default FaQ

interface FaQType {
  questionText: String,
  answerText: String[]
}

const CollapsibleCard: React.FunctionComponent<FaQType> = ({ questionText, answerText }: FaQType) => {
  const [open, setOpen] = useState(false)
  return <div className="max-w-4xl mx-auto flex flex-col  transition-all space-y-1 ">
    {/* question text */}
    <h3 className="p-2 py-3 md:p-4 md:py-5 w-full flex justify-between items-center bg-[#303030] text-[clamp(24px,4vw,28px)] font-semibold  cursor-pointer" onClick={() => setOpen(!open)} >{questionText} <AiOutlinePlus className={open ? "rotate-45" : "rotate-90"} />  </h3>
    <div className={open ? "scale-100 block" : "scale-0 hidden"}>
      {answerText.map((text: String) => {
        return <p key={Math.random()} className="w-full p-4 py-6  bg-[#303030] text-[clamp(18px,4vw,28px)] font-medium ">{text}</p>
      })}
    </div>
  </div>
}

const FaqData: FaQType[] = [
  {
    questionText: "What is Netflix?",
    answerText: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    ]
  },
  {
    questionText: "How much does Netflix cost?",
    answerText: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    ]
  },
  {
    questionText: "How do I cancel?",
    answerText: [
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    ]
  },
  {
    questionText: "What can I watch on Netflix?",
    answerText: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    ]
  },
  {
    questionText: "Is Netflix good for kids?",
    answerText: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    ]
  },
]




// sarso tel , sewai , doodh , bread ,surf