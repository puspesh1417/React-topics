import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Fetch() {
    const [userss,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://randomuser.me/api/?nat=us&results=1&page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            // let gagan = data
            console.log(data.results);
            setUser(data.results)
        })
    }
      // async  function fetchData(){
      //       const res =await axios.get("https://randomuser.me/api/?nat=us&results=1&page=1")
      //      console.log(res.data.results);
      //      setUser(res.data.results)
      //   }
      //   fetchData();
        
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="row">
          {userss.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}{data.email}</span>
                  </p>
                  <p>{data.dob.date}</p>
                  <p>{data.dob.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}



