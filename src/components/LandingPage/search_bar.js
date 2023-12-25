import "../../styles/landing_page.css";

function SearchBar(){
    return <div>
        <div className="blog-app-box">
            <h1 className="blog-app-heading">
                BLOG APP
            </h1>
        </div>
        <input placeholder="Title of the blog" className="input-bar">
        </input>
    </div>
}

export default SearchBar;