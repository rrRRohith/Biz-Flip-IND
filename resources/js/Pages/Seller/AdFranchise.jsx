import InputError from '@/Components/InputError';

export default function AdFranchise({ data, errors, handleChange }) {
    return (
        <>
            <div class="mb-5"><h4>Franchise details</h4></div>
            <div className="row g-5 mb-5">
                <div className="col-12">
                    <div className="font-bold text-dark">Franchise Units</div>
                </div>
                <div className="col-12 mt-2 mb-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <label>Canadian</label>
                                <input value={data.canadian_units} onChange={(e) => { handleChange('canadian_units', e.target.value) }} type="text" placeholder="Canadian units" className="form-control" />
                                <InputError message={errors.canadian_units} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label>USA</label>
                                <input value={data.us_units} onChange={(e) => { handleChange('us_units', e.target.value) }} type="text" placeholder="USA units" className="form-control" />
                                <InputError message={errors.us_units} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label>International</label>
                                <input value={data.international_units} onChange={(e) => { handleChange('international_units', e.target.value) }} type="text" placeholder="International units" className="form-control" />
                                <InputError message={errors.international_units} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label>Corporate</label>
                                <input value={data.corporate_units} onChange={(e) => { handleChange('corporate_units', e.target.value) }} type="text" placeholder="Corporate units" className="form-control" />
                                <InputError message={errors.corporate_units} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2 mb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <label>Franchise Fee</label>
                                <input value={data.franchise_fee} onChange={(e) => { handleChange('franchise_fee', e.target.value) }} type="text" placeholder="Franchise Fee" className="form-control" />
                                <InputError message={errors.franchise_fee} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label>Liquid Capital Required</label>
                                <input value={data.liquid_capital} onChange={(e) => { handleChange('liquid_capital', e.target.value) }} type="text" placeholder="Liquid Capital Required" className="form-control" />
                                <InputError message={errors.liquid_capital} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label>Total Investment</label>
                                <input value={data.total_investment} onChange={(e) => { handleChange('total_investment', e.target.value) }} type="text" placeholder="Total Investment" className="form-control" />
                                <InputError message={errors.total_investment} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2 mb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <label>In Business Since</label>
                                <input value={data.in_business_since} onChange={(e) => { handleChange('in_business_since', e.target.value) }} type="text" placeholder="In Business Since" className="form-control" />
                                <InputError message={errors.in_business_since} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label>Franchising Since</label>
                                <input value={data.franchising_since} onChange={(e) => { handleChange('franchising_since', e.target.value) }} type="text" placeholder="Franchising Since" className="form-control" />
                                <InputError message={errors.franchising_since} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label>Territories</label>
                                <input value={data.territories} onChange={(e) => { handleChange('territories', e.target.value) }} type="text" placeholder="Territories" className="form-control" />
                                <InputError message={errors.territories} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}