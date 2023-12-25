import "../../styles/landing_page.css";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function ContributeButton(){
    return <div className="contribute-button-box">
        <LibraryBooksIcon className="contribute-button-content" />
        <p className="contribute-button-content">Contribute</p>
    </div>
}

export default ContributeButton;