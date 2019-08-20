import React from 'react';
import { Card, CardImg,
    CardTitle, CardSubtitle,} from 'reactstrap';


const Card1 = ({tab}) => 
    
      <div className='tab'> 
        <Card className='card 'style={{backgroundColor: tab.color}}>
            <CardTitle className='title-card'>{tab.titre}</CardTitle>
            <CardSubtitle className='subtitle-card'>{tab.titre1}</CardSubtitle>
         <div className='bodycard'>
         { tab.show?   <select>
				<option>Choose Country</option>
					<option value="http://www.doctoraliar.com">Argentina</option>
					<option value="http://www.doctoralia.com.au">Australia</option>
				    <option value="http://www.doctoralia.com.br">Brazil</option>
					<option value="http://www.doctoralia.cl">Chile</option>
					<option value="http://www.doctoralia.co">Colombia</option>
					<option value="http://www.znamylekar.cz">Czech</option>
					<option value="http://www.doctoralia-fr.com">France</option>
					<option value="http://www.miodottore.it">Italy</option>
					<option value="http://www.doctoralia.com.mx">Mexico</option>
					<option value="http://www.doctoralia.pe">Peru</option>
					<option value="http://www.znanylekarz.pl">Poland</option>
					<option value="http://www.doctoralia.com.pt">Portugal</option>
					<option value="http://www.doctoralia.es">Spain</option>
					<option value="http://www.doktortakvimi.com">Turkey</option>
					<option value="http://www.doctoralia.co.uk">UK</option>
			</select>:<div></div>}
            <CardImg  className='img-card' style={{width:'274px'}}src={tab.image} alt="Card image cap" />
          </div>
        </Card>
      </div>
    
  
  
  export default Card1;