import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

const SortableComponent = ({ items, onDragEnd, onAddItem, onDeleteItem, onChangeItem, landingPage }) => {

  return (
    <div className="sortable-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              className="sortable-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      className="sortable-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <div className="form-group">
                              <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                              <TextInput
                                className="form-control"
                                type="text"
                                value={item.linkText}
                                onChange={(e) =>
                                  onChangeItem(index, {
                                    ...item,
                                    linkText: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="form-group">
                              <InputLabel className="fw-700 fs-16 form-label form-group__label">Link Type</InputLabel>
                              <select
                                className="form-control py-10"
                                value={item.linkType}
                                onChange={(e) =>
                                  onChangeItem(index, {
                                    ...item,
                                    linkType: e.target.value,
                                    customLink: e.target.value === 'page_link' ? '' : item.customLink,
                                  })
                                }
                              >
                                <option value=''></option>
                                <optgroup label="Landing Pages">
                                  {landingPage.map((page, i) => (
                                    <option key={i} value={page.link}>{page.label}</option>
                                  ))}
                                </optgroup>
                                <option className='fw-bold' value="custom_link">Custom Link</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="form-group">
                              {item.linkType === 'custom_link' && (
                                <>
                                  <InputLabel className="fw-700 fs-16 form-label form-group__label">Custom link</InputLabel>
                                  <TextInput
                                    className="form-control"
                                    type="text"
                                    value={item.customLink}
                                    onChange={(e) =>
                                      onChangeItem(index, {
                                        ...item,
                                        customLink: e.target.value,
                                      })
                                    }
                                  />
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-md-1 mb-3 text-end">
                            <span
                              className="bi bi-x btn btn-sm btn-danger my-10"
                              onClick={() => onDeleteItem(index)}
                            >
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button className="btn btn-dark btn-sm" type="button" onClick={onAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default SortableComponent;
