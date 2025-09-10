import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  horizontal?: number;
  vertical?: number;
}

function Spacer({ horizontal = 0, vertical = 0 }: SpacerProps) {
  return (
    <View
      style={{
        width: horizontal,
        height: vertical,
      }}
    />
  );
}

export default Spacer;
