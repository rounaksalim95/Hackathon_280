import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import { Container,Button,  Row, Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const Predict = () => {
    const [data, setData] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const disablePredict = useSelector((state)=>state.userInfo.disablePredict);
    const metrics = [
        {name: "Project GDP", aipId: "1"},
        {name: "Current Account Balance(% of GDP)", aipId: "2"},
        {name: "Foreign direct investment, net inflows (% of GDP)", aipId: "3"},    
        {name :"Fertilizer consumption (% of fertilizer production)", aipId: "4"},  
        {name :"Total reserves (% of total external debt)", aipId: "5"},  
        {name :"FDI- NetOutflows(%ofG DP)", aipId: "6"},  
        {name :"Agricultural Contribution (% GDP)", aipId: "7"},  
        {name :"Manufacturing (% GDP)", aipId: "8"},  
        {name: "Agriculture, forestry, and fishing, value added (annual % growth)", aipId: "9"},
        {name: "Total debt service (% of GNI)", aipId: "10"},
    ]
    const handleOnSliderChange = (e) => {
        const id = e.target.getAttribute('dataid')
        data[id] = e.target.value;
        setData({...data})
    }
    
    function ModalwithValues(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                ML Model has been selected
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
              {metrics.map((m) => {
                  return (
                <Row>
                  <Col xs={12} md={8}>
                  {m.name}
                  </Col>
                  <Col xs={6} md={4}>
                  {parseInt(data[m.aipId])}
                  </Col>
                </Row>
                 )}
              )}
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
      
    return (
        <div className="predict" style={{marginTop:"100px"}} hidden={disablePredict}>
            <h2>Model prediction</h2>
            {metrics.map((m) => {
                return <div key={m.aipId} className="flex-space">
                    <div>{m.name}</div>
                    <input type="range" min="1" max="100" defaultValue={1}
                           onChange={handleOnSliderChange}
                           dataid={m.aipId}/>
                </div>
            })}
            <div className="margin-top center">
                <Button onClick={() => setModalShow(true)}>Call Machine Learning Model</Button>
                <ModalwithValues style={{marginTop:"100px"}} show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </div>
    );
};

export default Predict;