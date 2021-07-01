import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import getBubbleSortAnimations from "../SortingAlgorithms/bubbleSort";
import getInsertionSortAnimations from "../SortingAlgorithms/insertionSort";
import { getMergeSortAnimations } from "../SortingAlgorithms/mergeSort";
import randomIntFromInterval from "./utility";
import SortInfo from "./SortInfo/SortInfo";
import AlgoDetails from "./SortInfo/AlgoDetails";
import * as reactBootstrap from 'react-bootstrap';


const ANIMATION_SPEED_MS = 500;

const NUMBER_OF_ARRAY_BARS = 25;

const PRIMARY_COLOR = "#fff";

const SECONDARY_COLOR = "#f69";



const SortingVisualizer = () => {
  
  const [sortInfo, setSortInfo] = useState([{}]);
  const [algo, setAlgo] = useState();
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  },[])

  function resetArray() {
    const arrayBars = document.getElementsByClassName("array-bar"); 
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(50, 650));
    }
    setArray(array);
  }
   
  
  function mergeSort() {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight/10}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  function bubbleSort() {
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight1 / 10}vh`;
          barTwoStyle.height = `${newHeight2 / 10}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  function insertionSort() {
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar"); 
    var last = -1, globalLast = -1;
    for (let i = 0; i < animations.length; i++) {
      if((animations[i]).length === 2) {
        const [barIdx, flag] = animations[i];
        if(flag === -10) {
          setTimeout(() => {
            if(globalLast !== -1) {
              setTimeout (() =>{
              arrayBars[globalLast].style.backgroundColor = PRIMARY_COLOR;
              }, i*ANIMATION_SPEED_MS);
              // if(last !== -1) {
              //   setTimeout(() => {
              //   arrayBars[last].style.backgroundColor = PRIMARY_COLOR;
              //   }, i*ANIMATION_SPEED_MS);
              //   last = -1;
              // }
            arrayBars[barIdx].style.backgroundColor = "grey";
          }
        }, i*ANIMATION_SPEED_MS);
          globalLast = barIdx;
        }
        else { 
          console.log(last);
          if(last !== -1) {
            console.log("A" + last);
            setTimeout(() => {
            arrayBars[last].style.backgroundColor = PRIMARY_COLOR;
            }, i*ANIMATION_SPEED_MS);}
          setTimeout(() => {
            arrayBars[barIdx].style.backgroundColor = SECONDARY_COLOR;
            }, i*ANIMATION_SPEED_MS);
          last = barIdx;
          // console.log(last);
      }
    }
      else if ((animations[i]).length === 3) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*ANIMATION_SPEED_MS);
      } else {
        // console.log((animations[i]).length());
        setTimeout(() => {
          const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight1 / 10}vh`;
          barTwoStyle.height = `${newHeight2 / 10}vh`;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i*ANIMATION_SPEED_MS);
      }
    }
  }


 function algoSwitch(algo) {
    switch(algo) {
      case 1: bubbleSort(); break;
      case 2: mergeSort(); break;
      case 3: insertionSort(); break;
      default: break;
    }
  }
  function infoSwitch(algo) {
    switch (algo) {
      case 1: setAlgo(1);
        setSortInfo([AlgoDetails(1)]);
          break;
      case 2: setAlgo(2);
        setSortInfo([AlgoDetails(2)]); break;
      case 3: setAlgo(3);
        setSortInfo([AlgoDetails[3]]); break;
      default: break;
    }
  }

  function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <reactBootstrap.Button variant="secondary" size="lg" className="collapseButton  visualizeButton"
          onClick={() => {
            setOpen(!open);
            if(!open){
              algoSwitch(1);
            }
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Visualize
        </reactBootstrap.Button>
        <reactBootstrap.Collapse in={open}>
          <div id="example-collapse-text">
              <div className="container">{array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                    height: `${value / 10}vh`,
                    marginRight: `0.3vw`,
                    backgroundColor: "#fff"
                }}
              ></div>
            ))}</div>
          </div>
        </reactBootstrap.Collapse>
      </>
    );
  }
  
    

    return (
      <div>
        <reactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" py="3" variant="dark">
      <reactBootstrap.Navbar.Brand href="#home">React-Bootstrap</reactBootstrap.Navbar.Brand>
      <reactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <reactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <reactBootstrap.Nav className="mr-auto">
          <reactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <reactBootstrap.NavDropdown.Item href="#action/3.1">Action</reactBootstrap.NavDropdown.Item>
            <reactBootstrap.NavDropdown.Item href="#action/3.2">Another action</reactBootstrap.NavDropdown.Item>
            <reactBootstrap.NavDropdown.Item href="#action/3.3">Something</reactBootstrap.NavDropdown.Item>
            <reactBootstrap.NavDropdown.Divider />
            <reactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</reactBootstrap.NavDropdown.Item>
          </reactBootstrap.NavDropdown>
        </reactBootstrap.Nav>
        <reactBootstrap.Nav>
          <reactBootstrap.Nav.Link href="#contact">Contact</reactBootstrap.Nav.Link>
          <reactBootstrap.Nav.Link eventKey={2} href="#about">
            About
          </reactBootstrap.Nav.Link>
        </reactBootstrap.Nav>
      </reactBootstrap.Navbar.Collapse>
    </reactBootstrap.Navbar>


      <div className = "bubbleSort">
        <h1 className = "algoName">
          Bubble Sort
        </h1>
        <article className = "sortInfo">
            {sortInfo[0].description}
            <br />
            {sortInfo[0].worstCase}
            <br />
            {sortInfo[0].avgCase}
            <br />
            {sortInfo[0].bestCase}
            <br />
            {sortInfo[0].space}
        </article>
        <br/>
        <Example />
      </div>



        <div className="header">
          <button className="buttonStyle" onClick={() => resetArray()}>
            Randomize
          </button>
          <button className="buttonStyle" onClick={() => infoSwitch(1)}>
            Bubble Sort
          </button>

          <button className="buttonStyle" onClick={() => infoSwitch(2)}>
            Merge Sort
          </button>

          <button className="buttonStyle" onClick={() => insertionSort()}>
            Insertion Sort
          </button>
          <button className="buttonStyle" onClick={() => algoSwitch(algo)}>
            Visualize
          </button>
          
        </div>

        <div className="container">{array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
                height: `${value / 20}vh`,
                marginRight: `0.3vw`,
                backgroundColor: "#fff"
            }}
          ></div>
        ))}</div>
        <SortInfo title={sortInfo[0].title}
          description={sortInfo[0].description}
          worstCase={sortInfo[0].worstCase}
          avgCase={sortInfo[0].avgCase}
          bestCase={sortInfo[0].bestCase}
          space={sortInfo[0].space}
        />
      </div>
    );
  }


export default SortingVisualizer;