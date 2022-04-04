import React from "react";
import generateWords from "../helpers/generateWords";
import generateDots from "../helpers/generateDots";

export default ({ title, skills, otherSkills }) => {
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
