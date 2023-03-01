
import { Link } from 'react-router-dom';
import './Item.css'
import Icon from '@mui/material/Icon';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Item( { title, detailID, category, poster_path, id, addOrRemoveFromFavs}) {
  // console.log(category)

  return (
    <div className='container-card'>
      <Link onClick={detailID} to={`/detail/${category}/${id}`} style= {{color: 'white', textDecoration: 'none'}}>
        <img className='card-img'  src={poster_path} alt={title}/>
        </Link>
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