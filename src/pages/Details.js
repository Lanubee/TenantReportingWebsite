import './Details.css';
import { useNavigate } from 'react-router-dom';


export const Details = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/Home')
    }

    const goToPhotoUpload = () => {
        navigate('/PhotoUpload')
    }


    return(
        <div className='Details section'>
            <label>Please type more details about your issue here:</label>
            <input placeholder="Type Here" />
            <button onClick={goBack}>Go back</button>
            <button onClick={goToPhotoUpload}>Next</button>
        </div>
    );
}


export default Details;