/* eslint-disable react/prop-types */
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbar({skills}) {

    return <ProgressBar striped variant="dark" style={{width:'200px'}} now={skills} label={`${skills}%`} />;
}

export default Progressbar;