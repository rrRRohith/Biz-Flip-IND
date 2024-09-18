export default function ({ value,bg = 'bg-info',color ='text-light' }) {
   
        return (
            <div className={`badge p-2 py-1 ${bg} ${color} small`}>{value}</div>
        );
   
}