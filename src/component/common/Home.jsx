import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.homeBG}`}>
      <div className={`${styles.homeBox}`}>
        <h1 className="display-3">Search Your Meeting Room!</h1>
        <hr className="my-4" />
        <form className="">
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <input
                type="date"
                name="start-date"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-5 mb-3">
              <input
                type="date"
                name="end-date"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-2 mb-3">
              <button class="btn btn-dark btn-block btn-lg" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
