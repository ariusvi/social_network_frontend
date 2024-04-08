import "./NewPost.css";

export const NewPost = () => {
    return (
        <>
            <div className="newPostDesign">
                <div className="paperNewPost">
                    <div className="newPostTitle">New Post</div>
                    <div className="newPostForm">
                        <div className="inputDesign">Title:</div>
                        <input className="inputDesign" type="text" />
                        <div className="inputDesign">Text:</div>
                        <textarea className="inputDesign" type="text" />
                        <div className="inputDesign">Image:</div>
                        <input className="inputDesign" type="text" />
                        <button className="buttonDesign">Post</button>
                    </div>
                </div>
            </div>
        </>
    );
}