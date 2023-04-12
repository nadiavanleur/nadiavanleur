import React from "react"

type Props = {
  isVertical?: boolean
}

const Hr = ({ isVertical }: Props) => <hr style={isVertical ? {
  display: 'inline-block',
  width: '1px',
  minHeight: '100%',
  margin: '0 var(--spacing-xxxs)'
} : undefined} />;

export default Hr