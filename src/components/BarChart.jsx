import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent=({data})=>{
    return <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='3 3'/> 
            <XAxis dataKey='date'/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey='count' fill="#00CC66" barSize={75} />
        </BarChart>
    </ResponsiveContainer>
}

export default BarChartComponent;