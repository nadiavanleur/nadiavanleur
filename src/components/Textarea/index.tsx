import React from 'react';
import * as style from './style.module.scss';

type Props = {
  children?: React.ReactNode;
}

const Textarea = ({ children }: Props) => {
  return (
    <div className={style.textareaContainer}>
      <textarea className={style.textarea}>
        {children}
      </textarea>
    </div>

  );
};

export default Textarea;