import React,{Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// import home from  '../media/home.png'
// import search from  '../media/search.png'
import upload from  '../media/upload.png'
// import like from  '../media/love.png'
// import user from  '../media/user.png'

const db = openDatabase('db', '1.0', 'Test DB', 5 * 1024 * 1024);

class Bottomnav extends Component{


    getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }
      constructor(props) {
        super(props);
        this.state = {
            images:[] 
        };
    }

    // updateWebSql(){
    //     const {images}=this.state;
    //     for (let image of images){
    //         console.log(image)
    //         db.transaction(function (tx) { 
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS IMAGE (id unique, log)');
    //         tx.executeSql('INSERT INTO IMAGE (id, image) VALUES (?, ?)',[image,image]); 
    //     }); 
    // } 
        
    //     db.transaction(function (tx) { 
    //         tx.executeSql('SELECT * FROM IMAGE', [], function (tx, results) { 
    //             console.log(results,tx)
           
                
    //         }, null); 
    //     });
    // }
    uploadd=()=>{
        // const{images}=this.state;
        let uploadLogo = document.getElementById('upload');
        uploadLogo.click();
        //console.log(e.target.value)
        //let myFile = document.querySelector('input[type="file"]');
        //console.log(myFile)
        // this.updateWebSql();
        
        let arrOfImages = [];
        uploadLogo.addEventListener('change',(e)=>{
            let i = 0;
            const file = e.target.files[i];
            // console.log(file)
            this.getBase64(file).then(base64 => {
                //localStorage["fileBase64"] = base64;
                arrOfImages.push(base64);
                localStorage.setItem('fileBase64',arrOfImages);
                // console.log(arrOfImages,'arrofImages')
                console.debug("file stored",arrOfImages);  
                // this.setState({images:arrOfImages})
                // console.log(this.state.images)
                window.location.reload(true)
            });
        })
    }
    
    render(){
        // console.log(this.state.images)
        return(
        <BottomNav>
            <Link to="/homepage">
                <i className="fas fa-home"></i>
            </Link>
            <Link to="/search">
                <i className="fas fa-search"></i>
            </Link>
            <Input type="file" id="upload"></Input>
             <Img src={upload} onClick={this.uploadd}></Img>  
            <Link to="/activity">
             <i className="far fa-heart"></i>
            </Link>  
            <Link to="/username">
                <i className="far fa-user"></i>
            </Link>
        </BottomNav>
        )
    }
}
export default Bottomnav

const BottomNav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:sticky;
    bottom:0;
    width:100%;
    height:3em;
    background:white;
    border-top:0.1em solid  #f5f5f5;
    z-index:1;
`  
const Img = styled.img`
    height:1.2em;
    width:1.2em;
    margin-left:0.5em;
`
const Input = styled.input`
    display:none;
`