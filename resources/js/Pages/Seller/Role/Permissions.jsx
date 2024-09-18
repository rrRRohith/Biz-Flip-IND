export default function ({ permissions }) {
    return (
        <>
            {Object.keys(permissions).map((key) => (
                <>
                    <div key={key}>
                        <div className="font-bold text-md text-primary">{key}</div>
                        <div>
                            {permissions[key].map((permission) => (
                                <>
                                    <div>
                                        {permission.name}
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <hr />
                </>
            ))}
        </>
    );
}