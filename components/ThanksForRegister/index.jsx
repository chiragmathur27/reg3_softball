import React, { useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./style.css";

const ThanksForRegister = (props) => {
  function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.location.replace("http://35.72.8.63:5678/");
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <p className="You-are-being-redirect-to-homepage">
        You are being redirect to homepage...
      </p>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="thank-you-for-registering">THANK YOU FOR REGISTERING</div>
      <p className="hello">
        You will be notified via email once your exclusive dashboard <br /> is
        ready!
      </p>
      <img className="img" src="./softball2.png" />
      <RedirectExample />
      <img
        className="ois_img"
        src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63edd8bbea18a32c49d2229e/img/logoemblem-2@2x.png"
      />
      <div className="rectangle-42"></div>
      <div className="rectangle-44"></div>
      <div class="HOMEPAGE-CONTACT-US">REGISTRATION</div>
      <div className="rectangle-43"></div>
      <div className={"HOMEPAGE-overlap-group15"}>
        <div className={"HOMEPAGE-overlap-group11"}>
          <div className={"HOMEPAGE-rectangle-52"} />
          <div className={"HOMEPAGE-rectangle-45"} />
          <div className={"HOMEPAGE-rectangle-49"} />
          <div className={"HOMEPAGE-rectangle-50"} />
          <div className={"HOMEPAGE-rectangle-48"} />
          {/* <p className={"HOMEPAGE-first-name-last-name"}>
              First Name &amp; Last Name
            </p> */}
          <input
            type="text"
            className={"HOMEPAGE-first-name-last-name"}
            placeholder="First Name &amp; Last Name"
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "none",
            }}
          ></input>

          <input
            type="number"
            className={"HOMEPAGE-phone-number"}
            placeholder="Phone Number"
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "none",
            }}
          ></input>

          <input
            type="email"
            className={"HOMEPAGE-email-address"}
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "none",
            }}
            placeholder="Email Address"
          />

          <textarea
            rows={4}
            className={"HOMEPAGE-message-or-question"}
            placeholder="Message or Question"
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "none",
            }}
          />

          <div className={"HOMEPAGE-rectangle-68"} />
        </div>
        <h1 className={"HOMEPAGE-got-questions-we-will-love-to-hear-them"}>
          <span className={"HOMEPAGE-text-wrapper-2"}>
            Got questions?
            <br />
          </span>
          <span className={"HOMEPAGE-text-wrapper-3"}>
            We will love to hear them!
          </span>
        </h1>
        <img
          className={"HOMEPAGE-iconsax-linear-messagequestion"}
          src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed3ddd05d0cd1ecddaf81a/img/iconsax-linear-messagequestion-1.svg"
        />
      </div>
      <div className={"HOMEPAGE-overlap-group13"}>
        <p
          className={
            "HOMEPAGE-element-olympic-indoor-sports-powered-by-eazy-eyez-entertainment"
          }
        >
          <br />© 2023 Olympic Indoor Sports.&nbsp;&nbsp;Powered by Eazy Eyez
          Entertainment.
        </p>
      </div>
      <div className={"HOMEPAGE-overlap-group9"}>
        <p
          className={
            "HOMEPAGE-olympic-indoor-sports-a-game-changing-platform-for-young-athletes-in-maryland-to-step-up-and-show-off-their-skills-in-sports-such-as-baseball-softball-cricket-and-lacrosse-our-mission-is-to-provide-a-comprehensive-space-where-these-young-rising-stars-can-take-a-swing-at-their-athletic-aspirations-and-score-big-in-the-game-of-life-we-re-proud-to-be-the-home-plate-for-the-future-generation-of-american-sports-and-we-hope-to-establish-a-precedent-for-other-players-in-the-industry-so-come-on-over-join-the-team-and-let-s-play-ball"
          }
        >
          Olympic Indoor Sports, a game-changing platform for young athletes in
          Maryland <br />
          to step up and show off their skills in sports such as baseball,
          softball, cricket, and lacrosse. <br />
          <br />
          Our mission is to provide a comprehensive space where these young
          rising stars can take a swing at their athletic aspirations and score
          big in the game of life. <br />
          <br />
          We&#39;re proud to be the home plate for the future generation of
          American sports, and we hope to establish a precedent for other
          players in the industry. So come on over, join the team, and let&#39;s
          play ball!
        </p>
        <div className={"HOMEPAGE-the-facility"}>The Facility</div>
        <p
          className={
            "HOMEPAGE-olympic-indoor-sports-red-branch-rd-suite-a-columbia-MD"
          }
        >
          <span className={"HOMEPAGE-text-wrapper-6"}>
            Olympic Indoor Sports
            <br />
          </span>
          <span className={"HOMEPAGE-text-wrapper-7"}>
            <br />
            9179 Red Branch rd Suite #A Columbia, MD 21045
          </span>
        </p>
        <p
          className={
            "HOMEPAGE-element-AM-EST-PM-EST-from-monday-to-sunday-you-will-receive-a-prompt-response-from-our-team-within-hours"
          }
        >
          <span className={"HOMEPAGE-text-wrapper-8"}>
            7:00 AM EST - 11:00 PM EST
          </span>
          <span className={"HOMEPAGE-text-wrapper-7"}>
            {" "}
            from Monday to Sunday. <br />
            <br />
            You will receive a prompt response from our team within 24 hours.
          </span>
        </p>
        <div className={"HOMEPAGE-overlap-group14"}>
          <div className={"HOMEPAGE-email-info-olympicindoorsports-com-phone"}>
            <span className={"HOMEPAGE-text-wrapper-8"}>Email: </span>
            <span className={"HOMEPAGE-text-wrapper-7"}>
              info@olympicindoorsports.com
              <br />
            </span>
            <span className={"HOMEPAGE-text-wrapper-8"}>Phone: </span>
            <span className={"HOMEPAGE-text-wrapper-7"}>
              (123) 456-7890
              <br />
            </span>
          </div>
          <div className={"HOMEPAGE-group-3"}>
            <div className={"HOMEPAGE-overlap-group6"}>
              <div className={"HOMEPAGE-div"}>Learn More</div>
            </div>
          </div>
          <img
            className={"HOMEPAGE-LOGOEMBLEM"}
            src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63edd8bbea18a32c49d2229e/img/logoemblem-2@2x.png"
          />
          <div className={"HOMEPAGE-CONTACT-US-2"}>CONTACT US</div>
        </div>
        <div className={"HOMEPAGE-memberships"}>Memberships</div>
        <div className={"HOMEPAGE-batting-cages"}>Batting Cages</div>
        <div className={"HOMEPAGE-programs-events"}>Programs &amp; Events</div>
        <div className={"HOMEPAGE-contact-us"}>Contact Us</div>
        <div className={"HOMEPAGE-QUICK-LINKS"}>QUICK LINKS</div>
        <div className={"HOMEPAGE-LOCATION"}>LOCATION</div>
        <div className={"HOMEPAGE-TIMINGS"}>TIMINGS</div>
      </div>
    </div>
  );
};

export default ThanksForRegister;
