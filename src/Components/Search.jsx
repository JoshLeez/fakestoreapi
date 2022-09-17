import React from 'react'


function Search(props) {

  return (
    <>
    <nav class="m-5">   
  <form class="form-inline">
    <div style={{margin:'20px auto'}}>
    <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" value ={props.searchTerm} 
    onChange={(e) =>props.setSearchTerm(e.target.value)}/>
    </div>
  </form>
</nav>
</>
  )
}

export default Search