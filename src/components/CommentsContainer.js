import React from 'react'


const commentData = [
    {
        name:"Krishna",
        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        replies:[
            {
                name:"Krishna",
                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                replies:[
                    {
                        name:"Krishna",
                        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                        replies:[
                            {
                                name:"Krishna",
                                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                                replies:[],
                            },
                        ],
                    },
                    {
                        name:"Krishna",
                        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                        replies:[],
                    },
                ],
            },
            {
                name:"Krishna",
                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                replies:[],
            },
        ],
    },
    {
        name:"Krishna",
        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        replies:[
            {
                name:"Krishna",
                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                replies:[],
            },
            {
                name:"Krishna",
                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                replies:[
                    {
                        name:"Krishna",
                        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                        replies:[
                            {
                                name:"Krishna",
                                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                                replies:[],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Krishna",
        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        replies:[
            {
                name:"Krishna",
                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                replies:[
                    {
                        name:"Krishna",
                        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                        replies:[
                            {
                                name:"Krishna",
                                text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                                replies:[
                                    {
                                        name:"Krishna",
                                        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
                                        replies:[],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Krishna",
        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        replies:[],
    },
    {
        name:"Krishna",
        text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        replies:[],
    },
];

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img alt="user" src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' className='w-12 h-12'/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentList = ({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>
        <Comment data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList comments={comment.replies} />
        </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer