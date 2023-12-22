import ContributeButton from "./contribute_button";
import CopyRight from "./copyright_button";
import SearchBar from "./search_bar";
import "../../styles/landing_page.css";

function LandingPage(){
    return (
        <div className="box">
            <ContributeButton />
            <SearchBar />
            <CopyRight />
        </div>
    );
}

export default LandingPage;