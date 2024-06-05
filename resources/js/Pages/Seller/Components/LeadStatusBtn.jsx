export default function({status}){
    if(status == 1){
        return (
            <div className="btn btn-sm p-2 py-1 btn-success small">Attended</div>
        );
    }else if(status == 0){
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">Unattended</div>
        );
    }
}