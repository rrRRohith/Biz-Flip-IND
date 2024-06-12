import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const initialItems = [
  { id: 'item-1', linkText: '', linkType: 'page_link', customLink: '' },
  { id: 'item-2', linkText: '', linkType: 'page_link', customLink: '' },
  { id: 'item-3', linkText: '', linkType: 'page_link', customLink: '' },
];

const SortableComponent = () => {
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

  return (
    <div className="sortable-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul
              className="sortable-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      className="sortable-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="item-content">
                        <input
                          className="item-input"
                          type="text"
                          placeholder="Enter link text"
                          value={item.linkText}
                          onChange={(e) =>
                            handleChangeItem(index, {
                              ...item,
                              linkText: e.target.value,
                            })
                          }
                        />
                        <select
                          className="item-select"
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
                        {item.linkType === 'custom_link' && (
                          <input
                            className="item-input"
                            type="text"
                            placeholder="Enter custom link"
                            value={item.customLink}
                            onChange={(e) =>
                              handleChangeItem(index, {
                                ...item,
                                customLink: e.target.value,
                              })
                            }
                          />
                        )}
                        <button
                          className="remove-button"
                          onClick={() => handleDeleteItem(index)}
                        >
                          Remove
                        </button>
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
      <button className="add-button" onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default SortableComponent;
