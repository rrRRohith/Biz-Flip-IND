<div class="">
    <div class="card shad border-1 rounded-4 mw-500 w-100 agentFilters">
        <div class="card-body w-100 p-3">
            <form action="{{ route('agents.index') }}" id="agentFilter" class="position-relative">
                <div class="d-flex align-items-center">
                    <div class="me-3 col">
                        <div class="fw-light text-muted">Search</div>
                        <div>
                            <input type="text" v-model="sharedState.aq" name="aq" key="q"
                                class="q bg-white mw-150 border-0 shadow-none w-auto text-overflow fw-semibold p-0 border-none form-control p-none"
                                placeholder="What are you looking for?" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="fw-light text-muted">Industries</div>
                        <div>
                            <div class="dropdown">
                                <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    @{{ selectedAgentCategories }}
                                </div>
                                <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                    aria-labelledby="dropdownMenuButton1">
                                    <div v-for="category in sharedState.agentAdCategories">
                                        <div
                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                {
                                                    'fw-semibold text-primary': sharedState.agentcategories[
                                                        'category__' + category.id]
                                                }
                                            ]">
                                            <div class="form-check p-0">
                                                <input hidden
                                                    v-model="sharedState.agentcategories['category__' + category.id]"
                                                    name="agentCategory[]" role="button"
                                                    class="form-check-input shadow-none border border-gray border-1"
                                                    :id="'category__' + category.id + '_' + 'agent'"
                                                    :value="category.id" type="checkbox" />
                                                <label role="button"
                                                    class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                    :for="'category__' + category.id + '_' + 'agent'">@{{ category.name }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col d-sm-block d-none">
                        <button type="submit"
                            class="w-h-50 btn btn-dark ms-auto rounded-circle btn-lg border-0 shadow-none d-flex align-items-center">
                            <i class="bi bi-search m-auto"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>