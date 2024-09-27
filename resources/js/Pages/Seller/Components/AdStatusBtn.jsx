export default function({ad}){
    if(ad.status == 1 && ad.publish_at){
        return (
            <div className="btn btn-sm p-2 py-1 btn-success small">Active</div>
        );
    }else if(ad.status == 1 && !ad.publish_at){
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">Inactive</div>
        );
    }else if(ad.status == 2){
        return (
            <div className="btn btn-sm p-2 py-1 btn-primary small">Sold</div>
        );
    }else if(ad.status == -1){
        return (
            <div className="btn btn-sm p-2 py-1 btn-danger small">Suspended</div>
        );
    }else if(ad.status == 3){
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">On hold</div>
        );
    }else{
        return (
            <div className="btn btn-sm p-2 py-1 btn-warning small">Pending</div>
        );
    }
}