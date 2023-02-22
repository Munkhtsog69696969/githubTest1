import './App.css';

import {useState,useRef,useEffect} from "react"
import {FaChessPawn} from "react-icons/fa";
import {FaChessKnight} from "react-icons/fa";
import {FaChessKing} from "react-icons/fa";
import {FaChessBishop} from "react-icons/fa";
import {FaChessQueen} from "react-icons/fa";
import {FaChessRook} from "react-icons/fa";

function App() {
  const [map,setMap]=useState([
    ["8a-w","8b-b","8c-w","8d-b","8e-w","8f-b","8g-w","8h-b"],
    ["7a-b","7b-w","7c-b","7d-w","7e-b","7f-w","7g-b","7h-w"],
    ["6a-w","6b-b","6c-w","6d-b","6e-w","6f-b","6g-w","6h-b"],
    ["5a-b","5b-w","5c-b","5d-w","5e-b","5f-w","5g-b","5h-w"],
    ["4a-w","4b-b","4c-w","4d-b","4e-w","4f-b","4g-w","4h-b"],
    ["3a-b","3b-w","3c-b","3d-w","3e-b","3f-w","3g-b","3h-w"],
    ["2a-w","2b-b","2c-w","2d-b","2e-w","2f-b","2g-w","2h-b"],
    ["1a-b","1b-w","1c-b","1d-w","1e-b","1f-w","1g-b","1h-w"]
  ]);

  const [pieces,setPieces]=useState([
    ["R-b","H-b","B-b","K-b","Q-b","B-b","H-b","R-b"],
    ["P-b","P-b","P-b","P-b","P-b","P-b","P-b","P-b"],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    ["P-w","P-w","P-w","P-w","P-w","P-w","P-w","P-w"],
    ["R-w","H-w","B-w","K-w","Q-w","B-w","H-w","R-w"]
  ]);

  function pieceConvertor(piece){
    switch(piece){
      case "R-b" :  return <FaChessRook style={{color:"black",fontSize:"50px"}}></FaChessRook>
      break;

      case "H-b" : return <FaChessKnight style={{color:"black",fontSize:"50px"}}></FaChessKnight>
      break;

      case "B-b" : return <FaChessBishop style={{color:"black",fontSize:"50px"}}></FaChessBishop>
      break;

      case "K-b" : return <FaChessKing style={{color:"black",fontSize:"50px"}}></FaChessKing>
      break;

      case "Q-b" : return <FaChessQueen style={{color:"black",fontSize:"50px"}}></FaChessQueen>
      break;

      case "P-b" : return <FaChessPawn style={{color:"black",fontSize:"50px"}}></FaChessPawn>
      break;
      //
      case "R-w" : return <FaChessRook style={{color:"white",fontSize:"50px"}}></FaChessRook>
      break;

      case "H-w" : return <FaChessKnight style={{color:"white",fontSize:"50px"}}></FaChessKnight>
      break;

      case "B-w" : return <FaChessBishop style={{color:"white",fontSize:"50px"}}></FaChessBishop>
      break;

      case "K-w" : return <FaChessKing style={{color:"white",fontSize:"50px"}}></FaChessKing>
      break;

      case "Q-w" : return <FaChessQueen style={{color:"white",fontSize:"50px"}}></FaChessQueen>
      break;

      case "P-w" : return <FaChessPawn style={{color:"white",fontSize:"50px"}}></FaChessPawn>
      break;
      
    }

  }

  const [movePiece,setMovePiece]=useState([]);

  const isBlack1=useRef(null);
  const isBlack2=useRef(null);
  const canEat=useRef(null);


  function Eat(piece,x1,y1,x2,y2){

    if(piece=="P-b"){
      if(x1==x2 && y2==y1+1){
        if(pieces[y1+1][x1]=="."){
          return true;
        }else{
          return false;
        }
      }

      if(x1==x2 && y2==y1+2){
        if(pieces[y1+1][x1]=="."){
          if(pieces[y1+2][x1]=="."){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }

      if(x2==x1+1 && y2==y1+1){
        if(pieces[y1+1][x1+1]!="."){
          return true;
        }else{
          return false;
        }
      }

      if(x2==x1-1 && y2==y1+1){
        if(pieces[y1+1][x1-1]!="."){
          return true;
        }else{
          return false;
        }
      }

      if(x1==x2 && y2==y1-1){
        return false;
      }

      if(x2==x1+1 && y2==y1-1){
        return false;
      }

      if(x2==x1-1 && y2==y1-1){
        return false;
      }

      if(x2==x1+1 && y1==y2){
        return false;
      }

      if(x2==x1-1 && y1==y2){
        return false;
      }
    }

    if(piece=="P-w"){
      if(x1==x2 && y2==y1+1){
        return false;
      }
      if(x2==x1+1 && y2==y1+1){
        return false;
      }
      if(x2==x1-1 && y2==y1+1){
        return false;
      }
      if(x2==x1+1 && y1==y2){
        return false;
      }
      if(x2==x1-1 && y1==y2){
        return false;
      }

      if(x1==x2 && y2==y1-1){
        if(pieces[y1-1][x1]=="."){
          return true;
        }else{
          return false;
        }
      }

      if(x1==x2 && y2==y1-2){
        if(pieces[y1-1][x1]=="."){
          if(pieces[y1-2][x1]=="."){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }

      if(x2==x1+1 && y2==y1-1){
        if(pieces[y1-1][x1+1]!="."){
          return true;
        }else{
          return false
        }
      }

      if(x2==x1-1 && y2==y1-1){
        if(pieces[y1-1][x1-1]!="."){
          return true;
        }else{
          return false;
        }
      }

    }

    if(piece=="R-b" || piece=="R-w"){
      if(x1==x2 && y2>=y1){
        let obs=0;
        for(let y=y1+1;y<y2;y++){
          if(pieces[y][x1]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(x1==x2 && y1>=y2){
        let obs=0;
        for(let y=y1-1;y>y2;y--){
          if(pieces[y][x1]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(y1==y2 && x2>=x1){
        let obs=0;
        for(let x=x1+1;x<x2;x++){
          if(pieces[y1][x]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(y1==y2 && x1>=x2){
        let obs=0;
        for(let x=x1-1;x>x2;x--){
          if(pieces[y1][x]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

    }

    if(piece=="H-b" || piece=="H-w"){
      if(x2==x1-1 && y2==y1+2){
        return true;
      }
      if(x2==x1+1 && y2==y1+2){
        return true;
      }
      if(x2==x1-1 && y2==y1-2){
        return true;
      }
      if(x2==x1+1 && y2==y1-2){
        return true;
      }
      if(y2==y1-1 && x2==x1-2){
        return true;
      }
      if(y2==y1+1 && x2==x1-2){
        return true;
      }
      if(y2==y1-1 && x2==x1+2){
        return true;
      }
      if(y2==y1+1 && x2==x1+2){
        return true;
      }



      if(x1==x2 && y1==y2+1){
        return false;
      }

      if(x2==x1+1 && y1==y2+1){
        return false;
      }

      if(x2==x1+1 && y1==y2){
        return false;
      }

      if(x2==x1+1 && y2==y1+1){
        return false;
      }

      if(x2==x1 && y2==y1+1){
        return false;
      }

      if(x1==x2+1 && y2==y1+1){
        return false;
      }

      if(x1==x2+1 && y1==y2){
        return false;
      }

      if(x1==x2+1 && y1==y2+1){
        return false;
      }
    }

    if(piece=="B-b" || piece=="B-w"){
      if(x1==x2 && y1==y2+1){
        return false;
      }
      if(x2==x1+1 && y1==y2){
        return false;
      }
      if(x1==x2 && y2==y1+1){
        return false;
      }
      if(x1==x2+1 && y1==y2){
        return false;
      }

      if(Math.abs(x1-x2)==Math.abs(y1-y2)){
        if(x2>=x1 && y2>=y1){
          let obs=0;
          let y=y1+1;
          for(let x=x1+1;x<x2;x++){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y++;
          }
          if(obs==0){
            return true;
          }
        }

        if(x2>=x1 && y1>=y2){
          let obs=0;
          let y=y1-1;
          for(let x=x1+1;x<x2;x++){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y--;
          }
          if(obs==0){
            return true;
          }
        }

        if(x1>=x2 && y2>=y1){
          let obs=0;
          let y=y1+1;
          for(let x=x1-1;x>x2;x--){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y++;
          }
          if(obs==0){
            return true;
          }
        }

        if(x1>=x2 && y1>=y2){
          let obs=0;
          let y=y1-1;
          for(let x=x1-1;x>x2;x--){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y--;
          }
          if(obs==0){
            return true;
          }
        }
      }
    
    }

    if(piece=="Q-b" || piece=="Q-w"){
      if(x1==x2 && y2>=y1){
        let obs=0;
        for(let y=y1+1;y<y2;y++){
          if(pieces[y][x1]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(x1==x2 && y1>=y2){
        let obs=0;
        for(let y=y1-1;y>y2;y--){
          if(pieces[y][x1]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(y1==y2 && x2>=x1){
        let obs=0;
        for(let x=x1+1;x<x2;x++){
          if(pieces[y1][x]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      if(y1==y2 && x1>=x2){
        let obs=0;
        for(let x=x1-1;x>x2;x--){
          if(pieces[y1][x]!="."){
            obs=1;
            break;
          }
        }
        if(obs==0){
          return true
        }
      }

      //bishop
      if(Math.abs(x1-x2)==Math.abs(y1-y2)){
        if(x2>=x1 && y2>=y1){
          let obs=0;
          let y=y1+1;
          for(let x=x1+1;x<x2;x++){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y++;
          }
          if(obs==0){
            return true;
          }
        }

        if(x2>=x1 && y1>=y2){
          let obs=0;
          let y=y1-1;
          for(let x=x1+1;x<x2;x++){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y--;
          }
          if(obs==0){
            return true;
          }
        }

        if(x1>=x2 && y2>=y1){
          let obs=0;
          let y=y1+1;
          for(let x=x1-1;x>x2;x--){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y++;
          }
          if(obs==0){
            return true;
          }
        }

        if(x1>=x2 && y1>=y2){
          let obs=0;
          let y=y1-1;
          for(let x=x1-1;x>x2;x--){
            // console.log(pieces[y][x]);
            if(pieces[y][x]!="."){
              obs=1;
              break;
            }
            y--;
          }
          if(obs==0){
            return true;
          }
        }
      }

    }

    if(piece="K-b" || piece=="K-w"){
      if(x1==x2 && y1==y2+1){
        return true;
      }

      if(x2==x1+1 && y1==y2+1){
        return true;
      }

      if(x2==x1+1 && y1==y2){
        return true;
      }

      if(x2==x1+1 && y2==y1+1){
        return true;
      }

      if(x2==x1 && y2==y1+1){
        return true;
      }

      if(x1==x2+1 && y2==y1+1){
        return true;
      }

      if(x1==x2+1 && y1==y2){
        return true;
      }

      if(x1==x2+1 && y1==y2+1){
        return true;
      }

    }

  }
  
  return (
    <div className='container'>
      {
        map.map((card,i)=>{
          return(
            card.map((block,j)=>{
              let color
              if(block[3]=="b"){
                color="black";
              }
              return(
                <div className={color=="black" ? "card-black" : "card-white"} key={block} onClick={()=>{
                  if(movePiece.length==1){
                    if(pieces[i][j][2]=="b"){
                      isBlack2.current=1;
                    }else{
                      isBlack2.current=0;
                    }

                    if(isBlack1.current!=isBlack2.current){
                      canEat.current=true;
                    }else{
                      canEat.current=false;
                    }

                    //section that makes pieces eat each other
                    if(pieces[i][j]=="." || (canEat.current)){

                      setPieces([...pieces]);

                      const string=pieces[movePiece[0].y][movePiece[0].x];

                      movePiece.push({x:j,y:i});

                      if(Eat(string , movePiece[0].x , movePiece[0].y , movePiece[1].x , movePiece[1].y)){

                        pieces[movePiece[0].y][movePiece[0].x]=".";
  
                        pieces[movePiece[1].y][movePiece[1].x]=string;

                        setPieces([...pieces]);

                      }

                      setPieces([...pieces]);

                    }
                  }

                  if(movePiece.length==0 && pieces[i][j]!="."){
                    movePiece.push({x:j,y:i,piece:pieces[i][j]});

                    if(pieces[i][j][2]=="b"){
                      isBlack1.current=1;
                    }else{
                      isBlack1.current=0;
                    }
                  }

                  if(movePiece.length==2){
                    // console.log(movePiece[0])
                    movePiece.splice(0,2)
                  }
                }}>{pieceConvertor(pieces[i][j])}</div>
              )
            })
          )
        })
      }
    </div>
  );
}

export default App;