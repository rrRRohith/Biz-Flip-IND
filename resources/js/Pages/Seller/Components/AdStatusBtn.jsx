export default function({status}){
    if(status == 1){
        return (
            <div className="btn btn-sm p-2 py-1 btn-success small">Active</div>
        );
    }else if(status == 0){
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">Inactive</div>
        );
    }else if(status == 2){
        return (
            <div className="btn btn-sm p-2 py-1 btn-primary small">Sold</div>
        );
    }else{
        return (
            <div className="btn btn-sm p-2 py-1 btn-danger small">Pending</div>
        );
    }
}