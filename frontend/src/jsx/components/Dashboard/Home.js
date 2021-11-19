import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../../images/avatar/1.jpg";
import avatar1 from "../../../images/avatar/2.jpg";
import avatar2 from "../../../images/avatar/3.jpg";
import avatar3 from "../../../images/avatar/4.jpg";
import avatar4 from "../../../images/avatar/5.jpg";
import avatar5 from "../../../images/avatar/6.jpg";
import Timeline from "./Timeline";

const RecoveredChart = loadable(() =>
  pMinDelay(import("./charts/home/RecoveredChart"), 1000)
);

const VisitorChart = loadable(() =>
  pMinDelay(import("./charts/home/VisitorChart"), 1000)
);
const ChartCircle = loadable(() =>
  pMinDelay(import("./charts/home/ChartCircle"), 1000)
);
const RevenueChart = loadable(() =>
  pMinDelay(import("./charts/home/RevenueChart"), 1000)
);

class Home extends Component {
  render() {
    return (
      <>
        <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
          <div className="mr-auto d-none d-lg-block">
            <h3 className="text-primary font-w600">Welcome to Eclinic!</h3>
            <p className="mb-0">Hospital Eclinic</p>
          </div>

          <div className="input-group search-area ml-auto d-inline-flex">
            <input type="text" className="form-control" placeholder="Search here" />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="flaticon-381-search-2"></i>
              </span>
            </div>
          </div>
          <Link to={"#"} className="btn btn-primary ml-3">
            <i className="flaticon-381-settings-2 mr-0"></i>
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-6 col-xxl-12">
            <div className="row">
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Recovered</h4>
                    <Dropdown className="ml-auto no-carat">
                      <Dropdown.Toggle
                        as="div"
                        variant=""
                        id="dropdown-basic"
                        className="p-0 i-false btn-link"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0">
                    <div className="recovered-chart-deta d-flex">
                      <div className="col">
                        <span className="bg-danger"></span>
                        <div>
                          <p>New</p>
                          <h5>451</h5>
                        </div>
                      </div>
                      <div className="col">
                        <span className="bg-success"></span>
                        <div>
                          <p>Recovered</p>
                          <h5>623</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-3 pb-3">
                    <div id="chartTimeline">
                      <RecoveredChart />
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          
        </div>
      </>
    );
  }
}

export default Home;
