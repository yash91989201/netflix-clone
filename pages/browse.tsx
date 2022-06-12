import { useState } from "react"
import { NextPage } from "next"
import { GetServerSidePropsContext } from "next"
import { NextSeo } from "next-seo"
// cookie handler
import nookies from "nookies"
import { verifyIdToken } from "../config/firebaseAdmin"
// import hooks
import ProfilesGate from "../components/browse/ProfilesGate"
import Header from "../components/browse/Header"
import Billboard from "../components/browse/Billboard"

const Browse: NextPage<any> = ({ user }) => {
    const [isProfileSet, setProfile] = useState(true)

    if (!isProfileSet)
        return <ProfilesGate />

    return (
        <>
            <NextSeo title="Home - Netflix" />
            <div>
                <Header />
                <Billboard />
                <p>Logged In as {user.email}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deserunt officiis? Expedita aliquam optio ratione maxime exercitationem quaerat at consectetur doloremque eum cum a dolores ab numquam reiciendis alias reprehenderit consequatur voluptates, impedit sequi, beatae quae iusto. Eos beatae adipisci ad minima expedita quia amet dolorem, nulla fuga cumque dolores! Doloribus quas autem fuga animi porro ratione sunt deserunt pariatur, excepturi consectetur placeat ea vitae voluptatibus, nostrum sint magnam atque culpa iusto? Mollitia eos repudiandae in vel quam rem iusto deserunt non, eveniet dolorem temporibus voluptas! Blanditiis, aliquid facilis reprehenderit, ullam hic veniam nostrum quae est fuga perferendis velit qui!</p>
            </div>
        </>
    )
}

export default Browse

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = nookies.get(context)
    if (Object.keys(cookies).length == 0) {
        return {
            redirect: {
                permanent: true,
                destination: "/",
            },
            props: {}
        }
    }
    const user = await verifyIdToken(cookies.userToken)
    return {
        props: {
            user
        }
    }

}