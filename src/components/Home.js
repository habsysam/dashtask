import React, { useState } from "react";
import Calendar from "react-calendar";
import fir from "./asset/first.jpg";
import sec from "./asset/second.jpg";
import thi from "./asset/third.jpg";
import fou from "./asset/four.jpg";
import fiv from "./asset/five.jpg";
import fivee from "./asset/five1.jpg";
import sixx from "./asset/six.jpg";
import sev from "./asset/seventh.jpg";
import eigh from "./asset/eight.jpg";
import q from "./asset/a.png";
import w from "./asset/b.jpg";
import e from "./asset/c.jpg";
import r from "./asset/d.jpg";
import t from "./asset/e.jpg";
import y from "./asset/f.jpg";
import line from "./asset/line.jpg";
import Chart from "./Chart";
import Chart1 from "./Chart1";
import Data from "./Data";

const Home = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-col">
      <div className="navbar">
        <i class="fa-solid fa-magnifying-glass abso"></i>
        <div>
          <i className="fa-solid fa-bars asd"></i>
          <span className="medium-24px">Logo</span>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2 searchbox"
            type="search"
            placeholder="        Search"
            aria-label="Search"
          />
        </form>
        <div className="head-icon">
          <i
            className="fa-regular fa-bell  bell  "
            style={{ width: "40px", marginRigth: "60px" }}
          ></i>
          <span
            style={{
              color: "#F4B462",
              fontSize: "75px",
              position: "absolute",
              marginTop: "-79px",
              marginLeft: "6px",
            }}
          >
            .
          </span>
          {/* <div className="dotts">
                      <span className="dott-text">Role</span>
                  </div> */}
          <i
            className="fa-regular fa-circle-question bell1"
            style={{ width: "40px", marginRigth: "60px" }}
          ></i>
          <p className="bell11" style={{ width: "60px", marginRigth: "60px" }}>
            JA
          </p>
        </div>
      </div>
      <div className="body1">
        <p>Dashboard</p>
        <div className="body11">
          <h5>Dashboard</h5>

          <div style={{ width: "400px", position: "relative", right: "37px" }}>
            {" "}
            <h6 style={{ marginTop: "-40px" }}></h6> <Data />
          </div>

          {/* <Calendar className="calen" onChange={onChange} value={value} /> */}
        </div>
        <div className="body-box">
          <p>Over all outstanding</p>
          <i
            style={{ color: "#4D5061" }}
            class="fa-solid fa-indian-rupee-sign"
          ></i>{" "}
          <span style={{ fontWeight: "bold" }}>12341233</span>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <img src={fir} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>
                  Invoice Recevied
                </p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <img src={sec} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>
                  {" "}
                  Payable amount
                </p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <img src={thi} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>Overdue</p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <img src={fou} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>
                  Paid amount
                </p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card  mb-3 card-sd">
              <div className="card1 p-3">
                <img style={{ position: "relative" }} src={fiv} alt="asd" />
                <img
                  style={{
                    position: "absolute",
                    width: "8px",
                    marginTop: "8px",
                    marginLeft: "9px",
                    height: "9px",
                  }}
                  src={fivee}
                  alt="asd"
                />
                <img
                  style={{
                    position: "absolute",
                    width: "5.8px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    height: "5px",
                  }}
                  src={line}
                  alt="asd"
                />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>
                  Rejected
                </p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  mb-3 card-sd">
              <div className="card1 p-3">
                <img src={sixx} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>Dispute</p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5091" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  mb-3 card-sd">
              <div className="card1 p-3">
                <img src={sev} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>
                  Department
                </p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card  mb-3 card-sd">
              <div className="card1 p-3">
                <img src={eigh} alt="asd" />
                <p style={{ marginLeft: "10px", marginTop: "-4px" }}>Vendors</p>
              </div>
              <div className="card1-inner">
                <span style={{ color: "#4D5061" }}> Total</span>
                <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  2123
                </span>
                <br />
                <span style={{ color: "#4D5061" }}>
                  {" "}
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                <span style={{ marginLeft: "52px", fontWeight: "bold" }}>
                  123433234
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <div>
                  <h4>Queues</h4>
                </div>
                <div className="chart">
                  <span className="chart-abs"></span>
                  <h4
                    style={{
                      fontSize: "14px",
                      position: "absolute",
                      color: "black",
                      marginLeft: "170px",
                      marginTop: "158px",
                    }}
                  >
                    54%
                  </h4>
                  <div className="chart-flex">
                    <div style={{ width: "439px", marginLeft: "-122px",marginTop:"8px" }}>
                      <Chart />
                    </div>
                    <div className="asdfg">
                      <div className="dotts">
                        <span style={{ color: "#EE7777", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Processing Queue</span>
                      </div>
                      <div className="dotts1">
                        <span style={{ color: "#4BAAB4", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Exception Queue</span>
                      </div>
                      <div className="dotts2">
                        <span style={{ color: "#1F2439", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Duplicate Queue</span>
                      </div>
                      <div className="dotts3">
                        <span style={{ color: "#F5B461", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Missing PO Queue</span>
                      </div>
                      <div className="dotts4">
                        <span style={{ color: "#F9C480", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Receipt Queue</span>
                      </div>
                      <div className="dotts5">
                        <span style={{ color: "#EA5455", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Supplier Queue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1-inner3"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-3 mb-3 card-sd">
              <div className="card1 p-3">
                <div>
                  <h4>KPL</h4>
                </div>
                <div className="chart1">
                  <span className="chart-abs1"></span>
                  <h4 className="zzzz">54%</h4>
                  <span className="chart-abs2"></span>
                  <h4
                    style={{
                      fontSize: "14px",
                      position: "absolute",
                      color: "black",
                      marginLeft: "238px",
                      marginTop: "35px",
                    }}
                  >
                    26%
                  </h4>
                  <span className="chart-abs3"></span>
                  <h4
                    style={{
                      fontSize: "14px",
                      position: "absolute",
                      color: "black",
                      marginLeft: "222px",
                      marginTop: "159px",
                    }}
                  >
                    30%
                  </h4>
                  <div className="chart-flex">
                    <div style={{ width: "439px", marginLeft: "100px" ,marginTop:"10px"}}>
                        
                      <Chart1 />
                      <br/>
                 
                    </div>
                    <div className="asdfg">
                      <div className="dotts">
                        <span style={{ color: "#F4B462", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Role</span>
                      </div>
                      <div className="dotts1">
                        <span style={{ color: "#4BAAB4", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Person Responsible</span>
                      </div>
                      <div className="dotts2">
                        <span style={{ color: "#1F2439", fontSize: "120px" }}>
                          .
                        </span>
                        <span className="dott-text">Triggers Alert</span>
                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1-inner3"></div>
            </div>
          </div>
        </div>
        <div className="last-div">
          <div className="last-divv ">
            <div className="last-div1 mt-3">
              <div style={{ position: "relative", left: "13px" }}>
                <h6>Due by Age Summery</h6>
                <span style={{ position:'relative',top:'-8px'}}> Payment due day wish</span>
              </div>
            </div>
            <div className="last-div2 mt-3">
              <span
                style={{
                  color: "#4D5061",
                  position: "relative",
                  right: "34px",
                }}
              >
                Penalty Saved amount
              </span>
              <button style={{ width: "181px" }}>
                <i
                  style={{ color: "#4D5061", fontWeight: "bold" }}
                  class="fa-solid fa-indian-rupee-sign"
                ></i>{" "}
                <span style={{ color: "#141414", fontWeight: "bold" }}>
                  12344
                </span>
              </button>
            </div>
          </div>
          <div className="last-div3 mt-3 ">
            <div className="last-inner1">
              <span style={{ color: "#4D5061" }}>7 Days</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>
                1234234
              </span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>15Days</span>
              <br />
              <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>
                287313123
              </span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>30 Days</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>
                01301
              </span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>45 Days</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>
                12234445
              </span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>60 Days</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>1200</span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>90 Days</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>
                1234234
              </span>
            </div>
            <div className="last-inner">
              <span style={{ color: "#4D5061" }}>180 Days+</span>
              <br />
              <i
                style={{ color: "#4D5061" }}
                class="fa-solid fa-indian-rupee-sign"
              ></i>{" "}
              <span style={{ color: "#141414", fontWeight: "bold" }}>122</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body2">
        <div className="body-11">
          <img alt="as" src={q} />
          <span>Dashboard</span>
        </div>
        <div className="body-1">
          <img alt="as" src={w} />
          <div>
            <span>Report</span>
          </div>
        </div>
        <div className="body-1">
          <img alt="as" src={e} />
          <div>
            <span>Add invoice</span>
          </div>
        </div>
        <div className="body-1">
          <img alt="as" src={r} />
          <div>
            <span>Add User</span>
          </div>
        </div>
        <div className="body-1">
          <img alt="as" src={t} />
          <div>
            <span>Without PO</span>
          </div>
        </div>
        <div className="body-1">
          <img alt="as" src={y} />
          <span>Company</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
