import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';


const SortableComponent = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const draggedItem = items[result.source.index];
    const updatedItems = [...items];
    updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, draggedItem);

    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem = {
      id: `item-${items.length + 1}`,
      linkText: '',
      linkType: 'page_link',
      customLink: '',
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const handleChangeItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };

  const handleSubmit = () => {
    // Submit the items to your backend or process as needed
    console.log("Submitted data:", items);
  };

  return (
    <div className="sortable-container">
      <DragDropContext onDragEnd={handleDragEnd}>
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
                      <div className="row">
                        <div className='col-lg-3'>
                          <div className="form-group">
                            <InputLabel className="fw-700 fs-16 form-label form-group__label">Title</InputLabel>
                            <TextInput
                              type="text"
                              name="apiKey"
                              className="form-control"
                              value={item.linkText}
                              onChange={(e) => handleChangeItem(index, { ...item, linkText: e.target.value, })}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className="form-group">
                            <InputLabel className="fw-700 fs-16 form-label form-group__label">Custom link</InputLabel>
                            <select
                              className="form-control"
                              value={item.linkType}
                              onChange={(e) =>
                                handleChangeItem(index, {
                                  ...item,
                                  linkType: e.target.value,
                                  customLink:
                                    e.target.value === 'page_link' ? '' : item.customLink,
                                })
                              }
                            >
                              <option value="page_link">Page Link</option>
                              <option value="custom_link">Custom Link</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          {item.linkType === 'custom_link' && (
                            <>
                              <div className="form-group">
                                <InputLabel className="fw-700 fs-16 form-label form-group__label">Custom link</InputLabel>
                                <TextInput
                                  type="text"
                                  name="apiKey"
                                  className="form-control"
                                  value={item.customLink}
                                  onChange={(e) => handleChangeItem(index, { ...item, customLink: e.target.value, })}
                                  autoComplete="off" />
                              </div>
                            </>
                          )}
                        </div>
                        <div className='col-lg-3 text-end'>
                          <span
                            className="remove-button"
                            onClick={() => handleDeleteItem(index)}
                          >
                            <i className='bi bi-x btn-danger btn-sm btn'></i>
                          </span>
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
      <button className="btn btn-dark" onClick={handleAddItem}>
        Add Item
      </button>
      <div className='col-lg-12 text-center'>
        <button className="btn btn-info" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SortableComponent;
