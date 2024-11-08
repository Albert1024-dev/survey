import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieArcLabel(props) {
    const type = props.data;
    const data = {
        data: [
            { label: type[0][0], value: type[0][1], color: '#FF0000' },
            { label: type[1][0], value: type[1][1], color: '#FFA5AA' },
            { label: type[2][0], value: type[2][1], color: '#FFA500' },
        ],
        valueFormatter: (item) => `${item.value}%`,
    };
    return (
        <PieChart
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    arcLabelRadius: '60%',
                    color: ['#FF0000', '#FFA500'],
                    ...data,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold',
                },
            }}
            {...size}
        />
    );
}

const size = {
    width: 400,
    height: 200,
};
