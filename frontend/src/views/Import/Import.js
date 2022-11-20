import {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Slider from "@mui/material/Slider";
import { Chart } from "react-google-charts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import backendServer from "../../webConfig";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Arrow from "@mui/icons-material/NoteAltOutlined";
import ListItemText from "@mui/material/ListItemText";
import axios from 'axios';

function Import(props) {
    const[commodity,setCommodity] = useState('Wheat');
    const[year,setYear] = useState(2001);
    const[prevYear,setPrevYear] = useState(2001);
    const[startDate,setStartDate] = useState(1980);
    const[endDate,setEndDate] = useState(2020);
    const[country,setCountry] = useState('Egypt');
    const[graphData, setGraphData] = useState([]);
    const[graphDataSankey, setGraphDataSankey] = useState([]);
    const[yearList, setYearList] = useState([]);
    useEffect(()=> {
        let firstyear=1986;
        let lastyear=2022;
        let yl=[];
        for(let i=firstyear;i<=lastyear;i++) {
            yl.push(i);
        }
        setYearList(yl)
        axios.get(backendServer+'/import/pie/getFileData/'+country+'/'+year+'/'+commodity).then(res => {
            if(res.status==200) {
                let recs = res.data; 
                let fv = [['Country','Quantity(tonnes)']];   
                if(recs.length>0) {
                    
                    for(let i=0;i<recs.length;i++) {
                        
                        fv.push(recs[i]);
                    }
                    // }
                    setGraphData(fv)
                    let fvs= [['Country','Partner Countries','Quantity(tonnes)']];
                    for(let i=0;i<recs.length;i++) {
                        let recAr = [country].concat(recs[i]);

                        fvs.push(recAr);
                    }
                    console.log('year arr',fvs);
                    setGraphDataSankey(fvs)
                }  else {
                    setYear(prevYear);
                    alert('No data for this year')
                }    
            }
        })
    },[startDate,endDate,country,year,commodity])

    const selectYearHandle = (e) => {
        setPrevYear(year);
        setYear(e);
    }
    return (
        <>
          <div className='row'>
            <div className='col'>
                <DropdownButton title={country} onSelect={(e)=>setCountry(e)}>
                    <Dropdown.Item eventKey="Egypt">Egypt</Dropdown.Item>
                    <Dropdown.Item eventKey="Saudi Arabia">Saudi Arabia</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='col'>
                <DropdownButton title={year} onSelect={(e)=>selectYearHandle(e)}>
                    {yearList.map(yr=> {
                        return <Dropdown.Item eventKey={yr}>{yr}</Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className='col'>
                <DropdownButton title={commodity} onSelect={(e)=>setCommodity(e)}>
                    <Dropdown.Item eventKey="Wheat">Wheat</Dropdown.Item>
                    <Dropdown.Item eventKey="Rice">Rice</Dropdown.Item>
                </DropdownButton>
            </div>
          </div>
          &nbsp;
          <div className='row'>
              <div className='col'>
              <Chart
                                chartType="PieChart"
                                data={graphData}
                                width="100%"
                                height="400px"
                                legendToggle
                            />
              </div>
              <div className='col'>
              <Chart
                                    chartType="Sankey"
                                    data={graphDataSankey}
                                    width="100%"
                                    height="400px"
                                    legendToggle
                                />
              </div>
          </div>
        </>
      );
}
export default Import;
