import React, { useEffect, useState } from "react";
import Aos from "aos";
import "./styles.css";

const LeetCode = () => {
  const [leetcodeStats, setLeetcodeStats] = useState({
    totalSolved: 150,
    totalQuestions: 3500,
    easySolved: 80,
    mediumSolved: 50,
    hardSolved: 20,
    easyTotal: 1100,
    mediumTotal: 1600,
    hardTotal: 800,
    ranking: 18420,
    badges: ["365 Days Badge", "Knight Badge"],
    strikeStats: { currentStreak: 15, longestStreak: 45 }
  });

  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);

  return (
    <>
      <section id="leetcode" className="section">
        <p className="py-5"></p>
        <div className="container py-5" data-aos="fade-up">
          <h1 className="main_font d-flex justify-content-center">LeetCode</h1>
          <p className="text-center mt-3 text-muted">Competitive Programming & DSA</p>

          <div className="row mt-5">
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body text-center">
                  <h5 className="card-title primary-color fw-bold">Total Solved</h5>
                  <h2 className="display-6 fw-bold primary-color mt-3">{leetcodeStats.totalSolved}</h2>
                  <p className="text-muted small">/ {leetcodeStats.totalQuestions} questions</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f0f7ff" }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#16a34a" }}>Easy</h5>
                  <h2 className="display-6 fw-bold" style={{ color: "#16a34a" }}>{leetcodeStats.easySolved}</h2>
                  <p className="text-muted small">/ {leetcodeStats.easyTotal}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#fffbf0" }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#f59e0b" }}>Medium</h5>
                  <h2 className="display-6 fw-bold" style={{ color: "#f59e0b" }}>{leetcodeStats.mediumSolved}</h2>
                  <p className="text-muted small">/ {leetcodeStats.mediumTotal}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#fef5f5" }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#ef4444" }}>Hard</h5>
                  <h2 className="display-6 fw-bold" style={{ color: "#ef4444" }}>{leetcodeStats.hardSolved}</h2>
                  <p className="text-muted small">/ {leetcodeStats.hardTotal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5" data-aos="fade-up">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title primary-color fw-bold">Current Streak</h5>
                  <h2 className="display-5 fw-bold mt-3" style={{ color: "#ff7a45" }}>
                    {leetcodeStats.strikeStats.currentStreak}
                  </h2>
                  <p className="text-muted">Days</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title primary-color fw-bold">Longest Streak</h5>
                  <h2 className="display-5 fw-bold mt-3" style={{ color: "#ffa500" }}>
                    {leetcodeStats.strikeStats.longestStreak}
                  </h2>
                  <p className="text-muted">Days</p>
                </div>
              </div>
            </div>
          </div>

          {leetcodeStats.badges && leetcodeStats.badges.length > 0 && (
            <div className="row mt-5" data-aos="fade-up">
              <div className="col-12">
                <h4 className="primary-color fw-bold mb-4 text-center">Badges Earned</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {leetcodeStats.badges.map((badge, index) => (
                    <div
                      key={index}
                      className="badge bg-primary p-3 fs-6"
                      style={{ borderRadius: "20px", backgroundColor: "#007bff" }}
                    >
                      🏆 {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12 text-center">
              <a
                href="https://leetcode.com/Dinesh_k40"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary me-2"
              >
                <h5 className="pt-2">Visit LeetCode Profile</h5>
              </a>
              <a
                href="https://www.strivers.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
              >
                <h5 className="pt-2">Striver's Sheet</h5>
              </a>
            </div>
          </div>
        </div>
        <p className="py-5"></p>
      </section>
    </>
  );
};

export default LeetCode;
