import React from "react";
import Img from "gatsby-image";

export default ({ title, skills, otherSkills }) => {
  function generateDots(number) {
    let dots = "";

    for (let i = 0; i < 10; i++) {
      if (i <= number - 1) {
        dots += "●";
      } else {
        dots += "○";
      }
    }

    return dots;
  }

  function generateWords(array) {
    let string = "";

    for (let i = 0; i < array.length; i++) {
      string += array[i];

      if (i < array.length - 1) {
        string += " ● ";
      }
    }

    return string;
  }

  return (
    <section className="skills page__section" id="skills">
      <div className="wrapper-inner skills__wrapper-inner">
        {title && <h2 className="skills__title page__title">Vaardigheden</h2>}
        <ul className="skills__list">
          {skills.map(({ label, rating, description }) => {
            return (
              <li className="skills__item">
                {label && (
                  <h3 className="skills__item-title">
                    {label}

                    {rating && (
                      <span className="skills__rating">
                        {generateDots(rating)}
                      </span>
                    )}
                  </h3>
                )}
                {description && (
                  <p className="skills__description">{description}</p>
                )}
              </li>
            );
          })}
        </ul>

        {otherSkills && (
          <p className="skills__text">{generateWords(otherSkills)}</p>
        )}
      </div>
    </section>
  );
};
