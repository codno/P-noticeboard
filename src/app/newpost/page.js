const NewPost=()=>{
  return(
  <div>
    <div id="post_wrap" style={{padding:'30px', margin:'30px'}} className="border border-gray-300">
      <div style={{width:'500px'}} className="flex">
        <input type="text" placeholder="제목을 입력해주세요." className="flex-grow"></input>
      </div>
      <div style={{margin:'15px 0 0 0 '}}>
        <textarea style={{height:'500px',padding:'10px'}} className="resize-none w-full border border-gray-300 text-black"></textarea>
      </div>
      <div style={{margin:'15px 0 0 0 '}} className="flex justify-end">
        <button type="button" style={{backgroundColor:'#666',border:'1px solid #444'}} className="w-20 h-8 mr-8 text-white rounded">취소</button>
        <button type="button" style={{backgroundColor:'#3b4890',border:'1px solid #29367c'}} className="w-20 h-8 text-white rounded" >등록</button>
      </div>
    </div>
  </div>
  )
}

export default NewPost;