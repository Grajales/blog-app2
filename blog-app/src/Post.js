import Comment from './Comment'
function Post(props){
    let comments = props.post.comments.map((comment,index)=>(
        <Comment comment={comment} key={index}/>
    ))
    return (
    <div>
    <h2> Title: {props.post.title}  </h2>
    <h2> Author: {props.post.author}  </h2>
    <h2> Body: {props.post.body}  </h2>
    <ul> 
    {comments}
    </ul>
    </div>

    )
}
export default Post; //export component