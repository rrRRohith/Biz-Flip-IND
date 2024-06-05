export default function AdditionalInfo({ info, onNameChange, onValueChange, onDelete }) {
    return (
        <>
            <div className="col-12">
                <div className="row g-5 align-items-end">
                    <div className="col">
                        <div><label>Name</label>
                            <input type="text" placeholder="Info name" className="form-control"
                                value={info.info}
                                onChange={(e) => onNameChange(info.id, e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div><label>Value</label>
                            <input type="text" placeholder="Value" className="form-control"
                                value={info.value}
                                onChange={(e) => onValueChange(info.id, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button" onClick={() => onDelete(info.id)} className="btn btn-square btn-neutral text-danger-hover"><i className="bi bi-trash" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}