export default function({status}){
    if(status == 1){
        return (
            <div className="btn btn-sm p-2 py-1 btn-success small">Active</div>
        );
    }else if(status == 0){
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">Pending</div>
        );
    }else{
        return (
            <div className="btn btn-sm p-2 py-1 btn-danger small">Inactive</div>
        );
    }
}