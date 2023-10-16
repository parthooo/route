import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

   const marksArray = [
    {
        "id": 1,
        "name": "Student 1",
        "math": 78,
        "physics": 92,
        "chemistry": 64
    },
    {
        "id": 2,
        "name": "Student 2",
        "math": 89,
        "physics": 75,
        "chemistry": 82
    },
    {
        "id": 3,
        "name": "Student 3",
        "math": 93,
        "physics": 88,
        "chemistry": 70
    },
    {
        "id": 4,
        "name": "Student 4",
        "math": 71,
        "physics": 96,
        "chemistry": 53
    },
    {
        "id": 5,
        "name": "Student 5",
        "math": 85,
        "physics": 78,
        "chemistry": 91
    },
    {
        "id": 6,
        "name": "Student 6",
        "math": 67,
        "physics": 94,
        "chemistry": 76
    },
    {
        "id": 7,
        "name": "Student 7",
        "math": 72,
        "physics": 81,
        "chemistry": 85
    },
    {
        "id": 8,
        "name": "Student 8",
        "math": 90,
        "physics": 84,
        "chemistry": 79
    },
    {
        "id": 9,
        "name": "Student 9",
        "math": 77,
        "physics": 98,
        "chemistry": 88
    },
    {
        "id": 10,
        "name": "Student 10",
        "math": 94,
        "physics": 89,
        "chemistry": 75
    },
    {
        "id": 11,
        "name": "Student 11",
        "math": 81,
        "physics": 73,
        "chemistry": 67
    },
    {
        "id": 12,
        "name": "Student 12",
        "math": 76,
        "physics": 87,
        "chemistry": 82
    }
]
 
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >   
            <XAxis dataKey="name" />
          <YAxis />
                <Line dataKey="physics"stroke='#8884d8'></Line>
                <Line dataKey="math" stroke="#82ca9d"></Line>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;