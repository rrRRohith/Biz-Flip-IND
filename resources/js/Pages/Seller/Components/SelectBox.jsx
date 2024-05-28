export default function SelectBox({ name, options = [], multiple = false }) {
    return (
        <div className="dropdown w-full">
            <button className="d-flex w-full align-items-center form-control shadow-none rounded-input" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="flex-fill text-start font-semibold">{multiple ? <>Select options</> : <>Select an option</>}</span>
                <span>
                    <i className="bi bi-chevron-expand text-dark text-opacity-70" />
                </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end w-full mb-2 shadow-sm px-3 rounded-input">
                {options.map((option, idx) => (
                    <div className="form-check form-check-lg">
                        <input 
                            role="button"
                            value={option.value}
                            className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                            type={multiple ? 'checkbox' : 'radio'}
                            name={multiple ? `${name}[]` : name}
                            id={`${name}_${idx}`}
                        />
                        <label role="button" className="mt-1" htmlFor={`${name}_${idx}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}