export default function PermissionDenied(props,message,children) {
    return (
       <div className="card">
            <div className="card-body">
                <h2 className="text-capitalize">{message}</h2>
            </div>
       </div>
    );
}
