import "./Personal.css";

import {
  FaMotorcycle,
  FaMapMarkedAlt,
  FaGamepad,
  FaCamera,
  FaCar,
  FaUtensils,
} from "react-icons/fa";

const personalData = {
  mindset: [
    "Curious",
    "Builder",
    "Learner",
    "Problem Solver",
  ],

  focus: [
    "Building AI-powered experiences",
    "Exploring Generative AI",
    "Learning new systems",
  ],

  interests: [
    {
      icon: FaMotorcycle,
      text: "Give me a bike and an open road",
    },
    {
      icon: FaMapMarkedAlt,
      text: "Always up for exploring somewhere new",
    },
    {
      icon: FaGamepad,
      text: "Games are my favourite way to switch off",
    },
    {
      icon: FaCamera,
      text: "I like capturing moments, not just pictures",
    },
    {
      icon: FaCar,
      text: "I have a thing for cars and machines",
    },
    {
      icon: FaUtensils,
      text: "Good food is always worth trying",
    },
  ],
};

function Personal() {
  return (
    <section id="personal" className="personal-section">

      <div className="container">

        {/* ----------------- SECTION HEADER -------------- */}

        <div className="personal-header">

          <span className="eyebrow">
            PERSONAL — the things that make me, ME
          </span>

          <h2>
            THE PERSON
            <br />
            <span className="gradient-text">
              BEHIND THE CODE.
            </span>
          </h2>

        </div>


        {/* ----------------- COMMAND CENTER -------------- */}

        <div className="personal-command glass">

          {/* ----------------- TOP AREA -------------- */}

          <div className="command-top">

            {/* ----------------- WHO I AM -------------- */}

            <div className="command-identity">

              <span className="command-label">
                WHO I AM
              </span>

              <p className="command-statement">
                I build.
                <br />
                I learn.
                <br />
                I explore.
              </p>

            </div>


            {/* ----------------- MINDSET -------------- */}

            <div className="command-mindset">

              <span className="command-label">
                MINDSET
              </span>

              <div className="mindset-list">

                {personalData.mindset.map((item, index) => (

                  <div
                    className="mindset-item"
                    key={item}
                  >

                    <span className="mindset-number">
                      0{index + 1}
                    </span>

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* ----------------- DIVIDER -------------- */}

          <div className="command-divider"></div>


          {/* ----------------- BOTTOM AREA -------------- */}

          <div className="command-bottom">

            {/* ----------------- CURRENT FOCUS -------------- */}

            <div className="command-block">

              <div className="command-block-header">

                <span className="command-number">
                  01
                </span>

                <span className="command-label">
                  CURRENT FOCUS
                </span>

              </div>


              <div className="focus-list">

                {personalData.focus.map((item) => (

                  <div
                    className="focus-item"
                    key={item}
                  >

                    <span className="focus-dot"></span>

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ----------------- OUTSIDE CODE -------------- */}

            <div className="command-block">

              <div className="command-block-header">

                <span className="command-number">
                  02
                </span>

                <span className="command-label">
                  OUTSIDE CODE
                </span>

              </div>


              <div className="interest-list">

                {personalData.interests.map((interest) => {

                  const Icon = interest.icon;

                  return (
                    <div
                      className="interest-item"
                      key={interest.text}
                    >

                      <Icon className="interest-icon" />

                      <span className="interest-text">
                        {interest.text}
                      </span>

                    </div>
                  );

                })}

              </div>

            </div>

          </div>


          {/* ----------------- STATUS -------------- */}

          <div className="command-status">

            <span className="status-indicator"></span>

            <span>
              ALWAYS CURIOUS · ALWAYS BUILDING
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Personal;