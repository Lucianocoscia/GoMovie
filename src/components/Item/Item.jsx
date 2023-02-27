
import { Link } from 'react-router-dom';
import './Item.css'
import Icon from '@mui/material/Icon';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Item( { title, detailID,overview, category, poster_path, id, addOrRemoveFromFavs}) {
  // console.log(category)

  return (
    <div className='container-card'>
      <Link onClick={detailID} to={`/detail/${category}/${id}`} style= {{color: 'white', textDecoration: 'none'}}>
        <img className='card-img'  src={poster_path} alt={title}/>
        </Link>
        {/* <p className='favourite-btn'  data-movie-id={id} onClick={addOrRemoveFromFavs} >
            <svg className='icon-heart'  xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" fill="currentColor"><path d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242zM9.293 1.55l.707.707.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"></path></svg>
        </p> */}
        <AddOutlinedIcon  data-movie-id={id} onClick={addOrRemoveFromFavs}  className='favourite-btn'  fontSize="medium" ></AddOutlinedIcon>
        {/* <div className='card-body'>
          <h1 className="text-center">{title}</h1>
          <h5>
            {overview}...
          </h5>
          <button ><Link to={`/detail/${id}`} style= {{color: 'white', textDecoration: 'none'}}>View Detail</Link></button>
        </div> */}
    </div>
    
  );
}

export default Item;