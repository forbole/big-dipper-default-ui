import React from 'react';

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default ExampleComponent;
