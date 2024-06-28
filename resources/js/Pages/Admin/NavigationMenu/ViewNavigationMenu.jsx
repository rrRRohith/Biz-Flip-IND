import React from 'react';

const renderTree = (items) => {
  return items.map((item, index) => (
    <li key={item.id} className="sortable-item">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              {/* <label className="fw-700 fs-16 form-label form-group__label">Name</label> */}
              <p className="form-control-static">{item.linkText}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              {/* <label className="fw-700 fs-16 form-label form-group__label">Link Type</label> */}
              <p className="form-control-static">{item.linkType}</p>
            </div>
          </div>
          {item.linkType === 'custom_link' && (
            <div className="col-md-4">
              <div className="form-group">
                {/* <label className="fw-700 fs-16 form-label form-group__label">Custom Link</label> */}
                <p className="form-control-static">{item.customLink}</p>
              </div>
            </div>
          )}
        </div>
        {item.children && item.children.length > 0 && (
          <ul className="sub-tree">
            {renderTree(item.children)}
          </ul>
        )}
      </div>
    </li>
  ));
};

const ViewNavigationMenu = ({ collection, handleClose }) => {
  return (
    <div className="sortable-container">
      <h6 className='pb-4'>{collection.title}</h6>
      <ul className="sortable-list tree">
        {renderTree(collection.children)}
      </ul>
      
    </div>
  );
};

export default ViewNavigationMenu;
