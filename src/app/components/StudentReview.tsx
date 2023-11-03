import React from "react";
import "../../styles/home.css";
import boyImg from "../../styles/landing-page-boy.png";
import Image from "next/image";
function StudentReview() {
  return (
    <div className="banner_with_background banner" id="stats">
      <div
        className="container mobile-text-center"
        style={{ padding: "50px 0px" }}
      >
        <div className="col-md-7">
          <h3>MyCareerIdea - Fastest Growing College Search Portal</h3>
          <p style={{ marginBottom: "25px" }}>
            We at MyCareerIdea aim to bridge the gap between Universities and
            Students
          </p>
          <div className="row" style={{ color: "#FFF" }}>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">287,046</span>
              </h2>
              <span className="stats-label">Reviews</span>
            </div>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">314,351</span>
              </h2>
              <span className="stats-label">Ratings</span>
            </div>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">12,725</span>
              </h2>
              <span className="stats-label">Colleges</span>
            </div>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">181,523</span>
              </h2>
              <span className="stats-label">Users</span>
            </div>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">17,413</span>
              </h2>
              <span className="stats-label">Questions</span>
            </div>
            <div className="col-md-4 col-xs-6">
              <h2 style={{ fontWeight: "bold" }}>
                <span className="counter">50</span>+
              </h2>
              <span className="stats-label">Competitions</span>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: "50%" }}
          className="col-md-5 hidden-xs hidden-sm image-column "
        >
          <Image src={boyImg} alt="landing-page-boy" />
        </div>
      </div>
    </div>
  );
}

export default StudentReview;
