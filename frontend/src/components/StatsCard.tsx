import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <Card style={{ margin: '10px', flex: 1 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
