import dynamic from "next/dynamic";

const LayoutPage = dynamic(() => import('../../layout-page'));
const HomepageHeader = dynamic(() => import('../components/header'));

const Homepage = () => {
    return (
        <>
            <LayoutPage>
                <HomepageHeader />
            </LayoutPage>
        </>
    )
}

export default Homepage;